import SwiftUI

struct AssetCardSkeleton: View {
    var body: some View {
        VStack(alignment: .leading, spacing: DASpacing.xs) {
            RoundedRectangle(cornerRadius: DARadius.md, style: .continuous)
                .fill(DAColor.bgMuted)
                .aspectRatio(1, contentMode: .fit)
                .shimmer()
            RoundedRectangle(cornerRadius: 4)
                .fill(DAColor.bgMuted)
                .frame(height: 14)
                .shimmer()
            RoundedRectangle(cornerRadius: 4)
                .fill(DAColor.bgMuted)
                .frame(width: 80, height: 10)
                .shimmer()
        }
        .padding(DASpacing.xs)
        .background(DAColor.bgElevated)
        .clipShape(RoundedRectangle(cornerRadius: DARadius.lg, style: .continuous))
    }
}

struct LibraryEmptyView: View {
    var message: String = "لا توجد أصول مطابقة"
    var actionTitle: String? = "مسح الفلاتر"
    var action: (() -> Void)? = nil

    var body: some View {
        VStack(spacing: DASpacing.md) {
            Image(systemName: "tray")
                .font(.system(size: 40, weight: .light))
                .foregroundStyle(DAColor.iconMuted)
            Text(message)
                .daText(.headline)
                .foregroundStyle(DAColor.textPrimary)
                .multilineTextAlignment(.center)
            Text("جرّب كلمات بحث أخرى أو غيّر الفلاتر")
                .daText(.footnote)
                .foregroundStyle(DAColor.textSecondary)
                .multilineTextAlignment(.center)
            if let actionTitle, let action {
                Button(actionTitle, action: action)
                    .daText(.headline)
                    .foregroundStyle(DAColor.brandPrimary)
                    .padding(.top, DASpacing.xs)
            }
        }
        .padding(DASpacing.xl)
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}

struct LibraryErrorView: View {
    var message: String
    var onRetry: () -> Void

    var body: some View {
        VStack(spacing: DASpacing.md) {
            Image(systemName: "exclamationmark.triangle")
                .font(.system(size: 40, weight: .light))
                .foregroundStyle(DAColor.danger)
            Text("حدث خطأ")
                .daText(.headline)
                .foregroundStyle(DAColor.textPrimary)
            Text(message)
                .daText(.footnote)
                .foregroundStyle(DAColor.textSecondary)
                .multilineTextAlignment(.center)
            Button("إعادة المحاولة", action: onRetry)
                .daText(.headline)
                .foregroundStyle(DAColor.brandOnPrimary)
                .padding(.horizontal, DASpacing.xl)
                .frame(height: DASpacing.minTouch)
                .background(DAColor.brandPrimary)
                .clipShape(RoundedRectangle(cornerRadius: DARadius.md, style: .continuous))
                .padding(.top, DASpacing.xs)
        }
        .padding(DASpacing.xl)
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}

struct LibraryEndView: View {
    var body: some View {
        Text("وصلت إلى النهاية")
            .daText(.footnote)
            .foregroundStyle(DAColor.textTertiary)
            .frame(maxWidth: .infinity)
            .padding(.vertical, DASpacing.xl)
    }
}

private struct ShimmerModifier: ViewModifier {
    @State private var phase: CGFloat = -1

    func body(content: Content) -> some View {
        content
            .overlay {
                LinearGradient(
                    colors: [
                        .clear,
                        Color.white.opacity(0.35),
                        .clear
                    ],
                    startPoint: .leading,
                    endPoint: .trailing
                )
                .offset(x: phase * 200)
                .blendMode(.plusLighter)
            }
            .clipped()
            .onAppear {
                withAnimation(.linear(duration: 1.2).repeatForever(autoreverses: false)) {
                    phase = 1
                }
            }
    }
}

extension View {
    func shimmer() -> some View {
        modifier(ShimmerModifier())
    }
}
