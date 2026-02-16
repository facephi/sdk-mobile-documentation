# Tracking Changelog

## Version 2.6.X
**Last release: 2.6.0 - 12/02/2026**

### Fixes
- Fixed issue where `setCustomerId` was not working. Upgraded widget version to **v1.2.6** to resolve the problem.

### Features
- Added `integrationId` parameter to `TrackingConfigurationData`.

---

## Version 2.5.X  
**Last release: 2.5.3 - 28/01/2026**

### Main Updates
- Updated TrackingWidget dependency to version v1.1.25
- Updated core minor version 2.5.0

### New Features
- Added support to IDV Proxy
- Added support for NFC's step with IDV

### Fixes
- Parameter `steps` in the `newOperation` function weren't correctly parsed in some use cases.
- Added Privacy Manifest to avoid ITMS error when uploading an app to Appstore.

---

## Version 2.4.X  
**Last release: 2.4.0 – 28/10/2025**

### Main Updates
- Refactored several internal models.
- Updated and adapted TrackingController events and asset calls.
- Updated and adapted changes in trackingWidget.
- Added authenticationId and prepared structure for future changes.
- Updated trackingWidget to versions v1.1.23.
- Adapted Core update across interfaces.
- Avoided sending WSQ assets when using TrackingX.
- Added integrationId to both configurationData and TrackingConfigurationData.
- Removed unnecessary sendAdvanceTracking single event.
- Added automatic country detection from dictionary in sendDocumentData.
- Implemented full IDV tracking behavior.
- Removed duplicated widgetError.
- Refactored NO_OPERATION_CREATED_ERROR → OPERATION_NOT_CREATED.
- Updated SDK version to v2.4.0.

---

## Versión 2.3.X    
**Last release: 2.3.6 – 21/10/2025**

### Main Updates
- Updated Core dependency to `v2.3.3`
- Added new `TrackingWidgetErrors`
- Reverted `trackingError` callback signature for compatibility
- Added new `idv` parameter to `TrackingLicense`
- Modified and adapted `TrackingController` to interface; now uses `TrackingXWidgetController` when IDV is enabled
- Added Fingerprint integration in `TrackingComponent`
- Added `FingerprintData` class to parse `FingerprintResponse`
- Added fingerprint configuration and initialization in `TrackingController`
- Created SPM for `FPHITrackingWidget-SPM`

### Refactors
- Refactored tests and examples (added `idv` to testing data)
- Refactored `sendAdvTracking()` (now inside interface)

### Fixes
- Made `TrackingError` parameters public
- Fixed asset enum value
- Fixed background-thread issue in locating request
- Fixed fingerprint dependencies and Core version mismatch
- Fixed crash on `initOperation v3`
- Removed optimistic operator from widget dependency
- Fixed `FingerprintPro` version constraints (`upToNextMinor`)

---

## Version 2.2.X  
**Last release: 2.2.2 – 11/10/2024**

### Main Updates
- Updated local XCFrameworks to `v1.1.0 → v1.1.2`
- Updated constants to `v2.2.1`
- Added `sendAdvanceTrackingEvent()` in `TrackingWidgetKMP`
- Added new debug parameter
- Added two new widget errors for parsing
- Updated Core dependency to `v2.2.0`
- Added binary to `Package.swift`
- Added `TrackingControllerKMP`
- Fully adapted to KMP widget architecture
- Updated local and remote distribution files
- Updated constants and cleaned code
- Changed `TrackingController` to use the new KMP widget
- Updated `trackingWidget` dependency to `v1.0.1`
- Improved `LocationManager` and SDK distribution handling

### Refactors
- Refactored and mapped `TrackingError`
- Implemented workaround for compatibility with older Core interface

### Fixes
- Fixed crash on `advanceTracking()`
- Ensured `setTrackingError` executes before `start()`
- Fixed compilation issues and race condition
- Made `tenantId` private

---

## Version 2.1.X  
**Last release: 2.1.1 – 28/08/2024**

### Main Updates
- Added `sdkVersion` to `initOperation` tracking function
- Updated constants to `v2.1.1`
- Adapted to Core `v2.1.X` and new interface

### Refactors
- Added retry mechanism to `sendEvents()`
- Refactored `AssetResponse` to support `timestamp: Int/String`
- Added `apiKey` to `TrackingLicense` and `Api.shared`
- Added HTTP headers (`x-api-key`, `Authorization`, `Content-Type`)
- Removed `token` parameter (now managed via `Api.shared`)
- Added more details to `PayloadModel`

### Fixes
- Fixed parsing error
- Fixed infinite recursion from `ITrackingController` protocol extension
- Fixed race condition; made `libraryPackageVersion` public
- Fixed merge conflicts after header refactors

---

## Version 2.0.X  
**Last release: 2.0.1 – 16/05/2024**

### Main Updates
- Added Privacy Manifest and privacy data fields
- Fixed `privacyInfo` file location
- Updated dependencies and adapted to Core `v2.0.0`
- Added resource bundle with `.xcprivacy`

### Fixes
- Added conditional check for SIM validation — returns `nil` for iOS 16+

---

## Version 1.5.X  
**Last release: 1.5.6 – 15/04/2024**

### Main Updates
- Adapted to Core `v1.5.8`
- Improved internal tracking architecture and event flow
- Updated references to Core `v1.5.0`
- Adapted to the new Error Management system

### New Features & Structures
- Added new Platform events
- Added `osName: "iOS"` to all tracking events
- Added new parameters to `Payload`
- Created `signatureProofEvent(signatureResult: String)`

### Structural Changes
- Removed `PersonalData` structure

### Fixes
- Fixed signature event
- Fixed `OCR_DATA` event
- Fixed issue where `newOperation` did not respond when `setupToken` service failed
