# Quickstart

## Latest Available Version

```text
2.3.5
```

## 1. Introduction

**Mobile SDK** is a set of libraries (**Components**) that enable creating a tailored product for each client.

### 1.1 Minimum Requirements

The minimum required Android SDK configuration is:

- Minimum SDK (minSdk): **24**
- API Version: **35**
- Kotlin: **2.1.21**
- Android Gradle Plugin: **8.9.3**

---

## 2. Quickstart

Below are the 5 steps required to start using the SDK.

### 2.1 Configure the Repository and Base Dependency

For security and maintenance, the new components of the ***SDKMobile*** are hosted in private repositories that require specific credentials. Obtain these credentials from the **Facephi** support team.

Include the following in your **settings.gradle** file:

```java
mavenCentral()
maven {
    Properties props = new Properties()
    def propsFile = new File('local.properties')
    if(propsFile.exists()){
        props.load(new FileInputStream(propsFile))
    }
    name = "external"
    url = uri("https://facephicorp.jfrog.io/artifactory/maven-pro-fphi")
    credentials {
        username = props["artifactory.user"] ?: System.getenv("USERNAME_ARTIFACTORY")
        password = props["artifactory.token"] ?: System.getenv("TOKEN_ARTIFACTORY")
    }
}
```

Add the credentials to your *local.properties* as follows:

```properties
artifactory.user=YOUR_CREDENTIALS_USERNAME
artifactory.token=YOUR_CREDENTIALS_TOKEN
```

The **mandatory** base dependency for the SDK is:

```java
implementation "com.facephi.androidsdk:sdk:$version"
```

Add additional component dependencies as needed to complete functionality.

### 2.2 Initialize the SDK

The SDK runs through a main controller (`SDKController`) that must be initialized before using any features. Facephi will provide an `apiKey` for licensing.

```java
val sdkConfig = SdkConfigurationData(
    sdkApplication = SdkApplication(application),
    licensing = LicensingOnline(EnvironmentLicensingData(
        apiKey = "..."
    ))
)

val result = SDKController.initSdk(sdkConfig)

when (result) {
    is SdkResult.Success -> Log.d("APP: INIT SDK: OK")
    is SdkResult.Error -> Log.d("APP: INIT SDK: KO - ${result.error.name}")
}

if (BuildConfig.DEBUG) {
    SDKController.enableDebugMode()
}
```

### 2.3 Start Operation

An operation must be started before launching any SDK process.

This method accepts three parameters:

1. **operationType**: Specifies ONBOARDING or AUTHENTICATION.
2. **customerId**: The application-level user identifier.
3. **steps**: A list of predefined steps for the operation.

```java
val result = SDKController.newOperation(
    operationType = OperationType.ONBOARDING,
    customerId = "customer_id",
    steps = listOf(Step.SELPHI_COMPONENT, Step.SELPHID_COMPONENT)
)
when (result) {
    is SdkResult.Success -> Timber.d("APP: NEW OPERATION OK")
    is SdkResult.Error -> Timber.d("APP: NEW OPERATION ERROR: ${result.error.name}")
}
```

### 2.4 Launch Components

The SDK’s functionality is composed of various components, each with its own controller launched via `SDKController`.

```java
val result = SDKController.launch(ExampleController(ConfigurationData()))
when (result) {
    is SdkResult.Success -> {
        // Result OK
        it.data
    }
    is SdkResult.Error -> {
        // Result KO
        it.error.name
    }
}
```

See detailed launch instructions in the following sections:

- [Platform Connection](./Tracking_Component)
- [Facial Capture](./Selphi_Component)
- [Document Capture](./SelphID_Component)
- [Voice Capture](./Voice_Component)
- [NFC Capture](./NFC_Component)
- [Fingerprint Capture](./Phingers_Component)
- [Video Call](./Video_Call_Component)
- [Video Identification](./Video_Id_Component)
- [Video Recording](./Video_Recording_Component)
- [Flow (Continuous Launch)](./Flow_Component)

### 2.5 Close Session

Before closing your application, close the SDK session:

```java
SDKController.closeSession()
```

