# Video Id Component

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

The _Component_ discussed in the current document is called
**_VideoID Component_**. This is responsible for recording a
user identifying themselves, showing their face and their identity document.

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
- Currently the FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **mandatory** dependencies that must have been previously installed (adding them to the project's Podfile file) are:

```
   pod 'FPHISDKMainComponent', '~> 1.5.0'
```
- To install the SelphID component, the following entry must be included in the application's Podfile:
```
pod 'FPHISDKVideoIDComponent', '~> 1.5.0'
```
- Once the dependencies are installed, you can use the different functionalities of the component.

- If developing with **xCode15**, a post-installation script must be included:
![Image](/iOS/fix_ldClassic.png)

### 2.2 Permissions and configurations
In the client application where the components are going to be integrated it is necessary to incorporate the following elements in the info.plist file

It is necessary to allow the use of the camera (Privacy - Camera Usage Description).
 
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
| -------------------------- | -------------------------------------------------- |
| VideoIdController          | Video identification main controller      |


---

## 5. Component Configuration

To configure the current component, once initialized, you must
create an object

_VideoIdConfigurationData_ and pass it as a parameter to the SDKController
during component launch.

The following section will show the fields that are part of
this class and what each of them is used for.

### 5.1. Class VideoIdConfigurationData

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

Once the component has been started and a new operation has been created (**section
3**) the SDK components can be launched. There are two ways to launch
the component:

- **\[WITH TRACKING\]** This call allows launching the functionality
   of the component normally, but the events will be tracked
   internal to the _tracking_ server:

```java
let controller = VideoIdController(data: VideoIdConfigurationData, output: output, viewController: viewController)
SDKController.shared.launchMethod(controller: controller)
```

- **\[NO TRACKING\]** This call allows launching the functionality
   of the component normally, but **will not be tracked** any
   event to _tracking_ server:

```java
let controller = VideoIdController(data: VideoIdConfigurationData, output: output, viewController: viewController)
SDKController.shared.launch(controller: controller)
```

The **launch** method should be used **by default**. This method allows
use **_tracking_** if its component is activated, and do not
will be used when it is disabled (or the component is not found
installed).

On the contrary, the **launchMethod** method covers a special case, in
which the integrator has tracking installed and activated, but in a
certain flow within the application you do not want to track information.
In that case, this method is used to prevent that information from being sent.
to the platform.

In the configuration data (EnvironmentVideoIdData) you can also modify:

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

### 7.1 Colors and images
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

### 7.2 Fonts 
Fonts are similarly initialized in the `fonts` variable with a dictionary, having as value a **String** with the name of the desired **UIFont**.
```
case regular
case bold
```

- The size of the texts is similarly initialized in the dimensions variable with a dictionary, having as value a **CGFloat** with the desired size.

### 7.3 Customizing the time between screens
To modify the time spent on each recording screen, the value of the time parameter (in ms) of the EnvironmentVideoIdData must be modified:

`EnvironmentVideoIdData(time = TIME IN MS)`.

It will always be the minimum 5000.

This object will be passed during the setup of the video ID.

### 7.4.4 Texts - Multi-Language
#### 7.4.1 Default language settings
If the package is installed via **SPM**, for text localization to work, the following needs to be added to the **Info.plist** file of the integrator app:

**CFBundleAllowMixedLocalizations = YES**.

It would look like this:

![Image](/iOS/sdkVideo-infoplist-image.png)

- English - Spain

- Spanish - Spain

- Portuguese - Portugal

The language of the component is selected according to the language that the cell phone has set.

- If the language is any language whose root is Spanish (e.g. Spanish - Mexico), by default, it will use Spanish - Spain.

- If the language is any language whose root is Portuguese (e.g. Portuguese - Brazil), by default, it will use Portuguese - Portugal.

- For any other case, English will be used.


#### 7.4.2 Customized Language Configuration
The component allows the customization of texts according to the language, which as in the previous case, will be defined by the language that is selected on the device.

This customization applies to new localizations as well as to the case of the default languages (es, en and pt-PT). It is done through the use of **Localizable.strings.** files.

 

#### 7.4.3 Keys for multi-languages
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

Thus, if you want to modify for example the text "*Finish*" of the key `video_id_finish_button` for the language **es-MX**, you must go to the file **Localizable.strings** in the folder **es-MX.lproj** if it exists (if not, you must create it) and there, add:

`"video_id_finish_button"="Finish";`.

If a message is not specified in the language file, it will be filled with the default message.