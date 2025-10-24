# VideoRecording Changelog

## Version 2.3.X  
**Last release: 2.3.9 – 21/10/2025**

### Main Updates
- Added timestamp inside recording metadata for improved traceability.
- Updated Core dependency to `v2.3.3`.
- Replaced previous stop logic with new `stopCapture` service call.
- Removed unnecessary reference to missing Resources folder.
- Removed screen recording extension dependency.
- Added new events: `COMPONENT_START`, `STOP`, and `screenSharingPermission` modal.

### Fixes
- Fixed component name reference.
- Fixed permissions modal behavior.
- Refactored `AnalyticsManager → IAnalyticsController` for consistency across components.

---

## Version 2.2.X  
**Last release: 2.2.2 – 29/01/2025**

### Main Updates
- Updated Core dependency version.
- Added custom fonts for UI consistency.
- Updated tracking behavior — now tracks success when recording stops, not when it starts.
- Updated Core dependency to `v2.2.0`.
- Introduced breaking change: renamed `extensionName → extensionIdentifier`.
- Cleaned and refactored internal code for improved maintainability.

### Fixes
- Fixed Tracking `StepData` error during screensharing sessions.
- Fixed audio initialization issue — ensured `agoraKit.disableAudio()` is called before recording starts.

---

## Version 2.1.X  
**Last release: 2.1.1 – 28/08/2024**

### Main Updates
- Adapted to Core `v2.1.X` and updated dependencies.
- Added `CommonCustomization` and refactored color handling.
- Updated `SdkResult` data structure on success.
- Removed unnecessary `String` extensions.

### Fixes
- Fixed broadcast not starting issue.
- Fixed recording stop behavior when triggered outside app lifecycle.

---

## Version 2.0.X  
**Last release: 2.0.2 – 30/04/2024**

### Main Updates
- Updated Agora dependency and Constants.
- Added Privacy Manifest and `.xcprivacy` resource extension.
- Adapted to Core `v2.0.0` and Agora `v4.3.0`.
- Added explicit `UserDefaults` usage reason in `PrivacyInfo`.
- Performed minor dependency updates.

### Fixes
- Fixed recording errors during session handling.
- Temporarily downgraded Agora to `v4.3.0` (until `v4.3.1` release).

---

## Version 1.5.X  
**Last release: 1.5.4 – 12/03/2024**

### Main Updates
- Updated Starscream to version `4.0.8`.
- Adapted to Core `v1.5.4`, `v1.5.6`, and `v1.5.8`.
- Improved stability and overall flow integration.

### New Features & Structures
- Added new platform events to `VideoRecordingController`.
- Created `VideoRecordingComponent`.
