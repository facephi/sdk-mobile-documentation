# Example applications

## Introduction

Example applications can be found in the GitHub repository:

[![IOS Repository](@site/static/img/github_50.png)](https://github.com/facephi/sdk-mobile-ios-samples/tree/2.0.x)<a href="https://github.com/facephi/sdk-mobile-ios-samples/tree/2.0.x" rel="nofollow">IOS Repository</a>


### Steps to configure and run applications

#### 1.Initial integration

This section will explain step by step how to integrate the current component into an existing project.

##### Add private repository
<div class="warning">
<span class="warning">:warning:</span>
To have access to our private repository, it is required to have previously installed **Cocoapods** on the machine.

For security and maintenance reasons, the new **_SDKMobile_** components are stored in private repositories that require specific credentials to access them. These credentials must be obtained through the Facephi support team. Here is how to prepare the environment to consume the components:
</div>

- First we install the command that will give us access to use cocoapods with **Artifactory**.

```java
sudo gem install cocoapods-art
```

- If you are using a Mac with **M1 chip**, errors may occur during installation and errors may arise in the future, if so, it is recommended to use the following command instead:
```java
sudo arch -arm64 gem install ffi; sudo arch -arm64 gem install cocoapods-art
```

If you have problems with the installation, completely uninstall cocoapods and all its dependencies to do a clean installation.

- We will need to add the repository to the list of the **netrc** file. To do this, from a Terminal, execute the following command:

```java
$ nano ~/.netrc
```

And we copy the following fragment with the corresponding data to the end of the file:

```java
machine facephicorp.jfrog.io
   login <USERNAME>
   password <TOKEN>
```

It is important to copy **exactly** the previous code fragment. The indentation before the words **login** and **password** is made up of two spaces.

- Finally the repository containing private dependencies will be added:

```java
pod repo-art add cocoa-pro-fphi "https://facephicorp.jfrog.io/artifactory/api/pods/cocoa-pro-fphi"
```

#### 2. License
It is necessary to include the applicationId of the license provided by Facephi in the application's Gradle.

#### 3. Configuration
Fill in the SdkData data.


### SdkData - Data required to use the SDK

For the application to work correctly, the following information must be filled out.

In the SdkData class:

- Necessary data if a service is going to be used to obtain licenses:
-licensingUrl
- apiKey
```java
         SDKController.shared.initSdk(
             licensingUrl: SdkConfigurationManager.LICENSING_URL,
             apiKey: SdkConfigurationManager.APIKEY_LICENSING,
             output: { sdkResult in
                 if sdkResult.finishStatus == .STATUS_OK {
                     self.sdkData = sdkResult.data ?? ""
                     self.log("Automatic license set correctly")
                 } else {
                     self.log("An error occurred while attempting to obtain the license: \(sdkResult.errorType)")
                 }
             })
```

- String of the license if a service is not going to be used:

```java
         SDKController.shared.initSdk(
             license: SdkConfigurationManager.license,
             output: { sdkResult in
                 if sdkResult.finishStatus == .STATUS_OK {
                     self.log("Manual license set correctly")
                 } else {
                     self.log("Manual license is not correct")
                 }
             })
```

- Client identifier and type of operation to be used in initialization:

```java
const val CUSTOMER_ID = "...."
val OPERATION_TYPE = OperationType.ONBOARDING

```

- For Selphi the name of the resource ZIP file (which will be in the application's assets folder) and the configuration data:

```java
var configSelphi = SelphiConfigurationData()

let resourcesSelphi: String = {
     let selfhiZipName = "fphi-selphi-widget-resources-sdk"
     return Bundle.main.path(
         forResource: selfhiZipName,
         ofType: "zip") ?? ""
}()
```

- For SelphID the name of the resource ZIP file (which will be in the application's assets folder) and the configuration data:
```java
var configSelphID = SelphIDConfigurationData()

let resourcesSelphID: String = {
     let selfhiZipName = "fphi-selphid-widget-resources-sdk"
     return Bundle.main.path(
         forResource: selfhiZipName,
         ofType: "zip") ?? ""
}()
        
```


- ***IMPORTANT: The applicationId of the application must match the one requested in the license***