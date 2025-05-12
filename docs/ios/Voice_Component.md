# Voice Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (Components) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Depending on the use
case that is required, certain components must be installed. Its high
level of modularity allows other new components to be added in the
future without affecting those already integrated in the project.

For more information on the base configuration, go to the [Getting Started](./Mobile_SDK#11-minimum-requirements) section.

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

## 1.1 Minimum requirements

The minimum iOS SDK version required is as follows:

Minimum iOS version: **13**

---

## 2. Integration of the component

<div class="warning">
<span class="warning">:warning:</span>
Before integrating this component, it is recommended to read the
documentation related to [Initial Integration](./Mobile_SDK#2-initial-integration) and follow its instructions.
</div>

This section will explain step by step how to integrate the current
component into an existing project.

### 2.1. Dependencies required for integration

To avoid conflicts and compatibility problems, in case you want to
install the component in a project containing an old version of the
Facephi libraries (_Widgets_), these must be completely removed before
installing the **_SDKMobile_** components.

#### Cocoapods

- Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **mandatory** dependencies that must have been previously installed (by adding them in the Podfile file of the project) are:

```
  	pod 'FPHISDKMainComponent', '~> 2.3.0'
```

- To install the VoiceID component, the following entry must be included in the application's Podfile:

```
  	pod 'FPHISDKVoiceIDComponent', '~> 2.3.0'
```

- Once the dependencies are installed, the different functionalities of the component can be used.

- In case of development with **xCode15** a post-installation script must be included:

![Image](/ios/fix_ldClassic.png)

---

## 3. Start new operation

In order to generate the associated information correctly in the platform, the **newOperation** command must be executed first.

<div class="note">
<span class="note">:information_source:</span>
This command must have been executed **before launch**.
To learn more about how to start a new operation, it is recommended to consult the [Start a new operation](./Mobile_SDK#4-start-a-new-operation) documentation, which details and explains what this process consists of.
</div>

---

## 4. Available controllers

|                 |                               |
| --------------- | ----------------------------- |
| **Controller**  | **Description**               |
| VoiceController | Voice capture main controller |

---

## 5. Component configuration

To configure the current component, once it has been initialised, you must
create a

_VoiceConfigurationData_ object and pass it as parameter to the SDKController
during the launch of the component.

The following section will show the fields that are part of this class and what each one is used for.
class and what each of them is used for.

### 5.1. Class VoiceConfigurationData

#### 5.1.1. phrases

Indicates the phrase(s) needed to capture.

#### 5.1.2. vibrationEnabled

Indicates the activation of the vibration when the widget completes successfully.
successfully.

#### 5.1.3. showTutorial

Indicates whether the component activates the tutorial screen. This view intuitively
intuitively explains how the capture is performed.

#### 5.1.4. extractionTimeout

Sets the maximum time that the capture can be performed.

#### 5.1.5. showDiagnostic

Show diagnostic screens at the end of the process

---

## 6. Using the component

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component normally, but internal events will be tracked to
  the _tracking_ server:

```java
let controller = VoiceController(
            data: data,
            output: { sdkResult in
                let voiceIdSdkResult = SdkResult(finishStatus: sdkResult.finishStatus, errorType: sdkResult.errorType, data: sdkResult.data)
                output(voiceIdSdkResult)
            }, viewController: viewController)
        SDKController.shared.launchTokenizableMethod(controller: controller)
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

```java
let controller = VoiceController(
            data: data,
            output: { sdkResult in
                let voiceIdSdkResult = SdkResult(finishStatus: sdkResult.finishStatus, errorType: sdkResult.errorType, data: sdkResult.data)
                output(voiceIdSdkResult)
            }, viewController: viewController)
        SDKController.shared.launchTokenizableMethod(controller: controller)
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

## 7. Recepción del resultado

Los controllers devolverán la información necesaria en formato
SdkResult. Más información en la sección de [Retorno de Resultado](./Mobile_SDK#6-result-return).

### 7.1. Recepción de errores

En la parte del error, dispondremos de la clase VoiceError.

```java
 INTERNAL_ERROR
 MIC_PERMISSION_DENIED
 TIMEOUT
 CANCEL_BY_USER
 VOICE_ENROLLMENT_PARSE_RESPONSE
 VOICE_MATCHING_PARSE_RESPONSE
```

### 7.2. Receiving successful execution - _data_.

In the _data_ part, we will have the _VoiceResult_ class.

The _data_ field is variable and will depend on which component has returned the result.
the result has been returned. In the case of this component, the returned fields are
the following:

#### 7.2.1 _audios_.

Contains a list of captured audios in ByteArray format.

#### 7.2.2 _tokenizedAudios_

Contains the list of captured audios in tokenised format from
Facephi tokenised format.

---

## Customisation of the component

Apart from the changes that can be made at SDK level (which are
explained in the [SDK Customization](./Mobile_SDK#9-sdk-customization)
document), this particular component allows the modification of specific
texts.

### 8.1 Texts

If you want to modify the SDK texts you would have to include the
XML file in the client application, and modify the value of each _String_ to the desired one.
value of each _String_ to the desired one.

```java
"voice_component_success_records_message" = "%d/%d successful recordings";
"voice_component_read_message" = "Say loudly:";
"voice_component_speech_message" = "Speak clearly and close to the microphone";
"voice_component_speech_noisy_message" = "There is too much noise. Try to be in a quiet environment.";
"voice_component_success_message" = "Recording registred";
"voice_component_phrase_generic_error_feedback" = "Please, repeat the sentence.";
"voice_component_phrase_long_silence_feedback" = "Talk for 2 seconds or more.";
"voice_component_phrase_long_reverberation_feedback" = "Too much echo. Try in another environment.";
"voice_component_tutorial_title" = "Voice Recognition";
"voice_component_tutorial_message" = "Speak clearly and aloud\n\nMake sure your surroundings are silent";
"voice_component_tutorial_button" = "Start";
"voice_component_success_button" = "Continue";
"voice_component_ok"="Ok";
"voice_component_cancel"="Cancel";
"voice_component_end_confirmation_title" = "Are you sure you will finish the process?";
"voice_component_text_results_finish_button" = "Finish";
"voice_component_agree" = "Accept";

```
