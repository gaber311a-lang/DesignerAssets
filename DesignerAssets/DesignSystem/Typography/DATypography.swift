import SwiftUI

/// SF Pro / SF Arabic Dynamic Type sizes from DESIGN_BRIEF.md.
enum DATypography {
    /// display 34 Semibold
    static let display = Font.system(size: 34, weight: .semibold)
    /// title1 28 Semibold
    static let title1 = Font.system(size: 28, weight: .semibold)
    /// title2 22 Semibold
    static let title2 = Font.system(size: 22, weight: .semibold)
    /// headline 17 Semibold
    static let headline = Font.system(size: 17, weight: .semibold)
    /// body 17 Regular
    static let body = Font.system(size: 17, weight: .regular)
    /// callout 16 Regular
    static let callout = Font.system(size: 16, weight: .regular)
    /// footnote 13 Regular
    static let footnote = Font.system(size: 13, weight: .regular)
    /// caption 12 Medium
    static let caption = Font.system(size: 12, weight: .medium)

    // Dynamic Type–aware variants (prefer these in production UI)
    static let displayDynamic = Font.system(.largeTitle, design: .default).weight(.semibold)
    static let title1Dynamic = Font.system(.title, design: .default).weight(.semibold)
    static let title2Dynamic = Font.system(.title2, design: .default).weight(.semibold)
    static let headlineDynamic = Font.system(.headline, design: .default)
    static let bodyDynamic = Font.system(.body, design: .default)
    static let calloutDynamic = Font.system(.callout, design: .default)
    static let footnoteDynamic = Font.system(.footnote, design: .default)
    static let captionDynamic = Font.system(.caption, design: .default).weight(.medium)
}

struct DATextStyle: ViewModifier {
    enum Style {
        case display, title1, title2, headline, body, callout, footnote, caption
    }

    let style: Style

    func body(content: Content) -> some View {
        switch style {
        case .display: content.font(DATypography.displayDynamic)
        case .title1: content.font(DATypography.title1Dynamic)
        case .title2: content.font(DATypography.title2Dynamic)
        case .headline: content.font(DATypography.headlineDynamic)
        case .body: content.font(DATypography.bodyDynamic)
        case .callout: content.font(DATypography.calloutDynamic)
        case .footnote: content.font(DATypography.footnoteDynamic)
        case .caption: content.font(DATypography.captionDynamic)
        }
    }
}

extension View {
    func daText(_ style: DATextStyle.Style) -> some View {
        modifier(DATextStyle(style: style))
    }
}
