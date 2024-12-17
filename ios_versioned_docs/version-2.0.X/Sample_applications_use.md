# Example applications

## Introduction

Example applications can be found in the GitHub repository:

[![IOS Repository](@site/static/img/github_50.png)](https://github.com/facephi/sdk-mobile-ios-samples/tree/2.0.X)<a href="https://github.com/facephi/sdk-mobile-ios-samples/tree/2.0.X" rel="nofollow">IOS Repository</a>


### Steps to Set Up and Run the Applications

1. To access our remote repository, you must install Cocoapods on the computer as indicated in [documentation](Mobile_SDK#21-add-private-repository).
2. The applicationId from the license provided by Facephi must be included in the application's Bundle Identifier.
3. Fill in the SdkConfigurationManager details.

### SdkConfigurationManager - Necessary Data for SDK Use

To ensure the application functions correctly, the following data must be filled in.

In the SdkConfigurationManager class:

- Necessary data if a service is going to be used to obtain the licenses:

```java
static let APIKEY_LICENSING = "..."
static let LICENSING_URL = URL(string: "...")!
```

- License string if a service is not to be used:

```java
static let license = ""
```

- Depending on how the license was added adapt the value of the variable:

```java
static let onlineLicensing = true
```

- Client identifier and type of operation to be used in the initialization:

```java
static let CUSTOMER_ID = "sdk-full-ios@ejemplo"
```

- For Selphi, in the selphiConfiguration class, the name of the resource ZIP file (which will be in the application's assets folder) and the configuration data:

```java
var configSelphi = SelphiConfigurationData()

let resourcesSelphi: String = {
    let selphiZipName = "fphi-selphi-widget-resources-sdk"
    return Bundle.main.path(
        forResource: selphiZipName,
        ofType: "zip") ?? ""
}()

...
configSelphi.resourcesPath = resourcesSelphi
...

```

- For SelphID, in the selphIDConfiguration class, the name of the ZIP file of resources (which will be in the application's assets folder) and the configuration data:

```java
var configSelphID = SelphIDConfigurationData()

let resourcesSelphID: String = {
    let selphiZipName = "fphi-selphid-widget-resources-sdk"
    return Bundle.main.path(
        forResource: selphiZipName,
        ofType: "zip") ?? ""
}()

...
configSelphID.resourcesPath = resourcesSelphID
...
```

- To make use of the verification services, the BASE_URL must be included:

```java
static let BASE_URL = ""
static let METHOD_PASSIVE_LIVENES = ""
static let METHOD_AUTH_FACIAL = ""
```

**IMPORTANT: The applicationId of the application must match the one requested in the license**