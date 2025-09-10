# Changelog

## Versions

### 2.3.6

- General

  - UX improvements
  - Error data
  - Logger new version: 1.0.2
  - Security new version: 1.0.6

- SelphID

  - Widget new version: 1.34.5

- Tracking

  - Widget new version: 1.1.16

- Selphi

  - Widget new version: 5.18.2

- Video recording

  - Delete output
  - Response in start function
  - Update dependencies

- Video ID

  - Update dependencies

- VideoCall

  - Update dependencies

- NFC

  - Update dependencies

- Phingers

  - Improve process
  - Update dependencies

### 2.3.5

- General

  - Error codes

- SelphID

  - Widget new version: 1.34.1

- Tracking

  - Widget new version: 1.1.12

- Video ID

  - Reader new version: 1.8.0
  - Helper new version: 3.27.0

### 2.3.4

- General

  - Accesibility improvements
  - Horizontal screen improvements
  - Refactor errors

- Video ID

  - Reader new version: 1.7.1

- SelphID

  - Widget new version: 1.33.6

- Design KMP

  - IOS improvements

- NFC

  - Reading improvements

### 2.3.3

- General

  - Accesibility improvements
  - Horizontal screen improvements
  - Security widget new version: 1.0.1

- Video ID

  - New modes
  - Reader new version: 1.7.0
  - Helper new version: 3.26.13

- SelphID

  - Widget new version: 1.33.4

- Selphi

  - Widget new version: 5.17.5

- Tracking

  - Widget new version: 1.1.10

### 2.3.2

- General

  - Accesibility improvements
  - Compatible with 16Kb page size

- Video ID

  - OCR Validations input / output

- Selphi

  - Widget new version: 5.17.3

- SelphID

  - Widget new version: 1.33.1

- VideoCall

  - New screen sharing

- VideoRecording

  - New screen sharing

### 2.3.1

- General

  - Accesibility improvements

- Selphi

  - Widget new version: 5.17.2
  - Tokenizer included

- Tracking

  - Widget new version: 1.1.9

### 2.3.0

- General

  - Common Design internal library
  - Proguard fixes
  - Updated target Api to 35
  - Android Gradle Plugin 8.9.1
  - Kotlin 2.1.10
  - Accesibility improvements

- Tracking

  - Widget new version: 1.1.8
  - IDV Platform compatible (New license mandatory)

- Flow

  - Improvements and fixes

- VideoCall

  - UI improvements

- Video ID

  - Verification of face present
  - OCR reading of the submitted document
  - New output data

### 2.2.3

- General

  - Complete separation between the activation of the pre-tip screen and the tutorial screen.
  - Added event tracking and analysis for interaction and navigation.
  - New license checker.

- Voice

  - Updating internal dependencies

- Phingers

  - Updating internal dependencies
  - New filter

- Video ID

  - New input parameter for camera selection
  - New input parameter for enable/disable auto face detection
  - Detection of active video recording process before starting

- Video Call

  - Detection of active video recording process before starting
  - VideoCallScreenSharingManager does not require the application.
  - Internet connection failure detection

- Video Recording

  - Internet connection failure detection

- SelphID

  - New input parameter to activate vibration
  - Widget new version: 1.32.0

- Selphi

  - New input parameter to activate vibration
  - New input parameters for Liveness Move attempts
  - Widget new version: 5.17.1

### 2.2.2

- SelphID

  - Widget new version: 1.31.2

### 2.2.1

- General

  - Updating internal dependencies

- Selphi

  - New input parameter for camera selection
  - Widget new version: 5.16.2

- Tracking

  - New version 1.1.7

- SelphID

  - Widget new version: 1.31.2

- License Checker

  - Widget new version: 0.4.0

### 2.2.0

- General

  - Improved exception handling
  - Updating internal dependencies

- Selphi

  - Widget new version: 5.16.1
  - Add extraction duration
  - Add orientation

- SelphID

  - Widget new version: 1.30.1

### 2.1.2

- General

  - UX updates
  - Accesibility improvements

- SelphID

  - Widget new version: 1.29.0

- Selphi

  - Widget new version: 5.15.0

- Video Call

  - Connection improvements

- Video Id

  - Connection improvements

- Video Recording

  - Connection improvements

### 2.1.1

- General

  - UX updates

- SelphID

  - Widget new version: 1.28.1

- Selphi

  - Widget new version: 5.14.2

- Tracking

  - Widget new version: 1.1.5

- Capture

  - Invoice capture improvements

### 2.1.0

- General

  - Internal improvements and fixes
  - Security improvements
  - Internal dependency management improvements

- Flow

  - Internal improvements and fixes

- Tracking

  - Advanced Tracking
  - Internal improvements and fixes

- SelphID

  - New version 1.27.0

- Selphi

  - New version 5.14.1

### 2.0.3

- General

  - Accesibility improvements
  - Controller coroutines improvements
  - UI for tablets
  - Add custom views

- NFC

  - Security provider fix
  - Date fix
  - Exception handler

- Video Call

  - Add timeout

- Video ID

  - Control network error
  - Add timeouts
  - Detect face

- SelphID

  - New version 1.26.0
  - Add tutorial

- Selphi

  - New version 5.13.4
  - New param cropImageDebug

- Tracking

  - Add tracking widget

- Capture

  - New document scann

### 2.0.2

- General

  - Tutorial improvements
  - UX/UI improvements
  - Kotlin updated from 1.9.24 to 2.0.0 with K2 compiler
  - Android Gradle Plugin updated from 8.3.2 to 8.5.0
  - Minor dependencies update
  - Horizontal views for tablets

- SelphID

  - New version 1.25.1

- Tracking

  - Added APIKEY connection
  - Version 2 in events
  - Adjustments of stepSucceed prior to assets
  - Improvements in connection loss logic

- NFC

  - Improvements and fixes
  - Corrected "Tag lost error"
  - Improvements in reconnection
  - Now you can choose whether you want to extract the image of the face and the signature.

- VideoRecording

  - Adjustments and improvements in stopping the service

- VideoCall

  - Adjustments and improvements in stopping the service

- Selphi
  - New version 5.13.1
  - A parameter is added in the response: livenessDiagnostic

### 2.0.1

- General

  - Fixed text in SdkConfigurationData from "iaModels" to "aiModels"
  - Internal improvements to PreviousTips
  - Updated key dependencies:
    - composeCompilerVersion = 1.5.12
    - androidGradlePlugin = 8.3.2
    - kotlinAndroidGradlePlugin = 1.9.23

- Selphi

  - New version 5.12.3
  - Add bestImageTokenized

- SelphID

  - New version 1.24.2

- VideoCall

  - Updated Timeout image

- Phingers

  - Simplified ConfigurationData

- Tokenizer
  - New core version 2.0.7

### 2.0.0

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

### 1.5.6

- Selphi
  - Updated widget version to 5.12.3

### 1.5.5

- General

  - Security settings and improvements
  - Selphi and Selphid internal image improved management

- NFC
  - Fix Personal Number

### 1.5.4

- General

  - Security settings and improvements
  - Layout adjustments to fullscreen tutorial views

- Selphi

  - New version 5.12.1

- SelphID
  - New version 1.23.1

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
