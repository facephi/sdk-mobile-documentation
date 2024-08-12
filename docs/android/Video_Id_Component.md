# Video Id Component

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

The Component discussed in the current document is called VideoID
Component. It is responsible for the recording of a user identifying
himself, showing his face and his identity document.

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
  implementation "com.facephi.androidsdk:video_id_component:$sdk_videoid_component_version"
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
through the licence used.

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

Indicates the duration of each of the sections in which the recording
message is displayed.

#### 5.1.5. mode

- ONLY_FACE: process is necessarily performed by showing only the
  face.

- FACE_DOCUMENT_FRONT: The process is performed using both the face
  and the front of the identity document.

- FACE_DOCUMENT_FRONT_BACK: The process is performed using the face,
  the front of the identity document and the back of the document.

#### 5.1.6. showCompletedTutorial

Indicates if you want to show the complete initial tutorial. If not, a
progress indicator will be shown.

---

## 6. Component use

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component normally, but internal events will be tracked to
  the _tracking_ server:

```java
val result = SDKController.launch(
    VideoIdController(VideoIdConfigurationData())
)
when (it) {
    is SdkResult.Error -> Napier.d("VideoId: ERROR - ${result.error.name}")
    is SdkResult.Success -> Napier.d("VideoId OK: ${result.data}")
}
```

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component normally, but **no event will be
  tracked** to the _tracking_ server:

```java
val result = SDKController.launchMethod(
    VideoIdController(VideoIdConfigurationData())
)
when (it) {
    is SdkResult.Error -> Napier.d("VideoId: ERROR - ${result.error.name}")
    is SdkResult.Success -> Napier.d("VideoId OK: ${result.data}")
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

The controllers will return the required information in SdkResult
format. More information in the Android Mobile SDK's <a
href="Mobile_SDK#6-result-return"
rel="nofollow">6. Result return</a> section.

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

### 7.2. Receipt of correct execution - data\_

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

```xml
    <string name="video_id_component_text_waiting_agent_title">Video ID</string>
    <string name="video_id_component_first_message">Place your face and the front of your document within the frame</string>
    <string name="video_id_component_init_message_face_content_desc">Place your face in front of the camera and start recording</string>
    <string name="video_id_component_init_message_face_docu_content_desc">Place your face and your document in front of the camera and start recording</string>
    <string name="video_id_component_second_message">Now place the back of your document</string>
    <string name="video_id_component_third_message">Now please say out loud "I (name and surname) accept the terms and conditions".</string>
    <string name="video_id_component_finish_message">Video recording finished!</string>
    <string name="video_id_component_record_init_button">Start recording</string>
    <string name="video_id_component_ready_button">Ready</string>
    <string name="video_id_component_first_message_face">Place your face within the frame</string>
    <string name="video_id_component_restart">Repeat recording</string>
    <string name="video_id_component_timeout_title">Time exceeded</string>
    <string name="video_id_component_timeout_desc">We apologize. The capture could not be made</string>
    <string name="video_id_component_internal_error_title">There was a technical problem</string>
    <string name="video_id_component_internal_error_desc">We apologize. The capture could not be made</string>

```

### 8.2 External custom views

It is possible to completely modify the component screens while maintaining their functionality and navigation. To do so, the following interfaces must be implemented:

Error diagnosis screen:

```kotlin

interface IVideoIdErrorDiagnosticView {
    @Composable
    fun Content(
        error: VideoIdError,
        onRetry: () -> Unit,
        onClose: () -> Unit,
    )
}

```

Once the classes that implement the interfaces have been created, the "customViews" parameter can be added at component launch to be used in the SDK.

---

## 9. Logs

To display the logs of this component on the console, you can use the filter: "VIDEO_ID:"