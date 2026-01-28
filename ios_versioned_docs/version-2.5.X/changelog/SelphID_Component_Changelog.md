# SelphID Changelog

## Version 2.5.X  
**Last release: 2.5.0 - 15/12/2025**

### Main Updates
- Updated SelphIDWidget dependency to version v1.36.3
- Updated core minor version 2.5.0

---

## Version 2.4.X  
**Last release: 2.4.3 - 12/11/2025**

### Main Updates
- Updated SelphIDWidget dependency to version v1.35.2.
- Added widget version with full customization functionality.
- Added setParam for UseSdkCustomization in widget.
- Adapted to resultData changes from trackingWidget v1.1.23.
- Set generateRawImages default behavior to true.

### Refactors
- Forced initialization flag to always return true to ensure consistent setup flow.

### Fixes
- Fixed incorrect stepData assignment.
- Fixed behavior when generateRawImages was received as null.
- Fixed a crash when trying to read ARG document with MBSDR.

---

## Version 2.3.X  
**Last release: 2.3.23 – 21/10/2025**

### Main Updates
- Upgraded SelphIDWidget to version `1.35.0`.
- Updated Core dependency to `v2.3.3`.
- Removed duplicated variables in action scripts.
- Updated MBSDR simulator architectures to support `arm64`.
- Added new flavor for build configuration.
- Created workspace, project, and target for MBSDR.
- Created MBSDR scheme for streamlined testing and build management.
- Updated to a stable SelphIDWidget version addressing prior runtime issues.
- Unified XCFramework naming convention — all builds now generate `selphidComponent.xcframework`.
- Refactored `AnalyticsManager` (revertable) and optimized `analyticsOutput`.
- Parsed images are now encoded as JPEG (95% compression).
- Added tests and video asset tracking for IDV flows.
- Automated resource inclusion during publish step.
- Removed locale from `SelphiConfigurationData` (now auto-derived from `initSdk()`).
- Created `Package-RGL-template.swift` for SPM distribution of SelphIDRGLComponent.
- Added SPM support for RGL builds and analytics integration.
- Added `licenseManager` parsing, response filtering, and improved localization.
- Renamed struct `AllowedProductLicenseValues`.
- Default language now set to device locale.

### Fixes
- Fixed literal names and animation issues.
- Fixed typo in Podfile and removed `arch_sim arm64` for MBSDR to avoid simulator conflicts.
- Reverted analytics refactor due to regressions.
- Correctly applied compression rate to image assets.
- Adjusted `hasOperationCreated` check placement for correct order.
- Fixed enum values and filtering functionality.
- Refactored `AnalyticsManager → IAnalyticsController`.
- Fixed configuration inconsistencies and setup errors.

---

## Version 2.2.X  
**Last release: 2.2.12 – 29/01/2025**

### Main Updates
- Updated Core dependency to `v2.2.2`.
- Updated SelphIDWidget from `v1.31.0 → v1.31.2`.
- Removed redundant dependencies already defined in Podspec.
- Updated SelphIDWidget to `v1.30.1` and `v1.30.0`.
- Added accessible Lotties for improved UX.
- Added dismissViewController flag and refactored navigation flow.
- Introduced new MLRGL product and workspace.
- Updated Core dependency to `v2.2.1`.
- Added VISA parameters for enhanced verification scenarios.
- Upgraded Widget to `v1.27.2 → v1.28.1`.
- Upgraded SDR to `v0.32.2` for performance optimization.
- Updated SelphIDWidget dependencies to `v1.27.1`.
- Updated Widget to `v1.27.0`.
- Mapped `TVeryLong → VERY_LONG`.
- Mapped `selphIDResult.statistics` for Advance Tracking in demo mode.
- Refactored tutorial view to show only the info button.
- Refactored animations to support full customization.
- Updated Core dependency to `v2.2.0`.
- Added new tutorial-only flow configuration.

### Fixes
- Corrected `MLRGL` pointer reference.
- Fixed StepData tracking error during screensharing.
- Updated Widget dependency to `v1.28.2`.

---

## Version 2.1.X  
**Last release: 2.1.4 – 04/09/2024**

### Main Updates
- Updated SelphID to version `1.26.X`.
- Created `SelphIDRGLComponent` distributed via Pods.
- Added `CommonCustomization` functionality and color refactors.
- Introduced new health animation and accessibility literals.
- Updated Widget to `v1.25.1` and constants to `v2.0.10`.
- Adapted to Core `v2.1.X` and improved `SignatureProof` stability.
- Ensured all Widget calls run on Main Thread.
- Added display of previous tutorial tip for continuity.

### Fixes
- Fixed diagnosticViewController hierarchy issue.
- Fixed capture logic, compilation errors, and Lottie naming mismatches.
- Fixed Liveness Mode “MOVE”.

---

## Version 2.0.X  
**Last release: 2.0.9 – 17/06/2024**

### Main Updates
- Updated SelphIDWidget to `v1.24.3 – v1.25.0`.
- Added retry mechanism on timeout.
- Added accessibility for front and back images after timeout.
- Updated Constants to `v2.0.6`.
- Updated dependencies in Podfile.
- Updated DocumentReader to `v7.1.X`.
- Added Privacy Manifest support.
- Updated FPhiSelphIDWidgetiOSSim to `v1.23.3`.
- Performed UX review and improvements.

### Fixes
- Fixed permission handling in specific devices.
- Replaced selphidwidgetiosSim reference with selphidwidgetios.
- Fixed defaultLocalization and resource path in project template.
- Adjusted tutorial display frequency.
- Added new instructional message.

---

## Version 1.5.X  
**Last release: 1.5.14 – 12/03/2023**

### Main Updates
- Adapted to Core `v1.5.8`.
- Improved integration with FPhiSelphIDWidgetiOSSim.
- Added full arm64 and arm64-simulator architecture support.
- Added new platform events to SelphidController.
- Introduced control for min/max extractionTimeout values.
- Removed fallback to default ZIP resources.
- Updated FPhiSelphIDWidgetiOSSim to version `1.23.2`.

### Fixes
- Fixed incorrect error handling when `CANCEL_BY_USER` occurred with `showDiagnostic == true`.
