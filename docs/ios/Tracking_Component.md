# Tracking Component

## 0. SDK Mobile basic requirements
 
**SDK Mobile** is a set of libraries (**Components**) that provides a set of functionalities and services
a series of functionalities and services, allowing its integration in a Mobile application in a
integration into a Mobile application in a simple and fully scalable way.
scalable. Depending on the use case that is required, certain components must be installed.
Depending on the required use case, certain components must be installed. Its high level of
of modularity means that other new components can be added in the future
new components can be added in the future without affecting those already integrated in the project.
project.

For more information on the base configuration, go to the [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">SDK móvil de iOS</a>***.

---

## 1. Introduction

**SDK Mobile** is a set of libraries (**Components**) that offers a series of functionalities and services, allowing its integration in a Mobile application in a simple and totally scalable way. Depending on the use case required, certain components must be installed. Its high level of modularity allows other new components to be added in the future without affecting those already integrated in the project.

The component dealt with in the current document is called **Tracking Component**. It is in charge of tracking and monitoring the information obtained during the execution of the rest of the **SDKMobile** components, sending it to the **Platform** services. This data can be tracked in real time on the **Platform**, while the process is running on the client's device.

Unlike the rest, this component does not work individually, it works transversally to the rest of the components installed in the *SDKMobile*. To track the information, it is kept in the background while the **SDKMobile** process is running.


### 1.1 Minimum requirements
The minimum iOS SDK version required is as follows:

Minimum iOS version: **13**

---

## 2. Component integration
 

Before integrating this component, it is recommended to read the documentation related to [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>*** and follow the instructions given in that document.

This section will explain step by step how to integrate the current component into an existing project.

### 2.1. Dependencies required for integration
To avoid conflicts and compatibility problems, in case you want to install the component in a project containing an old version of the Facephi libraries (Widgets), these must be completely removed before the installation of the **SDKMobile** components.

Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **mandatory** dependencies that must be previously installed (by adding them in the Podfile file of the project) are:

```
pod 'FPHISDKMainComponent', '~> 1.4.0'
```

To install the Selphi component, the following entry must be included in the application Podfile:

```
pod 'FPHISDKTrackingComponent', '~> 1.4.0'
```

Once the dependencies are installed, the different functionalities of the component can be used.

- In case of development with **xCode15** a post-installation script must be included:

![Image](/iOS/fix_ldClassic.png)

---

## 3. Component configuration

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

## 4. Use of the component
As previously mentioned, once initialized and configured the
**tracking** component will not need to be launched, since it will
will keep running in the background while the rest of the
components.


---

## 5. Reception of the result

The result is an *SDKResult* object that is returned by the SDK and will always have 3 fields:

*finishStatus*: Which will tell us if the operation has completed correctly. Possible values:
```
FinishStatus.STATUS_OK
FinishStatus.STATUS_ERROR
```
*errorType*: If the finishStatus indicates that there has been an error, this field will have the description of the error:

Tracking errors come in the *TrackingError* enum:

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
