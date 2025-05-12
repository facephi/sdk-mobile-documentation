# Flow Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (**Components**) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Depending on the use
case that is required, certain components must be installed. Its high
level of modularity allows other new components to be added in the
future without affecting those already integrated in the project.

For more information on the base configuration, go to the [Getting Started](./Mobile_SDK#11-minimum-requirements) section.

---

## 1. Introduction

This Flow document is an **annex** to the common **SDK**, as this functionality is contained in the **SDK** component itself.

Flow is a functionality that connects the **Design Studio** section of the **Platform** with the SDK and the implementation done by thethe **Platform** with the SDK and the client implementation.
Through a Flow identifier, you will be able to launch a flow designed on the web, which can contain up to which can contain from 1 to N steps of the existing components in the SDK.

---

## 2. Integration of the component

<div class="warning">
<span class="warning">:warning:</span>
Before integrating this component, it is recommended to read the
documentation related to [Initial Integration](./Mobile_SDK#2-initial-integration) and follow the instructions given in that document.
</div>

This section will explain step by step how to integrate the current
component into an existing project.

### 2.1. Dependencies required for integration

No **any extra dependencies** are required to use Flow.

You <u>must add the required dependencies of each component</u>
that you want to launch within Flow. If you want to launch **facial recognition,** it should be **necessary** to install the **Selphi component**, and so on with the rest of the components.

---

## 3. Start a new operation

When initiating the launch of a Flow operation, a new operation is generated internally in a fully transparent manner.
internally, a new operation is generated in a completely transparent way.

**<u>It is not necessary</u>** to perform a new operation beforehand.


---

## 4. Available controllers

| **Controller**        | **Description**                                           |
| --------------------- | --------------------------------------------------------- |
| FlowController        | Flow main controller. Launch of published flows.          |

### 4.1. Available controllers for flow

| **Controller**             | **Description**       |
| -------------------------- | --------------------- |
| SelphiController          | Facial recognition    |
| SelphIDController         | Document recognition  |
| VoiceController           | Voice capture         |
| PhingersController        | Fingerprint Capture   |
| NFCController             | NFC                   |
| QrReaderController        | QR Reader             |
| InvoiceReaderController   | Invoice capture       |
| VideoIdController         | Video Identification  |
| VideoCallController       | Video Call            |

---

## 5. SDK initialisation with flow

The SDK initialisation function has the _activateFlow_ parameter to manage its activation:

```java
SDKController.shared.initSdk(
     ...
     activateFlow: true,
     ...
)
```

---

## 6. Using the component

#### 6.1 Launching a published stream

It will use the _FlowController_ to launch a flow that the client has published on the platform, the flowID must be indicated in the FlowConfigurationData object:

```java
public func launchFlow(customerId: String, viewController: UIViewController, output: @escaping (SdkResult<String>) -> Void, offline: Bool = false) {
//        ThemeSelphidManager.setup(theme: CustomThemeSelphID())
        let selphidController = SelphIDController(data: nil, output: {
            print("SelphidController output: \($0.errorType)")
        }, viewController: viewController)
        
        let selphiController = SelphiController(data: nil, output: {
            print("SelphiController output: \($0.errorType)")
        }, viewController: viewController)
        
        let externalStepController = ExternalStepController(output: {
            print("externalStepController output")
        })
        
        let controllers: [IFlowableController] =
        [selphidController, selphiController, selphixController, nfcController, qrReaderController,
         invoiceReaderController, phingersController, videoIdController, videoCallController, voiceController, externalStepController]
        
        let flowConfigurationData = FlowConfigurationData(
            id: "flowId",
            controllers: controllers,
            customerId: customerId)
        
        let flowOutput: (SdkFlowResult) -> Void = { sdkFlowResult in
            print("FlowController: STEP - \(sdkFlowResult.step)")
            print("FlowController: FLOW FINISH: \(sdkFlowResult.flowFinish)")
            print("FlowController: SDKResult: ERROR=\(sdkFlowResult.result.errorType) - DATA=\(sdkFlowResult.result.data)")

            switch (sdkFlowResult.result.data) {
            case (let data as SelphIDResult):
                break
            case (let data as SelphiResult):
                break
            default: break
            }
        }
        
        let flowController = offline
        ? FlowOfflineController(flowConfigurationData: flowConfigurationData, output: flowOutput)
        : FlowController(flowConfigurationData: flowConfigurationData, output: flowOutput)
        
        self.flowController = flowController
        SDKController.shared.launch(controller: flowController)
    }

     func flowNextStep() {
        self.flowController?.launchNextStep()
    }
    
    func cancelFlow() {
        self.flowController?.cancelFlow()
        self.flowController = nil
    }

```

---

## 7. Receipt of the result

The flow result will have 3 fields:

- step: Information on the flow step that has been performed. With the
  value of "key" it will be possible to identify the component executed in the step.

- result: The controllers will return the required information in SdkResult format
  -more details in the Android Mobile SDK's <a
  href="Mobile_SDK#6-result-return"
  rel="nofollow">6. Result return</a> section-.

- flowFinish: Flag indicating whether the process has finished.

### 7.1. Receipt of errors

In the result, inside _sdkFlowResult_ we will have
**_sdkFlowResult.step_** to identify which component has failed, and
the **_sdkFlowResult.result.errorType_** containing the error that occurred.

```java
print("FlowController: STEP - \(sdkFlowResult.step)")
print("FlowController: SDKResult: ERROR=\(sdkFlowResult.result.errorType) - DATA=\(sdkFlowResult.result.data)")
```

### 7.2. Receiving successful execution - _data_

On successful execution of a stream, the corresponding components shall be launched until completion of the stream or until a
components shall be launched until completion or until an error occurs.

After checking the results, we should check whether the flow has been finished or there are still steps left, in order to be able to manage the next steps outside the SDK.

Example:
```java
let flowOutput: (SdkFlowResult) -> Void = { sdkFlowResult in
            print("FlowController: STEP - \(sdkFlowResult.step)")
            print("FlowController: FLOW FINISH: \(sdkFlowResult.flowFinish)")
            print("FlowController: SDKResult: ERROR=\(sdkFlowResult.result.errorType) - DATA=\(sdkFlowResult.result.data)")
            
            switch (sdkFlowResult.result.data) {
            case (let data as SelphIDResult):
                break
            case (let data as SelphiResult):
                break
            case (let data as SelphixResult):
                break
            default: break
            }
        }
```

After checking the results, we should check whether the flow has been
finished or there are still steps left, in order to be able to manage the next steps
outside the SDK.

```java
print("FlowController: FLOW FINISH: \(sdkFlowResult.flowFinish)")
```

In case there is an external step, at the end of this step, the _launchNextStep_ method must be called.

```java
func flowNextStep() {
     self.flowController?.launchNextStep()
}
```

If you want to cancel it, you must call _cancelFlow_

```java
func cancelFlow() {
     self.flowController?.cancelFlow()
     self.flowController = nil
}
```

---
