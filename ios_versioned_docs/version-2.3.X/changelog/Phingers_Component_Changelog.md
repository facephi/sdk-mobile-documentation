# Phingers Changelog

## Version 2.3.X  
**Last release: 2.3.12 – 21/10/2025**

### Main Updates
- Added template information to the result structure for downstream processing.
- Introduced slap images support to capture and process multi-finger layouts.
- Updated data parser for improved result consistency across operations.
- Updated Core dependency to v2.3.3.
- Added new hand modes for extended scanning capabilities.
- Integrated new Lottie animations to enhance user experience feedback.
- Refactored Font system to integrate UIFontMetrics for dynamic text scaling and accessibility.
- Added AirSnapUI dependencies and included Storyboard in the bundle.
- Added templateType and new actions in capture flow.
- Updated LivenessScore.swift and FingerCaptureViewController.swift.
- Implemented full locale handling (getLocale()), adding Catalan (ca.lproj) and Portuguese (pt-BR) localizations.
- Updated and fixed TF dependencies and Lottie integration.
- Added fingerFilter, ALL_4, and ALL_5 modes to results for enhanced reporting.
- Created SPM component and initial demo integration.

### Refactors & UX
- Performed UX revisions and layout adjustments for better visual guidance.
- Minor refactor in PhingersError to improve error traceability.
- Improved iPad stability (fixed crash when resuming capture sessions).
- Renamed PhingersTF → Phingers.
- Refactored extractionTimeout, fingerFilter, and orientation handling.
- Added sonar properties and improved inline documentation.
- Performed minor code cleanups and reactivated fundamental validations (operation and license).
- Updated color scheme, result normalization, and LivenessScore logic.

### Fixes
- Fixed Error 2300 (SM-5770) related to result decoding.
- Fixed nail detection issue (SM-5772) improving accuracy in finger boundary detection.
- Fixed object misdetection (SM-5774) within the capture area to prevent false positives.
- Fixed UI issues in landscape orientation.
- Fixed missing XCF reference in template Podspec.
- Fixed incorrect hand reference (“left hand”) in Previous Tip message.
- Fixed 3rd-party dependency distribution errors in build pipeline.
- Fixed arm64 simulator issues and downgraded swift-tools-version to 5.5 for compatibility.
