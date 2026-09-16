import SwiftUI

struct FilterSheet: View {
    @Binding var draft: FilterState
    var onClear: () -> Void
    var onApply: () -> Void

    @Environment(\.dismiss) private var dismiss

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: DASpacing.xl) {
                    section(title: "الترتيب") {
                        optionRows(SortOption.allCases, selection: $draft.sort) { $0.rawValue }
                    }
                    section(title: "النوع السعري") {
                        optionRows(PremiumFilter.allCases, selection: $draft.premium) { $0.rawValue }
                    }
                    section(title: "الصيغة") {
                        formatRows
                    }
                    section(title: "النسبة") {
                        optionRows(AspectRatioFilter.allCases, selection: $draft.aspect) { $0.rawValue }
                    }
                }
                .padding(DASpacing.screenInset)
            }
            .background(DAColor.bgCanvas)
            .navigationTitle("فلاتر")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("إلغاء") { dismiss() }
                        .foregroundStyle(DAColor.textSecondary)
                }
            }
            .safeAreaInset(edge: .bottom) {
                footer
            }
        }
        .presentationDetents([.medium, .large])
        .presentationDragIndicator(.visible)
    }

    private func section<Content: View>(title: String, @ViewBuilder content: () -> Content) -> some View {
        VStack(alignment: .leading, spacing: DASpacing.sm) {
            Text(title)
                .daText(.headline)
                .foregroundStyle(DAColor.textPrimary)
            content()
        }
    }

    private func optionRows<T: Hashable & Identifiable>(
        _ items: [T],
        selection: Binding<T>,
        label: @escaping (T) -> String
    ) -> some View {
        VStack(spacing: 0) {
            ForEach(items) { item in
                Button {
                    selection.wrappedValue = item
                } label: {
                    HStack {
                        Text(label(item))
                            .daText(.body)
                            .foregroundStyle(DAColor.textPrimary)
                        Spacer()
                        if selection.wrappedValue == item {
                            Image(systemName: "checkmark")
                                .foregroundStyle(DAColor.brandPrimary)
                                .font(.system(size: 16, weight: .semibold))
                        }
                    }
                    .padding(.vertical, DASpacing.sm)
                    .contentShape(Rectangle())
                }
                .buttonStyle(.plain)
                if item.id as? String != items.last?.id as? String {
                    Divider().background(DAColor.borderSubtle)
                }
            }
        }
        .padding(.horizontal, DASpacing.md)
        .background(DAColor.bgElevated)
        .clipShape(RoundedRectangle(cornerRadius: DARadius.md, style: .continuous))
    }

    private var formatRows: some View {
        VStack(spacing: 0) {
            formatRow(nil, title: "الكل")
            ForEach(AssetFormat.allCases) { fmt in
                Divider().background(DAColor.borderSubtle)
                formatRow(fmt, title: fmt.rawValue)
            }
        }
        .padding(.horizontal, DASpacing.md)
        .background(DAColor.bgElevated)
        .clipShape(RoundedRectangle(cornerRadius: DARadius.md, style: .continuous))
    }

    private func formatRow(_ format: AssetFormat?, title: String) -> some View {
        Button {
            draft.format = format
        } label: {
            HStack {
                Text(title)
                    .daText(.body)
                    .foregroundStyle(DAColor.textPrimary)
                Spacer()
                if draft.format == format {
                    Image(systemName: "checkmark")
                        .foregroundStyle(DAColor.brandPrimary)
                        .font(.system(size: 16, weight: .semibold))
                }
            }
            .padding(.vertical, DASpacing.sm)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
    }

    private var footer: some View {
        HStack(spacing: DASpacing.sm) {
            Button {
                onClear()
            } label: {
                Text("مسح")
                    .daText(.headline)
                    .foregroundStyle(DAColor.textPrimary)
                    .frame(maxWidth: .infinity)
                    .frame(height: DASpacing.minTouch)
                    .background(DAColor.bgMuted)
                    .clipShape(RoundedRectangle(cornerRadius: DARadius.md, style: .continuous))
            }
            .buttonStyle(.plain)

            Button {
                onApply()
                dismiss()
            } label: {
                Text("تطبيق")
                    .daText(.headline)
                    .foregroundStyle(DAColor.brandOnPrimary)
                    .frame(maxWidth: .infinity)
                    .frame(height: DASpacing.minTouch)
                    .background(DAColor.brandPrimary)
                    .clipShape(RoundedRectangle(cornerRadius: DARadius.md, style: .continuous))
            }
            .buttonStyle(.plain)
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

#Preview {
    Color.clear
        .sheet(isPresented: .constant(true)) {
            FilterSheet(draft: .constant(FilterState()), onClear: {}, onApply: {})
                .environment(\.layoutDirection, .rightToLeft)
        }
}
