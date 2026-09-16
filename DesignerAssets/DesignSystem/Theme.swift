import SwiftUI

/// Typed Theme API aggregating design tokens.
enum Theme {
    enum ColorToken {
        static let brandPrimary = DAColor.brandPrimary
        static let brandPrimaryPressed = DAColor.brandPrimaryPressed
        static let brandSoft = DAColor.brandSoft
        static let brandOnPrimary = DAColor.brandOnPrimary
        static let bgCanvas = DAColor.bgCanvas
        static let bgElevated = DAColor.bgElevated
        static let bgMuted = DAColor.bgMuted
        static let borderSubtle = DAColor.borderSubtle
        static let borderStrong = DAColor.borderStrong
        static let textPrimary = DAColor.textPrimary
        static let textSecondary = DAColor.textSecondary
        static let textTertiary = DAColor.textTertiary
        static let iconPrimary = DAColor.iconPrimary
        static let iconMuted = DAColor.iconMuted
        static let success = DAColor.success
        static let warning = DAColor.warning
        static let danger = DAColor.danger
        static let info = DAColor.info
    }

    typealias Typography = DATypography
    typealias Space = DASpacing
    typealias Radius = DARadius
    typealias Motion = DAMotion
    typealias Elevation = DAElevation
}
