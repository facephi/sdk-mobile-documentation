# Selphi Changelog

## Version 2.6.X
**Last release: 2.6.0 - 12/02/2026**

### Main Updates

- Updated and adapted widget to major version v6.0.4.

---

## Version 2.5.X  
**Last release: 2.5.1 – 19/01/2026**

### Main Updates
- Updated core minor version 2.5.0

### New Features
- Created new `flavor` called FPHISDKSelphiIADComponent to prevent injection attacks.

---

## Version 2.4.X  
**Last release: 2.4.1 - 30/10/2025**

### Main Updates
- Added widget version with full customization functionality.
- Added setParam for UseSdkCustomization in widget.
- Updated widget to version v5.19.5.
- Added nil output for specific scenarios.
- Updated and adapted to latest trackingWidget changes.
- Added authenticationId and prepared structure for future improvements.
- Added conditional sending of includeClip when required.
- Removed unused SelphiError and introduced ACTIVE_LIVENESS_ERROR.
- Improved ErrorParser logic and handling.
- Returned livenessDiagnostic on SELPHI_TIMEOUT.
- Implemented IDV release v2.4.0.
- Used SelfieData model for IDV tracking.
- Integrated LivenessDiagnostic into Core library.
- Moved data models into structured folders.
- Added IdvTracking model (SelfieData).
- Updated widget and SelphiKMP dependencies to match latest versions.
- Removed cameraId parameter (no longer in use).
- Removed unnecessary sendAdvanceTracking single event.
- Added sendSelfie trigger on successful capture.
- Unified errors sent to Tracking module.
- Updated SelphiKMP version in Podspecs.
- Upgraded selphiWidget KMP version and adapted breaking changes to SelphiFaceLiveness.
- Adapted breaking changes in SelphiConfigurationData.

### Refactors
- Refactored logic to avoid runtime errors.
- Refactored error handling for OPERATION_NOT_CREATED.
- Cleaned and reorganized folder structure.
- Refactored SelphiWidgetController.start() to return nil UIViewController when license is invalid.
- Performed general code cleanup for readability and consistency.

### Fixes
- Fixed incorrect stepData assignment.
- Fixed videoFilename management in flow configuration.
- Fixed issue where liveness was not being sent to Tracking.
- Fixed MOVE mode behavior — now returns KO when LivenessDiagnostic is not Detected.
- Now sending bestImage instead of cropped one.
- Fixed Core dependency update conflicts.
- Fixed UI error on iPhone 17.

---

## Version 2.3.X  
**Last release: 2.3.12 – 21/10/2025**

### Main Updates
- Introduced a revertable commit with improved internal comments and logs for auditing.
- Delivered an accessible version aligned with audit requirements.
- Conducted a full accessibility revision to ensure compliance and improved usability.
- Updated and adapted Core dependency to `v2.3.3`.
- Enabled video asset tracking integration with IDV Tracking.
- Removed `locale` parameter from `SelphiConfigurationData` — now automatically derived from `initSdk()`.
- Added comprehensive Analytics integration to the SDK.
- Implemented multilingual support — added Portuguese alongside existing languages.
- Language is now dynamically set based on the `initSdk()` configuration.
- Enhanced event tracking and parsing from Widget-level analytics.
- UI/UX revision and improvement.
- New animations

### Fixes
- Moved `hasOperationCreated` check before the `createStep()` call to ensure proper initialization flow.
- Refactored `AnalyticsManager → IAnalyticsController` to unify analytics logic across components.

---

## Version 2.2.X  
**Last release: 2.2.11 – 18/03/2025**

### Main Updates
- Default language now matches the device language.
- Added camera flash functionality (rear camera only).
- Updated Core dependencies (`SM-4399`).
- Updated Widget dependency to `v5.16.3`.
- Introduced Back Camera MOVE mode for enhanced liveness detection.
- Added `cameraPreferred` configuration parameter in `SelphiController.swift`.
- Upgraded `SelphiWidget` to `v5.16.0`.
- Added new accessible Lotties for inclusivity.
- Improved navigation experience and user feedback.
- Merged PR #74 (`feat/SM-4094RevisionUX`) with major UX improvements.
- Implemented improved error handling — errors are now wrapped as successful outcomes when appropriate.
- Created `RawTemplateWidgetController` replacing the old implementation.
- Updated constants and dependencies.
- Mapped `FPBLivenessDiagnostic` and refactored result parsing.
- Added Advance Tracking call integration.
- Updated Core dependency to `v2.2.0`.
- Refactored animation logic to support dynamic customization.
- Merged PR #69 (`fix/SM-3828-literal-selphi-signature`) with literal corrections and UI refinements.
- Improved UX flow and color handling in `TutorialTipsConfigurationData.swift` and `Constants.swift`.

### Fixes
- Fixed UI issue when launching controller from background thread.
- Fixed navigation inconsistencies and minor UX issues.
- Applied workaround to prevent Widget crashes during specific capture sequences.

---

## Version 2.1.X  
**Last release: 2.1.2 – 28/08/2024**

### Main Updates
- Refactored logic for better reusability across controllers.
- Implemented `CommonCustomization` for color and theme control.
- Created `SelphiTheme` for unified styling.
- Added tutorial and tips support directly from the SDK.
- Introduced `LivenessDiagnostic` entity and integrated parsing into `SelphiResult`.
- Adapted to Core `v2.1.X`.
- Migrated i18n logic to Core for consistency.
- Switched RawTemplate provider to `tokenizeController` instead of `FPhiWidget`.

### Fixes
- Fixed diagnostic view hierarchy issue.
- Fixed race condition affecting `SignatureProof` validation.
- Fixed multiple compilation and configuration errors.
- Corrected naming inconsistencies in Lottie animations.
- Improved accessibility with new literals and labels.
- Fixed MOVE mode issues (`PR #54`).

---

## Version 2.0.X  
**Last release: 2.0.2 – 15/05/2024**

### Main Updates
- Added support for `bestImageTokenized` for improved template quality.
- Implemented retry mechanism for timeouts.
- Introduced `logImages` functionality and new controller parameter for traceability.
- Adapted to Core `v2.0.0`.
- Added Privacy Manifest for iOS data compliance.
- Improved license validation and error propagation mechanisms.

### Fixes
- Fixed incorrect tracking flow step name: `SIGNATURE_SELPHI_CONTROLLER → SIGNATURE_SELPHI_COMPONENT`.
- Fixed issue where failed license status didn’t trigger proper callbacks.
- Added `TrackAssetType.SELPHI_SIGNATURE` tracking value to `SelphiSignatureController`.

---

## Version 1.5.X  
**Last release: 1.5.10 – 12/03/2024**

### Main Updates
- Refactored `SignatureSelphi` to extend main controller class.
- Adapted to Core `v1.5.8`.
- Enhanced flow integration and event handling for better reliability.

### New Features & Structures
- Created `SignatureSelphiController`.
- Added new platform events to `SelphiController`.
- Introduced `vibrationEnabled` configuration parameter.
- Added haptic notifications.
- Updated `SelphiConfigurationData` to parse directly from JSON flow configurations.
- Added new initializer to `RawTemplateController` accepting `Data` input.

### Structural Changes
- Introduced new mode: `SelphiFaceLivenessMode.MOVE`.
- Added validation for min/max values in `extractionTimeout`.
- Updated default configuration parameters:  
  - `showTutorial = true`  
  - `showDiagnostic = true` (requires `statusComponent`)  
  - `showResultAfterCapture = true`  
  - `debug = false`
- Removed fallback to default ZIP resources.

### Fixes
- Fixed initialization issue in `RawTemplateController` under certain scenarios.
