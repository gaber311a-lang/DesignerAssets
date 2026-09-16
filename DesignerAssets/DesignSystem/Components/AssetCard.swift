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
        VStack(alignment: .leading, spacing: 0) {
            // Media edge-to-edge, radius lg (16), no inner padding
            ZStack(alignment: .topTrailing) {
                media
                    .aspectRatio(1, contentMode: .fit)

                HStack(spacing: DASpacing.xxs) {
                    if asset.isPremium { premiumBadge }
                    if asset.isLocked { lockedBadge }
                }
                .padding(DASpacing.xs)

                if isDownloading { downloadingRing }
            }
            .clipShape(RoundedRectangle(cornerRadius: DARadius.lg, style: .continuous))

            // Meta under image: type chip + title + stats + save
            VStack(alignment: .leading, spacing: DASpacing.xxs) {
                typeChip

                Text(asset.title)
                    .daText(.headline)
                    .foregroundStyle(DAColor.textPrimary)
                    .lineLimit(1)

                HStack(spacing: DASpacing.xs) {
                    Text(asset.statsFootnote)
                        .daText(.footnote)
                        .foregroundStyle(DAColor.textTertiary)
                        .lineLimit(1)

                    Spacer(minLength: 0)

                    // Only ONE 44×44 save action on card
                    Button(action: onSave) {
                        Image(systemName: isSaved ? "bookmark.fill" : "bookmark")
                            .font(.system(size: 18, weight: .medium))
                            .foregroundStyle(isSaved ? DAColor.brandPrimary : DAColor.iconMuted)
                            .frame(width: DASpacing.minTouch, height: DASpacing.minTouch)
                            .contentShape(Rectangle())
                    }
                    .buttonStyle(.plain)
                    .accessibilityLabel(isSaved ? "إزالة من المحفوظات" : "حفظ")
                }
            }
            .padding(.horizontal, DASpacing.sm)
            .padding(.top, DASpacing.xs)
            .padding(.bottom, DASpacing.xs)
        }
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
            Button { onDownload() } label: {
                Label("تنزيل", systemImage: "arrow.down.circle")
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

    /// Thin progress ring on preview (no heavy black dim + spinner)
    private var downloadingRing: some View {
        ProgressView()
            .progressViewStyle(.circular)
            .controlSize(.regular)
            .tint(DAColor.brandPrimary)
            .padding(6)
            .background(.ultraThinMaterial, in: Circle())
            .frame(maxWidth: .infinity, maxHeight: .infinity)
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
