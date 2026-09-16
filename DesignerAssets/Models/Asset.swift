import Foundation

enum AssetType: String, CaseIterable, Identifiable, Codable, Hashable {
    case image = "صور"
    case accessory = "ملحقات"
    case sticker = "ستيكرات"
    case idea = "أفكار"

    var id: String { rawValue }

    var chipLabel: String { rawValue }

    var systemImage: String {
        switch self {
        case .image: return "photo"
        case .accessory: return "puzzlepiece.extension"
        case .sticker: return "face.smiling"
        case .idea: return "lightbulb"
        }
    }
}

enum AssetFormat: String, CaseIterable, Identifiable, Codable, Hashable {
    case png = "PNG"
    case jpg = "JPG"
    case svg = "SVG"
    case pdf = "PDF"
    case heic = "HEIC"

    var id: String { rawValue }
}

enum AspectRatioFilter: String, CaseIterable, Identifiable, Codable, Hashable {
    case any = "الكل"
    case square = "1:1"
    case portrait = "9:16"
    case landscape = "16:9"
    case fourThree = "4:3"

    var id: String { rawValue }
}

enum SortOption: String, CaseIterable, Identifiable, Codable, Hashable {
    case newest = "الأحدث"
    case popular = "الأكثر شعبية"
    case downloads = "الأكثر تحميلاً"
    case title = "الاسم"

    var id: String { rawValue }
}

enum PremiumFilter: String, CaseIterable, Identifiable, Codable, Hashable {
    case all = "الكل"
    case free = "مجاني"
    case premium = "مدفوع"

    var id: String { rawValue }
}

struct DesignerAsset: Identifiable, Hashable, Codable {
    let id: UUID
    var title: String
    var type: AssetType
    var tags: [String]
    var downloadCount: Int
    var saveCount: Int
    var isPremium: Bool
    var isLocked: Bool
    var format: AssetFormat
    var aspectLabel: String
    var accentHue: Double
    var similarIDs: [UUID]

    var statsFootnote: String {
        "\(formatCount(downloadCount)) تحميل · \(formatCount(saveCount)) حفظ"
    }

    private func formatCount(_ n: Int) -> String {
        if n >= 1000 {
            let k = Double(n) / 1000.0
            return String(format: "%.1fk", k)
        }
        return "\(n)"
    }
}

struct FilterState: Equatable {
    var sort: SortOption = .newest
    var premium: PremiumFilter = .all
    var format: AssetFormat? = nil
    var aspect: AspectRatioFilter = .any

    var activeCount: Int {
        var c = 0
        if sort != .newest { c += 1 }
        if premium != .all { c += 1 }
        if format != nil { c += 1 }
        if aspect != .any { c += 1 }
        return c
    }

    mutating func clear() {
        self = FilterState()
    }
}

enum LibraryLoadState: Equatable {
    case idle
    case loading
    case loaded
    case empty
    case error(String)
    case end
}
