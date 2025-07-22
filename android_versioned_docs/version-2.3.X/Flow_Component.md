# Flow - Continuous Launch

## 1. Introduction

Flow is a feature that connects the **Design Studio** section of the **Platform** with the SDK and the client implementation. Using a Flow identifier, you can launch a flow designed on the web, which can contain from 1 to N steps using existing SDK components.

Refer to the [Quickstart](./Mobile_SDK) section for basic SDK setup. This guide covers the specifics of enabling and using Flow.

---

## 2. Required Dependencies for Integration

No **additional dependencies** are needed to use Flow.

You must include the dependencies for each component you plan to launch within a flow. For example:

- For **facial recognition**, add the **Selphi component**.
- For **document recognition**, add the **SelphID component**.
- And so on for other components.

---

## 3. Available Controllers

| **Controller**        | **Description**                                   |
| --------------------- | ------------------------------------------------- |
| FlowController        | Main controller to launch published flows.        |
| FlowPreviewController | Controller for testing flows pending publication. |

### 3.1 Flow Step Controllers

| **Controller**             | **Description**       |
| -------------------------- | --------------------- |
| FSelphiController          | Facial recognition    |
| FSelphIDController         | Document recognition  |
| FVoiceController           | Voice capture         |
| FPhingersController        | Fingerprint capture   |
| FNfcController             | NFC reading           |
| FQrReaderController        | QR code reader        |
| FPhacturasReaderController | Invoice capture       |
| FVideoIdController         | Video identification  |
| FVideoCallController       | Video assistance call |

---

## 4. SDK Initialization with Flow

Enable Flow support by setting the `activateFlow` parameter during SDK initialization:

```java
val sdkConfig = SdkConfigurationData(
    ...
    activateFlow = true,
    ...
)

val result = SDKController.initSdk(sdkConfig)
```

---

## 5. Using the Component

### 5.1 Launching a Published Flow

Use `FlowController` to start a flow that has been published on the platform:

```java
val flowController = FlowController(
    FlowConfigurationData(
        id = "flowId",
        controllers = listOf(FSelphiController(), FSelphIDController()),
        customerId = "customerId",
    )
)

SDKController.launch(flowController)
```

### 5.2 Launching a Pending Flow for Testing

Use `FlowPreviewController` to test a flow that is not yet published:

```java
val flowController = FlowPreviewController(
    FlowConfigurationData(
        id = "flowId",
        controllers = listOf(FSelphiController(), FSelphIDController()),
        customerId = "customerId",
    )
)

SDKController.launch(flowController)
```

### 5.3 Collecting Results in Your App

By default, flow steps send results directly to the platform. To handle them in your app, collect state updates:

```java
flowController.stateFlow.collect { flowResult ->
    Napier.d("APP: FLOW STEP ID ${flowResult.step?.id}")

    when (flowResult.step?.key) {
        FlowKeys.EXTERNAL_STEP.name -> {
            delay(DELAY_EXTERNAL_STEP)
            flowController.launchNextStep()
        }

        FlowKeys.SELPHI_COMPONENT.name -> {
            when (val sdkResult = flowResult.result) {
                is SdkResult.Error -> {
                    Napier.d("APP: Selphi FLOW ERROR: ${sdkResult.error.getSelphiError().name}")
                }
                is SdkResult.Success -> {
                    val result = sdkResult.data.getSelphiResult()
                    Napier.d("APP: Selphi OK ${result.bestImage?.bitmap?.byteCount}")
                }
            }
        }

        FlowKeys.SELPHID_COMPONENT.name -> {
            when (val sdkResult = flowResult.result) {
                is SdkResult.Error -> {
                    Napier.d("APP: SelphID FLOW ERROR: ${sdkResult.error.getSelphiError().name}")
                }
                is SdkResult.Success -> {
                    val result = sdkResult.data.getSelphIDResult()
                    Napier.d("APP: SelphID OK ${result.documentCaptured}")
                }
            }
        }
    }

    if (flowResult.flowFinish) {
        Napier.d("APP: FLOW FINISH")
    }
}

viewModelScope.launch {
    SDKController.launch(flowController)
}
```

---

## 6. Receiving the Result

The flow result object contains three fields:

- **step**: Details of the executed flow step. The `key` identifies which component ran.
- **result**: The step outcome as an `SdkResult`. See [Result return](Mobile_SDK#6-result-return) in the Android SDK docs for details.
- **flowFinish**: A boolean indicating whether the entire flow has completed.

### 6.1 Handling Errors

If a step fails, `SdkResult.Error` will include:

- `flowResult.step.key` to identify the failed component.
- `flowResult.result.error` with the error details.

### 6.2 Handling Success - `data`

On success (`SdkResult.Success`), use the appropriate converter to extract component-specific results. For example:

```java
flowController.stateFlow.collect { flowResult ->
    Napier.d("APP: FLOW STEP ID ${flowResult.step?.id}")
    ...
}

if (flowResult.flowFinish) {
    Napier.d("APP: FLOW FINISH")
}
```

---

