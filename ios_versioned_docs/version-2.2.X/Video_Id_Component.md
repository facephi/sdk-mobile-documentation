# Video Id Component

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

The _Component_ discussed in the current document is called
**_VideoID Component_**. This is responsible for recording a
user identifying themselves, showing their face and their identity document.

## 1.1 Minimum requirements

The minimum iOS SDK version required is as follows:

## Minimum iOS version: **13**

## 2. Integration of the component

Before integrating this component, it is recommended to read the
documentation related to:

[Getting Started](./Mobile_SDK)
and follow the instructions in that document.

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
   pod 'FPHISDKMainComponent', '~> 1.5.0'
```

- To install the VideoID component, the following entry must be included in the application's Podfile:

```
pod 'FPHISDKVideoIDComponent', '~> 1.5.0'
```

- Once the dependencies are installed, you can use the different functionalities of the component.

- If developing with **xCode15**, a post-installation script must be included:
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

#### 5.1.1. Basic Configuration

##### sectionTime

Indicates the duration of each of the sections in which the
recording message.

##### showCompletedTutorial

Indicates whether you want to show the complete initial tutorial. If I dont know
will show a progress indicator.

##### mode

- ONLY_FACE: The process is carried out being necessarily only
  showing face.

- FACE_DOCUMENT_FRONT: The process is carried out using both the face and
  the front of the identity document.

- FACE_DOCUMENT_FRONT_BACK: The process is carried out using the face, the
  front of the identity document and the back of the document.

#### 5.1.2 Advanced Configuration

##### url

Path to video socket

##### apiKey

ApiKey required for connection to video socket

##### tenantId

Tenant identifier that refers to the current client,
necessary for connection to the video service.

#### 5.1.3. Other parameters

##### extractionTimeout

Sets the maximum time that the reading can be performed.

##### VibrationEnabled

If the value is set to true, the vibration is activated on errors and if the widget response is OK

---

## 6. Use of the component

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component normally, but internal events will be tracked to
  the _tracking_ server:

```java
let controller = VideoIdController(data: VideoIdConfigurationData, output: output, viewController: viewController)
SDKController.shared.launchMethod(controller: controller)
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

```java
let controller = VideoIdController(data: VideoIdConfigurationData, output: output, viewController: viewController)
SDKController.shared.launch(controller: controller)
```

The **launch** method must be used by **default**. This method allows
**_tracking_** to be used if your component is enabled, and will not use
it when it is disabled (or the component is not installed).

On the other hand, the **launchMethod** method covers a special case, in
which the integrator has tracking installed and activated, but in a
certain flow within the application does not want to track information.
In this case, this method is used to prevent this information from being
sent to the platform.

In the configuration data (VideoIDConfigurationData) you can also modify:

- **sectionTime**: Time that will remain on each screen of the process in ms

- **mode**: Mode that will be applied for recording. The possible VideoIdMode values will be:

- ONLY_FACE: You only have to show your face during the process.

- FACE_DOCUMENT_FRONT: You have to show the face and front of the document.

- FACE_DOCUMENT_FRONT_BACK: You have to show the face, front and back of the document.

- **showCompletedTutorial**: Indicates whether you want to show the complete tutorial of the process or only the simplified version.

- **<u>optional</u> data that is normally included within the license**

- **tenantId**: Tenant identifier that refers to the current client, necessary for the connection to the video service.

- **url**: Path to the video socket.

- **apiKey**: ApiKey required for connection to the video socket.

---

## 7. Reception of the result

The controllers will return the required information in SdkResult
format. More information in the [Getting Started](./Mobile_SDK)

### 7.1. Receipt of errors

On the error side, we will have the _VideoIdError_ class.

```java
NO_DATA_ERROR
TIMEOUT
CANCEL_BY_USER
CANCEL_LAUNCH
NETWORK_CONNECTION
SOCKET_ERROR
VIDEO_ERROR
ACTIVITY_RESULT_ERROR
INITIALIZATION_ERROR -> it.error
UNKNOWN_ERROR
PERMISSION_DENIED
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
case ic_video_id_back_id
case ic_video_id_check
case ic_video_id_close
case ic_video_id_front_id
case ic_video_id_record_back
case ic_video_id_record_face
case ic_video_id_record_front_id_case ic_video_id_user_id
case ic_video_id_user
case intro
```

- The colors are initialized similarly in the colors variable with a dictionary, having as value a UIColor of your choice.

```
case MainBackground
case TitleText
case MessageText
case PrimaryButtonText
case Button
case CheckText
case Primary
```

### 8.2 Fonts

Fonts are similarly initialized in the `fonts` variable with a dictionary, having as value a **String** with the name of the desired **UIFont**.

```
case regular
case bold
```

- The size of the texts is similarly initialized in the dimensions variable with a dictionary, having as value a **CGFloat** with the desired size.

### 8.3 Customizing the time between screens

To modify the time spent on each recording screen, the value of the time parameter (in ms) of the VideoIDConfigurationData must be modified:

`VideoIDConfigurationData(time = TIME IN MS)`.

It will always be the minimum 5000.

This object will be passed during the setup of the video ID.

### 8.4 Texts - Multi-Language

#### 8.4.1 Default language settings

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

#### 8.4.2 Customized Language Configuration

The component allows the customization of texts according to the language, which as in the previous case, will be defined by the language that is selected on the device.

This customization applies to new localizations as well as to the case of the default languages (es, en and pt-PT). It is done through the use of **Localizable.strings.** files.

#### 8.4.3 Keys for multi-languages

The **Localizable.strings** file in the **es.lproj** folder of the component is the following:

```
"video_id_text_waiting_agent_title"="Video grabación";
"video_id_permission_denied"="Permiso denegado";
"video_id_network_connection_error"="Revise su conexión a internet";
"video_id_exit_alert_question"="¿Quieres abandonar la identificación?";
"video_id_exit_alert_exit"="Abandonar";
"video_id_exit_alert_cancel"="Cancelar";
"video_id_exit_alert_ok"="Ok";
"video_id_exit"="Salir";
"video_id_tip_message_face_document"="Coloca tu rostro y el frente de tu documento en las marcas e inicia la grabación";
"video_id_tip_message_only_face"="Coloca tu rostro en las marcas e inicia la grabación";
"video_id_info_message_back"="Ahora coloca el reverso de tu documento en la marca correspondiente"; // DOCUMENTO? DNI?
"video_id_info_message_face_old"="Coloca tu rostro y en voz alta di los datos de tu domicilio y nombre completo";
"video_id_finish_message"="¡Videograbación finalizada!";
"video_id_finish_button"="Finalizar";
"video_id_record_retry_button"="Repetir grabación";
"video_id_record_init_button"="Iniciar grabación";
"video_id_ready_button"="CONTINUAR";
"video_id_generic_error"="Ha habido un error en la grabación";
"video_id_tip_info_message"="En la parte inferior de la pantalla aparecerán las instrucciones y el tiempo para llevar a cabo la grabación";
"video_id_face_instructions"="Ahora en voz alta di \"Yo (nombre y apellidos)  acepto los términos y condiciones\".";
"video_id_face_document_instructions"="Coloca tu rostro y el frente de tu documento en las marcas";

```

Thus, if you want to modify for example the text "_Finish_" of the key `video_id_finish_button` for the language **es-MX**, you must go to the file **Localizable.strings** in the folder **es-MX.lproj** if it exists (if not, you must create it) and there, add:

`"video_id_finish_button"="Finish";`.

If a message is not specified in the language file, it will be filled with the default message.
