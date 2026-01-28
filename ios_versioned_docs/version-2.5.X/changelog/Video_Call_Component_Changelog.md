# VideoCall Changelog


## Version 2.5.X  
**Last release: 2.5.0 - 12/12/2025**

### Main Updates
- Updated core minor version 2.5.0
- Refactorized `ErrorType.TIMEOUT` to `ErrorType.SDK_TIMEOUT`

### Fixes
- The tracking event that informed that a diagnostic was being launched was duplicated.

---

## Version 2.4.X  
**Last release: 2.4.0 – 28/10/2025**

### Main Updates
- Updated and adapted to latest trackingWidget changes.
- Added ErrorParser with improved error handling and traceability.
- Updated Core dependency to v2.4.0.

### UX Improvements
- General UX revision to align animations, literals, and user flow.

### Fixes
- Fixed incorrect stepData assignment.
- Fixed names of literals and animations for better consistency.

---

## Versión 2.3.X    
**Last release: 2.3.7 – 21/10/2025**

**Main Updates**
- Reduced component size and binary weight.
- Improved screen sharing performance and responsiveness.
- Review and improvement of UX/UI.
- Updated Core dependency to v2.3.3.

**Fixes**
- Fixed mute issue occurring during active screen sharing.

---

### VideoCall 2.3.3 – 09/06/2025
**Main Updates**
- Updated Core dependency to v2.3.2.

---

### VideoCall 2.3.2 – 06/05/2025
**Main Updates**
- Refactored Font system to support dynamic scaling with UIFontMetrics.

**Fixes**
- Moved `hasOperationCreated` check before `createStep`.
- Ensured `fromNib` is executed on the main thread.
- Refactored AnalyticsManager → IAnalyticsController.

---

### VideoCall 2.3.0 – 27/03/2025
**Main Updates**
- Integrated Analytics within the SDK.
- Updated Core dependency to v2.3.0.
- Unified parameters and UI behavior with Android version.
- Added Catalan and Portuguese (PT/BR) language support.
- Language now configured automatically via `initSdk()`.

**Refactors**
- Removed unused views and improved layout consistency.

---

## Version 2.2.X

### VideoCall 2.2.5 – 29/01/2025
**Main Updates**
- Updated Core dependency.
- Added custom fonts and toggle camera button.
- Updated appearance styles and icon configurations.

**Fixes**
- Fixed compilation issue in timeoutDispatcher.
- Removed unnecessary layout constraints.

---

### VideoCall 2.2.3 – 28/11/2024
**Main Updates**
- Added retry screen and recovery logic.
- Added finish call when the agent leaves.
- Introduced customizable image color support.
- Updated timeout values for Android parity.

**Fixes**
- Corrected Tracking StepData error during screensharing.
- Ensured `dismiss()` is called correctly.
- Prevented false success tracking.

---

### VideoCall 2.2.0 – 01/10/2024
**Main Updates**
- Updated Core dependency to v2.2.0.
- Renamed `extensionName` to `extensionIdentifier`.
- Improved hangout event lifecycle handling.

**Fixes**
- Fixed missing switch cases and view dismissal issues.
- Ensured `agoraKit.disableAudio()` runs before recording begins.

---

## Version 2.1.X

### VideoCall 2.1.3 – 28/08/2024
**Main Updates**
- Added CommonCustomization support and themeFlow.
- Implemented screen sharing activation controls.
- Added custom Lotties, tintable icons, and accessibility enhancements.
- Added timeout handling for call duration.

**Fixes**
- Corrected permission screen logic.
- Prevented landscape orientation.
- Fixed multiple UI and template inconsistencies.

---

## Version 2.0.X

### VideoCall 2.0.1 – 30/04/2024
**Main Updates**
- Added Privacy Manifest.
- Updated Core and Constants to v2.0.0.
- Updated Agora SDK to v4.3.0 and Lottie to v4.4.0.

**Fixes**
- Updated appId retrieval logic.
- Corrected outdated icons.

---

## Version 1.5.X

### VideoCall 1.5.9 – 12/03/2024
**Main Updates**
- Adapted to Core v1.5.8.
- Improved camera permission and diagnostic workflow.

**New Features & Structures**
- Added platform events to VideoCallController.
- Integrated IStatusController for centralized state handling.
- Added haptic notifications and vibrationEnabled.
- Added network availability detection.

**Structural Changes**
- Added extractionTimeout bounds control.

**Fixes**
- Handled null/empty URL/API/Tenant edge cases.

---

### VideoCall 1.5.0 – 14/11/2023
**Main Updates**
- Controller now extends IFlowableController.
- Adapted to the new Error Management system.
