import SwiftUI

struct SavedView: View {
    @State private var savedAssets: [DesignerAsset] = []
    @State private var editMode: EditMode = .inactive
    @State private var selected: Set<UUID> = []

    var body: some View {
        NavigationStack {
            Group {
                if savedAssets.isEmpty {
                    LibraryEmptyView(
                        message: "لا توجد عناصر محفوظة",
                        actionTitle: nil,
                        action: nil
                    )
                } else {
                    ScrollView {
                        LazyVGrid(
                            columns: [GridItem(.adaptive(minimum: 160, maximum: 280), spacing: DASpacing.cardGap)],
                            spacing: DASpacing.cardGap
                        ) {
                            ForEach(savedAssets) { asset in
                                NavigationLink(value: asset.id) {
                                    ZStack(alignment: .topTrailing) {
                                        AssetCard(
                                            asset: asset,
                                            isSaved: true,
                                            onSave: { remove(asset) }
                                        )
                                        if editMode == .active {
                                            Image(systemName: selected.contains(asset.id) ? "checkmark.circle.fill" : "circle")
                                                .foregroundStyle(selected.contains(asset.id) ? DAColor.brandPrimary : DAColor.iconMuted)
                                                .padding(DASpacing.sm)
                                                .onTapGesture { toggleSelect(asset.id) }
                                        }
                                    }
                                }
                                .buttonStyle(AssetCardPressStyle())
                            }
                        }
                        .padding(DASpacing.screenInset)
                    }
                    .background(DAColor.bgCanvas)
                }
            }
            .navigationTitle("المحفوظات")
            .navigationBarTitleDisplayMode(.large)
            .toolbar {
                ToolbarItem(placement: .topBarLeading) {
                    if !savedAssets.isEmpty {
                        EditButton()
                    }
                }
                ToolbarItem(placement: .topBarTrailing) {
                    if editMode == .active && !selected.isEmpty {
                        Button("حذف", role: .destructive) {
                            removeSelected()
                        }
                    }
                }
            }
            .environment(\.editMode, $editMode)
            .navigationDestination(for: UUID.self) { id in
                if let asset = MockData.asset(id: id) {
                    AssetDetailView(
                        asset: asset,
                        isSaved: MockData.savedIDs.contains(id),
                        onToggleSave: {
                            if MockData.savedIDs.contains(id) {
                                MockData.savedIDs.remove(id)
                            } else {
                                MockData.savedIDs.insert(id)
                            }
                            reload()
                        },
                        onDownload: {},
                        onTagTap: { _ in }
                    )
                }
            }
            .onAppear { reload() }
        }
    }

    private func reload() {
        savedAssets = MockData.allAssets.filter { MockData.savedIDs.contains($0.id) }
    }

    private func remove(_ asset: DesignerAsset) {
        MockData.savedIDs.remove(asset.id)
        reload()
    }

    private func toggleSelect(_ id: UUID) {
        if selected.contains(id) { selected.remove(id) } else { selected.insert(id) }
    }

    private func removeSelected() {
        for id in selected { MockData.savedIDs.remove(id) }
        selected.removeAll()
        editMode = .inactive
        reload()
    }
}

#Preview {
    SavedView()
        .environment(\.layoutDirection, .rightToLeft)
}
