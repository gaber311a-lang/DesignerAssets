import SwiftUI

@main
struct DesignerAssetsApp: App {
    var body: some Scene {
        WindowGroup {
            RootTabView()
                .environment(\.layoutDirection, .rightToLeft)
                .environment(\.locale, Locale(identifier: "ar_SA"))
        }
    }
}

struct RootTabView: View {
    @State private var selectedTab: Tab = .library

    enum Tab: Hashable {
        case library
        case saved
    }

    var body: some View {
        TabView(selection: $selectedTab) {
            LibraryView()
                .tabItem {
                    Label("المكتبة", systemImage: "square.grid.2x2.fill")
                }
                .tag(Tab.library)

            SavedView()
                .tabItem {
                    Label("المحفوظات", systemImage: "bookmark.fill")
                }
                .tag(Tab.saved)
        }
        .tint(DAColor.brandPrimary)
        .preferredColorScheme(nil) // Light + Dark from system
    }
}

#Preview("Root") {
    RootTabView()
        .environment(\.layoutDirection, .rightToLeft)
}
