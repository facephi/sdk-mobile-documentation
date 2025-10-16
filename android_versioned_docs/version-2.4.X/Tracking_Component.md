# Platform Connection

## 1. Introduction

Event sending to the platform is performed by the **Tracking Component**.

This component handles the tracking and monitoring of information obtained during operation execution. You can monitor these data in real time on the **Platform** while the process runs on the client device.

Unlike other components, this one does not operate in isolation; it works across all installed components in the *SDKMobile*.

Refer to the [Quickstart](./Mobile_SDK) section for basic SDK integration steps. This section adds information specific to launching this component.

---

## 2. Dependency

The component-specific dependency is:

```java
implementation "com.facephi.androidsdk:tracking_component:$version"
```

---

## 3. Available Controllers

| **Controller**          | **Description**                                                                                    |
| ----------------------- | -------------------------------------------------------------------------------------------------- |
| TrackingController      | Main tracking controller                                                                           |
| TrackingErrorController | Controller to handle possible tracking errors                                                      |
| ExtraDataController     | Controller to obtain **ExtraData** for client-to-server communication when SelphIDSdk is installed |

---

## 4. Quick Launch

Include the tracking controller during SDK initialization:

```java
SDKController.initSdk(
    ...,
    trackingController = TrackingController(),
)
```

### 4.1 Error Handling

Configure the callback to handle tracking errors:

```java
SDKController.launch(
     TrackingErrorController { error ->
        Napier.d("Tracking Error: ${error.name} - ${error.error} - ${error.stepType}")
     }
)
```

---

## 5. Advanced Information

### 5.1 Additional Controllers

#### 5.1.1 ExtraDataController

The `ExtraDataController` allows you to obtain the identifier of the current operation. This data is sent to the backend for the necessary verifications.

**Note:** Calling `ExtraDataController` **requires** that a **newOperation** has been created beforehand.

```java
val result = SDKController.launch(
    ExtraDataController()
)

when (result) {
    is SdkResult.Success -> logs.add("ExtraData: OK")
    is SdkResult.Error   -> logs.add("ExtraData: KO - ${result.error.name}")
}
```

### 5.2 Receiving Errors

Errors are returned as a `TrackingError` object with three fields:

- `name`: Name of the error
- `error`: Additional information if needed
- `stepType`: SDK component where the event sending failed

Possible error values include:

- **APPLICATION_CONTEXT_ERROR**: Error in the initialisation of the context  
  - **ASSET_LINK**: Error when sending resource link  
  - **ASSET_UPLOAD**: Error during the asset upload process  
  - **COMPONENT_LICENSE_ERROR**: Missing or invalid component license  
  - **CUSTOMER_ID**: Error retrieving or validating the customer ID  
  - **DEVICE_EVENT_ERROR**: Failure during a device-related event  
  - **EMPTY_LICENSE**: License data is missing or empty  
  - **FLOW**: Error during the execution flow  
  - **INITIALIZATION_ERROR**: General initialization failure  
  - **INIT_IDS_ERROR**: Error generating or assigning IDs during init  
  - **INIT_OPERATION**: Operation failed at the initialization phase  
  - **LICENSE_ERROR**: Invalid or corrupted license data  
  - **MANAGER_NOT_INITIALIZED**: Manager component used before being initialized  
  - **NETWORK_CONNECTION**: Network connection issue detected  
  - **NETWORK_ERROR**: Generic network failure  
  - **NO_OPERATION_CREATED_ERROR**: No operation was created when expected  
  - **OCR_DATA**: Error processing OCR data  
  - **OPERATION_NOT_CREATED**: Expected operation was not generated  
  - **OPERATION_ID**: Invalid or missing operation ID  
  - **SESSION_ID**: Error with the session identification  
  - **SIGNATURE_RESULT**: Failure in the signature process or result  
  - **STEP_CHANGE**: Unexpected or invalid step transition  
  - **STEP_RESULT_CANCELLED**: Step was cancelled unexpectedly  
  - **STEP_RESULT_ERROR**: Step ended with an error  
  - **STEP_RESULT_EXPIRED**: Step result expired before completion  
  - **STEP_RESULT_SUCCEEDED**: Step succeeded but resulted in an unexpected issue  
  - **TOKEN_ERROR**: Token missing, expired, or invalid  
  - **ADVANCED_TRACKING_UPLOAD**: Advanced tracking data upload failed  
  - **TENANT_ID_EMPTY_ERROR**: Tenant ID was missing or empty  
  - **ADVANCED_TRACKING_SERIALIZATION_ERROR**: Error serializing advanced tracking data  
  - **ADVANCED_TRACKING_VALIDATION_ERROR**: Validation failed for tracking payload  
  - **TOKENIZER_ERROR**: Error during tokenization process  