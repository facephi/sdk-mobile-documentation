# Voice Capture

## 1. Introduction

Voice capture is performed with the **Voice Component**.

This component handles capturing the user’s voice and extracting the corresponding templates. Its main processes include:

- Internal microphone and permission management.
- Prompting a series of phrases for the user to read.
- Silence detection analysis.
- Progress tracking during capture.
- Guided assistance throughout the capture process.
- Generation of voice templates and quality scores.

Refer to the [Quickstart](./Mobile_SDK) section for basic SDK integration. This section provides details for launching this component.

---

## 2. Dependency

Add the component-specific dependency:

```java
implementation "com.facephi.androidsdk:voice_component:$version"
```

---

## 3. Available Controllers

| **Controller**     | **Description**                             |
| ------------------ | ------------------------------------------- |
| VoiceController    | Main controller for voice capture           |

---

## 4. Quick Launch

Once the SDK is initialized and a new operation has been created, launch the component:

```java
val response = SDKController.launch(
    VoiceController(
        VoiceConfigurationData(
            phrases = arrayOf(
                "Your full name and address",
                "Your document number with letter"
            )
        )
    )
)

when (response) {
    is SdkResult.Error   -> Napier.d("VOICE: ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

---

## 5. Basic Configuration

Create a `VoiceConfigurationData` object with the following field:

```java
VoiceConfigurationData(
    phrases = arrayOf(
        "Your full name and address",
        "Your document number with letter"
    )
)
```

You can customize the list of phrases to be presented to the user.

---

## 6. Receiving the Result

The launch returns an `SdkResult`. Handle success and error:

```java
when (response) {
    is SdkResult.Error   -> Napier.d("VOICE: ERROR - ${response.error}")
    is SdkResult.Success -> response.data
}
```

### 6.1 Handling Errors

Errors are returned as a `VoiceError` object. Possible values include:

- ACTIVITY_RESULT_MSG_ERROR: The result of the activity is incorrect.
- APPLICATION_CONTEXT_ERROR: Required application context is null.
- CANCEL_BY_USER: User has cancelled the process.
- CANCEL_LAUNCH: A general cancellation of the SDK has been done.
- COMPONENT_LICENSE_ERROR: The license of the component is not correct.
- EMPTY_LICENSE: License String is empty.
- FETCH_DATA_ERROR: Error in the result collection.
- FLOW_ERROR: Error in the flow process.
- INITIALIZATION_ERROR: Initialisation error.
- INTERNAL_LICENSE_ERROR: Internal error related to the component license
- MANAGER_NOT_INITIALIZED: Managers are nil.
- NO_DATA_ERROR: Input data is null.
- OPERATION_NOT_CREATED: No operation in progress.
- PERMISSION_DENIED: User has denied permissions.
- TIMEOUT: Timeout in the process.

### 6.2 Handling Success – `data`

On success (`SdkResult.Success`), you receive a `VoiceResult` object. It contains:

#### 6.2.1 `audios`
An array of captured audio samples as `ByteArray`.

#### 6.2.2 `tokenizedAudios`
An array of tokenized audio samples.

---

## 7. Advanced Information

This section provides advanced configuration options for the Voice Component.

### 7.1 Advanced Component Configuration

All fields of `VoiceConfigurationData`:

- `phrases`: Array of phrases to be captured.
- `vibrationEnabled`: Enable vibration feedback when the capture completes.
- `showTutorial`: Display a tutorial screen explaining the capture process.
- `extractionTimeout`: Maximum duration (ms) for voice capture.
- `showDiagnostic`: Show diagnostic screens at the end of the process.
- `enableQualityCheck`: Enable or disable audio quality checks (recommended enabled).
- `showPreviousTip`: Show a pre-capture tip screen with instructions and a start button.

---

## 8. Component Customization

Beyond SDK-level settings (see [Advanced Settings](./Mobile_SDK_advanced)), this component allows interface customization.

### 8.1 Texts

Override default texts by including an XML file in your app:

```xml
<!-- Previous Tip -->
    <string name="voice_component_tip_message">Speak clearly and loudly. &lt;br&gt;&lt;br&gt; Make sure you are in a quiet environment.</string>
    <string name="voice_component_tip_title">Speech recognition</string>
    <string name="voice_component_tip_button">Continue</string>
    <!-- Process -->
    <string name="voice_component_success_message">Recorded recording</string>
    <string name="voice_component_speech_message">Without pressing anything, he speaks clearly and close to the microphone</string>
    <string name="voice_component_speech_more_message">Keep talking</string>
    <string name="voice_component_speech_empty_message" translatable="false"></string>
    <string name="voice_component_read_message">Say out loud:</string>
    <string name="voice_component_speech_noisy_message">There is too much background noise, try to go to a quiet environment</string>
    <string name="voice_component_success_records_message">successful recordings</string>
    <!-- Diagnostic -->
    <string name="voice_component_timeout_title">Time exceeded</string>
    <string name="voice_component_timeout_desc">We were unable to identify you. Please try again.</string>
    <string name="voice_component_internal_error_title">There was a technical problem</string>
    <string name="voice_component_internal_error_desc">We apologize. The capture could not be made</string>
```

### 8.2 Animations

Override Lottie animations by including files in `res/raw/` with the same names:

```
voice_anim_enroll_ko.json
voice_anim_enroll_ok.json
voice_anim_enroll_progress.json
voice_anim_intro.json
```

### 8.3 External Views

It is possible to completely modify the component screens while maintaining their functionality and navigation. To do so, the following interfaces must be implemented:

Previous tip screen:

```kotlin

interface IVoicePreviousTipView {
    @Composable
    fun Content(
        onContinue: () -> Unit,
        onClose: () -> Unit
    )
}

```

Error diagnosis screen:

```kotlin

interface IVoiceErrorDiagnosticView {
    @Composable
    fun Content(
        error: VoiceError,
        onRetry: () -> Unit,
        onClose: () -> Unit,
    )
}

```

Enroll screens:

```kotlin

interface IVoiceEnrollRecordingView {
    @Composable
    fun Content(
        phrase: String,
        numberRecordedPhrases: Int,
        numberTotalPhrases: Int,
        voiceAmplitude: Float,
        recordingProgress: Int,
        onClose: () -> Unit,
    )
}

```

```kotlin

interface IVoiceEnrollSuccessView {
    @Composable
    fun Content(
        phrase: String,
        numberRecordedPhrases: Int,
        numberTotalPhrases: Int,
        onClose: () -> Unit,
    )
}

```

```kotlin

interface IVoiceEnrollErrorView {
    @Composable
    fun Content(
        phrase: String,
        numberRecordedPhrases: Int,
        numberTotalPhrases: Int,
        onClose: () -> Unit,
    )
}

```

Once the classes that implement the interfaces have been created, the "customViews" parameter can be added at component launch to be used in the SDK.

---

## 9. Logs

Filter console logs for this component with: `"VOICE:"`

