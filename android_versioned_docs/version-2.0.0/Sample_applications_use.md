# Sample Applications Use

## Introduction

Sample applications can be found in the GitHub repository accessed from the button on the right in the top bar of this screen.

In the repository's Android folder, you can find sample applications for each version of the SDK released.

### Steps to Set Up and Run the Applications

1. It's necessary to include the user and token provided by Facephi in the local.properties file as indicated in [Repository](Mobile_SDK#21-add-private-repository).
2. The applicationId from the license provided by Facephi must be included in the application's Gradle.
3. Fill in the SdkData details.

### SdkData - Necessary Data for SDK Use

To ensure the application functions correctly, the following data must be filled in.

In the SdkData class:

- Necessary data if a service is going to be used to obtain the licenses:

```kotlin
val environmentLicensingData: EnvironmentLicensingData = EnvironmentLicensingData(
        apiKey = "....."
    )
```

- License string if a service is not to be used:

```kotlin
const val LICENSE = "...."
```

- Depending on how the license was added adapt the value of the variable:

```kotlin
  const val LICENSE_ONLINE = false
```

- Client identifier and type of operation to be used in the initialization:

```kotlin
const val CUSTOMER_ID = "...."
val OPERATION_TYPE = OperationType.ONBOARDING

```

- For Selphi, the name of the ZIP file of resources (which will be in the application's assets folder) and the configuration data:

```kotlin
const val SELPHI_RESOURCES = ".....zip"

val selphiConfiguration = SelphiConfigurationData(
        ...,
        resourcesPath = SELPHI_RESOURCES
    )
```

- For SelphID, the name of the ZIP file of resources (which will be in the application's assets folder) and the configuration data:

```kotlin
const val SELPHID_RESOURCES = "...zip"

val selphIDConfiguration = SelphIDConfigurationData(
       ...,
        resourcesPath = SELPHID_RESOURCES
    )
```

- IMPORTANT: The applicationId of the application must match the one requested in the license
