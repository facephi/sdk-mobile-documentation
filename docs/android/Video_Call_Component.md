# Video Call Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (Components) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Depending on the use
case that is required, certain components must be installed. Its high
level of modularity allows other new components to be added in the
future without affecting those already integrated in the project.

For more information on the base configuration, go to the
<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">Mobile SDK</a> section.

---

## 1. Introduction

The component discussed in the current document is called VideoCall
Component. It is in charge of managing the communication between a user
and an agent remotely, through a communication channel. It is mainly
oriented to video assistance use cases.

---

## 2. Integration of the component

Before integrating this component, it is recommended to read the
documentation related to:

<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
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
  implementation "com.facephi.androidsdk:videocall_component:$sdk_videocall_component_version"
  ```

---

## 3. Start new operation

When you want to perform a specific operation, in order to generate the
associated information correctly in the platform, the **newOperation**
command must first be executed.

This command must have been executed **prior to launch**.

To learn more about how to start a new operation, it is recommended to
consult the <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
documentation, which details and explains what this process consists of.

---

## 4. Available controllers

| **Controller**      | **Description**           |
| ------------------- | ------------------------- |
| VideoCallController | Videocall main controller |

## 5. Component configuration

To configure the current component, once it has been initialised, a
_VideoCallConfigurationData_ object must be created and passed as a
parameter to the SDKController when the component is launched.

The following section will show the fields that are part of this class
and what each of them is used for.

### 5.1. Class VideoCallConfigurationData

The fields included in the configuration, normally **do not need to be
reported** as they are filled internally through the licence used.

These fields are usually reported only when the server is **OnPremise**.

#### 5.1.1. url

Path to the video socket

#### 5.1.2. apiKey

ApiKey needed for connection to the video socket

#### 5.1.3. tenantId

Tenant identifier referring to the current client, required for the
connection to the video service.

---

## 6. Component use

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component normally, but internal events will be tracked to
  the _tracking_ server:

```java
SDKController.launch(
    VideoCallController(VideoCallConfigurationData()) {
        when (it) {
            is SdkResult.Error -> Napier.d("VideoCall: ERROR - ${it.error.name}")
            is SdkResult.Success -> Napier.d("VideoCall: OK - ScreenSharing: ${it.data.sharingScreen}")
        }
    }
)
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

```java
SDKController.launchMethod(
    VideoCallController(VideoCallConfigurationData()) {
        when (it) {
            is SdkResult.Error -> Napier.d("VideoCall: ERROR - ${it.error.name}")
            is SdkResult.Success -> Napier.d("VideoCall: OK - ScreenSharing: ${it.data.sharingScreen}")
        }
    }
)
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

On the error side, we will have the _VideoCallError_ class.

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
```

### _7.1. Receipt of correct execution - data_

On successful execution, it simply reports that everything went well
with the SdkResult.Success.

---

## 8. Screen sharing

The screen sharing functionality can be executed using the _VideoCallScreenSharingManager_ class. 
With it, it is possible to start and end the screen sharing as well as to collect the states in which it is.

```java
val videoCallScreenSharingManager = VideoCallScreenSharingManager(
            SdkApplication(application)
        )

videoCallScreenSharingManager.setOutput { state ->
            Napier.d("SCREEN SHARING STATE: ${state.name}")
        }
```

The possible states are:

```java
    AGENT_HANGUP,
    PERMISSION_ERROR,
    UNKNOWN_ERROR,
    SHARING,
    FINISH
```

Where SHARING indicates that the screen is being recorded and FINISH indicates that the process has finished.

If you want to enable the screen sharing option, the video call driver must be launched with the _activateScreenSharing_ flag of its active configuration. The output of the video call launch will indicate whether the user has requested screen sharing with the _sharingScreen_ flag.

```java
SDKController.launch(
    VideoCallController(VideoCallConfigurationData(activateScreenSharing = true)) {
         when (it) {
              is SdkResult.Error -> {
                    Napier.d("VideoCall: ERROR - ${it.error.name}")
              }

              is SdkResult.Success -> {
                      Napier.d("VideoCall: OK - ScreenSharing: ${it.data.sharingScreen}")
                      if (it.data.sharingScreen) {
                          videoCallScreenSharingManager.startScreenSharingService()
                      }
                   }
              }
        }
    )
```

To start and end screen sharing in the call:

```java
// START
videoCallScreenSharingManager.startScreenSharingService()

// STOP
videoCallScreenSharingManager.stopScreenSharingService()
```

---

## 9. Customizing the component

Apart from the changes that can be made at SDK level (which are
explained in the <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
document), this particular component allows the modification of specific
texts.

### 9.1. Texts

If you want to modify the SDK texts, you would have to include the
following XML file in the client application, and modify the value of
each String to the desired one.

```java
    <string name="video_call_text_waiting_agent_title">Connecting with an assistant…</string>
    <string name="video_call_agent">Agent</string>
    <string name="video_call_exit">Exit</string>
    <string name="video_call_text_finish">Video assistance is complete</string>
    <string name="video_call_accesibility_phone">Phone</string>
    <string name="video_call_restart">Repeat recording</string>

```

### 9.2. Colors

```java
<color name="colorVideoCallActionsBackground">#30333d</color>
<color name="colorVideoCallButtonBackground">#FF526080</color>
```
