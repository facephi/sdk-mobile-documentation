# Advanced settings

## 1. Introduction

**SDK Mobile** is a set of libraries (**_Components_**) that offer a
series of functionalities and services, allowing their integration into
a Mobile application in a simple and totally scalable way. Certain
components must be installed depending on the use case required. Its
high level of modularity allows other new components to be added in the
future without affecting those already integrated into the project.

## 1.1. Minimum requirements

The minimum version of the Android SDK required is as follows:

- Minimum SDK (minSdk): **24**

- API Version: **35**

- Kotlin: **2.1.10**

- Plugin Gradle Android: **8.9.1**

---

## 2. Initial integration

This section will explain step by step how to integrate the basic
components into an existing project.

### 2.1. Add private gradle repository

For security and maintenance reasons, the new **_SDKMobile_** components
are stored in private repositories that require specific credentials to
access them. <u>These credentials</u> must be obtained through the
**Facephi** support team.

Once the credentials are obtained, the following code snippet to
configure the maven repository must be included in your project's
Gradle, or in the **settings.gradle** file of your project. It is
recommended to include it after _mavenCentral()_

```java
maven {
    Properties props = new Properties()
    def propsFile = new File('local.properties')
    if(propsFile.exists()){
        props.load(new FileInputStream(propsFile))
    }
    name="external"
    url = uri("https://facephicorp.jfrog.io/artifactory/maven-pro-fphi")
    credentials {
        username = props["artifactory.user"] ?: System.getenv("USERNAME_ARTIFACTORY")
        password = props["artifactory.token"] ?: System.getenv("TOKEN_ARTIFACTORY")
    }
}
```

The credentials (User and Token) must be correctly configured for the
project to retrieve the dependencies correctly.

There are several ways to configure the repository access credentials:

- As environment variables with the following name. For example:

  ```java
  export USERNAME_ARTIFACTORY=YOUR_CREDENTIALS_USERNAME
  export TOKEN_ARTIFACTORY=YOUR_CREDENTIALS_TOKEN
  ```

  **If the dependencies are not recognized when synchronising**, they
  must be included via environment variables in the file:

`~/.zshrc`

- Included in the _local.properties_ file with the following
  structure:

  ```java
  artifactory.user=YOUR_CREDENTIALS_USERNAME
  artifactory.token=YOUR_CREDENTIALS_TOKEN
  ```

### 2.2. Dependencies required for basic integration

To avoid conflicts and compatibility problems, if you want to install
the component in a project containing an old Facephi libraries
(**Widgets**) version, these must be removed entirely before installing
the **SDKMobile** components.

Currently, FacePhi libraries are distributed remotely through different
dependency managers. The **mandatory dependency** that must be
installed:

```java
implementation "com.facephi.androidsdk:sdk:$sdk_version"
```

---

## 3. SDK initialization

**It must be strictly avoided to initialize a controller that is not
going to be used**

Each component has a **_Controller_** that will allow access to its
functionality. Before they can be used, they must be properly
initialized. The steps to follow in the initialization are as follows:

1.  Include the Application object

2.  Decide whether the licence will be included via a _String_ or a
    _remote licensing service_ (**see section 3.1**).

3.  Include _TrackingController_ in case you want to connect to the
    platform.

**Point 3** is optional and would require using the **Tracking**
component (more information about this module in its documentation).

Example without _TrackingController:_

```java
val sdkConfig = SdkConfigurationData(
    sdkApplication = SdkApplication(application),
    licensing = LicensingOffline("LICENSE")
)

val result = SDKController.initSdk(sdkConfig)

when (result) {
  is SdkResult.Success -> Napier.d("APP: INIT SDK: OK")
  is SdkResult.Error -> Napier.d(
          "APP: INIT SDK: KO - ${result.error.name}"
        )
}
```

Example with _TrackingController:_

```java
val sdkConfig = SdkConfigurationData(
    sdkApplication = SdkApplication(application),
    licensing = LicensingOffline("LICENSE"),
    trackingController = TrackingController(),
)

val result = SDKController.initSdk(sdkConfig)

when (result) {
  is SdkResult.Success -> Napier.d("APP: INIT SDK: OK")
  is SdkResult.Error -> Napier.d(
          "APP: INIT SDK: KO - ${result.error.name}"
        )
}
```

### 3.1. Licence injection

As discussed above, there are currently two ways to inject the licence:

#### a. Obtaining the licence through a service

Through a service that requires a URL and an API-KEY as an identifier.
This would avoid problems when manipulating the licence, as well as the
constant replacement of these licences when a problem arises
(malformation or improper modification, expiry of the licence...).

Kotlin:

```java
val sdkConfig = SdkConfigurationData(
    sdkApplication = SdkApplication(application),
    licensing = LicensingOnline(EnvironmentLicensingData(
            apiKey = "...")
      )),
)

val result = SDKController.initSdk(sdkConfig)

when (result) {
  is SdkResult.Success -> Napier.d("APP: INIT SDK: OK")
  is SdkResult.Error -> Napier.d(
          "APP: INIT SDK: KO - ${result.error.name}"
        )
}
```

Java:

```java
SDKController.INSTANCE.initSdk(
    new SdkApplication(activity.getApplication()),
    new LicensingOnline(new EnvironmentLicensingData(
      apiKey = "...")),
    sdkResult ->
    {
      if (sdkResult instanceof SdkResult.Success) {
        Napier.d("APP: INIT SDK: OK")
      } else if (sdkResult instanceof SdkResult.Error) {
        Napier.d("APP: INIT SDK: KO - ${it.error}")
      }
    }
  );
```

#### b. Injecting the licence as a String

You can assign the licence directly as a String, as follows:

Kotlin:

```java
val sdkConfig = SdkConfigurationData(
    sdkApplication = SdkApplication(application),
    licensing = LicensingOffline("LICENSE"),
)

val result = SDKController.initSdk(sdkConfig)

when (result) {
  is SdkResult.Success -> Napier.d("APP: INIT SDK: OK")
  is SdkResult.Error -> Napier.d(
          "APP: INIT SDK: KO - ${result.error.name}"
        )
}
```

Java:

```java
SDKController.INSTANCE.initSdk(
  new SdkApplication(activity.getApplication()),
  new LicensingOffline("LICENSE"),
  sdkResult ->
  {
    if (sdkResult instanceof SdkResult.Success) {
      Timber.d("APP: INIT SDK: OK")
    } else if (sdkResult instanceof SdkResult.Error) {
      Timber.d("APP: INIT SDK: KO - ${it.error}")
    }
  }
);
```

### 3.2. Receipt of errors

On the error side, we will have the SdkError class.

Error list:

- EMPTY_LICENSE: Empty license
- INIT_AI_MODELS(error: String): Error obtained in the model download service
- INIT_FLOW (error: String): Error obtained in the flow download service
- LICENSE_CHECKER_ERROR (error: String): Error obtained verifying if the license is correct
- LICENSING_ERROR (error: String): Error obtained in the license download service
- NETWORK_CONNECTION_ERROR: Internet connection error
- TRACKING_ERROR (error: String): Error obtained when starting the tracking controller

---

## 4. Start a new operation

Every time you want to start the flow of a new operation (examples of
operations would be _onboarding, authentication, videoCall_, etc.), it
is essential to tell the **SDKController** that it is going to start, so
the SDK will know that the following **Component** calls (also called
**Steps**) will be part of that operation. This is necessary _to track_
the global information of this operation on the platform in a
satisfactory way.

When starting a process or flow, **always** call the **newOperation**
method

This method has 3 input parameters:

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

Kotlin:

```java
val result = SDKController.newOperation(
        operationType = OperationType.ONBOARDING,
        customerId = "customer_id",
        steps = listOf(Step.SELPHI_COMPONENT, Step.SELPHID_COMPONENT))
when (result) {
    is SdkResult.Success -> {
        Timber.d("APP: NEW OPERATION OK")
    }
    is SdkResult.Error -> {
        Timber.d("APP: NEW OPERATION ERROR: ${result.error.name}")
    }
}
```

Java:

```java
SDKController.INSTANCE.newOperation(
        OperationType.ONBOARDING,
        "customer_id",
        [Step.SELPHI_COMPONENT, Step.SELPHID_COMPONENT]
        ){
          if (sdkResult instanceof SdkResult.Success) {
            Napier.d("APP: NEW OPERATION: OK")
          } else if (sdkResult instanceof SdkResult.Error) {
            Napier.d("APP: NEW OPERATION: KO - ${it.error}")
          }
        }
  );
```

- **Unknown** flow (the tracked operation will appear on the platform
  with ellipses). Example of implementation:

Kotlin:

```java
val result = SDKController.newOperation(
        operationType = OperationType.ONBOARDING,
        customerId = "customer_id",
when (result) {
    is SdkResult.Success -> {
        Timber.d("APP: NEW OPERATION OK")
    }
    is SdkResult.Error -> {
        Timber.d("APP: NEW OPERATION ERROR: ${result.error.name}")
    }
}
```

Java:

```java
 SDKController.INSTANCE.newOperation(
        OperationType.ONBOARDING,
        "customer_id"
        ){
          if (sdkResult instanceof SdkResult.Success) {
            Napier.d("APP: NEW OPERATION: OK")
          } else if (sdkResult instanceof SdkResult.Error) {
            Napier.d("APP: NEW OPERATION: KO - ${it.error}")
          }
        }
  );
```

`sdkResult` → Contains in data the information of the operation
created.

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


> If creating a new operation returns an **INTERNAL_ERROR**, it is 
> mainly due to a security issue. To investigate the cause, you can retrieve 
> the token associated with the error, which provides additional information for analysis.
>
> ```java
> if (result.error is SdkError.INTERNAL_ERROR){
>  val token = (result.error as SdkError.INTERNAL_ERROR).error
> }
> ```


---

## 5. Launch of components

Once the **new operation** has been created **(section 4)**, the
different SDK drivers can be launched. To consult this information,
access the **documentation for each component**.

Launch example:

```java
val result = SDKController.launch(XController(ConfigurationData()))
when (result) {
    is SdkResult.Success -> {
        //Result OK
        it.data
    }
    is SdkResult.Error -> {
        //Result KO
        it.error.name
    }
}
```

Java:

```java
SDKController.INSTANCE.launch(
    new XController(new ConfigurationData()) {
        if (sdkResult instanceof SdkResult.Success) {
            //Result OK
            it.data
          } else if (sdkResult instanceof SdkResult.Error) {
            //Result KO
            it.error.name
          }
    }
)
```

---

## 6. Result return

The result of each component will be returned through the SDK, keeping
always the same structure through the **_SdkResult_** class, whose class
is a Sealed Class that can have two possible states:

- **SdkResult.Success**: Indicates that the operation has finished
  successfully and inside it has:

  - **_data:_** Contains the type of data that is necessary
    according to the process/component launched.

- **SdkResult.Error**

  - **_error:_** Contains the type of data that is necessary
    according to the process/component launched.

The documentation for each specific component will provide a breakdown
of the different fields this object can return.

Example of use:

```java
when (result) {
    is SdkResult.Success -> {
        Napier.d("Selphi: OK")
        // SelphiResult:
        // result.data.bestImage
    }

    is SdkResult.Error -> Napier.d("Selphi: KO - ${result.error.name}")
}
```
---

## 7. Security

By default, the SDK will not allow operations to start on devices where emulation or rooting is detected. If you want to disable this security check:

```java
SDKController.securityMode(enable = false)
```

---

## 8. Close session / Logout

**Before the application is destroyed**, the SDK session must be closed
to notify the platform of its completion. To do this, the following line
of code is executed:

```java
SDKController.closeSession()
```

If a logout is performed, it will not be possible to launch controllers
until a new operation is started again.

---

## 9. Auxiliary controllers

This section includes other controllers and auxiliary operations, some
of them optional, which may be necessary for the correct completion of
the flow.

These fields are necessary for communication with the **Facephi**
service, in the event of any **verification** and _tracking_ of a
specific operation.

### 9.1 Getting the OperationId

```java
val result = SDKController.launch(GetOperationIdController())
Napier.d("Operation ID ${result}")
```

### 9.2 Getting the OperationType

```java
val result = SDKController.launch(GetOperationTypeController())
Napier.d("Operation type ${result}")
```

### 9.3 Getting the SessionId

```java
val result = SDKController.launch(GetSessionIdController())
Napier.d("Session ID ${result}")
```

### 9.4 Getting the CustomerID

```java
val result = SDKController.launch(GetCustomerIdController())
Napier.d("Customer ID ${result}")
```

### 9.5 Setting the CustomerID

```java
SDKController.launch(CustomerIdController("CustomerId"))
```

---

## 10. Debugging and error-handling options

Certain options in the SDK allow an increase in the debug logs in order
to check that everything is working correctly.

### 10.1. Error checking of Tracking connections to the platform

Once the SDK has started correctly, certain settings can be applied to
have more information about possible tracking errors, which can be
tracked through this driver release:

```java
SDKController.launch(TrackingErrorController {
    Napier.d("Tracking Error: ${it.name}")
})
```

### 10.2. Activation of General Debugging Logs

```java
 if (BuildConfig.DEBUG) {
  SDKController.enableDebugMode()
 }
```

---

## 11. Application Event Tracking and Analysis

Event functionality allows key interactions within the application, such as screen changes and user actions, to be recorded and interpreted, facilitating real-time behavioural analysis. 

Each event is sent with a specific timestamp, type and detail, providing structured tracking and optimising the user experience with accurate, actionable data.

```java
 SDKController.getAnalyticsEvents { time, componentName, eventType, info ->
            Log.i { "EVENTS", "*** $time - ${componentName.name} -" +
                " ${eventType.name} -  ${info ?: ""} " }
        }
```

---