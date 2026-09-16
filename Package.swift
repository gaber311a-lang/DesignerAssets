// swift-tools-version: 5.9
// Alternate package manifest for browsing sources / SPM tooling.
// For a runnable iOS app, prefer: brew install xcodegen && xcodegen generate
import PackageDescription

let package = Package(
    name: "DesignerAssets",
    defaultLocalization: "ar",
    platforms: [
        .iOS(.v17)
    ],
    products: [
        .library(name: "DesignerAssetsCore", targets: ["DesignerAssetsCore"])
    ],
    targets: [
        .target(
            name: "DesignerAssetsCore",
            path: "DesignerAssets",
            exclude: [
                "App/DesignerAssetsApp.swift",
                "App/Info.plist",
                "Resources"
            ]
        )
    ]
)
