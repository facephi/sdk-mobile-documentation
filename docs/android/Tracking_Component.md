# Tracking Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (Components) that offer a series of
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

This command must have been executed **before launch**.

To learn more about how to start a new operation, it is recommended to
consult the [Getting Started](./Mobile_SDK)
documentation, which details and explains what this process consists of.

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

  - INIT_IDS_ERROR: Error in the input data
  - LICENSE_ERROR: Licence error
  - APPLICATION_CONTEXT_ERROR: Error in the initialisation of the context
  - OPERATION_RESULT: Error in sending event se 
  - OPERATION_ID: Operation ID is null
  - SESSION_ID: Session ID is null
  - CUSTOMER_ID: Error sending customer ID
  - STEP_CHANGE: Failed to send component change event
  - ASSET_LINK: Error when sending resource link
  - ASSET_UPLOAD: Error when sending a resource to the platform
  - OCR_DATA: Error when sending OCR data
  - INIT_OPERATION: Error when sending new operation events
  - NO_OPERATION_CREATED_ERROROR: No operation in progress
  - TOKEN_ERROR: Error in obtaining the connection token
  - NETWORK_CONNECTION: Error in the internet connection
  - SEND_BYTEARRAY: Error sending the resource


---
