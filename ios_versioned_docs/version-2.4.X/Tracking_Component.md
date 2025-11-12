# Tracking Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (**Components**) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Certain components must
be installed depending on the use case required. Its high level of
modularity allows other new components to be added in the future without
affecting those already integrated into the project.

For more information on the base configuration, go to the [Getting Started](./Mobile_SDK#11-minimum-requirements) section.

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

### 1.1 Minimum requirements

The minimum iOS SDK version required is as follows:

Minimum iOS version: **13**

---

## 2. Integration of the component

<div class="warning">
<span class="warning">:warning:</span>
Before integrating this component, it is recommended to read the
documentation related to [Initial Integration](./Mobile_SDK#2-initial-integration) and follow its instructions.
</div>

To use the Tracking Component with the SDK, it's needed to pass an instance as a param in the initSdk function:

```
SDKController.shared.initSdk(
        ...,
        trackingController: TrackingController()
    )
```

When a TrackingController's instance is provided, the Components will track the SDK process.

### 2.1. Dependencies required for integration

To avoid conflicts and compatibility problems, if you want to install
the component in a project containing an old Facephi libraries
(_Widgets_) version, these must be removed entirely before installing
the **_SDKMobile_** components.

Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **mandatory** dependencies that must be previously installed (by adding them in the Podfile file of the project) are:

```
pod 'FPHISDKMainComponent', '~> 2.4.0'
```

To install the Tracking component, the following entry must be included in the application Podfile:

```
pod 'FPHISDKTrackingComponent', '~> 2.4.0'
```

Once the dependencies are installed, the different functionalities of the component can be used.

- In case of development with **XCode15** a post-installation script must be included:

![Image](/ios/fix_ldClassic.png)

---

## 3. Start a new operation

In order to generate the associated information correctly in the platform, the **newOperation** command must be executed first.

<div class="note">
<span class="note">:information_source:</span>
This command must have been executed **before launch**.

To learn more about how to start a new operation, it is recommended to consult the [Start a new operation](./Mobile_SDK#4-start-a-new-operation) documentation, which details and explains what this process consists of.
</div>

---

## 4. Component configuration

The TrackingController controller will only be added in case of having the sdkMobile tracking.

The import is added:

```java
import trackingComponent
```

trackingController: trackingController

Initialize:

```java
let trackingController = TrackingController(trackingError: { trackingError in
      print("TRACKING ERROR: \(trackingError)")
})
```

It is added in the initSDK:

```java
//AUTO License
SDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in
     if sdkResult.finishStatus == .STATUS_OK {
         self.log("Automatic license set correctly")
     } else {
         self.log("An error occurred while attempting to obtain the license: \(sdkResult.errorType)")
     }
}, trackingController: trackingController)
```

---

## 5. Use of the component

As previously mentioned, once initialized and configured the
**tracking** component will not need to be launched, since it will
will keep running in the background while the rest of the
components.

---

## 6. Reception of the result

The result is an _SDKResult_ object that is returned by the SDK and will always have 3 fields:

_finishStatus_: Which will tell us if the operation has completed correctly. Possible values:

```java
FinishStatus.STATUS_OK
FinishStatus.STATUS_ERROR
```

_errorType_: If the finishStatus indicates that there has been an error, this field will have the description of the error:

Tracking errors come in the _TrackingError_ enum:

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
