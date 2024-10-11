## Behavior Component

## 0. SDK Mobile base requirements

**SDK Mobile** is a set of libraries (**Components**) that offers a series of functionalities and services, allowing its integration in a Mobile application in a simple and totally scalable way. Depending on the use case required, certain components must be installed. Its high level of modularity allows other new components to be added in the future without affecting those already integrated in the project

For more information on the base configuration, go to the [1.5.X][EN] **_<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>_** section.

---

## 1. Introduction

The _Component_ dealt with in the current document is called the
**\*Behaviour** Component. It is responsible for
is in charge of tracking and analysing the user's behaviour
through the **SDKMobile** components, sending it to the **Feedzai** services.
services of **Feedzai**.

Unlike the rest, this component does not work individually, it works transversally.
individually, it works transversally to the rest of the components installed in the **SDKMobile**, sending it to the **Feedzai** services.
components installed in the _SDKMobile_. In order to track the information, it is kept in the background while the process is running.
in the background while the **SDKMobile** process is running.

---

## 2. Component integration

This section will explain step by step how to integrate the current component into an existing project.

### 2.1. Dependencies required for integration

To avoid conflicts and compatibility problems, in case you want to install the component in a project containing an old version of the Facephi libraries (Widgets), these must be completely removed before the installation of the **SDKMobile** components.

Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **mandatory** dependencies that must be previously installed (by adding them in the Podfile file of the project) are:

```
pod 'FPHISDKMainComponent', '~> 1.5.0'
```

To install the Behaviorcomponent, the following entry must be included in the Podfile of the application:

```
pod 'FPHISDKBehaviorComponent', '~> 1.5.0'
```

Once the dependencies are installed, the different functionalities of the component can be used.

- In case of development with **xCode15** a post-installation script must be included:

![Image](/ios/fix_ldClassic.png)

---

## 3. Component configuration

The BehaviorController will only be added in case of having the sdkMobile behaviour.

The import is added:

```
import behaviorComponent
```

Initialise:

```

behaviorController = BehaviorController(autoLogoutAction: {
                      print("ACTIVE DEFENSE")
                      return true
                    },
                    behaviorError: { behaviorError in
                      print("BEHAVIOR ERROR: \(behaviorError)")
                    }, debugMode: false)
```

It is added in the initSDK:

```

// AUTO License
SDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in
    if sdkResult.finishStatus == .STATUS_OK {
        self.log("Licencia automática seteada correctamente")
    } else {
        self.log("Ha ocurrido un error al intentar obtener la licencia: \(sdkResult.errorType)")
    }
}, behaviorController: behaviorController

```

---

## 4. Use of the component

As previously mentioned, once the **behaviour/behaviour** component has been initialised and configured, it will not be necessary to launch it.
behaviour component is initialised and configured, it will not be necessary to launch it, as it will keep running in the background while the
it will keep running in the background while the rest of the components are running.
other components are running.

Once the application already has a user identifier, it will have to
call the next process to register the user.

```java
       behaviorController = BehaviorController(autoLogoutAction: {
                self.mainVC.showAlert(msg: "ACTIVE DEFENSE")
                return true
            },
            behaviorError: { behaviorError in
                self.log("BEHAVIOR ERROR: \(behaviorError)")
            }, debugMode: false)

```

---
