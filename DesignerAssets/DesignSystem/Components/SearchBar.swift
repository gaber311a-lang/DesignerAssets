import SwiftUI

struct SearchBar: View {
    @Binding var text: String
    var filterBadgeCount: Int = 0
    var placeholder: String = "ابحث في الأصول…"
    var onFilterTap: () -> Void = {}
    var onDebouncedChange: (String) -> Void = { _ in }

    @State private var debounceTask: Task<Void, Never>?
    @FocusState private var focused: Bool

    var body: some View {
        HStack(spacing: DASpacing.xs) {
            Image(systemName: "magnifyingglass")
                .foregroundStyle(DAColor.iconMuted)
                .font(.system(size: 17, weight: .medium))

            TextField(placeholder, text: $text)
                .daText(.body)
                .foregroundStyle(DAColor.textPrimary)
                .focused($focused)
                .submitLabel(.search)
                .autocorrectionDisabled()
                .textInputAutocapitalization(.never)
                .onChange(of: text) { _, newValue in
                    debounceTask?.cancel()
                    debounceTask = Task {
                        try? await Task.sleep(nanoseconds: 300_000_000) // 300ms
                        guard !Task.isCancelled else { return }
                        await MainActor.run { onDebouncedChange(newValue) }
                    }
                }

            if !text.isEmpty {
                Button {
                    text = ""
                    onDebouncedChange("")
                } label: {
                    Image(systemName: "xmark.circle.fill")
                        .foregroundStyle(DAColor.iconMuted)
                        .frame(width: 28, height: 28)
                }
                .buttonStyle(.plain)
                .accessibilityLabel("مسح البحث")
            }

            Button(action: onFilterTap) {
                ZStack(alignment: .topTrailing) {
                    Image(systemName: "line.3.horizontal.decrease.circle")
                        .font(.system(size: 22, weight: .regular))
                        .foregroundStyle(filterBadgeCount > 0 ? DAColor.brandPrimary : DAColor.iconMuted)
                        .frame(width: DASpacing.minTouch - 8, height: DASpacing.minTouch - 8)

                    if filterBadgeCount > 0 {
                        Text("\(min(filterBadgeCount, 9))")
                            .font(.system(size: 10, weight: .bold))
                            .foregroundStyle(DAColor.brandOnPrimary)
                            .frame(minWidth: 16, minHeight: 16)
                            .background(DAColor.brandPrimary)
                            .clipShape(Circle())
                            .offset(x: 4, y: -4)
                    }
                }
            }
            .buttonStyle(.plain)
            .accessibilityLabel("فلاتر\(filterBadgeCount > 0 ? "، \(filterBadgeCount) نشط" : "")")
        }
        .padding(.horizontal, DASpacing.sm)
        .frame(height: DASpacing.minTouch) // 44
        .background(DAColor.bgMuted)
        .clipShape(RoundedRectangle(cornerRadius: DARadius.md, style: .continuous))
        .overlay(
            RoundedRectangle(cornerRadius: DARadius.md, style: .continuous)
                .stroke(focused ? DAColor.brandPrimary.opacity(0.5) : DAColor.borderSubtle, lineWidth: 1)
        )
    }
}

#Preview {
    SearchBar(text: .constant(""), filterBadgeCount: 2)
        .padding()
        .background(DAColor.bgCanvas)
        .environment(\.layoutDirection, .rightToLeft)
}
