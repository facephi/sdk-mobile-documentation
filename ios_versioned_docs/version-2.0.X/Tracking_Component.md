# Tracking Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (Components) that offer a series of
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

## 2. Component integration

<div class="warning">
<span class="warning">:warning:</span>
Before integrating this component, it is recommended to read the
documentation related to

<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
and follow the instructions in that document.

</div>
This section will explain step by step how to integrate the current
component into an existing project.

### 2.1. Dependencies required for integration

<div class="warning">
<span class="warning">:warning:</span>
To avoid conflicts and compatibility problems, if you want to install
the component in a project containing an old Facephi libraries
(_Widgets_) version, these must be removed entirely before installing
the **_SDKMobile_** components.
</div>
Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **mandatory** dependencies that must be previously installed (by adding them in the Podfile file of the project) are:

```
pod 'FPHISDKMainComponent',, '~> 2.0.0'
```

To install the Tracking component, the following entry must be included in the application Podfile:

```
pod 'FPHISDKTrackingComponent', '~> 2.0.0'
```

Once the dependencies are installed, the different functionalities of the component can be used.

- In case of development with **xCode15** a post-installation script must be included:

![Image](/ios/fix_ldClassic.png)

---

## 3. Start a new operation

When you want to perform a specific operation to generate the associated
information correctly in the platform, the **newOperation** command must
first be executed.

<div class="note">
<span class="note">:information_source:</span>
This command must have been executed **before launch**.

To learn more about how to start a new operation, it is recommended to
consult the <a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page"><strong>Mobile SDK</strong></a>
documentation, which details and explains what this process consists of.

## </div>

## 4. Component configuration

The TrackingController controller will only be added in case of having the sdkMobile tracking.

The import is added:

```
import trackingComponent
```

trackingController: trackingController

Initialize:

```
let trackingController = TrackingController(trackingError: { trackingError in
      print("TRACKING ERROR: \(trackingError)")
})
```

It is added in the initSDK:

```
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

```
FinishStatus.STATUS_OK
FinishStatus.STATUS_ERROR
```

_errorType_: If the finishStatus indicates that there has been an error, this field will have the description of the error:

Tracking errors come in the _TrackingError_ enum:

```
INIT_DATA_ERROR
ASSET_UPLOAD
INIT_IDS_ERROR
ASSET_LINK
STEP_CHANGE
OCR_DATA
INIT_OPERATION
EXTERNAL_EVENT
OPERATION_RESULT
CUSTOMER_ID
TOKEN_ERROR
```

---
