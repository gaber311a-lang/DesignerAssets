import SwiftUI

enum LibraryTypeChip: String, CaseIterable, Identifiable {
    case all = "الكل"
    case images = "صور"
    case accessories = "ملحقات"
    case stickers = "ستيكرات"
    case ideas = "أفكار"

    var id: String { rawValue }

    var assetType: AssetType? {
        switch self {
        case .all: return nil
        case .images: return .image
        case .accessories: return .accessory
        case .stickers: return .sticker
        case .ideas: return .idea
        }
    }
}

struct FilterChips: View {
    @Binding var selection: LibraryTypeChip

    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: DASpacing.xs) {
                ForEach(LibraryTypeChip.allCases) { chip in
                    chipButton(chip)
                }
            }
            .padding(.horizontal, DASpacing.screenInset)
        }
    }

    private func chipButton(_ chip: LibraryTypeChip) -> some View {
        let selected = selection == chip
        return Button {
            withAnimation(DAMotion.fastEaseOut) {
                selection = chip
            }
        } label: {
            Text(chip.rawValue)
                .daText(.callout)
                .foregroundStyle(selected ? DAColor.brandPrimary : DAColor.textSecondary)
                .padding(.horizontal, DASpacing.md)
                .frame(height: 36)
                .background(selected ? DAColor.brandSoft : DAColor.bgMuted)
                .clipShape(Capsule())
                .overlay(
                    Capsule()
                        .stroke(selected ? DAColor.brandPrimary.opacity(0.35) : Color.clear, lineWidth: 1)
                )
        }
        .buttonStyle(.plain)
        .accessibilityAddTraits(selected ? .isSelected : [])
    }
}

#Preview {
    FilterChips(selection: .constant(.all))
        .padding(.vertical)
        .background(DAColor.bgCanvas)
        .environment(\.layoutDirection, .rightToLeft)
}
