# NFC Changelog

## Version 2.14.X

**Last release: 2.14.0 - 12/02/2026**

### Main Updates

- Added `activeAuthenticationChallenge` to `NfcConfigurationData`. Allows injecting a custom challenge to validate later and protect against replay attacks.
- Added `onlyPACE` parameter to `NfcConfigurationData`. When enabled, only PACE/SAC documents are detected. Available from iOS ≥ 16 and requires PACE string in entitlements.
- Improved `tagConnectionLostTimer` management. Previously a single timer could span multiple requests when responses were large.
- Improved ChipAuthentication handling and `skipCA` management.
- Added PACE Step 2 with Integrated Mapping support for Peruvian ID cards.
- Improved handling of large data chunks during processing.

### Fixes

- Fixed Wrong Length error on Peruvian documents during Active Authentication validation.
- Cleared `secureMessaging` when PACE fails to prevent interference with BAC processes.
- Improved management and retry mechanism for error `0x69,0x85` (“Conditions of use not satisfied”).

---

## Version 2.13.X  
**Last release: 2.13.4 – 27/01/2026**

### Main Updates 
- Added tokenized ocr and images to NfcResult. The new params are `tokenOcr`, `nfcImages.tokenFacialImage` and `nfcImages.tokenSignatureImage`. **They are only informed if the TokenizeController is [injected in the initSdk(...)](Mobile_SDK.md#322-tokenizecontroller)**
- Added IDV support
- Added Document's type management when using Flows
- Add ReadingProgressStyle (DOTS, PERCENTAGE) to NfcConfigurationData
- Updated core minor version 2.5.0
- Improved tracking error management
- Refactorized `ErrorType.TIMEOUT` to `ErrorType.SDK_TIMEOUT`

### Fixes
- Added new configuration param tagSessionTimeout to NfcConfigurationData. This param is an Int in miliseconds, by default 1500. It represents the time the tagReader session waits until it launches a tagConnectionLostTimer's error
- Some documents (CHL, ESP,...) have unusually long response time for PACE's Step1 and BAC's Mutual Authentication (i.e. longest documented 23s). We have removed the TagConnectionLostTimer error from those instructions to avoid creating an artificial TagConnectionLost state

---

## Version 2.12.X  
**Last release: 2.12.0 – 28/10/2025**

### Main Updates
- Updated Core dependency to version v2.4.0.
- Improved tracking data management for consistency and reliability.
- Integrated accessibility improvements into tutorial and previous tip flows.

### Fixes
- Fixed animation names and transitions.
- Corrected text colors in DescriptionTextView.
- Fixed animations in the previous tip sequence.
- Corrected literals displayed during NFC reading.

---

## Version 2.11.X  
**Last release: 2.11.8 – 21/10/2025**

### Main Updates
- Updated and adapted SDK Core to `v2.3.3`.
- Refactored Font system to include `UIFontMetrics` for dynamic scaling.
- Added Analytics Events.
- Added localization override within SDK.
- Improved UI layout for small devices.
- New translations during NFC reading

### Fixes
- Integrated accessibility improvements into tutorial and previous tip flows.
- Moved `hasOperationCreated` check before `createStep`.
- Fixed missing title in cancel process alert.
- Corrected Catalan localizables (previously in Portuguese).
- Moved thread-sensitive code to `DispatchQueue.main.async`.
- Fixed missing `sdkPrimaryColor` configuration in first tutorial step animation.
- Fixed animations' names
- Fixed DescriptionTextView colors
- Fixed animations on previous tip screen

---

## Version 2.10.X  
**Last release: 2.10.7 – 14/03/2025**

### Main Updates
- Upgraded OpenSSL to version `1.1.2301` to support Privacy Manifest.
- Aligned values with Android version.
- Added bold styling to literals.
- Enabled `showPrevious` parameter.
- Updated Core to version `v2.2.2`.
- Added custom fonts and Dark Mode colors.
- Adjusted timeout (`50000 → 58000 ms`).
- Set `SkipSecureElements` as private and true.
- Added custom colors and images methods.
- Updated SDK Core to `v2.2.0`.
- Added animation customization support.
- Moved redundant logic to Core layer.
- Added pager arrows and title labels to tutorial tips.

### Fixes
- Fixed `NO_DATA_ERROR` when launching from Flow.
- Improved UX consistency and button background colors.
- Fixed pink backgrounds in animations.
- Fixed screensharing StepData tracking errors.
- Corrected animations and literals for iPhone 15.
- Added `autorotate = false` to prevent horizontal layout.
- Resolved skipSecureElements JSON parsing issue.
- Fixed tutorial animation layering in small screens.
- Updated several literals.

---

## Version 2.9.X  
**Last release: 2.9.2 – 29/08/2024**

### Main Updates
- Added new animations and literals for iPhone 15.
- Added `CommonCustomization` and `ThemeFlow` support.
- Updated Core to `v2.1.0` and adapted changes.
- Improved accessibility, Lotties, and custom color options.
- Added new parameters to `NfcConfigurationData` (`extractFacialImage`, `extractSignatureImage`).

### Fixes
- Fixed modal textfield height and tutorial tip animations.
- Removed outdated Android animations.
- Optimized default parameter values and session handling.

---

## Version 2.8.X  
**Last release: 2.8.4 – 31/05/2024**

### Main Updates
- Created unskippable “Previous Tips” flow when `showTutorial = true`.
- Added new animations, colors, and literals for improved UX.
- Introduced `isButtonNotPressed` to handle start-button cooldowns.
- Restarted capture on `tagConnectionLost`.
- Added `tagConnectionLostTimer` for blocked sessions.
- Updated internationalization and disabled Start NFC button during blocking sessions.
- Updated dependencies and adapted to Core `v2.0.0`.
- Added Privacy Manifest and OpenSSL `3.1.5000` support.
- Implemented custom messages for iOS ≥17.4.
- Improved session handling (`isActive` validation before scan).
- Added static property `NfcController.isAvailable` for reader state.

### Fixes
- Reverted OpenSSL dependency (`3.1.5000 → 1.1.1100`) due to PACE malfunction.
- Replaced masterlists with unified `masterList.pem`.
- Resolved duplicated `ActiveAuthentication`.
- Improved JSON decoding in `NfcConfigurationData`.

---

## Version 2.7.X  
**Last release: 2.7.10 – 13/03/2024**

### Main Updates
- Adapted to Core `v1.5.6–v1.5.8`.
- Added status component integration, diagnostic flow, and timeout control.
- Refactored `NfcResult` models and improved error handling.
- Added tutorial with animations, Catalan translations, and improved UX navigation.
- Added new error type: `TagConnectionLost`.
- Updated MasterList extraction handling.

### Fixes
- Handled invalid MRZ keys and truncated tutorial text.
- Improved fallback logic.
- Corrected literal key for `nfc_component_cancel`.

---

## Version 2.5.X  
**Last release: 2.5.6 – 14/09/2023**

### Main Updates
- Added new parameters to `NfcConfigurationData` (`skipPace`, `dataGroups`).
- Updated minimum iOS version to 13.
- Added Catalan translations.
- Added customizable literals and loading UI improvements.
- Added `BehaviorComponent` support and adapted to SDK `1.4.0`.

### Fixes
- Fixed `InvalidMRZ` error when document number shorter than 9 characters.
- Resolved OCR mapping, `NFC_WIDGET` tracking, and MRZ guard checks.

---

## Version 2.4.X  
**Last release: 2.4.2 – 10/05/2023**

### Main Updates
- Changed date formats in configuration.
- Downgraded OpenSSL to `1.1.1100` for hybrid compatibility.
- Converted module into a Component, integrating `LicenseChecker` internally.
- Refactored `PassportReader` and restricted unnecessary public accessors.
