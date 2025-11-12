# Voice Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (**Components**) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Depending on the use
case that is required, certain components must be installed. Its high
level of modularity allows other new components to be added in the
future without affecting those already integrated in the project.

For more information on the base configuration, go to the [Getting Started](./Mobile_SDK#11-minimum-requirements) section.

---

## 1. Introduction

The _Component_ discussed in the current document is called **_Voice Component_**. It is in charge of capturing the user's voice and the
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
  	pod 'FPHISDKMainComponent', '~> 2.4.0'
```

- To install the VoiceID component, the following entry must be included in the application's Podfile:

```
  	pod 'FPHISDKVoiceIDComponent', '~> 2.4.0'
```

- Once the dependencies are installed, the different functionalities of the component can be used.

- In case of development with **XCode15** a post-installation script must be included:

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
(**Section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows launching the functionality
  of the component normally, and **the internal events will be tracked** to the _tracking_ server:

```java
let controller = VoiceController(
    data: voiceConfigurationData,
    output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
SDKController.shared.launch(controller: controller)
```
- **\[WITHOUT TRACKING\]** This call allows launching the functionality
  of the component normally, but events **will not be tracked** to the _tracking_ server:

```java
let controller = VoiceController(
    data: voiceConfigurationData,
    output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
SDKController.shared.launchMethod(controller: controller)
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

## 7. Reception of the result

The controllers will return the required information in SdkResult format. More details in the [Result Return](./Mobile_SDK#6-result-return) section.

### 7.1. Error's management

On the error side, we will have the common _ErrorType_ enum:

```java
public enum ErrorType: Equatable, Error {
    //COMMON - BASIC
    case NO_ERROR
    case UNKNOWN_ERROR
    case OTHER(String)
    
    //COMMON - REQUIREMENTS
    case NO_DATA_ERROR
    case NO_OPERATION_CREATED_ERROR
    case NETWORK_CONNECTION
    
    //COMMON - PERMISSIONS
    case CAMERA_PERMISSION_DENIED
    case MIC_PERMISSION_DENIED
    case LOCATION_PERMISSION_DENIED
    case STORAGE_PERMISSION_DENIED
    
    //COMMON - USER'S INTERACTION
    case CANCEL_BY_USER
    case TIMEOUT
    
    //COMMON - LICENSE ERROR
    case LICENSE_CHECKER_ERROR(String)
    case MISSING_COMPONENT_LICENSE_DATA
    case COMPONENT_LICENSE_ERROR
    case EMPTY_LICENSE
}
```

The errors 'ErrorType.OTHER' and 'ErrorType.LICENSE_CHECKER_ERROR' are special because they also inform of
the error's details.

The _String_ can have this values in the OTHER's case:

```java
enum VoiceError {
    case INTERNAL_ERROR
    case MIC_PERMISSION_DENIED
    case TIMEOUT
    case CANCEL_BY_USER
    
    case VOICE_ENROLLMENT_PARSE_RESPONSE
    case VOICE_MATCHING_PARSE_RESPONSE
}
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

## 8. Component customization

Apart from the changes that can be made at SDK level (which are
explained in the [SDK Customization](./Mobile_SDK#9-sdk-customization)
document), this particular component allows the modification of specific animations, images, fonts, colors and
texts.

To customise the component, ThemeVoiceIDManager.setup(theme: CustomThemeVoiceID() ) must be called before launching the VoiceController:

```java
let voiceController = VoiceController(data: VoiceConfigurationData(), output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
ThemeVoiceIDManager.setup(theme: CustomThemeVoiceID())
SDKController.shared.launch(controller: voiceController)
```

An example of the CustomThemeVoiceID class would be this (must extend ThemeVoiceIDProtocol):

```java
class CustomThemeVoiceID: ThemeVoiceIDProtocol {
    var images: [R.Image: UIImage?] = [R.Image.ic_sdk_close: UIImage(named: "closeIcon")!]

    var colors: [R.Color: UIColor?] = [R.Color.sdkPrimaryColor: UIColor.red]

    var animations: [R.Animation: String] = [:]

    var name: String {
        "custom"
    }

    var fonts: [R.Font: String] = [:]

    var dimensions: [R.Dimension: CGFloat] {
        [.fontBig: 8]
    }
}
```

### 8.1 Images

Images are initialised in the variable images, passing it a dictionary, the key being one of the enumerated ones representing the different images on the screen, and the value being the custom image to be displayed.

```java
case ic_sdk_logo
case ic_sdk_close_arrow
case ic_sdk_check
case ic_sdk_back
case ic_sdk_close
```

### 8.2 Colors

Colors are similarly initialised in the colours variable with a dictionary, with the value being a UIColor of your choice.

```java
// COMMON SDK Colors 
case sdkPrimaryColor
case sdkBackgroundColor
case sdkSecondaryColor
case sdkBodyTextColor
case sdkTitleTextColor
case sdkSuccessColor
case sdkErrorColor
case sdkNeutralColor
case sdkAccentColor
case sdkTopIconsColor
```

### 8.3 Fonts

Fonts are similarly initialized in the `fonts` variable with a dictionary, having as value a **String** with the name of the desired **UIFont**.

```java
case regular
case bold
```

- The size of the texts is similarly initialized in the dimensions variable with a dictionary, having as value a **CGFloat** with the desired size.

### 8.4 Animations

Animations are similarly initialized in the `animations` variable with a dictionary, having as value a **String** with the name of the desired **JSON Lottie**.

```java
case voice_anim_enroll
case voice_anim_enroll_error
case voice_anim_enroll_ok
case voice_anim_intro
```

### 8.5 Texts

The texts can be customized by overriding the value of these keys inside a **Localizable.strings**. The ones with an **_\_alt_** suffix are the accesibility label's needed for the **_voice over_** functionality to work.

```java
"voice_component_success_records_message" = "%d/%d successful recordings";
"voice_component_read_message" = "Say loudly:";
"voice_component_speech_message" = "Speak clearly and close to the microphone";
"voice_component_speech_noisy_message" = "There is too much noise. Try to be in a quiet environment.";
"voice_component_success_message" = "Recording registred";
"voice_component_phrase_generic_error_feedback" = "Please, repeat the sentence.";
"voice_component_phrase_long_silence_feedback" = "Talk for 2 seconds or more.";
"voice_component_phrase_long_reverberation_feedback" = "Too much echo. Try in another environment.";
"voice_component_tip_title" = "Voice Recognition";
"voice_component_tip_desc" = "Speak clearly and aloud\n\nMake sure your surroundings are silent";
"voice_component_tip_button_message" = "START";
"voice_component_exit_alert_question" = "Are you sure you will finish the process?";
"voice_component_exit_alert_accept" = "Accept";
"voice_component_exit_alert_cancel" = "Cancel";
"voice_component_multiple_speakers_error_feedback" = "There are several voices in background. Try to be in a quiet environment";
"voice_component_short_recorded_speech_feedback" = "The recording is too short.";
"voice_component_quality_check_error_feedback" = "The audio quality is very low.";
"voice_component_back_alt" = "Back";
"voice_component_close_alt" = "Close";
"voice_component_logo_alt" = "Logo";
"voice_component_tip_alt"="";
"voice_component_timeout_title"="Time exceeded";
"voice_component_timeout_desc"="We have not been able to identify you. Try again.";
```

Thus, if you want to modify for example the text "_START_" of the key `voice_component_tip_button_message` for the language **en-EN**, you must go to the file **Localizable.strings** in the folder **en-EN.lproj** if it exists (if not, you must create it) and there, add:

`"voice_component_tip_button_message"="BEGIN";`.

If a message is not specified in the language file, it will be filled with the default message.
