# VoiceID Changelog


## Version 2.5.X  
**Last release: 2.5.0 - 12/12/2025**

### Main Updates
- Updated core minor version 2.5.0
- Refactorized `ErrorType.TIMEOUT` to `ErrorType.SDK_TIMEOUT`

---

## Version 2.4.X    
**Last release: 2.4.1 – 24/11/2025**

### Main Updates
- Updated SDK version to 5.3.0.
- Added ErrorParser with enhanced error management and diagnostics.
- Updated Core dependency to v2.4.0.
- Marked matching process as deprecated — local matching is no longer supported.

### UX Improvements
- General UX revision for layout consistency and accessibility improvements.

### Fixes
- Fixed incorrect stepData assignment.
- The tracking event that informed that a diagnostic was being launched was duplicated.

---

## Version 2.3.X    
**Last release: 2.3.6 – 21/10/2025**

### Main Updates
- Updated Core dependency to v2.3.3.
- Refactored Font system to integrate UIFontMetrics for dynamic text scaling.
- Added Analytics integration and enhanced tracking events.
- Fixed Lottie version mismatch for stability.
- Added component information logging during initialization.
- Updated Voices SDK version.
- Unified attributes and values with Android implementation.
- Added previous tip control and corrected haptic feedback behavior.
- Replaced redundant String.data usage.

### Fixes
- Fixed misplaced hasOperationCreated check (moved before createStep).
- Refactored AnalyticsManager → IAnalyticsController for consistency with other components.

---

## Version 2.2.X  
**Last release: 2.2.7 – 29/01/2025**

### Main Updates
- Updated Core dependency and added Dark Mode color support.
- Parameterized minSpeechLength configuration.
- Added Custom Image Color customization support.
- Included logs and microphone usage checks.
- Added warning behavior for MultipleSpeakers when enableQualityCheck = false.
- Updated Voice SDK dependency to v4.1.0.
- Added custom animations support.
- Refactored tutorial logic (removed old tutorial references, using status-based flow).

### Refactors
- Refactored timeouts and simplified dismiss handling (only in retryAction).

### Fixes
- Fixed invalid navigation when a TIMEOUT error occurred.
- Fixed incorrect behavior when cancelling and restarting recording.
- Fixed Tracking StepData issue during screensharing.
- Removed redundant VoiceEnvironment public class.
- Fixed issue in PrivacyInfo.xcprivacy.

---

## Version 2.1.X  
**Last release: 2.1.1 – 28/07/2024**

### Main Updates
- Adapted to Core v2.1.X and updated dependencies.
- Added chained tracking events.
- Set showTutorial = true by default.
- Updated neutral color palette and constants.
- Added new Lotties, accessibility labels, and tags.
- Increased minimum iOS target from 11 → 13.
- Added color and tint customization for icons.
- Added configuration parameter enableCheckQuality.
- Added phrases to environment configuration.

### Refactors
- Removed duplicated and unused code/extensions.
- Used Core methods to prevent redundancies.
- Improved accessibility integration.

### Fixes
- Fixed permissions and audio playback issues.
- Enforced UIView.fromNib execution on main thread to fix threading issues.

---

## Version 2.0.X  
**Last release: 2.0.3 – 17/05/2024**

### Main Updates
- Added Privacy Manifest and updated Core dependency to v2.0.0.
- Updated Constants.
- Adapted to Agora 4.3.0 and Lottie 4.4.0.
- Updated VoiceEnrollmentResult.swift.

### Fixes
- Fixed phrase display timing (previously shown before animation).
- Added retry on timeout functionality.
- Fixed callback handling and recording stop sequence.
- Fixed privacy info location.

---

## Version 1.5.X  
**Last release: 1.5.9 – 14/03/2024**

### Main Updates
- Major functional and UI changes.
- Adapted to Core v1.5.8.
- Improved user interaction and feedback across the flow.
- Controller now extends IFlowableController.
- Added IStatusController for centralized state management.
- Added configuration parameters showDiagnostic and vibrationEnabled.
- Updated FPHIVoiceSDK to v3.13.0.

### New Features & Structures
- Added new Platform events to VoiceIdController.
- Changed default timeout from 60000 → 30000 ms.
- Added haptic notifications.
- Improved UI with color adjustments and redesigned RecorderView.
- Moved startRecording from viewWillAppear → viewDidLoad.
- Added controls for min/max extractionTimeout values.

### Fixes
- Adapted to new Error Management System.
