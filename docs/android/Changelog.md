# Changelog

## Versions

### 2.0.0-SNAPSHOT

- General

  - All SDKController functions, from having output with lambda, become suspend functions and return the result synchronously.
    To consume it now it will be necessary to use a Coroutine.
    If called from a ViewModel, you can use viewModelScore.launch, otherwise CoroutineScope(Dispatchers.IO).launch.

  - The SDK initialisation now has an SDKConfigurationData with the data to be filled in.

  - In the SDKConfigurationData you can choose between LicensingOnline or LicensingOffline.

  - All ConfigurationData with images inside was changed to refactor the name of params (Image)

- Tracking

  - Settings and improvements

- Voice
  - Updated widget library to 3.13.0
  - Improved UX/UI
  - Improved verifications results

### 1.5.3

- General
  - Diagnostic screens with retry
  - Flow
    - New Feature
    - Dynamic theme
    - Preview controller to development
    - Improvements
- Selphi
  - Version updated to 5.12.0
  - Tutorial adjusts
  - Full frame tracking adjust
- SelphID
  - Version updated to 1.22.3
- Phingers
  - Added haptic feedback with vibration
  - Improvements in tutorial
- NFC
  - Improvements
- VideoId
  - Adjust bugfixes
  - UX adjusts
- VideoCall
  - New Feature - ScreenSharing
  - Adjust bugfixes
- VideoRecording
  - New State managements to get more control in client layer
  - Adjust bugfixes
  - Know Issue: API 34 Android
- Capture QR
  - QR format adjusts

### 1.5.2

- General
  - Improvement in smaller screens
  - New SelphiSignController
  - New VideoIdSignController
  - New SDKImage handler and SDKApplication
- NFC
  - Improvements
- SelphID
  - 1.21.1
- Selphi
  - 5.11.2
- Voice
  - Library size improvement

### 1.5.1

- General
  - Improvements and bug fixes
- Voice
  - Internal library update
  - Calibration adjustments
  - Return tokenized audios
- Phingers
  - WSQ tracking
- Behaviour
  - Internal library update
  - Enhancements and fixes

### 1.5.0

- API 34 (Android 14) supported
- Updated Android Gradle plugins (8.1.1)
- Updated version of Kotlin used (1.9.10)
- Video component input data settings
- Improved SdkResult as a sealed class
- Nomenclature of NewOperation input Steps
