# Tracking Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (**Components**) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Certain components must
be installed depending on the use case required. Its high level of
modularity allows other new components to be added in the future without
affecting those already integrated into the project.

For more information on the base configuration, go to the
[Getting Started](./Mobile_SDK) section.

---

## 1. Introduction

The component dealt with in the current document is called **Tracking
Component**. It tracks and monitors the information obtained while
executing the rest of the **SDKMobile** components, sending it to the
**Platform** services. This data can be tracked in real-time on the
Platform, while the process is running on the client's device.

Unlike the rest, this component does not work individually, it works
transversally with the rest of the components installed in the
**_SDKMobile_**. To track the information, it is kept in the background
while the SDKMobile process is running.

---

## 2. Integration of the component

Before integrating this component, it is recommended to read the
documentation related to

[Getting Started](./Mobile_SDK)
and follow the instructions in that document.

This section will explain step by step how to integrate the current
component into an existing project.

### 2.1. Dependencies required for integration

To avoid conflicts and compatibility problems, if you want to install
the component in a project containing an old Facephi libraries
(_Widgets_) version, these must be removed entirely before installing
the **_SDKMobile_** components.

- Currently, FacePhi libraries are distributed remotely through
  different dependency managers. **Mandatory** dependencies that must
  be installed beforehand:

  ```java
  implementation "com.facephi.androidsdk:tracking_component:$sdk_tracking_component_version"
  ```

---

## 3. Start a new operation

When you want to perform a specific operation to generate the associated
information correctly in the platform, the **newOperation** command must
first be executed.

<div class="note">
<span class="note">:information_source:</span>
This command must have been executed **before launch**.
To learn more about how to start a new operation, it is recommended to consult the [Start a new operation](./Mobile_SDK#4-start-a-new-operation) documentation, which details and explains what this process consists of.
</div>

---

## 4. Available controllers

|                         |                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------ |
| **Controller**          | **Description**                                                                                        |
| TrackingController      | Tracking the main controller                                                                           |
| TrackingErrorController | Controller to handle any errors that occur                                                             |
| ExtraDataController     | Driver to get the ExtraData that allows communication from client to server with SelphIDSdk installed. |

## 5. Component configuration

To configure the current component, see the initialisation section in
[Getting Started](./Mobile_SDK).

### 5.1. TrackingController configuration

This parameter must be included

```java
SDKController.initSdk(
    ...
    trackingController = TrackingController(),
)
```

### 5.2. Error control settings

The callback can be configured to control tracking errors:

```java
SDKController.launch(
     TrackingErrorController {
        Napier.d("Tracking Error: ${it.name} - ${it.error} - ${it.stepType}")
     }
)
```

**Section 7** shows the possible error values that exist.

### 5.3. Obtaining the ExtraData for communication with the Platform

The call to get the extraData needs information on the current
operation, forcing it to have **previously performed a newOperation**.

```java
val result = SDKController.launch(
    ExtraDataController()
)
when (result) {
    is SdkResult.Success -> logs.add("ExtraData: OK")
    is SdkResult.Error -> logs.add(
        "ExtraData: KO - ${result.error.name}"
    )
}
```

---

## 6. Use of the component

As previously mentioned, once the tracking component has been
initialised and configured, launching it will not be necessary, as it
will keep running in the background while the rest of the components are
running.

---

## 7. Receipt of the result

### 7.1. Receipt of errors

In the error part, we will have the TrackingError class. The class will return 3 fields:

  - name: String with the name of the error
  - error: Additional information in case it is necessary.
  - stepType: SDK component in which the sending of the event has failed.

Error list:

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

---
