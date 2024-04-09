# VideoCall Component

## 1. Introducción

**SDK Mobile** is a set of libraries (**Components**) that provides a set of functionalities and services
a series of functionalities and services, allowing its integration in a Mobile application in a
integration into a Mobile application in a simple and fully scalable way.
scalable. Depending on the use case that is required, certain components must be installed.
Depending on the required use case, certain components must be installed. Its high level of
of modularity means that other new components can be added in the future
new components can be added in the future without affecting those already integrated in the project.
project.

The _Component_ discussed in the current document is called
**_VideoCall Component_**. This is responsible for managing communication
between a user and an agent remotely, through a communication channel
communication. It is mainly oriented for use cases of
video assistance.

For more information on the base configuration, go to the [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>*** section. 

### 1.1 Minimum requirements
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
pod 'FPHISDKVideoCallComponent', '~> 1.5.0'
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

## 4. Use of the component

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

- **_<u>optional</u> data that is normally included within the
   license_**

   - **tenantId**: Tenant identifier that refers to the
     current client, necessary for connection with the service
     video.

   - **url**: Path to the video socket.

   - **apiKey**: ApiKey necessary for the connection with the socket
     video.

---

## 5. Receipt of the result

The controllers will return the required information in SdkResult format
-more details in the [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK's</a>***.	

### 5.1. Receiving errors

On the error side, we will have the VideoCallError class.

 VIDEO_CALL_CANCEL_BY_USER
 VIDEO_CALL_TIMEOUT
 VIDEO_CALL_INTERNAL_ERROR
 VIDEO_CALL_DECODER_ERROR

## 6. Component customization

Apart from the changes that can be made at the SDK level (which
are explained in the **Core Component** document), this component in
Concrete allows the modification of specific texts.

### 6.1 Texts

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

### 6.2 Colors

```java
<!-- VIDEO CALL -->
<color name="colorVideoCallPhoneButtonBackground">#F44336</color>
<color name="colorVideoCallActionsBackground">#30333d</color>
<color name="colorVideoCallCardText">#ffffff</color>
<color name="colorVideoCallButtonBackground">#FF526080</color>
```
