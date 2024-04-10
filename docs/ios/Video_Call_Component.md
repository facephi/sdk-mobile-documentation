# VideoCall Component

## 0. Requisitos base de SDK Mobile

**SDK Mobile** es un conjunto de librerías (**Componentes**) que ofrece
una serie de funcionalidades y servicios, permitiendo a su vez su
integración en una aplicación Mobile de forma sencilla y totalmente
escalable. Dependiendo del caso de uso que se requiera, se deberá
realizar la instalación de unos determinados componentes. Su alto nivel
de modularidad permite que, en un futuro, se puedan añadir otros
componentes nuevos sin afectar en absoluto a los ya integrados en el
proyecto.

Para más información sobre la configuración base, vaya a la sección de [1.5.X][ES] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>***.


## 1. Introduction

The component discussed in the current document is called VideoCall Component. It is in charge of managing the communication between a user and an agent remotely. It is mainly oriented for video assistance use cases.

## 1.1 Minimum requirements
The minimum iOS SDK version required is the following:

Minimum iOS version: **13**

---

## 2. Integración del componente

Antes de integrar este componente se recomienda leer la documentación relativa a [1.5.X][ES] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>*** y seguir las instrucciones indicadas en dicho documento.

En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. Dependencies required for integration

In order to avoid conflicts and compatibility problems, in case you want to
to install the component in a project containing an old version of the Facephi libraries (_Widgets_), these must be removed by
of the Facephi libraries (_Widgets_), these must be completely removed before the installation of the Facephi components.
completely before the installation of the components of the
**_SDKMobile_** components.

#### Cocoapods
- Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **mandatory** dependencies that must have been previously installed (by adding them in the Podfile file of the project) are:

```
  pod 'FPHISDKMainComponent', '~> 1.5.0', '~> 1.5.0'.
```
- To install the SelphID component, the following entry must be included in the application Podfile:
```
  pod 'FPHISDKVideoCallComponent', '~> 1.5.0', '~> 1.5.0' 
```
- Once the dependencies are installed, the different functionalities of the component can be used.

- In case of development with **xCode15** a post-installation script must be included:
![Image](/iOS/fix_ldClassic.png)

### 2.2 Permissions and configurations
In the client application where the components are going to be integrated it is necessary to incorporate the following elements in the info.plist file

It is necessary to allow the use of the camera (Privacy - Camera Usage Description).
 
---

## 3. Start new operation

When you want to perform a certain operation, to generate the associated information correctly on the platform, the **newOperation** command must be previously executed.

This command must have been run **prior to launching the component**.

To learn more about how to start a new operation, it is recommended to consult the documentation for [1.5.X][ES] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>***, which details and explains what this process consists of.

---

## 4. Available controllers

| **Controllers**     | **Description**                       |
| ------------------- | ------------------------------------- |
| VideoCallController | VideoCall main controller |

---

## 5. Component configuration

To configure the current component, once it has been initialised, you must create a

_VideoCallConfigurationData_ object and pass it as parameter to the SDKController
during the component launch.

The following section will show the fields that are part of this class and what each one is used for.
this class and what each of them is used for.

### 5.1. Class VideoCallConfigurationData

The fields included in the configuration, normally **do not need to be
be reported** as they are filled internally through the license used.
licence used.


#### 5.1.1. Basic Configuration

##### activateScreenSharing

Activate the screen sharing option in the call.

#### 5.1.2. Advanced Settings


#### 5.1.2.1. url

Path to video socket

#### 5.1.2.2 apiKey

ApiKey needed for the connection to the video socket

#### 5.1.2.3 tenantId

Tenant identifier referring to the current client,
required for the connection to the video service.

#### 5.1.3. Other parameters

##### VibrationEnabled
If set to true, vibration is enabled on errors and if the widget response is OK.

---

## 6. Use of the component

Once the component has been started and a new operation has been created (**section
3**) the SDK components can be launched. There are two ways to launch
the component:

- **\[WITH TRACKING\]** This call allows launching the functionality
   of the component normally, but **the events will be tracked**
   internal to the _tracking_ server in the event that the component
   tracking is installed and active:

```java
SDKController.launchMethod(
     VideoCallController(EnvironmentVideoCallData()) {
         when (it.finishStatus) {
             FinishStatus.STATUS_OK -> {
                 //VideoCall OK
             }
             FinishStatus.STATUS_ERROR -> //VideoCall OK: it.errorType.name
         }
     }
)
```

- **\[NO TRACKING\]** This call allows launching the functionality
   of the component normally, but **will not be tracked** any
   event to the _tracking_ server in case the
   tracking:

   ```java
   SDKController.launch(
       VideoCallController(EnvironmentVideoCallData()) {
           when (it.finishStatus) {
               FinishStatus.STATUS_OK -> {
                   //VideoCall OK
               }
               FinishStatus.STATUS_ERROR -> //VideoCall OK: it.errorType.name
           }
       }
   )
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

The configuration data (`EnvironmentVideoCallData`) also contains
They will be able to modify:

- **_<u>optional</u> data that is normally included within the license_**

   - **tenantId**: Tenant identifier that refers to the
     current client, necessary for connection with the service
     video.

   - **url**: Path to the video socket.

   - **apiKey**: ApiKey necessary for the connection with the socket
     video.

---

 ### Example configuration

```
  log("LAUNCH VIDEO CALL")
  
  let videocallController = VideoCallController(data: EnvironmentVideoCallData(
                                                          url: "Enter URL",
                                                          apikey: "Enter the ApiKey",
                                                          tenantId: "Enter the tenantId"),
                                                output: output, viewController: viewController)
  SDKController.shared.launchMethod(controller: videocallController)
```


#### IMPORTANT
The values are assigned by default. **ONLY** must be configured in case of using an external platform to the one provided by Facephi, within the licence.

## 7. Receipt of the result

The controllers will return the required information in SdkResult format
-more details in the [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK's</a>***.	

### 7.1. Receiving errors

On the error side, we will have the VideoCallError class.

 VIDEO_CALL_CANCEL_BY_USER
 VIDEO_CALL_TIMEOUT
 VIDEO_CALL_INTERNAL_ERROR
 VIDEO_CALL_DECODER_ERROR

### 7.2. Receiving successful execution - _data_

On successful execution, simply report that everything went well with the SdkResult.Success.
with the SdkResult.Success.

When the result is Success and the _sharingScreen_ flag is active, screen sharing can be enabled.

---

## 8. Customizing the component

To customise the component, ThemeVideoCallManager.setup(theme:CustomThemeVideoCall() ) must be called after initialising the videocallController:

```
let videocallController = VideoCallController(data: EnvironmentVideoCallData(), output: output, viewController: viewController)
ThemeVideoCallManager.setup(theme: CustomThemeVideoCall())
SDKController.shared.launch(controller: videocallController)
```

An example of the CustomThemeVideoCall class would be this (must implement ThemeVideoCallProtocol):


```
class CustomThemeVideoCall: ThemeVideoCallProtocol {
    var images: [R.Image: UIImage?] = [:]
    
    var colours: [R.Color: UIColor?] = [R.Color.TitleText: UIColor.red] = [R.Color.TitleText: UIColor.red].
    
    var animations: [R.Animation: String] = [:] var animations: [R.Animation: String] = [:]
    
    var name: String {
        "custom"
    }
    
    var fonts: [R.Font: String] = [:] var fonts: [R.Font: String] = [:] var font: [R.Font: String] = [:]
    
    var dimensions: [R.Dimension: CGFloat] {
        [.fontBig: 8]
    }
}
```

### 8.1 Colours and images
Images are initialised in the variable images , passing it a dictionary, the key being one of the enumerated ones representing the different images on the screen, and the value being the custom image to be displayed.
```
case close
```
Colours are similarly initialised in the colours variable with a dictionary, with the value being a UIColor of your choice.
```
case ButtonBackground
case ButtonBackgroundDisabled
case CardBackground
case CardText
case MainBackground
case PhoneButtonBackground
case Primary
case TitleText
```

### 8.2 Fonts 
Fonts are initialised similarly in the fonts variable with a dictionary, having as value a String with the name of the desired UIFont.
```
case regular
case bold
```

The animations to be used are similarly initialised in the animations variable with a dictionary, having as value a String with the name of the animation found in the xcassets to be used.
```
case phone_calling
```
The size of the texts is initialised similarly in the dimensions variable with a dictionary, having as value a CGFloat with the desired size.

### 8.3 Texts

If you want to modify the SDK texts, you would have to include the
following XML file in the client application, and modify the value
of each _String_ by the desired one.

```java
 <!-- VIDEO CALL -->
    <string name="video_call_text_waiting_agent_title">Connecting with an assistant…</string>
    <string name="video_call_agent">Agent</string>
    <string name="video_call_exit_alert_title">Cancel process</string>
    <string name="video_call_exit_alert_question">Are you sure you want to leave the video assistance?</string>
    <string name="video_call_exit_alert_exit">Quit</string>
    <string name="video_call_exit_alert_cancel">Cancel</string>
    <string name="video_call_exit">Exit</string>
    <string name="video_call_network_connection_error">Check your internet connection.</string>
    <string name="video_call_image_description">Phone</string>
    <string name="video_call_text_finish">Video assistance is complete</string>
    <string name="video_call_text_finish_button">Exit</string>
    <string name="video_call_accesibility_phone">Phone</string>
```

### 8.4 Colors

```java
<!-- VIDEO CALL -->
<color name="colorVideoCallPhoneButtonBackground">#F44336</color>
<color name="colorVideoCallActionsBackground">#30333d</color>
<color name="colorVideoCallCardText">#ffffff</color>
<color name="colorVideoCallButtonBackground">#FF526080</color>
```