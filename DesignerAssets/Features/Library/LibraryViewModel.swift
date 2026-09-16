import Foundation
import Combine

@MainActor
final class LibraryViewModel: ObservableObject {
    @Published var searchText: String = ""
    @Published var debouncedQuery: String = ""
    @Published var typeChip: LibraryTypeChip = .all
    @Published var filters: FilterState = FilterState()
    @Published var draftFilters: FilterState = FilterState()
    @Published var showFilterSheet: Bool = false
    @Published var loadState: LibraryLoadState = .idle
    @Published var assets: [DesignerAsset] = []
    @Published var savedIDs: Set<UUID> = MockData.savedIDs
    @Published var downloadingIDs: Set<UUID> = []
    @Published var toastMessage: String?

    func onAppear() {
        if case .idle = loadState {
            reload(simulateLoading: true)
        }
    }

    func applyDebouncedQuery(_ q: String) {
        debouncedQuery = q
        reload(simulateLoading: false)
    }

    func setTypeChip(_ chip: LibraryTypeChip) {
        typeChip = chip
        reload(simulateLoading: false)
    }

    func openFilters() {
        draftFilters = filters
        showFilterSheet = true
    }

    func clearFilters() {
        draftFilters.clear()
        filters.clear()
        showFilterSheet = false
        reload(simulateLoading: false)
    }

    func applyFilters() {
        filters = draftFilters
        reload(simulateLoading: false)
    }

    func clearAllAndReload() {
        searchText = ""
        debouncedQuery = ""
        typeChip = .all
        filters.clear()
        draftFilters.clear()
        reload(simulateLoading: false)
    }

    func reload(simulateLoading: Bool) {
        if simulateLoading {
            loadState = .loading
            assets = []
            Task {
                try? await Task.sleep(nanoseconds: 600_000_000)
                applyFilterResults()
            }
        } else {
            applyFilterResults()
        }
    }

    func retry() {
        reload(simulateLoading: true)
    }

    /// Demo helper for error state (not wired in UI by default).
    func simulateError() {
        loadState = .error("تعذّر تحميل المكتبة. تحقق من الاتصال.")
        assets = []
    }

    private func applyFilterResults() {
        let result = MockData.filter(
            query: debouncedQuery,
            typeChip: typeChip.assetType,
            filters: filters
        )
        assets = result
        if result.isEmpty {
            loadState = .empty
        } else {
            loadState = .end // mock: single page, show end marker
        }
    }

    func toggleSave(_ asset: DesignerAsset) {
        if savedIDs.contains(asset.id) {
            savedIDs.remove(asset.id)
            toast("أُزيل من المحفوظات")
        } else {
            savedIDs.insert(asset.id)
            toast("تم الحفظ")
        }
        MockData.savedIDs = savedIDs
    }

    func download(_ asset: DesignerAsset) {
        guard !asset.isLocked else {
            toast("هذا الأصل مقفل")
            return
        }
        downloadingIDs.insert(asset.id)
        Task {
            try? await Task.sleep(nanoseconds: 900_000_000)
            downloadingIDs.remove(asset.id)
            toast("تم التحميل (وهمي)")
        }
    }

    func share(_ asset: DesignerAsset) {
        toast("مشاركة: \(asset.title)")
    }

    func report(_ asset: DesignerAsset) {
        toast("تم الإبلاغ عن: \(asset.title)")
    }

    private func toast(_ message: String) {
        toastMessage = message
        Task {
            try? await Task.sleep(nanoseconds: 1_800_000_000)
            if toastMessage == message { toastMessage = nil }
        }
    }
}
