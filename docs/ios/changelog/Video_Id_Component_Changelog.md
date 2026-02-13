# VideoID Changelog

## Version 2.6.X
**Last release: 2.6.0 - 12/02/2026**

### Main Updates
- Added multi-face detection support.
- Refactored `DetectFaceServiceProtocol` to support both native and helper-based solutions.

### Fixes
- Fixed Portuguese literal for “Cancel”.

---

## Version 2.5.X  
**Last release: 2.5.0 - 12/12/2025**

### Main Updates
- Updated core minor version 2.5.0
- Updated SelphID Document's Reader (SDR) major version 2.0.0
- Refactorized `ErrorType.TIMEOUT` to `ErrorType.SDK_TIMEOUT`

### New Features
- New modes (`VideoIdMode.DOCUMENT_FRONT` and `VideoIdMode.DOCUMENT_FRONT_BACK`) for processes with only document's capture

---

## Version 2.4.X  
**Last release: 2.4.1 – 04/11/2025**

### Main Updates
- Updated and adapted to latest trackingWidget changes.
- Updated constants version to 2.4.0.
- Updated SDR dependency to v1.8.0.
- Added trackAssets support for IDV.
- Integrated sendVideoIdData for improved tracking flow.
- Renamed matchingSidesScore for clarity.
- Removed duplicated OcrDiagnostic enum.
- Removed local OCR_ERROR, now using the one from Core library.
- Improved ErrorParser for better error granularity and clarity.

### UX & Functional Improvements
- Adjusted minimum face size threshold to ensure the face is correctly captured within the mask, avoiding unnecessary movement.

### Fixes
- Fixed IdvResultData to be sent only when a terminal error occurs.
- Fixed incorrect stepData assignment.
- Fixed general NETWORK ERROR handling.
- Fixed tracking errors twice.

---

## Version 2.3.X    
**Last release: 2.3.23 – 21/10/2025**

### Main Updates
- Updated Reader dependency and models to improve document capture process.
- Added `documentFaceImageMapTokenized` functionality.
- Changed `OcrMap` keys from `0 / 1 → FRONT / BACK`.
- Added `isReadyToRecord` checks in `RecordingViewModel`.
- Implemented `FACE + FRONT` mode.
- Returned `documentFullImage` in results.
- Reduced component size and memory footprint.
- Added Reader models integration.
- Introduced configuration parameter `documentQualityThreshold`.
- Implemented ≤ threshold validation logic.
- Refactored and cleaned internal methods for readability.
- Updated Core dependency to `v2.3.3` and Reader to `v1.5.0`.
- Added configuration parameter `faceQualityThreshold`.
- Created `TrackAssetsService` and `GetReaderModelsService` for modular logic.
- Improved `DetectDocumentService` and OCR validation.
- Updated constants and Excel-based translations.
- Enhanced animations and UX behavior.
- Refactored Font system using `UIFontMetrics`.
- Added SDR dependencies.
- Improved `DocumentReader` detection accuracy.
- Added change-side logic for multi-page capture.
- Introduced document capture functionality with overlay view.
- Integrated first version of voice capture.
- Added Catalan, Portuguese (PT/BR), and Spanish locale support.

### Fixes
- Renamed `FRONT` and `BACK → Front` and `Back` for consistency.
- Fixed UIViewController call from background thread on app launch and permissions.
- Added `weak self` references to prevent memory leaks.
- Added fallback for `documentQualityThreshold` limits.
- Fixed incorrect image on back capture.
- Fixed literal errors in `ONLY_FACE` mode.
- Removed obsolete `iqaReadable` check (handled by Reader).
- Fixed animation transitions.
- Fixed missing imports and visibility issues.
- Actualizada dependencia de Core a `v2.3.3` y Reader a `v1.9.0`.
- Fixed crash on back capture completion.
- Downgraded iOS minimum version `14 → 13`.
- Fixed selfie capture logic.
- Fixed `operationId` retrieval from `operationController`.
- Removed obsolete parameters and class references.
- Fixed `Package.swift` issue.
- Fixed blank screen from multiple navigation triggers.
- Fixed missing imports and incorrect folder placement.
- Refactored `AnalyticsManager → IAnalyticsController`.

---

## Version 2.2.X  
**Last release: 2.2.11 – 31/03/2025**

### Main Updates
- Added `autoFaceDetection` parameter and camera button logic.
- Enabled camera selection and custom fonts.
- Improved progress bar and UX responsiveness.
- Added Dark Mode compatibility.
- Managed `AgoraKit` delegate lifecycle.
- Added diagnostic navigations for debugging.
- Refactored `VideoIdSteps` for simpler UI management.
- Updated timeout configuration.
- Added custom image color configuration.
- Implemented 3-second timeout fallback for disconnections.
- Improved image rotation and StepData management.
- Updated Core dependency to `v2.2.0`.
- Added face detection and tutorial-less mode.
- Cleaned unused resources and animations.
- Updated literals for consistency.

### Fixes
- Fixed `cameraPreferred` configuration issue.
- Fixed UI inconsistencies in certain steps.
- Fixed Core dependency conflicts.
- Fixed successResponse handling logic.
- Fixed face detection flow and signature literals.

---

## Version 2.1.X  
**Last release: 2.1.2 – 28/08/2024**

### Main Updates
- Adapted to Core `v2.1.X`.
- Added custom colors, animations, and accessibility labels.
- Expanded video presentation area.
- Updated neutral color palette.

### Fixes
- Fixed localization casing.
- Fixed race condition in chained tracking calls.
- Fixed animation name mismatch and permission handling.

---

## Version 2.0.X  
**Last release: 2.0.2 – 30/04/2024**

### Main Updates
- Updated Widget and Constants (`v2.0.0`).
- Added Privacy Manifest and `.xcprivacy` resources.
- Adapted to Core `v2.0.0`, Agora `v4.3.0`, and Lottie `v4.4.0`.
- Refactored error handling — both video and document appear in logs on failure/cancel.
- Added retry-on-timeout behavior.

### Fixes
- Fixed race condition when `AgoraKit` unavailable.
- Fixed blank video and incorrect flow step sequence.
- Fixed initialization on background thread.
- Fixed multiple UX bugs (signature, dark mode, permissions).

---

## Version 1.5.X  
**Last release: 1.5.11 – 12/03/2024**

### Main Updates
- Added `SignatureVideoId` and network error handling.
- Added `HapticNotification` and vibration support.
- Updated Starscream dependency and constants.
- Adapted to Core `v1.5.6` and refactored configurations.
- Updated Core dependency and constants.
- Added new diagnostic screens and configuration flow.
- Improved progress bar per step for visual feedback.
- Refactored JSON-based configuration initialization.

### Fixes
- Fixed tracking step naming.
- Prevented null or empty URL/API/Tenant initialization.
- Fixed timeout logic and signature restart.
- Fixed literals and payload parameters.
