# Video Recording

## 1. Introduction

Video recording is performed with the **VideoRecording Component**.

This component is responsible for capturing the device’s screen in the background. It is mainly intended for recording the onboarding process.

---

## 2. Dependency

The component-specific dependency is:

```java
implementation "com.facephi.androidsdk:video_recording_component:$version"
```

---

## 3. Available Controllers

| **Controller**               | **Description**                    |
| ---------------------------- | ---------------------------------- |
| VideoRecordingController     | Main video recording controller    |
| StopVideoRecordingController | Controller to stop video recording |

---

## 4. Quick Launch

Once the SDK is initialized and a new operation has been created, you can launch the component using either controller.

### 4.1 Starting Recording

```java
val controller = VideoRecordingController(
    VideoRecordingConfigurationData()
)

controller.setOutput {
    Napier.d("APP: VIDEO RECORDING STATE (start): ${it.name}")
}

SDKController.launch(controller)
```

### 4.2 Stopping Recording

```java
val controller = StopVideoRecordingController()

controller.setOutput {
    Napier.d("APP: VIDEO RECORDING STATE (stop): ${it.name}")
}

SDKController.launch(controller)
```

### 4.3 Receiving States

The progression of the process is indicated through states. The recording controllers return the following states to signal progress:

```java
FINISH,
SHARING,
LICENSE_ERROR,
INITIALIZATION_ERROR,
OPERATION_NOT_CREATED,
VIDEO_RECORDING_ACTIVE_ERROR,
VIDEO_CALL_ACTIVE_ERROR,
NETWORK_CONNECTION_ERROR,
PERMISSION_ERROR,
CANCEL_BY_USER,
VIDEO_ERROR,
SOCKET_ERROR,
UNKNOWN_ERROR,
```

Where `SHARING` indicates that the screen is being recorded, and `FINISH` that the process has completed.

---

## 5. Advanced Information

This section expands on the component’s configuration options.

### 5.1 Advanced Component Configuration

To launch the component, create a `VideoRecordingConfigurationData` object with the following optional fields. These are usually populated internally through the license and only need to be provided for on-premise server setups:

#### 5.1.1 `url`

Video socket endpoint URL.

#### 5.1.2 `apiKey`

API key required for video socket connection.

#### 5.1.3 `tenantId`

Tenant identifier for the current client, used when connecting to the video service.

---

## 8. Logs

To view logs for this component in the console, filter by: `"VIDEO_RECORDING:"`

