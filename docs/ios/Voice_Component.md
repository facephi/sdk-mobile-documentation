# Voice Component

## 0. Requisitos base de SDK Mobile

**SDK Mobile** is a set of libraries (**Components**) that provides a set of functionalities and services
a series of functionalities and services, allowing its integration in a Mobile application in a
integration into a Mobile application in a simple and fully scalable way.
scalable. Depending on the use case that is required, certain components must be installed.
Depending on the required use case, certain components must be installed. Its high level of
of modularity means that other new components can be added in the future
new components can be added in the future without affecting those already integrated in the project.
project.

For more information on the base configuration, go to the [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">SDK móvil de iOS</a>***.

---

## 1. Introduction

The _Component_ dealt with in the current document is called
**Voice Component_**. It is in charge of performing the voice capture from the user and the subsequent extraction of the corresponding templates.
and the subsequent extraction of the corresponding templates.
Its main functionalities are the following:

- Input of a certain number of sentences to subsequently read each one in one step.
  in one step.

- Internal management of the microphone.

- Management of permissions.

- Analysis of silences.

- Progress analysis.

- Assistant in the capture processes.

- Generation of templates with voice characteristics and scores.
  scores.

##1.1 Minimum requirements
The minimum iOS SDK version required is as follows:

Minimum iOS version: **13**

---

## 2. Component integration

Before integrating this component, it is recommended to read the documentation related to  [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>*** and follow the instructions given in this document.

This section will explain step by step how to integrate the current component into an existing project.
component into an existing project.

### 2.1. Dependencies required for integration

In order to avoid conflicts and compatibility problems, in case you want to
install the component in a project containing an old version of the Facephi libraries.
of the Facephi libraries (_Widgets_), these must be completely removed before the installation of the components.
completely before the installation of the components of the **_SDKMobile_** components.

#### Cocoapods
- Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **mandatory** dependencies that must have been previously installed (by adding them in the Podfile file of the project) are:

```
  	pod 'FPHISDKMainComponent', '~> 1.4.0', '~> 1.4.0'.
```
- To install the SelphID component, the following entry must be included in the application Podfile:
```
	pod 'FPHISDKVoiceIDComponent', '~> 1.4.0' ````
```
- Once the dependencies are installed, the different functionalities of the component can be used.

- In case of development with **xCode15** a post-installation script must be included:

![Image](/iOS/fix_ldClassic.png)


---

## 3. Start new operation

When you want to perform a certain operation, in order to generate the associated information correctly in the
associated information correctly in the platform, the **newOperation** command
the **newOperation** command must be executed beforehand.

This command must be executed **always**. To learn more about how to
to start a new operation, it is recommended to consult the documentation of
**Core Component** documentation, which details and explains this process.
process.

To learn more about how to start a new operation, it is recommended to consult the documentation of [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>***, which details and explains what this process consists of.

---

## 4. Available controllers

| **Controller**            | **Description**                                    |
| --------------- | --------------------------------------- |
| VoiceController | Voice identification main controller   |

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

Once the component has been started and a new operation has been created (**paragraph
3**) the SDK components can be launched. There are two ways to launch
the component:

- **[WITH TRACKING]** This call allows you to launch the functionality
  functionality of the component normally, but internal events will be tracked to the _tracking_ server.
  events will be tracked to the _tracking_ server:

```java
let controller = VoiceController(
            data: data,
            output: { sdkResult in
                let voiceIdSdkResult = SdkResult(finishStatus: sdkResult.finishStatus, errorType: sdkResult.errorType, data: sdkResult.data)
                output(voiceIdSdkResult)
            }, viewController: viewController)
        SDKController.shared.launchTokenizableMethod(controller: controller)
```

- **[NO TRACKING]** This call allows to launch the functionality of the
  functionality of the component normally, but **no event will be tracked** to the
  event to the _tracking_ server:

```java
let controller = VoiceController(
            data: data,
            output: { sdkResult in
                let voiceIdSdkResult = SdkResult(finishStatus: sdkResult.finishStatus, errorType: sdkResult.errorType, data: sdkResult.data)
                output(voiceIdSdkResult)
            }, viewController: viewController)
        SDKController.shared.launchTokenizableMethod(controller: controller)
```

The **launchTokenizableMethod** method must be used **by default**. This method allowsuse **_tracking_** if your component is enabled, and will not use it when it is
when it is disabled (or the component is not installed).
installed).

On the other hand, the **launchTokenizableMethod** method covers a special case, in which the
where the integrator has the tracking installed and activated, but in a given flow within the
flow within the application does not want to track information.
In that case this method is used to prevent that information from being sent to the platform.
to the platform.

---

## 7. Recepción del resultado

Los controllers devolverán la información necesaria en formato
SdkResult. Más información en la sección de <a
  href="Mobile_SDK#6-retorno-de-resultado"
  rel="nofollow">6. Retorno de resultado</a> del Android Mobile SDK.

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
