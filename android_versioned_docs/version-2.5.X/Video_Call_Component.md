# Video Call

## 1. Introduction

Video calling is performed with the **VideoCall Component**.

This component manages the communication between a user and an agent (video assistance). Its main processes are:

- Internal camera, microphone, and permission management.
- Connection to video services.

Refer to the [Quickstart](./Mobile_SDK) section for basic SDK integration steps. This section adds information specific to launching this component.

---

## 2. Dependency

The component-specific dependency is:

```java
implementation "com.facephi.androidsdk:videocall_component:$version"
```

---

## 3. Available Controllers

| **Controller**          | **Description**                                        |
| ----------------------- | ------------------------------------------------------ |
| VideoCallController     | Main controller for video calls                        |
| StopVideoCallController | Controller to stop screen sharing and the ongoing call |

---

## 4. Quick Launch

Once the SDK is initialized and a new operation has been created, you can launch the component using either controller.

```java
val response = SDKController.launch(
    VideoCallController(VideoCallConfigurationData(...))
)

when (response) {
    is SdkResult.Error   -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

---

## 5. Basic Configuration

To launch the component, create a `VideoCallConfigurationData` object. No parameters are required for basic usage:

```java
VideoCallConfigurationData()
```

---

## 6. Receiving the Result

The launch returns an `SdkResult`. Handle success and error as follows:

```java
when (response) {
    is SdkResult.Error   -> Napier.d("ERROR - ${response.error}")
    is SdkResult.Success -> response.data
}
```

### 6.1 Handling Errors

Errors are returned as a `VideoCallError` object. Possible values include:

- ACTIVITY_RESULT_MSG_ERROR: The result of the activity is incorrect.
- APPLICATION_CONTEXT_ERROR: Required application context is null
- CANCEL_BY_USER: User has cancelled the process
- CANCEL_LAUNCH: A general cancellation of the SDK has been done.
- COMPONENT_LICENSE_ERROR: The license of the component is not correct
- EMPTY_LICENSE: License String is empty
- FACE_DETECTION_TIMEOUT: No face detected
- FETCH_DATA_ERROR: Error in the result collection
- FLOW_ERROR: Error in the flow process
- INITIALIZATION_ERROR: Initialisation error
- MANAGER_NOT_INITIALIZED: Managers are nil
- NETWORK_CONNECTION: Error in internet connection
- NO_DATA_ERROR: Input data is null
- OPERATION_NOT_CREATED: No operation in progress
- PERMISSION_DENIED: User has denied permissions
- SOCKET_ERROR: Error in the connection of services
- TIMEOUT: Timeout in the process
- VIDEO_ERROR: Error in video processing
- UNKNOWN_ERROR
- VIDEO_RECORDING_ACTIVE: Cannot start because the video recording process is active.

### 6.2 Handling Success – `data`

On `SdkResult.Success`, you receive a `VideoCallResult` object. If the `sharingScreen` flag is active, screen sharing has been enabled.

---

## 7. Advanced Information

### 7.1 Advanced Component Configuration

Create a `VideoCallConfigurationData` object with the following optional fields. These are typically only needed for on-premise server setups, as they are populated automatically otherwise:

- `url`: Video socket endpoint URL.
- `apiKey`: API key for socket authentication.
- `tenantId`: Tenant identifier for the current client.
- `activateScreenSharing`: Enable screen sharing within the call.
- `timeout`: Time in milliseconds to wait for an agent to answer.

### 7.2 Screen Sharing

When screen sharing is enabled, the `sharingScreen` property in the `VideoCallResult` will be `true`, indicating the call is still active:

```java
val response = SDKController.launch(
    VideoCallController(
        VideoCallConfigurationData(activateScreenSharing = true)
    )
)

when (response) {
    is SdkResult.Error   -> Napier.d("VideoCall: ERROR - ${response.error.name}")
    is SdkResult.Success -> Napier.d("VideoCall: OK - ScreenSharing: ${response.data.sharingScreen}")
}
```

To stop the call, use the `StopVideoCallController`:

```java
val stopController = StopVideoCallController()
stopController.setOutput { state ->
    Napier.d("VIDEOCALL: SCREEN SHARING STATE: ${state.name}")
}
viewModelScope.launch {
    SDKController.launch(stopController)
}
```

Possible `state` values include:

```java
AGENT_HANGUP,
PERMISSION_ERROR,
NETWORK_CONNECTION_ERROR,
UNKNOWN_ERROR,
SHARING,
CANCEL_BY_USER,
FINISH
```

The call is fully terminated when `state == FINISH`.

---

## 8. Component Customization

Beyond SDK-level settings ([Advanced Settings](./Mobile_SDK_advanced)), this component allows UI customization.

### 8.1 Texts

To override default strings, include an XML file in your app:

```xml
<!-- Waiting -->
    <string name="video_call_component_text_waiting_agent_title">Conectando con un asistente…</string>
    <!-- Process -->
    <string name="video_call_component_agent">Asistente</string>
    <string name="video_call_component_local">Tú</string>
    <string name="video_call_component_exit">Salir</string>
    <string name="video_call_component_text_finish">La video asistencia ha finalizado</string>
    <string name="video_call_component_accesibility_phone">Teléfono</string>
    <string name="video_call_component_accesibility_switch">Cambiar cámara</string>
    <!-- Diagnostic -->
    <string name="video_call_component_restart">Repetir llamada</string>
    <string name="video_call_component_timeout_title">Tiempo superado</string>
    <string name="video_call_component_timeout_desc">No se ha podido contactar con un asistente.</string>
    <string name="video_call_component_internal_error_title">Hubo un problema técnico</string>
    <string name="video_call_component_internal_error_desc">No se ha podido contactar con un asistente.</string>
```

### 8.2 Colors

```xml
<color name="colorVideoCallActionsBackground">#30333d</color>
<color name="colorVideoCallButtonBackground">#FF526080</color>
```

### 8.3 Animations

To override Lottie animations, place files with the same names in your `res/raw/` folder:

```
video_call_anim_waiting.json
```

### 8.4 External Views

It is possible to completely modify the component screens while maintaining their functionality and navigation. To do so, the following interfaces must be implemented:

Error diagnosis screen:

```kotlin

interface IVideoCallErrorDiagnosticView {
    @Composable
    fun Content(
        error: VideoCallError,
        onRetry: () -> Unit,
        onClose: () -> Unit,
    )
}

```

Once the classes that implement the interfaces have been created, the "customViews" parameter can be added at component launch to be used in the SDK.


---

## 9. Logs

Filter console logs for this component with: `"VIDEO_CALL:"`

