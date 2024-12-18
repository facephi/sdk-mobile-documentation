# Voice Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (Components) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Depending on the use
case that is required, certain components must be installed. Its high
level of modularity allows other new components to be added in the
future without affecting those already integrated in the project.

For more information on the base configuration, go to the
[Getting Started](./Mobile_SDK) section.

---

## 1. Introduction

The _component_ discussed in the current document is called **Voice
Component**. It is in charge of capturing the user's voice and the
subsequent extraction of the corresponding templates. Its main
functionalities are the following:

- Input of a certain number of sentences to subsequently read each one
  in one step.

- Internal microphone management.

- Management of permissions.

- Analysis of silences.

- Progress analysis.

- Assistant in the capture processes.

- Generation of templates with voice characteristics and scores.

---

## 2. Integration of the component

Before integrating this component, it is recommended to read the
documentation related to:

[Getting Started](./Mobile_SDK)
and follow the instructions in that document.

This section will explain step by step how to integrate the current
component into an existing project.

### 2.1. Dependencies required for integration

To avoid conflicts and compatibility problems, in case you want to
install the component in a project containing an old version of the
Facephi libraries (_Widgets_), these must be completely removed before
installing the **_SDKMobile_** components.

- Currently FacePhi libraries are distributed remotely through
  different dependency managers. **Mandatory** dependencies that must
  be installed beforehand:

  ```java
  implementation "com.facephi.androidsdk:voice_component:$sdk_voice_component_version"
  ```

---

## 3. Start new operation

When you want to perform a specific operation, in order to generate the
associated information correctly in the platform, the **newOperation**
command must first be executed.

<div class="note">
<span class="note">:information_source:</span>
This command must have been executed **before launch**.
To learn more about how to start a new operation, it is recommended to consult the [Start a new operation](./Mobile_SDK#4-start-a-new-operation) documentation, which details and explains what this process consists of.
</div>

---

## 4. Available controllers

|                 |                               |
| --------------- | ----------------------------- |
| **Controller**  | **Descripción**               |
| VoiceController | Voice capture main controller |

## 5. Component configuration

To configure the current component, once it has been initialised, a
_VoiceConfigurationData_ object must be created and passed as a
parameter to the SDKController when the component is launched.

The following section will show the fields that are part of this class
and what each of them is used for.

### 5.1. Class VoiceConfigurationData

#### 5.1.1. phrases

Indicates the phrase(s) required to capture.

#### 5.1.2. vibrationEnabled

Indicates the activation of the vibration when the widget finishes
successfully.

#### 5.1.3. showTutorial

Indicates whether the component activates the tutorial screen. This view
intuitively explains how the capture is performed.

#### 5.1.4. extractionTimeout

Sets the maximum time that the capture can be performed.

#### 5.1.5. showDiagnostic

Display diagnostic screens at the end of the process

#### 5.1.6. enableQualityCheck

Enable or disable audio quality checking. It is recommended to always keep it enabled.

#### 5.1.7. showPreviousTip

Displays a pre-launch screen with information about the process to be performed and a launch button.

---

## 6. Component use

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component normally, but internal events will be tracked to
  the _tracking_ server:

```java
val result = SDKController.launch(
    VoiceController(VoiceConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("Voice: ERROR - ${result.error.name}")
    is SdkResult.Success -> Napier.d("Voice OK: ${result.data}")
}
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

```java
val result = SDKController.launchMethod(
    VoiceController(VoiceConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("Voice: ERROR - ${result.error.name}")
    is SdkResult.Success -> Napier.d("Voice OK: ${result.data}")
}
```

The **launch** method must be used by **default**. This method allows
**_tracking_** to be used if your component is enabled, and will not use
it when it is disabled (or the component is not installed).

On the other hand, the **launchMethod** method covers a special case, in
which the integrator has tracking installed and activated, but in a
certain flow within the application does not want to track information.
In this case, this method is used to prevent this information from being
sent to the platform.

---

## 7. Receipt of the result

The controllers will return the required information in SdkResult
format. More information in the Android Mobile SDK's <a
href="Mobile_SDK#6-result-return"
rel="nofollow">6. Result return</a> section.

### 7.1. Receipt of errors

On the error side, we will have the _VoiceError_ class.

Error list:

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

### 7.1. Receipt of correct execution - _data_

In the data part, we have the _VoiceResult class_.

The data field is variable and will depend on which component has
returned the result. In the case of this component, the fields returned
are the following:

#### 7.1.1 _audios_

Contains a list of captured audios in ByteArray format.

#### 7.1.3 _tokenizedAudios_

Contains the list of captured audios in Facephi tokenize format.

---

## 8. Customizing the component

Apart from the changes that can be made at SDK level (which are
explained in the [Getting Started](./Mobile_SDK)
document), this particular component allows the modification of specific
texts.

### 8.1 Texts

If you want to modify the SDK texts, you would have to include the
following XML file in the client application, and modify the value of
each String to the desired one.

```xml
    <string name="voice_component_tutorial_message">Speak clearly and loudly. \n\n Make sure you are in a quiet environment.</string>
    <string name="voice_component_tutorial_title">Speech recognition</string>
    <string name="voice_component_tutorial_button">Continue</string>
    <string name="voice_component_success_message">Recorded recording</string>
    <string name="voice_component_speech_message">Speak clearly and close to the microphone</string>
    <string name="voice_component_speech_more_message">Keep talking</string>
    <string name="voice_component_speech_empty_message" translatable="false"></string>
    <string name="voice_component_read_message">Say out loud:</string>
    <string name="voice_component_speech_noisy_message">There is too much background noise, try to go to a quiet environment</string>
    <string name="voice_component_success_records_message">successful recordings</string>
    <string name="voice_component_timeout_title">Time exceeded</string>
    <string name="voice_component_timeout_desc">We apologize. The capture could not be made</string>
    <string name="voice_component_internal_error_title">There was a technical problem</string>
    <string name="voice_component_internal_error_desc">We apologize. The capture could not be made</string>

```

### 8.2. Animations

If you want to modify the animations (lottie) of the SDK you would have to include the animations with the same name in the res/raw/ folder of the application.

```text
voice_anim_enroll_ko.json
voice_anim_enroll_ok.json
voice_anim_enroll_progress.json
voice_anim_intro.json
```

### 8.3 External custom views

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

To display the logs of this component on the console, you can use the filter: "VOICE:"
