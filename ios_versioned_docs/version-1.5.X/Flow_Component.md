# Flow Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (**Components**) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Certain components must
be installed depending on the use case required. Its high level of
modularity allows other new components to be added in the future without
affecting those already integrated into the project.

For more information on the base configuration, go to the
<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">Mobile SDK</a> section.

---

## 1. Introduction

This Flow document is an **annex** to the common **SDK**, as this functionality is contained in the **SDK** component itself.functionality is contained in the SDK component itself.

Flow is a functionality that connects the **Design Studio** section of the **Platform** with the SDK and the implementation done by thethe **Platform** with the SDK and the client implementation.
Through a Flow identifier, you will be able to launch a flow designed on the web, which can contain up to 1which can contain from 1 to N steps of the existing components in the SDK.
in the SDK.

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

No **any extra dependencies** are required to use Flow.

You <u>must add the required dependencies of each component</u>
that you want to launch within Flow. If you want to launch **facial recognition,** it should be **necessary** to install the **Selphi component**, and so on with the rest of the components.components.

---

## 3. Start a new operation

When initiating the launch of a Flow operation, a new operation is generated internally in a fully transparent manner.
internally, a new operation is generated in a completely transparent way.

**<u>It is not necessary</u>** to perform a new operation beforehand.
beforehand.

---

## 4. Available controllers

| **Controller**       | **Description**                                                            |
| --------------------- | -------------------------------------------------------------------------- |
| FlowController        | Flow main controller. Launch of published flows.           |
| FlowPreviewController | Driver for the release of flows to be published (testing) |

### 4.1. Available controllers for flow

| **Controller**            | **Description**           |
| -------------------------- | ------------------------- |
| FSelphiController          | Facial recognition     |
| FSelphIDController         | Document recognition |
| FVoiceController           | Voice capture            |
| FPhingersController        | Capture of footprints        |
| FNfcController             | NFC            |
| FQrReaderController        | QR Reader            |
| FPhacturasReaderController | Invoice capture       |
| FVideoIdController         | Video Identification      |
| FVideoCallController       | Video Call          |

---

## 5. SDK initialisation with flow

The SDK initialisation function has the _activateFlow_ parameter to manage its activation.
parameter to manage its activation:

```java
SDKController.initSdk(
     ...,
      activateFlow = true,
      ..
      ) {
          when (it) {
              is SdkResult.Success -> Napier.d("APP: INIT SDK: OK")
              is SdkResult.Error -> Napier.d(
                     "APP: INIT SDK: KO - ${it.error}"
                    )
           }
 })
```

---

## 6. Using the component

#### 6.1 Launching a published stream

You will use the _FlowController_ to launch a flow that the client has
published on the platform:

```java
SDKController.launch(
   FlowController(
        FlowConfigurationData(
            id = "flowId",
            controllers = listOf(FSelphiController(), FSelphIDController()),
            customerId = "customerId",
            newOperation = true
        )) { flowResult ->
        Napier.d("APP: FLOW STEP KEY ${flowResult.step?.key}")
        when (val sdkResult = flowResult.result) {
             is SdkResult.Error -> {
                Napier.d("APP: FLOW ERROR: ${sdkResult.error}")
             }
             is SdkResult.Success -> {

                when (flowResult.step?.key) {
                    FlowKeys.SELPHI_COMPONENT.name -> {
                          val result = sdkResult.data.getSelphiResult()
                     }

                     FlowKeys.SELPHID_COMPONENT.name -> {
                           val result = sdkResult.data.getSelphIDResult()
                     }
                }
             }
        }

        if (flowResult.flowFinish) {
           Napier.d("APP: FLOW FINISH")

         }
    }
}
```

#### 6.2 Launching a flow pending publication

The _FlowPreviewController_ shall be used to test a flow that the customer
has yet to publish to the platform:

```java
SDKController.launch(
   FlowPreviewController(
        FlowConfigurationData(
            id = "flowId",
            controllers = listOf(FSelphiController(), FSelphIDController()),
            customerId = "customerId",
            newOperation = true
        )) { flowResult ->
        Napier.d("APP: FLOW STEP KEY ${flowResult.step?.key}")
        when (val sdkResult = flowResult.result) {
             is SdkResult.Error -> {
                Napier.d("APP: FLOW ERROR: ${sdkResult.error}")
             }
             is SdkResult.Success -> {

                when (flowResult.step?.key) {
                    FlowKeys.SELPHI_COMPONENT.name -> {
                          val result = sdkResult.data.getSelphiResult()
                     }

                     FlowKeys.SELPHID_COMPONENT.name -> {
                           val result = sdkResult.data.getSelphIDResult()
                     }
                }
             }
        }

        if (flowResult.flowFinish) {
           Napier.d("APP: FLOW FINISH")

         }
    })

```

---

## 7. Receipt of the result

The flow result will have 3 fields:

- step: Information on the flow step that has been performed. With the
  value of "key" it will be possible to identify the component executed in the step.
  step.

- result: The controllers will return the required information in SdkResult format
-more details in the Android Mobile SDK's <a
href="Mobile_SDK#6-result-return"
rel="nofollow">6. Result return</a> section-.

- flowFinish: Flag indicating whether the process has finished.

### 7.1. Receipt of errors

In the result, inside _SdkResult.Error_ we will have
**_flowResult.step.key_** to identify which component has failed, and
the **_flowResult.result.error_** containing the error that occurred.

### 7.2. Receiving successful execution - _data_

On successful execution of a stream, the corresponding components shall be launched until completion of the stream or until a
components shall be launched until completion or until an error occurs.
error.

If the result of a launched step is SdkResult.Success, the _data_ can be located on the one hand, and on the other hand, the _data_ of the flow.
on the one hand, the _key_ that identifies the component and on the other hand, the _data_ with the _key_ that identifies the component.

On the other hand, the _data_ with the result of the component, as it is a generic result, inside the SDK, the _data_ with the result of the component will be located
generic, within the SDK, a converter has been created for each type of result.
result. Ex:

```java
flowResult ->
        when (val sdkResult = flowResult.result) {
             is SdkResult.Error -> {
                Napier.d("APP: FLOW ERROR: ${sdkResult.error}")
             }

             is SdkResult.Success -> {

                when (flowResult.step?.key) {
                    FlowKeys.SELPHI_COMPONENT.name -> {
                          val result = sdkResult.data.getSelphiResult()
                     }

                     FlowKeys.SELPHID_COMPONENT.name -> {
                           val result = sdkResult.data.getSelphIDResult()
                     }
                }
             }
        }
    })
```

After checking the results, we should check whether the flow has been
finished or there are still steps left, in order to be able to manage the next steps
outside the SDK.

```java
if (flowResult.flowFinish) {
    Napier.d("APP: FLOW FINISH")
}
```

---
