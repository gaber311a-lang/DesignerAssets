import Foundation

enum MockData {
    static let allAssets: [DesignerAsset] = makeAssets()

    static var savedIDs: Set<UUID> = Set(allAssets.prefix(4).map(\.id))

    private static func makeAssets() -> [DesignerAsset] {
        let samples: [(String, AssetType, [String], Bool, Bool, AssetFormat, String, Double)] = [
            ("تدرج بنفسجي ناعم", .image, ["تدرج", "بنفسجي", "خلفية"], false, false, .png, "1:1", 0.72),
            ("ملصق نجمة ذهبية", .sticker, ["ملصق", "نجمة", "ذهبي"], true, false, .png, "1:1", 0.12),
            ("إطار إنستغرام", .accessory, ["إطار", "سوشيال", "إنستغرام"], false, false, .svg, "9:16", 0.55),
            ("فكرة بوست رمضان", .idea, ["رمضان", "بوست", "فكرة"], false, false, .pdf, "4:3", 0.08),
            ("نمط هندسي أزرق", .image, ["نمط", "هندسي", "أزرق"], true, true, .jpg, "16:9", 0.58),
            ("ستيكر قلب متحرك", .sticker, ["قلب", "ستيكر", "لطيف"], false, false, .png, "1:1", 0.95),
            ("مجموعة أيقونات UI", .accessory, ["أيقونات", "UI", "واجهة"], true, false, .svg, "1:1", 0.65),
            ("لوحة ألوان سعودية", .idea, ["ألوان", "هوية", "سعودي"], false, false, .pdf, "16:9", 0.78),
            ("خلفية رخامية بيضاء", .image, ["رخام", "خلفية", "فاخر"], false, false, .heic, "4:3", 0.02),
            ("شريط زخرفي عربي", .accessory, ["زخرفة", "عربي", "شريط"], false, false, .svg, "16:9", 0.82),
            ("ستيكر قهوة", .sticker, ["قهوة", "لطيف", "ستيكر"], false, false, .png, "1:1", 0.08),
            ("موك أب آيفون", .image, ["موكأب", "آيفون", "عرض"], true, false, .png, "9:16", 0.45),
            ("فكرة كوفر يوتيوب", .idea, ["يوتيوب", "كوفر", "فكرة"], false, false, .jpg, "16:9", 0.35),
            ("ملحق شارة خصم", .accessory, ["شارة", "خصم", "بيع"], false, false, .png, "1:1", 0.02),
            ("تدرجات غروب", .image, ["غروب", "تدرج", "دافئ"], false, false, .jpg, "16:9", 0.05),
            ("ستيكر تاج", .sticker, ["تاج", "ملكي", "ذهبي"], true, true, .png, "1:1", 0.15),
            ("شبكة تخطيط بوست", .accessory, ["تخطيط", "شبكة", "بوست"], false, false, .pdf, "1:1", 0.50),
            ("فكرة ستوري متجر", .idea, ["ستوري", "متجر", "تجارة"], false, false, .png, "9:16", 0.88),
            ("نسيج قماش ناعم", .image, ["نسيج", "قماش", "ملمس"], false, false, .heic, "1:1", 0.20),
            ("حزمة إيموجي عربي", .sticker, ["إيموجي", "عربي", "حزمة"], true, false, .png, "1:1", 0.90),
        ]

        var assets: [DesignerAsset] = []
        var ids: [UUID] = []

        for (i, s) in samples.enumerated() {
            let id = UUID(uuidString: String(format: "00000000-0000-0000-0000-%012d", i + 1))!
            ids.append(id)
            assets.append(
                DesignerAsset(
                    id: id,
                    title: s.0,
                    type: s.1,
                    tags: s.2,
                    downloadCount: 120 + i * 137,
                    saveCount: 40 + i * 23,
                    isPremium: s.3,
                    isLocked: s.4,
                    format: s.5,
                    aspectLabel: s.6,
                    accentHue: s.7,
                    similarIDs: []
                )
            )
        }

        // Wire similar IDs (neighbors by type)
        for i in assets.indices {
            let sameType = assets.enumerated()
                .filter { $0.offset != i && $0.element.type == assets[i].type }
                .prefix(6)
                .map(\.element.id)
            assets[i].similarIDs = Array(sameType)
        }

        return assets
    }

    static func asset(id: UUID) -> DesignerAsset? {
        allAssets.first { $0.id == id }
    }

    static func similar(to asset: DesignerAsset) -> [DesignerAsset] {
        asset.similarIDs.compactMap { asset(id: $0) }
    }

    static func filter(
        query: String,
        typeChip: AssetType?,
        filters: FilterState
    ) -> [DesignerAsset] {
        var result = allAssets

        if let typeChip {
            result = result.filter { $0.type == typeChip }
        }

        let q = query.trimmingCharacters(in: .whitespacesAndNewlines)
        if !q.isEmpty {
            result = result.filter {
                $0.title.localizedCaseInsensitiveContains(q)
                    || $0.tags.contains { $0.localizedCaseInsensitiveContains(q) }
                    || $0.type.rawValue.localizedCaseInsensitiveContains(q)
            }
        }

        switch filters.premium {
        case .all: break
        case .free: result = result.filter { !$0.isPremium }
        case .premium: result = result.filter { $0.isPremium }
        }

        if let format = filters.format {
            result = result.filter { $0.format == format }
        }

        if filters.aspect != .any {
            result = result.filter { $0.aspectLabel == filters.aspect.rawValue }
        }

        switch filters.sort {
        case .newest:
            break // mock order as-is
        case .popular:
            result.sort { ($0.saveCount + $0.downloadCount) > ($1.saveCount + $1.downloadCount) }
        case .downloads:
            result.sort { $0.downloadCount > $1.downloadCount }
        case .title:
            result.sort { $0.title.localizedCompare($1.title) == .orderedAscending }
        }

        return result
    }
}
