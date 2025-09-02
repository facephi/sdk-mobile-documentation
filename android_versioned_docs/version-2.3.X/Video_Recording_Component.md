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

Start screen recording:

```java
val response = SDKController.launch(
    VideoRecordingController(
        VideoRecordingConfigurationData(...)
    )
)

when (response) {
    is SdkResult.Error   -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}

```

### 4.2 Stopping Recording

Stop screen recording:

```java
val response = SDKController.launch(
    StopVideoRecordingController()
)

when (response) {
    is SdkResult.Error   -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

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

