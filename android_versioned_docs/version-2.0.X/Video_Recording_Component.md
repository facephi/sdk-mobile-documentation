# Video Recording Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (Components) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Depending on the use
case that is required, certain components must be installed. Its high
level of modularity allows other new components to be added in the
future without affecting those already integrated in the project.

For more information on the base configuration, go to the
[Getting Started](./Mobile_SDK) section.

---

## 1. Introduction

The _Component_ discussed in the current document is called
**_VideoRecording Component_**. It is responsible for capturing the
screen of the device in the background. It is mainly oriented towards
the recording of the onboarding process.

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
  implementation "com.facephi.androidsdk:video_recording_component:$sdk_video_recording_component_version"
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

| **Controller**               | **Description**                         |
| ---------------------------- | --------------------------------------- |
| VideoRecordingController     | VideoRecording main controller          |
| StopVideoRecordingController | Controller to stop the video recording. |

---

## 5. Component configuration

To configure the current component, once it has been initialised, a
VideoRecordingConfigurationData object must be created and passed as a
parameter to the SDKController when the component is launched.

The following section will show the fields that are part of this class
and what each of them is used for.

### 5.1. Class VideoRecordingConfigurationData

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

### 6.1 Start recording

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched.

Recording controllers shall return statuses to indicate the progress of the process.

There are two ways to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component normally, but internal events will be tracked to
  the _tracking_ server:

```java
val controller = VideoRecordingController(VideoRecordingConfigurationData())
viewModelScope.launch {
    controller.stateFlow.collect {
        Napier.d("APP: VIDEO RECORDING STATE (start): ${it.name}")
    }
}
viewModelScope.launch {
    SDKController.launch(controller)
}
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

```java
val controller = VideoRecordingController(VideoRecordingConfigurationData())
viewModelScope.launchMethod {
    controller.stateFlow.collect {
        Napier.d("APP: VIDEO RECORDING STATE (start): ${it.name}")
    }
}
viewModelScope.launch {
    SDKController.launch(controller)
}
```

The **launch** method must be used by **default**. This method allows
**_tracking_** to be used if your component is enabled, and will not use
it when it is disabled (or the component is not installed).

On the other hand, the **launchMethod** method covers a special case, in
which the integrator has tracking installed and activated, but in a
certain flow within the application does not want to track information.
In this case, this method is used to prevent this information from being sent to the platform.

### 6.2 Stop recording

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched.

Recording controllers shall return statuses to indicate the progress of the process.

There are two ways to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component normally, but internal events will be tracked to
  the _tracking_ server:

```java
val controller = StopVideoRecordingController()
viewModelScope.launch {
    controller.stateFlow.collect {
        Napier.d("APP: VIDEO RECORDING STATE (stop): ${it.name}")
    }
}
viewModelScope.launch {
    SDKController.launch(controller)
}
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

```java
val controller = StopVideoRecordingController()
viewModelScope.launchMethod {
    controller.stateFlow.collect {
        Napier.d("APP: VIDEO RECORDING STATE (stop): ${it.name}")
    }
}
viewModelScope.launch {
    SDKController.launch(controller)
}
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

The evolution of the process shall be indicated by statuses:

Recording controllers shall return statuses to indicate the evolution of the process:

```java
    AGENT_HANGUP,
    FINISH,
    SHARING,
    INITIALIZATION_ERROR,
    NETWORK_CONNECTION_ERROR,
    PERMISSION_ERROR,
    VIDEO_ERROR,
    SOCKET_ERROR,
    UNKNOWN_ERROR,
```

Where SHARING indicates that the screen is being recorded and FINISH indicates that the process is finished.

---
