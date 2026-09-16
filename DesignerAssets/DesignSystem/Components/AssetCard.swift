import SwiftUI

enum AssetCardState: Equatable {
    case `default`
    case pressed
    case saved
    case downloading
    case locked
    case premium
}

/// Pressed scale 0.98 per design brief — apply on NavigationLink / Button wrapping the card.
struct AssetCardPressStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.98 : 1.0)
            .animation(DAMotion.fastEaseOut, value: configuration.isPressed)
    }
}

struct AssetCard: View {
    let asset: DesignerAsset
    var isSaved: Bool = false
    var isDownloading: Bool = false
    var onSave: () -> Void = {}
    var onDownload: () -> Void = {}
    var onShare: () -> Void = {}
    var onReport: () -> Void = {}

    private var visualState: AssetCardState {
        if asset.isLocked { return .locked }
        if isDownloading { return .downloading }
        if isSaved { return .saved }
        if asset.isPremium { return .premium }
        return .default
    }

    var body: some View {
        VStack(alignment: .leading, spacing: DASpacing.xs) {
            ZStack(alignment: .topLeading) {
                media
                    .aspectRatio(1, contentMode: .fit)
                    .clipShape(RoundedRectangle(cornerRadius: DARadius.md, style: .continuous))
                    .overlay(
                        RoundedRectangle(cornerRadius: DARadius.md, style: .continuous)
                            .stroke(DAColor.borderSubtle, lineWidth: 1)
                    )

                HStack(spacing: DASpacing.xxs) {
                    typeChip
                    Spacer(minLength: 0)
                    if asset.isPremium { premiumBadge }
                    if asset.isLocked { lockedBadge }
                }
                .padding(DASpacing.xs)

                if isDownloading { downloadingOverlay }
            }

            Text(asset.title)
                .daText(.callout)
                .foregroundStyle(DAColor.textPrimary)
                .lineLimit(1)

            Text(asset.statsFootnote)
                .daText(.caption)
                .foregroundStyle(DAColor.textTertiary)

            HStack(spacing: DASpacing.xs) {
                actionButton(
                    systemName: isSaved ? "bookmark.fill" : "bookmark",
                    tint: isSaved ? DAColor.brandPrimary : DAColor.iconMuted,
                    action: onSave
                )
                actionButton(
                    systemName: "arrow.down.circle",
                    tint: DAColor.iconMuted,
                    action: onDownload
                )
                Spacer(minLength: 0)
            }
        }
        .padding(DASpacing.xs)
        .background(DAColor.bgElevated)
        .clipShape(RoundedRectangle(cornerRadius: DARadius.lg, style: .continuous))
        .overlay(
            RoundedRectangle(cornerRadius: DARadius.lg, style: .continuous)
                .stroke(DAColor.borderSubtle, lineWidth: 1)
        )
        .contentShape(Rectangle())
        .contextMenu {
            Button { onSave() } label: {
                Label(isSaved ? "إزالة من المحفوظات" : "حفظ", systemImage: isSaved ? "bookmark.slash" : "bookmark")
            }
            Button { onShare() } label: {
                Label("مشاركة", systemImage: "square.and.arrow.up")
            }
            Button(role: .destructive) { onReport() } label: {
                Label("إبلاغ", systemImage: "flag")
            }
        }
        .accessibilityElement(children: .combine)
        .accessibilityLabel("\(asset.title)، \(asset.type.chipLabel)")
        .accessibilityHint(visualState == .locked ? "مقفل" : "")
    }

    private var media: some View {
        LinearGradient(
            colors: [
                Color(hue: asset.accentHue, saturation: 0.55, brightness: 0.85),
                Color(hue: (asset.accentHue + 0.12).truncatingRemainder(dividingBy: 1), saturation: 0.65, brightness: 0.55)
            ],
            startPoint: .topLeading,
            endPoint: .bottomTrailing
        )
        .overlay {
            Image(systemName: asset.type.systemImage)
                .font(.system(size: 36, weight: .medium))
                .foregroundStyle(.white.opacity(0.9))
        }
    }

    private var typeChip: some View {
        Text(asset.type.chipLabel)
            .daText(.caption)
            .foregroundStyle(DAColor.brandPrimary)
            .padding(.horizontal, DASpacing.xs)
            .padding(.vertical, DASpacing.xxs)
            .background(DAColor.brandSoft)
            .clipShape(Capsule())
    }

    private var premiumBadge: some View {
        Image(systemName: "crown.fill")
            .font(.system(size: 12, weight: .semibold))
            .foregroundStyle(DAColor.brandOnPrimary)
            .padding(DASpacing.xxs + 2)
            .background(DAColor.brandPrimary)
            .clipShape(Circle())
    }

    private var lockedBadge: some View {
        Image(systemName: "lock.fill")
            .font(.system(size: 12, weight: .semibold))
            .foregroundStyle(DAColor.brandOnPrimary)
            .padding(DASpacing.xxs + 2)
            .background(DAColor.textSecondary)
            .clipShape(Circle())
    }

    private var downloadingOverlay: some View {
        RoundedRectangle(cornerRadius: DARadius.md, style: .continuous)
            .fill(Color.black.opacity(0.35))
            .overlay { ProgressView().tint(.white) }
    }

    private func actionButton(systemName: String, tint: Color, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            Image(systemName: systemName)
                .font(.system(size: 18, weight: .medium))
                .foregroundStyle(tint)
                .frame(width: DASpacing.minTouch, height: DASpacing.minTouch)
                .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
    }
}

#Preview {
    NavigationLink(value: MockData.allAssets[0].id) {
        AssetCard(asset: MockData.allAssets[0], isSaved: true)
    }
    .buttonStyle(AssetCardPressStyle())
    .frame(width: 180)
    .padding()
    .background(DAColor.bgCanvas)
    .environment(\.layoutDirection, .rightToLeft)
}
