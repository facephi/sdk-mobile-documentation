# Getting Started

## 1. Introduction

**SDK Mobile** is a set of libraries (**_Components_**) that offer a
series of functionalities and services, allowing their integration into
a Mobile application in a simple and totally scalable way. Certain
components must be installed depending on the use case required. Its
high level of modularity allows other new components to be added in the
future without affecting those already integrated into the project.

### 1.1 Minimum requirements

The minimum version of the iOS SDK required is as follows:

- iOS: **13**

---

## 2. Initial integration

This section will explain step by step how to integrate the basic
components into an existing project.

### 2.1. Add private gradle repository

To access our remote repository, you must install **Cocoapods** on the
computer.

For security and maintenance reasons, the new **_SDKMobile_** components
are stored in private repositories requiring specific credentials.
<u>These credentials</u> must be obtained through the **Facephi**
support team. The steps to prepare the environment are the following:

- First of all, we launch the command to install cocoapods
  with **Artifactory**.

```java
sudo gem install cocoapods-art
```

- In the case of using a Mac with **an M1 chip**, it exists the
  possibility of appearing errors during the installation, so it is
  recommended to use the following command instead:

```java
sudo arch -arm64 gem install ffi; sudo arch -arm64 gem install cocoapods-art
```

If the issues still appear, try to uninstall Cocoapods and all the
dependencies entirely and start a new clean installation.

- It is necessary to add the repository credentials in the file
  called **netrc**. For this task, from a _Terminal_, you have to
  execute:

```java
$ nano ~/.netrc
```

And the following code snippet must be copied in that file:

```java
machine facephicorp.jfrog.io
  login <USERNAME>
  password <TOKEN>
```

It is essential to copy the previous fragment **exactly**. There is an
indentation before the **_login_** and **_password_** words formed
by <u>two spaces</u>.

- Finally, it must be added the repository that contains the private
  dependencies:

```java
pod repo-art add cocoa-pro-fphi "https://facephicorp.jfrog.io/artifactory/api/pods/cocoa-pro-fphi"
```

### 2.2. Dependencies required for basic integration

To avoid conflicts and compatibility problems, if you want to install
the component in a project containing an old Facephi libraries
(_Widgets_) version, these must be removed entirely before installing
the **_SDKMobile_** components.

- Currently, FacePhi libraries are distributed remotely through
  different dependency managers, in this case, **_Cocoapods_**.
  **Mandatory** dependencies that must be installed beforehand (adding
  them to the _Podfile_):

```java
plugin 'cocoapods-art', :sources => [
  'cocoa-pro-fphi’
]

source 'https://cdn.cocoapods.org/'

target 'Example' do
  pod 'JWTDecode'
  pod 'SwiftFormat/CLI'
  pod 'IQKeyboardManagerSwift'
  pod 'FPHISDKMainComponent'
  pod 'FPHISDKCoreComponent'

   post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['EXPANDED_CODE_SIGN_IDENTITY'] = ""
      config.build_settings['CODE_SIGNING_REQUIRED'] = "NO"
      config.build_settings['CODE_SIGNING_ALLOWED'] = "NO"
    end
  end
end
...
end
```

- To update the current dependencies, before executing the **_pod
  install_** command, it is necessary to use the following command
  that allows to update the local repository:

  ```java
  pod repo-art update cocoa-pro-fphi
  ```

### 2.3. Possible issues

If the integrator uses a Macbook with **M1 Chip**, the cocoapods-art
installation may fail. Due to that, it is necessary to take into account
the following:

- If _Cocoapods_ was installed using _Homebrew_ it is possible to have
  several issues.

- It is recommended to install cocoapods and cocoapods-art through
  _Gem_.

The following code snippet allows the developer to do the required steps
to prepare the environment and solve the issues commented previously:

```java
 #! /bin/zsh

install_cocoapods () {
    echo "Installing cocoapods with gem"
    # Creating new gems home if it doesnt't exist
    if [ ! -d "$HOME/.gem" ]; then
        mkdir "$HOME/.gem"
    fi
    # Adding to current session
    export GEM_HOME="$HOME/.gem"
    export PATH="$GEM_HOME/bin:$PATH"

    # Adding for future sessions
    if test -f "$HOME/.zshrc"; then
        echo 'Adding $GEM_HOME env var and then adding it to your $PATH'
        echo '' >> "$HOME/.zshrc"
        echo 'export GEM_HOME="$HOME/.gem"' >> "$HOME/.zshrc"
        echo 'export PATH="$GEM_HOME/bin:$PATH"' >> "$HOME/.zshrc"
        echo 'alias pod='arch -x86_64 pod'' >> "$HOME/.zshrc"
    fi

    # Installing cocoapods
    gem install cocoapods
    sudo arch -x86_64 gem install ffi
    which pod
    pod --version
    gem install cocoapods-art
}

uninstall_cocoapods_homebrew () {
    which -s brew
    if [[ $? != 0 ]] ; then
        echo "Homebrew not installed, skipping uninstalling cocoapods from
homebrew"
    else
        brew uninstall cocoapods
    fi
}

if ! type "pod" > /dev/null; then
    echo "You don't have cocoapods installed..."
else
    echo "Trying to uninstall it from homebrew first"
    uninstall_cocoapods_homebrew
fi

install_cocoapods
```

In the case of using **_xCode15_**, it is recommended to use the
following configuration:

<!-- <img src="ios/2643591524" -->

The **-ld_classic** flag must be added in _Other Linker Flags_ in the
_Build Settings_ section of the application.

---

## 3. SDK initialization

**It must be strictly avoided to initialize a controller that will not
be used**.

Each component has a **_Controller_** that will allow access to its
functionality. Before they can be used, they must be properly
initialized. The steps to follow in the initialisation are as follows:

1.  Initiate the controllers that will be used.

2.  Decide if the license will be included by string or using a
    licensing service (more details in **section** **3.1**), and start
    the SDK.

3.  If the initialization returns a .STATUS_OK, then the SDK Controller
    will be ready to start with the process.

```java
 let trackingController = TrackingController(trackingError: { trackingError in
      self.log("TRACKING ERROR: \(trackingError)")
  })

// MANUAL License
SDKController.shared.initSdk(license: SdkConfigurationManager.LICENSE, output: { sdkResult in
    if sdkResult.finishStatus == .STATUS_OK {
        self.log("Licencia manual seteada correctamente")
    } else {
        self.log("La licencia manual no es correcta")
    }
}, trackingController: trackingController)

// AUTO License
SDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in
    if sdkResult.finishStatus == .STATUS_OK {
        self.log("Licencia automática seteada correctamente")
    } else {
        self.log("Ha ocurrido un error al intentar obtener la licencia: \(sdkResult.errorType)")
    }
}, trackingController: trackingController)


```

###  3.1 Licence injection

As discussed above, there are currently two ways to inject the licence:

#### a. Obtaining the licence through a service

Through a service that requires a URL and an API-KEY as an identifier.
This would avoid problems when manipulating the licence, as well as the
constant replacement of these licences when a problem arises
(malformation or improper modification, expiry of the licence...).

```java
// AUTO License
SDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in
    if sdkResult.finishStatus == .STATUS_OK {
        self.log("Licencia automática seteada correctamente")
    } else {
        self.log("Ha ocurrido un error al intentar obtener la licencia: \(sdkResult.errorType)")
    }
}, trackingController: trackingController)
```

#### b. Injecting the licence as a String

You can assign the licence directly as a String, as follows:

```java
// MANUAL License
SDKController.shared.initSdk(license: SdkConfigurationManager.LICENSE, output: { sdkResult in
    if sdkResult.finishStatus == .STATUS_OK {
        self.log("Licencia manual seteada correctamente")
    } else {
        self.log("La licencia manual no es correcta")
    }
}, trackingController: trackingController)
```

---

## 4. Start a new operation

Every time you want to start the flow of a new operation (examples of
operations would be _onboarding, authentication, videoCall_, etc.), it
is essential to tell the **SDKController** that it is going to start so
the SDK will know that the following **Component** calls (also called
**Steps**) will be part of that operation. This is necessary _to track_
the global information of this operation on the platform in a
satisfactory way.

When starting a process or flow, **always** call the **newOperation**
method

This method has three input parameters:

1.  **operationType**: Indicates whether an ONBOARDING or AUTHENTICATION
    2 process is to be performed.

2.  **customerId**: Unique user ID if available (controlled at the
    application level).

    1.  This parameter will be reflected for each operation in the
        platform.

3.  **steps**: List of steps of the operation if they have been
    previously defined.

    1.  This parameter will be reflected for each operation in the
        platform.

There are two ways to perform this operation start, depending on whether
the **steps that will form the flow** of the registration or
authentication process are known (in case the components are executed
sequentially and always in the same way) or, on the contrary, if the
flow **is not defined** and is unknown (for example, the final customer
is the one who decides the order of execution of the components).

- **Known** flow (the tracked operation will appear on the platform
  with all the steps in the list). Example of implementation:

```java
SDKController.shared.newOperation(operationType: OperationType.X, customerId: "customerId", steps: [.SELPHI, .SELPHID, .OTHER("CUSTOM_STEP")], output: { _ in })
```

- **Unknown** flow (the tracked operation will appear on the platform
  with ellipses). Example of implementation:

```java
SDKController.shared.newOperation(operationType: OperationType.X, customerId: "customerId", output: { _ in})
```

`sdkResult` → Contains in data the information of the operation created.

**Once the operation has been created**, the SDK components associated
with this operation can be executed. <u>Consult</u> the specific
documentation for each <u>component</u> to find out how to do this.

### 4.1 Existing types of operation

Currently, the following operations exist, during which certain
**Components (STEPS)** are used.

Below is a table showing the relationship between operations and steps:

| **Operation (OperationType)** | **Component (Step)**                   | Description                                                                                                          |
| ----------------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ONBOARDING                    | SELPHI_COMPONENT<br/>SELPHID_COMPONENT | - Facial validation of a selfie against a document's face <br/> - Document OCR extraction <br/> - Liveness detection |
| AUTHENTICATION                | SELPHI_COMPONENT                       | - Face validation using templates <br/> - Liveness detection                                                         |

This list will be expanded in future SDK updates as new components and
use cases are released.

---

## 5. Launch of components

Once the **new operation** has been created **(section 4)**, the
different SDK drivers can be launched. To consult this information,
access the **documentation for each component**.

---

## 6. Result return

El resultado de cada componente será devuelto a través de la SDK
manteniendo siempre la misma estructura de 3 campos:

1.  **finishStatus**: Que nos indicará si la operación ha finalizado
    correctamente. Posibles valores `FinishStatus.STATUS_OK`,
    `FinishStatus.STATUS_ERROR`

2.  **errorType**: Si _finishStatus_ indica que ha habido un error, este
    campo tendrá la descripción del mismo.

3.  **data**: Tendrá los datos de respuesta de la función del SDK. Este
    campo será diferente dependiendo del componente que se haya
    ejecutado. En la documentación de cada componente específico se
    desglosarán los diferentes campos que puede devolver este objeto.

The documentation for each specific component will provide a breakdown
of the different fields that this object can return.

---

## 7. Close session / Logout

**Before the application is destroyed**, the SDK session must be closed
to notify the platform of its completion. To do this, the following line
of code is executed:

```java
SDKController.shared.closeSession()
```

If a logout is performed, it will not be possible to launch controllers
until a new operation is started again.

---

## 8. Debugging and error-handling options

If a component is called, it will return a SdkResult as output. The
following code fragment is an example of this:

```java
        let controller = ComponentController(data: ComponentConfigurationData, output: { sdkResult in
           print(sdkResult.errorType)
        }, viewController: viewController)
        SDKController.shared.launch(controller: controller)
```

The .errorType attribute contains the error typology. They are defined
in the documentation of each component.

The possible error types are the following:

```java
public enum ErrorType: String, Error {
    case CANCEL_BY_USER
    case TIMEOUT
    case COMPONENT_CONTROLLER_ERROR
    case COMPONENT_CONTROLLER_DATA_ERROR
    case NETWORK_CONNECTION
    case UNKNOWN_ERROR
    case NFC_ERROR
    case NFC_INVALID_MRZ_KEY // ANDROID doesn't have this, it's important
    case CAPTURE_ERROR
    case NO_ERROR
    case CAMERA_PERMISSION_DENIED
    case PERMISSION_DENIED
    case SETTINGS_PERMISSION_ERROR
    case HARDWARE_ERROR
    case EXTRACTION_LICENSE_ERROR
    case UNEXPECTED_CAPTURE_ERROR
    case CONTROL_NOT_INITIALIZATED_ERROR // Not being used, could represent an error thrown when the app didn't init a component's Controller
    case BAD_EXTRACTOR_CONFIGURATION_ERROR
    case TOKEN_ERROR
    case PHINGERS_ERROR_CAPTURE // ANDROID has more specific Phingers Errors
    case LICENSING_ERROR_PACKAGE_NAME
    case LICENSING_ERROR_APPID_INVALID
    case LICENSING_ERROR_APIKEY_FORBIDDEN
    case LICENSING_ERROR_LICENSE_NOT_FOUND
    case VIDEO_SOCKET_TIMEOUT
    case VIDEO_ERROR
    case LICENSE_CHECKER_ERROR_INVALID_LICENSE
    case LICENSE_CHECKER_ERROR_INVALID_COMPONENT_LICENSE
    case NO_OPERATION_CREATED_ERROR
}
```

If there is no error and the result returns successfully, the error
type will be **NO_ERROR**.

---

## 9. SDK customization

The customization must be done through a class called
Theme**_Component_**Manager, where the word **_Component_** must be
changed by the name of the current component.

For example, _videoidComponent_ contains `ThemeVideoIdManager`, while
_videocallComponent_ has `ThemeVideoCallManager` …

This manager contains an instance of the type
Theme**_Component_**Protocol. To customize details, a new class must be
created and injected into the Theme**_Component_**Manager.

```java
class CustomThemeComponent: ThemeComponentProtocol {
    var images: [R.Image: UIImage?] = [:]

    var colors: [R.Color: UIColor?] = [R.Color.MessageText: UIColor.red]

    var name: String {
        "custom"
    }

    var fonts: [R.Font: String] = [.regular: UIFont(...)]

    var dimensions: [R.Dimension: CGFloat] {
        [.fontBig: 8]
    }
}
```

This must be done before the initialization of the controller we want to
use:

```java
// Controller component intialization
let controller = ComponentController(...)
// Instance of the custom instance
ThemeComponentManager.setup(theme: CustomThemeComponent())
// Controller launch
SDKController.shared.launch(controller: controller)
```
