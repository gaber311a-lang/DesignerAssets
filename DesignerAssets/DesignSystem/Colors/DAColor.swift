import SwiftUI

/// Design tokens — Brand, Neutrals, Semantic (from DESIGN_BRIEF.md).
/// Prefer Asset Catalog names; this API mirrors tokens for typed access.
enum DAColor {
    // MARK: - Brand
    static let brandPrimary = Color("BrandPrimary")
    static let brandPrimaryPressed = Color("BrandPrimaryPressed")
    static let brandSoft = Color("BrandSoft")
    static let brandOnPrimary = Color("BrandOnPrimary")

    // MARK: - Neutrals
    static let bgCanvas = Color("BgCanvas")
    static let bgElevated = Color("BgElevated")
    static let bgMuted = Color("BgMuted")
    static let borderSubtle = Color("BorderSubtle")
    static let borderStrong = Color("BorderStrong")
    static let textPrimary = Color("TextPrimary")
    static let textSecondary = Color("TextSecondary")
    static let textTertiary = Color("TextTertiary")
    static let iconPrimary = Color("IconPrimary")
    static let iconMuted = Color("IconMuted")

    // MARK: - Semantic
    static let success = Color("SemanticSuccess")
    static let warning = Color("SemanticWarning")
    static let danger = Color("SemanticDanger")
    static let info = Color("SemanticInfo")
}

/// Hex fallbacks for Previews / when Asset Catalog is unavailable (same values as brief).
enum DAColorHex {
    static func lightDark(light: String, dark: String) -> Color {
        Color(uiColor: UIColor { traits in
            let hex = traits.userInterfaceStyle == .dark ? dark : light
            return UIColor(hex: hex) ?? .magenta
        })
    }

    static let brandPrimary = lightDark(light: "#5B4DFF", dark: "#8B82FF")
    static let brandPrimaryPressed = lightDark(light: "#4A3DE6", dark: "#A59EFF")
    static let brandSoft = lightDark(light: "#EEEDFF", dark: "#2A2750")
    static let brandOnPrimary = lightDark(light: "#FFFFFF", dark: "#0B0B12")
    static let bgCanvas = lightDark(light: "#F4F4F8", dark: "#0B0B12")
    static let bgElevated = lightDark(light: "#FFFFFF", dark: "#16161F")
    static let bgMuted = lightDark(light: "#EAEAF0", dark: "#1E1E2A")
    static let borderSubtle = lightDark(light: "#E2E2EA", dark: "#2A2A38")
    static let borderStrong = lightDark(light: "#C8C8D4", dark: "#3D3D50")
    static let textPrimary = lightDark(light: "#12121A", dark: "#F2F2F7")
    static let textSecondary = lightDark(light: "#5C5C6E", dark: "#A0A0B2")
    static let textTertiary = lightDark(light: "#8E8E9E", dark: "#6E6E80")
    static let iconPrimary = lightDark(light: "#12121A", dark: "#F2F2F7")
    static let iconMuted = lightDark(light: "#8E8E9E", dark: "#6E6E80")
    static let success = lightDark(light: "#1F9D63", dark: "#3DDB8A")
    static let warning = lightDark(light: "#D9891A", dark: "#F0B44A")
    static let danger = lightDark(light: "#E23B4A", dark: "#FF6B78")
    static let info = lightDark(light: "#2F6BFF", dark: "#6B9BFF")
}

extension UIColor {
    convenience init?(hex: String) {
        var s = hex.trimmingCharacters(in: .whitespacesAndNewlines).uppercased()
        if s.hasPrefix("#") { s.removeFirst() }
        guard s.count == 6, let v = UInt64(s, radix: 16) else { return nil }
        self.init(
            red: CGFloat((v & 0xFF0000) >> 16) / 255,
            green: CGFloat((v & 0x00FF00) >> 8) / 255,
            blue: CGFloat(v & 0x0000FF) / 255,
            alpha: 1
        )
    }
}
