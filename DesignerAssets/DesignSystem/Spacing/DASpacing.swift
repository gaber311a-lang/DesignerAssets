import SwiftUI

/// 4pt base spacing scale from DESIGN_BRIEF.md.
enum DASpacing {
    static let xxs: CGFloat = 4
    static let xs: CGFloat = 8
    static let sm: CGFloat = 12
    static let md: CGFloat = 16
    static let lg: CGFloat = 20
    static let xl: CGFloat = 24
    static let xxl: CGFloat = 32
    static let xxxl: CGFloat = 40
    static let huge: CGFloat = 48

    /// Screen inset
    static let screenInset: CGFloat = 16
    /// Card gap in grids
    static let cardGap: CGFloat = 12
    /// Minimum touch target
    static let minTouch: CGFloat = 44
}

enum DARadius {
    static let sm: CGFloat = 8
    static let md: CGFloat = 12
    static let lg: CGFloat = 16
    static let xl: CGFloat = 24
    static let full: CGFloat = 9999
}

enum DAMotion {
    /// 150ms
    static let fast: Double = 0.15
    /// 250ms
    static let base: Double = 0.25
    /// 400ms
    static let slow: Double = 0.40

    static var easeOutEnter: Animation {
        .easeOut(duration: base)
    }

    static var easeInOutNav: Animation {
        .easeInOut(duration: slow)
    }

    static var fastEaseOut: Animation {
        .easeOut(duration: fast)
    }
}

enum DAElevation {
    /// Prefer color separation over heavy shadows on grid cards (brief).
    case none, level1, level2, level3

    var shadowRadius: CGFloat {
        switch self {
        case .none: return 0
        case .level1: return 2
        case .level2: return 6
        case .level3: return 12
        }
    }

    var shadowY: CGFloat {
        switch self {
        case .none: return 0
        case .level1: return 1
        case .level2: return 3
        case .level3: return 6
        }
    }

    var shadowOpacity: Double {
        switch self {
        case .none: return 0
        case .level1: return 0.06
        case .level2: return 0.10
        case .level3: return 0.14
        }
    }
}

extension View {
    func daElevation(_ level: DAElevation) -> some View {
        shadow(
            color: Color.black.opacity(level.shadowOpacity),
            radius: level.shadowRadius,
            x: 0,
            y: level.shadowY
        )
    }
}
