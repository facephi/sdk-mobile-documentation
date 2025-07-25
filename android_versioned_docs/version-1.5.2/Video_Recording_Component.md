# Video Recording Component

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

|                              |                                         |
| ---------------------------- | --------------------------------------- |
| **Controller**               | **Description**                         |
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

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component normally, but internal events will be tracked to
  the _tracking_ server:

```java
SDKController.launch(
    VideoRecordingController(VideoRecordingConfigurationData()) {
        when (it) {
            is SdkResult.Error -> Napier.d("VideoRecording: KO - ${it.error.name}")
            is SdkResult.Success -> Napier.d("VideoRecording OK: ${it.data}")
        }
    }
)
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

```java
SDKController.launchMethod(
    VideoRecordingController(VideoRecordingConfigurationData()) {
        when (it) {
            is SdkResult.Error -> Napier.d("VideoRecording: KO - ${it.error.name}")
            is SdkResult.Success -> Napier.d("VideoRecording OK: ${it.data}")
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

On the error side, we will have the _VideoRecordingError_ class.

```java
val message = when(it.error){
    VideoRecordingError.CANCEL_BY_USER -> "CANCEL_BY_USER"
    is VideoRecordingError.INITIALIZATION_ERROR ->
        "INITIALIZATION_ERROR: ${(it.error as VideoRecordingError.INITIALIZATION_ERROR).error}"
    VideoRecordingError.NETWORK_CONNECTION -> "NETWORK_CONNECTION"
    VideoRecordingError.NO_DATA_ERROR -> "NO_DATA_ERROR"
    VideoRecordingError.PERMISSION_DENIED -> "PERMISSION_DENIED"
    VideoRecordingError.TIMEOUT -> "TIMEOUT"
    VideoRecordingError.UNKNOWN_ERROR -> "UNKNOWN_ERROR"
    VideoRecordingError.VIDEO_ERROR -> "VIDEO_ERROR"
}
```

### 7.1. _Receipt of correct execution - data_

On successful execution, it simply reports that everything went well
with the SdkResult.Success.

---

## 10. Additional Controllers

### 10.1. StopVideoRecordingController

This controller allows stopping a recording in progress.

```java
SDKController.launch(
    StopVideoRecordingController {
        when (it) {
            is SdkResult.Error -> Napier.d(
                "VideoRecording-STOP: KO - ${it.error.javaClass.simpleName}"
            )
            is SdkResult.Success -> Napier.d("VideoRecording-STOP: OK")
        }
    }
)
```
