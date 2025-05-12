# Video Id Component

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

The _Component_ discussed in the current document is called
**_VideoID Component_**. This is responsible for recording a
user identifying themselves, showing their face and their identity document.

## 1.1 Minimum requirements

The minimum iOS SDK version required is as follows:

## Minimum iOS version: **13**

## 2. Integration of the component

<div class="warning">
<span class="warning">:warning:</span>
Before integrating this component, it is recommended to read the
documentation related to [Initial Integration](./Mobile_SDK#2-initial-integration) and follow its instructions.
</div>

This section will explain step by step how to integrate the current
component into an existing project.

### 2.1. Dependencies required for integration

In order to avoid conflicts and compatibility problems, in case you want to
install the component in a project containing an old version of the Facephi libraries.
of the Facephi libraries (_Widgets_), these must be completely removed before the installation of the components.
completely before the installation of the components of the **_SDKMobile_** components.

#### Cocoapods

- Currently the FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **mandatory** dependencies that must have been previously installed (adding them to the project's Podfile file) are:

```
pod 'FPHISDKMainComponent', '~> 2.3.0'
```

- To install the VideoID component, the following entry must be included in the application's Podfile:

```
pod 'FPHISDKVideoIDComponent', '~> 2.3.0'
```

- Once the dependencies are installed, you can use the different functionalities of the component.

- If developing with **XCode15**, a post-installation script must be included:

![Image](/ios/fix_ldClassic.png)

### 2.2 Permissions and configurations

In the client application where the components are going to be integrated it is necessary to incorporate the following elements in the info.plist file

It is necessary to allow the use of the camera (Privacy - Camera Usage Description).

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

| **Controller**             | **Description**                         |
| -------------------------- | --------------------------------------- |
| VideoIdController          | Video identification main controller    |
| SignatureVideoIdController | Driver to sign a process with a Capture |

---

## 5. Component configuration

To configure the current component, once it has been initialised, a
_VideoIdConfigurationData_ object must be created and passed as a
parameter to the SDKController when the component is launched.

The following section will show the fields that are part of this class
and what each of them is used for.

### 5.1. Class VideoIdConfigurationData

The fields included in the configuration **(url, apiKey, tenantId)**,
usually **do not need to be reported** as they are filled internally
through the license used.

These fields are usually **reported only** when the server is
**OnPremise**.

#### 5.1.1. url

Path to the video socket

#### 5.1.2. apiKey

ApiKey needed for connection to the video socket

#### 5.1.3. tenantId

Tenant identifier referring to the current client, required for the
connection to the video service.

#### 5.1.4. sectionTime

Indicates the duration of sections with associated time (facial capture and camera change).

#### 5.1.5. mode

- ONLY_FACE: process is necessarily performed by showing only the
  face.

- FACE_DOCUMENT_FRONT: The process is performed using both the face
  and the front of the identity document.

- FACE_DOCUMENT_FRONT_BACK: The process is performed using the face,
  the front of the identity document and the back of the document.

#### 5.1.6. timeoutServerConnection

Maximum timeout in ms for server response.

#### 5.1.7. sectionTimeout

Maximum time allowed to complete a section (in ms).

#### 5.1.8. autoFaceDetection

Enables/Disables automatic face detection.

#### 5.1.9. debug

Enables the display of additional information useful for the diagnosis and monitoring of internal behaviour.

#### 5.1.10. countryFilter

It allows to restrict processing to a specific set of countries by accepting an array of strings representing the aliases in ISO3 format (3-letter code according to ISO 3166-1 standard). 

#### 5.1.11. documentFilter

Allows to restrict the types of documents accepted during capture. Possible values are:

- "IDC": ID Card
- "PSP": Passport
- "DLI": Driver License
- "VIS": Visa
- "FOC": Foreign Card
- "INV": Invoice
- "CUS": Custom Document

#### 5.1.12. speechText

Text to be spoken by the user during the recording of the video.

#### 5.1.13. showCompletedTutorial

Indicates whether you want to show the complete initial tutorial. If I dont know will show a progress indicator.

#### 5.1.14. vibrationEnabled

If the value is set to true, the vibration is activated on errors and if the widget response is OK

#### 5.1.15. maximumRetries

Maximum retries allowed with each operation. Default value is 3.

---

## 6. Use of the component

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows launching the functionality
  of the component normally, and **the internal events will be tracked** to the _tracking_ server:


```java
let controller = VoiceController(
    data: videoIdConfigurationData,
    output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
SDKController.shared.launch(controller: controller)
```
- **\[WITHOUT TRACKING\]** This call allows launching the functionality
  of the component normally, but events **will not be tracked** to the _tracking_ server:

```java
let controller = VideoIdController(data: VideoIdConfigurationData, output: output, viewController: viewController)
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

### 7.1. Receipt of errors

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
}
```

The errors 'ErrorType.OTHER' and 'ErrorType.LICENSE_CHECKER_ERROR' are special because they also inform of
the error's details.

The _String_ can have this values in the OTHER's case:

```java
public enum VideoIdError: String {
    case SOCKET_URL_IS_NOT_VALID
    case MISSING_DOCUMENT_READER_RESOURCES
    case NO_FACE_DETECTED
}
```

---

## 8. Customizing the component

To customize the component, ThemeVideoIdManager.setup(theme:`CustomThemeVideoId()` ) must be called after initializing the videoIdController:

```
let videoidController = VideoIdController(data: data, output: output, viewController: viewController)
ThemeVideoIdManager.setup(theme: CustomThemeVideoId())
SDKController.launchVideoId(controller: videoidController)
```

An example of the CustomThemeVideoId class would be this (you must implement ThemeVideoIdProtocol):

```
class CustomThemeVideoId: ThemeVideoIdProtocol {
     var images: [R.Image: UIImage?] = [:]

     var colors: [R.Color: UIColor?] = [R.Color.MessageText: UIColor.red]

     // var animations: [R.Animation: String] = [:]

     var name: String {
         "custom"
     }

     var fonts: [R.Font: String] = [:]

     var dimensions: [R.Dimension: CGFloat] {
         [.fontBig: 8]
     }
}
```

### 8.1 Colors and images

- The images initialize in the variable images , passing it a dictionary, being the key one of the enumerated ones that represent the different images of the screen, and the value the customized image to be shown.

```
case ic_sdk_close_arrow
case ic_sdk_close
case ic_video_id_back_id
case ic_video_id_check
case ic_video_id_front_id
case ic_video_id_logo
case ic_video_id_record_back
case ic_video_id_record_face
case ic_video_id_record_front
case ic_video_id_user
case ic_video_id_micro
case ic_video_id_camera_switch
case ic_video_id_camera_switch_mask
case ic_video_id_record_back_detected
case ic_video_id_record_face_detected
case ic_video_id_record_front_detected
case ic_video_id_no_face_detected
case ic_video_id_timeout
```

- The colors are initialized similarly in the colors variable with a dictionary, having as value a UIColor of your choice.

```
case sdkPrimaryColor
case sdkBackgroundColor
case sdkSecondaryColor
case sdkBodyTextColor
case sdkTitleTextColor
case sdkSuccessColor
case sdkErrorColor
case sdkNeutralColor
case sdkAccentColor
case sdkTopIconsVideoColor
case sdkTopIconsColor
```

### 8.2 Fonts

Fonts are similarly initialized in the `fonts` variable with a dictionary, having as value a **String** with the name of the desired **UIFont**.

```
case regular
case bold
```

- The size of the texts is similarly initialized in the dimensions variable with a dictionary, having as value a **CGFloat** with the desired size.

### 8.3 Animations

Animations are similarly initialized in the `animations` variable with a dictionary, having as value a **String** with the name of the desired **JSON Lottie**.

```
case video_id_anim_doc_and_face
case video_id_anim_face
case video_id_anim_loading
case video_id_anim_diagnostic_success
case video_id_anim_diagnostic_error
```

### 8.4 Customizing the time between screens

To modify the time spent on each recording screen, the value of the time parameter (in ms) of the VideoIDConfigurationData must be modified:

`VideoIDConfigurationData(...,sectionTime: TIEMPO EN MS,...)`

The minimum supported is 5000ms.

### 8.5 Texts - Multi-Language

#### 8.5.1 Default language settings

If the package is installed via **SPM**, for text localization to work, the following needs to be added to the **Info.plist** file of the integrator app:

**CFBundleAllowMixedLocalizations = YES**.

It would look like this:

![Image](/ios/sdkVideo-infoplist-image.png)

- English - Spain

- Spanish - Spain

- Portuguese - Portugal

The language of the component is selected according to the language that the cell phone has set.

- If the language is any language whose root is Spanish (e.g. Spanish - Mexico), by default, it will use Spanish - Spain.

- If the language is any language whose root is Portuguese (e.g. Portuguese - Brazil), by default, it will use Portuguese - Portugal.

- For any other case, English will be used.

#### 8.5.2 Customized Language Configuration

The component allows the customization of texts according to the language, which as in the previous case, will be defined by the language that is selected on the device.

This customization applies to new localizations as well as to the case of the default languages (es, en and pt-PT). It is done through the use of **Localizable.strings.** files.

#### 8.5.3 Keys for multi-languages

The **Localizable.strings** file in the **es.lproj** folder of the component is the following:

```
"video_id_component_init_message_face_docu_content_desc"="Place your face and the front of your document within the frame";
"video_id_component_init_message_face_content_desc"="Place your face within the frame and start recording";
"video_id_component_finish_message"="Video recording finished!";
"video_id_component_finish_button"="FINISH";
"video_id_component_restart"="REPEAT RECORDING";
"video_id_component_ready_button"="CONTINUE";
"video_id_component_first_message"="Place your face and the front of your document within the frame";
"video_id_component_second_message"="Place your face and the back of your document within the frame";
"video_id_component_third_message"="Now please say out loud \"I (name and surname) accept the terms and conditions\".";
"video_id_component_exit_alert_question" = "Are you sure you will finish the process?";
"video_id_component_exit_alert_cancel"="Cancel";
"video_id_component_exit_alert_finish" = "Finish";
"video_id_component_exit_alert_accept" = "Accept";
"video_id_component_timeout_title"="Time exceeded";
"video_id_component_timeout_desc"="We couldn't make the recording in time. Let's try again.";
"video_id_component_unknown_title"="An error has occurred";
"video_id_component_unknown_desc"="Let's try again.";
"video_id_component_close_alt" = "Close";
"video_id_component_back_alt" = "Back";
"video_id_component_logo_alt" = "Logo";
"video_id_component_document_front_message" = "Place the front of your document on the marks";
"video_id_component_document_front_message_readable" = "Keep the front of your document on the marks";
"video_id_component_document_front_message_not_readable" = "Move the front of your document closer to the marks";
"video_id_component_document_back_message" = "Now place the back of your document";
"video_id_component_document_back_message_readable" = "Keep the back of your document on the markings";
"video_id_component_document_back_message_not_readable" = "Move the back of your document closer to the markings";
"video_id_component_switch_camera_message" = "Prepare your document while switching camera";
"video_id_component_first_message_face" = "Place your face inside the frame";
"video_id_component_first_message_multiple_face" = "Multiple faces detected. Place only your face inside the frame";
"video_id_component_speech_message" = "Jo (nom i cognoms) accepto els termes i condicions";
"video_id_component_speech_say_out_loud" = "Digues en veu alta: ";
"video_id_component_front_document_captured" = "Front of document captured correctly";
"video_id_component_document_back_message_finish" = "Back of document captured correctly";
"video_id_component_face_timeout_title" = "Face not detected";
"video_id_component_face_timeout_desc" = "Please place your face on the check mark to start the process";
```

Thus, if you want to modify for example the text "_Finish_" of the key `video_id_finish_button` for the language **es-MX**, you must go to the file **Localizable.strings** in the folder **es-MX.lproj** if it exists (if not, you must create it) and there, add:

`"video_id_finish_button"="Finish";`.

If a message is not specified in the language file, it will be filled with the default message.
