# SDK Changelog

## Version 2.3.X  
**Last release: 2.3.6 – 21/10/2025**

### Main Updates
- Renamed `AnalyticsManager`
- Updated Core dependency to `v2.3.3`
- Implemented IDV cyphering functionality (from 2.3.1)
- Added full support for analytics events within the SDK
- Managed Analytics Events directly through the SDK layer
- Language configuration is now set dynamically from `initSdk()` parameters

### New Features
- Added optional `integrationId` parameter to `initSdk()`
- Reintroduced `FlowPreviewController` after previous deletion
- Added `FlowOffline` again to simplify testing workflows
- Added injectable operation capability for flexible runtime flow configuration
- FlowComponent: Used target step instead of the first one

### Refactors
- Refactored `AnalyticsManager` → `IAnalyticsController`

### Fixes & Maintenance
- Fixed missing `initSdk` parameter injection between automatic and manual initialization modes  
- Fixed flow color customization issues  
- Updated `ColorFlowKeys.swift`  
- Merged PR #90: `fix/SM-4537_Revision_Parametros`

---

## Version 2.2.X  
**Last release: 2.2.4 – 29/01/2025**

### Main Updates
- Updated Core dependency to `v2.2.2`
- Updated licensing version
- Merged PR #89: `feat/SM-4399_update_core`
- Improved Tracking `StepData` for screensharing implementation
- Updated internal constants
- Removed flow preview and renamed JSON file `json → jsonX`
- Fixed issue where flow configuration persisted when starting a normal operation
- Fixed invalid manifest in `Package-template`

### Refactors & Fixes
- Improved `fix_customization_flow`
- Reverted incorrect previous changes
- Removed obsolete flow preview logic

---

## Version 2.1.X  
**Last release: 2.1.0 – 21/10/2024**

### Main Updates
- Added Selphix Step

---

## Version 2.0.X  
**Last release: 2.0.0 – 15/04/2024**

### Main Update
- Adapted to Core `v2.0.0`

---

## Version 1.5.X  
**Last release: 1.5.11 – 12/03/2023**

### Main Updates
- Adapted to Core version `1.5.8`
- Introduced Flow version 2 architecture improvements
- Enhanced internal flow logic and step handling
- Introduced `FlowController` (from 1.5.1)
- Implemented new Error Management system

### New Features & Structures
- Created `FlowConfigurationData` to replace old initialization parameters  
- Added `SdkFlowResult` struct for unified flow output  
- Introduced `cancelFlow()` for controlled flow termination  
- Added `IStatusController` for centralized SDK state management  
- Added `GetModels` IA_OCR and `iaModels` parameter in `initSdk()` for automatic IA model downloading  
- Added `GetFlowConfiguration` and `GetFlowPreviewConfiguration` from Builder API  
- Added `ExternalStepController` for handling external flow steps  
- Added `onlineFlow` parameter to `initSdk()` for pre-downloading flow.json configuration  
- Added `FlowController.controllers` as a public static variable  

### Structural Changes
- Unified `flowOutput` as `((SdkFlowResult) -> Void)` — now triggered after each component finishes  
- Removed `newOperation` parameter from `FlowConfigurationData` — new operation starts automatically  
- Renamed `onlineFlow → activateFlow`  
- Made `launchNextStep()` public  
- `cancelFlow()` now called automatically when flow ends  
- Added `enableTracking` and `automatic` parameters to flow configuration  
- Replaced array-based flow order with IDs and targets  
- Improved customization injection into `flowableController`

### Fixes
- Fixed `LICENSE_CHECKER_ERROR_INVALID_LICENSE` during automatic `initSdk`  
- Fixed duplicated (n+1) calls to `flowOutput` after completion  
- Fixed incorrect step ordering (now properly sorted by index)
