# Video Call Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (**Components**) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Depending on the use
case that is required, certain components must be installed. Its high
level of modularity allows other new components to be added in the
future without affecting those already integrated in the project.

For more information on the base configuration, go to the
[Getting Started](./Mobile_SDK) section.

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
  implementation "com.facephi.androidsdk:videocall_component:$sdk_videocall_component_version"
  ```

---

## 3. Start new operation

When you want to perform a specific operation, in order to generate the
associated information correctly in the platform, the **newOperation**
command must first be executed.

This command must have been executed **prior to launch**.

To learn more about how to start a new operation, it is recommended to
consult the [Getting Started](./Mobile_SDK)
documentation, which details and explains what this process consists of.

---

## 4. Available controllers

|                     |                           |
| ------------------- | ------------------------- |
| **Controller**      | **Description**           |
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
            is SdkResult.Error -> Napier.d("VideoCall: KO - ${it.error.name}")
            is SdkResult.Success -> Napier.d("VideoCall OK: ${it.data}")
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
            is SdkResult.Error -> Napier.d("VideoCall: KO - ${it.error.name}")
            is SdkResult.Success -> Napier.d("VideoCall OK: ${it.data}")
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
val message = when(it.error){
    is VideoCallError.ACTIVITY_RESULT_ERROR -> it.error.name
    is VideoCallError.CANCEL_BY_USER -> it.error.name
    is VideoCallError.INITIALIZATION_ERROR -> it.error.name
    is VideoCallError.NETWORK_CONNECTION -> it.error.name
    is VideoCallError.NO_DATA_ERROR -> it.error.name
    is VideoCallError.TIMEOUT -> it.error.name
    is VideoCallError.VIDEO_ERROR -> it.error.name
}
```

### _7.1. Receipt of correct execution - data_

On successful execution, it simply reports that everything went well
with the SdkResult.Success.

---

## 8. Customizing the component

Apart from the changes that can be made at SDK level (which are
explained in the [Getting Started](./Mobile_SDK)
document), this particular component allows the modification of specific
texts.

### 8.1. Texts

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

### 8.2. Colors

```java
<color name="colorVideoCallActionsBackground">#30333d</color>
<color name="colorVideoCallButtonBackground">#FF526080</color>
```
