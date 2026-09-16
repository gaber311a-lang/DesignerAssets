import SwiftUI

struct AssetDetailView: View {
    let asset: DesignerAsset
    var isSaved: Bool
    var onToggleSave: () -> Void
    var onDownload: () -> Void
    var onTagTap: (String) -> Void

    @Environment(\.dismiss) private var dismiss
    @State private var localSaved: Bool = false
    @State private var downloading = false

    private var similar: [DesignerAsset] {
        MockData.similar(to: asset)
    }

    var body: some View {
        ZStack(alignment: .bottom) {
            ScrollView {
                VStack(alignment: .leading, spacing: DASpacing.lg) {
                    preview
                    meta
                    tagsSection
                    if !similar.isEmpty {
                        similarSection
                    }
                    Spacer(minLength: 100)
                }
                .padding(.horizontal, DASpacing.screenInset)
                .padding(.top, DASpacing.sm)
            }
            .background(DAColor.bgCanvas)

            stickyFooter
        }
        .navigationTitle(asset.title)
        .navigationBarTitleDisplayMode(.inline)
        .onAppear { localSaved = isSaved }
    }

    private var preview: some View {
        LinearGradient(
            colors: [
                Color(hue: asset.accentHue, saturation: 0.55, brightness: 0.88),
                Color(hue: (asset.accentHue + 0.14).truncatingRemainder(dividingBy: 1), saturation: 0.7, brightness: 0.5)
            ],
            startPoint: .topLeading,
            endPoint: .bottomTrailing
        )
        .aspectRatio(1, contentMode: .fit)
        .overlay {
            Image(systemName: asset.type.systemImage)
                .font(.system(size: 64, weight: .medium))
                .foregroundStyle(.white.opacity(0.92))
        }
        .clipShape(RoundedRectangle(cornerRadius: DARadius.lg, style: .continuous))
        .overlay(
            RoundedRectangle(cornerRadius: DARadius.lg, style: .continuous)
                .stroke(DAColor.borderSubtle, lineWidth: 1)
        )
        .daElevation(.level1)
    }

    private var meta: some View {
        VStack(alignment: .leading, spacing: DASpacing.sm) {
            HStack(spacing: DASpacing.xs) {
                Text(asset.type.chipLabel)
                    .daText(.caption)
                    .foregroundStyle(DAColor.brandPrimary)
                    .padding(.horizontal, DASpacing.xs)
                    .padding(.vertical, DASpacing.xxs)
                    .background(DAColor.brandSoft)
                    .clipShape(Capsule())

                Text(asset.format.rawValue)
                    .daText(.caption)
                    .foregroundStyle(DAColor.textSecondary)
                    .padding(.horizontal, DASpacing.xs)
                    .padding(.vertical, DASpacing.xxs)
                    .background(DAColor.bgMuted)
                    .clipShape(Capsule())

                Text(asset.aspectLabel)
                    .daText(.caption)
                    .foregroundStyle(DAColor.textSecondary)
                    .padding(.horizontal, DASpacing.xs)
                    .padding(.vertical, DASpacing.xxs)
                    .background(DAColor.bgMuted)
                    .clipShape(Capsule())

                if asset.isPremium {
                    Label("مدفوع", systemImage: "crown.fill")
                        .daText(.caption)
                        .foregroundStyle(DAColor.brandOnPrimary)
                        .padding(.horizontal, DASpacing.xs)
                        .padding(.vertical, DASpacing.xxs)
                        .background(DAColor.brandPrimary)
                        .clipShape(Capsule())
                }

                Spacer(minLength: 0)
            }

            Text(asset.title)
                .daText(.title2)
                .foregroundStyle(DAColor.textPrimary)

            Text(asset.statsFootnote)
                .daText(.footnote)
                .foregroundStyle(DAColor.textTertiary)
        }
    }

    private var tagsSection: some View {
        VStack(alignment: .leading, spacing: DASpacing.sm) {
            Text("الوسوم")
                .daText(.headline)
                .foregroundStyle(DAColor.textPrimary)

            FlowTags(tags: asset.tags) { tag in
                onTagTap(tag)
                dismiss()
            }
        }
    }

    private var similarSection: some View {
        VStack(alignment: .leading, spacing: DASpacing.sm) {
            Text("مشابه")
                .daText(.headline)
                .foregroundStyle(DAColor.textPrimary)

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: DASpacing.sm) {
                    ForEach(similar) { item in
                        NavigationLink(value: item.id) {
                            VStack(alignment: .leading, spacing: DASpacing.xxs) {
                                LinearGradient(
                                    colors: [
                                        Color(hue: item.accentHue, saturation: 0.5, brightness: 0.85),
                                        Color(hue: item.accentHue, saturation: 0.65, brightness: 0.5)
                                    ],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                                .frame(width: 120, height: 120)
                                .clipShape(RoundedRectangle(cornerRadius: DARadius.md, style: .continuous))

                                Text(item.title)
                                    .daText(.caption)
                                    .foregroundStyle(DAColor.textPrimary)
                                    .lineLimit(1)
                                    .frame(width: 120, alignment: .leading)
                            }
                        }
                        .buttonStyle(.plain)
                    }
                }
            }
        }
    }

    private var stickyFooter: some View {
        HStack(spacing: DASpacing.sm) {
            Button {
                localSaved.toggle()
                onToggleSave()
            } label: {
                Label(localSaved ? "محفوظ" : "حفظ", systemImage: localSaved ? "bookmark.fill" : "bookmark")
                    .daText(.headline)
                    .foregroundStyle(DAColor.textPrimary)
                    .frame(maxWidth: .infinity)
                    .frame(height: DASpacing.minTouch)
                    .background(DAColor.bgMuted)
                    .clipShape(RoundedRectangle(cornerRadius: DARadius.md, style: .continuous))
            }
            .buttonStyle(.plain)

            Button {
                guard !asset.isLocked else { return }
                downloading = true
                onDownload()
                Task {
                    try? await Task.sleep(nanoseconds: 900_000_000)
                    downloading = false
                }
            } label: {
                HStack(spacing: DASpacing.xs) {
                    if downloading {
                        ProgressView().tint(DAColor.brandOnPrimary)
                    } else {
                        Image(systemName: asset.isLocked ? "lock.fill" : "arrow.down.circle.fill")
                    }
                    Text(asset.isLocked ? "مقفل" : "تحميل")
                        .daText(.headline)
                }
                .foregroundStyle(DAColor.brandOnPrimary)
                .frame(maxWidth: .infinity)
                .frame(height: DASpacing.minTouch)
                .background(asset.isLocked ? DAColor.textTertiary : DAColor.brandPrimary)
                .clipShape(RoundedRectangle(cornerRadius: DARadius.md, style: .continuous))
            }
            .buttonStyle(.plain)
            .disabled(asset.isLocked || downloading)
        }
        .padding(DASpacing.screenInset)
        .background(DAColor.bgElevated)
        .overlay(alignment: .top) {
            Rectangle()
                .fill(DAColor.borderSubtle)
                .frame(height: 1)
        }
    }
}

/// Simple wrapping tag flow for tappable tags.
struct FlowTags: View {
    let tags: [String]
    var onTap: (String) -> Void

    var body: some View {
        FlowLayout(spacing: DASpacing.xs) {
            ForEach(tags, id: \.self) { tag in
                Button {
                    onTap(tag)
                } label: {
                    Text(tag)
                        .daText(.callout)
                        .foregroundStyle(DAColor.brandPrimary)
                        .padding(.horizontal, DASpacing.sm)
                        .padding(.vertical, DASpacing.xs)
                        .background(DAColor.brandSoft)
                        .clipShape(Capsule())
                }
                .buttonStyle(.plain)
            }
        }
    }
}

#Preview {
    NavigationStack {
        AssetDetailView(
            asset: MockData.allAssets[0],
            isSaved: true,
            onToggleSave: {},
            onDownload: {},
            onTagTap: { _ in }
        )
    }
    .environment(\.layoutDirection, .rightToLeft)
}
