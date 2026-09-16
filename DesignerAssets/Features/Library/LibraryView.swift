import SwiftUI

struct LibraryView: View {
    @StateObject private var vm = LibraryViewModel()
    var body: some View {
        NavigationStack {
            ZStack(alignment: .bottom) {
                DAColor.bgCanvas.ignoresSafeArea()

                ScrollView {
                    LazyVStack(spacing: 0, pinnedViews: [.sectionHeaders]) {
                        Section {
                            content
                        } header: {
                            stickyHeader
                        }
                    }
                }
                .refreshable { vm.reload(simulateLoading: true) }

                if let toast = vm.toastMessage {
                    toastBanner(toast)
                        .transition(.move(edge: .bottom).combined(with: .opacity))
                        .padding(.bottom, DASpacing.md)
                }
            }
            .navigationTitle("المكتبة")
            .navigationBarTitleDisplayMode(.large)
            .navigationDestination(for: UUID.self) { id in
                if let asset = MockData.asset(id: id) {
                    AssetDetailView(
                        asset: asset,
                        isSaved: vm.savedIDs.contains(id),
                        onToggleSave: { vm.toggleSave(asset) },
                        onDownload: { vm.download(asset) },
                        onTagTap: { tag in
                            vm.searchText = tag
                            vm.applyDebouncedQuery(tag)
                        }
                    )
                } else {
                    Text("الأصل غير موجود")
                        .foregroundStyle(DAColor.textSecondary)
                }
            }
            .sheet(isPresented: $vm.showFilterSheet) {
                FilterSheet(
                    draft: $vm.draftFilters,
                    onClear: { vm.clearFilters() },
                    onApply: { vm.applyFilters() }
                )
                .environment(\.layoutDirection, .rightToLeft)
            }
            .onAppear { vm.onAppear() }
            .onChange(of: vm.typeChip) { _, new in
                vm.setTypeChip(new)
            }
        }
    }

    private var stickyHeader: some View {
        VStack(spacing: DASpacing.sm) {
            SearchBar(
                text: $vm.searchText,
                filterBadgeCount: vm.filters.activeCount,
                onFilterTap: { vm.openFilters() },
                onDebouncedChange: { vm.applyDebouncedQuery($0) }
            )
            .padding(.horizontal, DASpacing.screenInset)

            FilterChips(selection: $vm.typeChip)
        }
        .padding(.vertical, DASpacing.sm)
        .background(DAColor.bgCanvas.opacity(0.95))
        .background(.ultraThinMaterial)
    }

    @ViewBuilder
    private var content: some View {
        switch vm.loadState {
        case .idle, .loading:
            skeletonGrid
                .padding(.horizontal, DASpacing.screenInset)
                .padding(.top, DASpacing.sm)
        case .empty:
            LibraryEmptyView(action: { vm.clearAllAndReload() })
                .frame(minHeight: 360)
        case .error(let message):
            LibraryErrorView(message: message, onRetry: { vm.retry() })
                .frame(minHeight: 360)
        case .loaded, .end:
            assetGrid
            if case .end = vm.loadState {
                LibraryEndView()
            }
        }
    }

    private var skeletonGrid: some View {
        LazyVGrid(columns: adaptiveColumns, spacing: DASpacing.cardGap) {
            ForEach(0..<6, id: \.self) { _ in
                AssetCardSkeleton()
            }
        }
    }

    private var assetGrid: some View {
        LazyVGrid(columns: adaptiveColumns, spacing: DASpacing.cardGap) {
            ForEach(vm.assets) { asset in
                NavigationLink(value: asset.id) {
                    AssetCard(
                        asset: asset,
                        isSaved: vm.savedIDs.contains(asset.id),
                        isDownloading: vm.downloadingIDs.contains(asset.id),
                        onSave: { vm.toggleSave(asset) },
                        onDownload: { vm.download(asset) },
                        onShare: { vm.share(asset) },
                        onReport: { vm.report(asset) }
                    )
                }
                .buttonStyle(AssetCardPressStyle())
            }
        }
        .padding(.horizontal, DASpacing.screenInset)
        .padding(.top, DASpacing.sm)
        .padding(.bottom, DASpacing.xl)
    }

    private var adaptiveColumns: [GridItem] {
        // 2 iPhone · 3–4 iPad via flexible min width ~160
        [GridItem(.adaptive(minimum: 160, maximum: 280), spacing: DASpacing.cardGap)]
    }

    private func toastBanner(_ text: String) -> some View {
        Text(text)
            .daText(.footnote)
            .foregroundStyle(DAColor.brandOnPrimary)
            .padding(.horizontal, DASpacing.md)
            .padding(.vertical, DASpacing.sm)
            .background(DAColor.textPrimary.opacity(0.92))
            .clipShape(Capsule())
            .padding(.horizontal, DASpacing.screenInset)
    }
}

#Preview {
    LibraryView()
        .environment(\.layoutDirection, .rightToLeft)
}
