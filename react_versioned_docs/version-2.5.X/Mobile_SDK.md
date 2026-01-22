# Getting Started

## 1. Introduction

**Mobile SDK** is a set of libraries (**Components**) that offers a
series of functionalities and services, allowing its integration into a
Mobile application in a simple, totally scalable way. Depending on the
use case that is required, the installation of certain components must
be carried out. Its high level of modularity allows that, in the future,
other new components can be added without affecting at all those already
integrated into the project.


### 1.1 Minimum requirements

The minimum native version (Android and iOS) of the SDK are as follows:

-   Minimum Android version: **24 - JDK 17**
-   Minimum Build Tools version: **8.9.x**
-   Minimum Kotlin Android version **2.2.x**
-   Minimum iOS version: **13**
-   Minimum ReactNative version: **0.78.0**

Regarding the architecture of the mobile device:

-   armeabi-v7, x86, arm64 and x64

### 1.2 Plugin version

The current plugin version can be checked as follows:

-   Look for the ***package.json*** file at the root of the plugin.

-   The KEY/TAG ***version*** indicates the version.
  
  ---

## 2. Component integration

This section will explain step by step how to integrate the current
component into an existing project.

<div class="note">
<span class="note">:information_source:</span>
For this section, the following values ​​will be considered:

- **\<APPLICATION_PATH\>** - Path a la raíz de la aplicación (ejemplo: /folder/example)
- **\<PLUGIN_CORE_PATH\>** - Path a la raíz del plugin actual (ejemplo: /folder/sdk-core) 
</div>


### 2.1. Adding private repository
For security and maintenance reasons, the new ***SDKMobile*** components
are stored in private repositories requiring specific credentials. Those
credentials must be obtained from the support team of **Facephi**.

To configure the application and thus download the components in the
repository, you have to access **APPLICATION_PATH**. In that path,
you have to create a file with the following name:


```java
.npmrc
```

Inside that file you have to add the following information provided by
Facephi (**Credentials**):

```java
registry=https://registry.npmjs.org/
@facephi:registry=https://facephicorp.jfrog.io/artifactory/api/npm/npm-pro-fphi/
//facephicorp.jfrog.io/artifactory/api/npm/npm-pro-fphi/:_password=<token-en-base64>
//facephicorp.jfrog.io/artifactory/api/npm/npm-pro-fphi/:username=<username>
//facephicorp.jfrog.io/artifactory/api/npm/npm-pro-fphi/:email=<user_email@***.com>
//facephicorp.jfrog.io/artifactory/api/npm/npm-pro-fphi/:always-auth=true
save-prefix='~'
```

<div class="warning">
<span class="warning">:warning:</span>
For the project to correctly retrieve the dependencies, the
**<u>credentials</u>** (**password, userame** and **email**) must be
configured correctly
</div>

#### 2.1.1. Add private iOS repository

<div class="warning">
<span class="warning">:warning:</span>
Access to our private repositories (**Cocoapods**) is required if you
want to access our iOS native libraries.
</div>

For security and maintenance reasons, the new ***SDKMobile*** components
are stored in private repositories requiring specific credentials. The
steps to configure this environment are the following:

-   First of all, we launch the command to install cocoapods
    with **Artifactory**.

```
sudo gem install cocoapods-art
```

-   In the case of using a Mac with **an M1 chip**, it exists the
    possibility of appearing errors during the installation, then it is
    recommended to use the following command instead:


```
sudo arch -arm64 gem install ffi; 
sudo arch -arm64 gem install cocoapods-art
```

<div class="note">
<span class="note">:information_source:</span>
If the issues still appear, try to uninstall Cocoapods and all the
dependencies entirely and start a new clean installation.
</div>

-   It is necessary to add the repository credentials in the file called **netrc**. For this task, from a Terminal, you have to execute:

```
nano ~/.netrc
```

And the following code snippet must be copied in that file:

```
machine facephicorp.jfrog.io
  login <USERNAME>
  password <TOKEN>
```

<div class="warning">
<span class="warning">:warning:</span>
It is essential to copy the previous fragment **exactly**. There is an
indentation before the ***login*** and ***password*** words formed
by <u>two spaces</u>.
</div>

- The repository with the private dependencies must be downloaded
    locally:

```
pod repo-art add cocoa-pro-fphi "https://facephicorp.jfrog.io/artifactory/api/pods/cocoa-pro-fphi"
```

- Finally, the repository must be updated:

```
pod repo-art update cocoa-pro-fphi
```

### 2.2. Plugin installation: Common

The plugin allows execution on **Android and iOS** platforms. This
section explains the common steps to all platforms. To install the
plugin, the following steps must be adopted:


- Make sure **react-native** is installed.

- Access **\<%APPLICATION_PATH%\>** at a terminal and run:

```
yarn add @facephi/sdk-core-react-native
```

<div class="warning">
<span class="warning">:warning:</span>
If executing a **pod** command occurs an error like the following:  
*arch: Can't find any plists for install*

It is recommended to launch every **pod** command with ***arch -x86_64 ***before them, for example:

- **pod install**
- **arch -x86_64 pod install**
</div>

- It is important to verify that the path to the plugin is correctly defined in **package.json**:

```
"dependencies": {
  "@facephi/sdk-core-react-native": "^2.0.0",
}
```

After running the above steps, you can start the app with the sdk/component installed.

***From Terminal***

For Android:

```
npx react-native run-android 
or 
npx react-native run-android --active-arch-only
```

For iOS:

```
npx react-native run-ios
```

***From different IDEs***


 Los proyectos generados en las carpetas de Android e iOS se pueden abrir, compilar y depurar usando Android Studio y XCode respectivamente.

### 2.3 Plugin installation: iOS

#### 2.3.1 Project configuration

For the iOS version, when adding our plugin to the final application,
the following points must be previously taken into account:

-   ***Add camera permissions:*** To use the component, you need to enable
    the camera permission in the application's ***info.plist*** file
    (included within the project in the ***ios*** folder). You will need
    to edit the file with a text editor and add the following
    *key/value* pair:

```
***<key>NSCameraUsageDescription</key>***
***<string>$(PRODUCT_NAME) uses the camera</string>***
```

#### 2.3.2 Update the Podfile

In the project podfile it will be necessary to add the information from
the private repository (see section 2.1). To do this, the following
lines must be added at the beginning of the file:


```
platform :ios, '13.0' //MIN VERSION
plugin 'cocoapods-art', :sources => ['cocoa-pro-fphi']
source 'https://cdn.cocoapods.org/'
```

#### 2.3.3 Possible issues

If environmental problems occur or the plugin is not updated after
making new changes (for example, problems occurred due to the bundle not
being generated correctly, or the libraries not being updated to the
correct versions), it is recommended to execute the following sequence
of instructions after launching the plugin:

-   Open the application's **ios** folder at a terminal.

-   Run the following command:

```
pod deintegrate
```
-   Remove the ***Podfile.lock***
-   Run the following command (or open the project with Xcode and run
    it):

```
pod install --repo-update  
```
and
```
pod repo-art update cocoa-pro-fphi
```

### 2.4 Plugin installation: Android
#### 2.4.1 Set Android SDK credentials

For security and maintenance reasons, the new ***SDKMobile*** components
are stored in private repositories requiring specific credentials. For
that reason, those credentials must be added to the **build.gradle**
file (inside the **repositories** section):


```
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

The credentials (*Username* and *Token*) must be correctly configured for the project to retrieve the dependencies correctly.

There are several ways to configure the repository access credentials:

- As environmental variables. For this purpose, you should launch from a Terminal the following commands (**RECOMMENDED**):

```
export USERNAME_ARTIFACTORY=YOUR_CREDENTIALS_USERNAME
export TOKEN_ARTIFACTORY=YOUR_CREDENTIALS_TOKEN
```

If the dependencies are not recognized when *synchronising* the environment, they must be included as environmental variables in the file:

> ~/.zshrc

or 

> ~/.bashrc

or

Your *script shell* default file.


- Included in the ***local.properties*** file with the following structure:

```
artifactory.user=YOUR_CREDENTIALS_USERNAME
artifactory.token=YOUR_CREDENTIALS_TOKEN
```

- Directly included in the *build.gradle* (**NOT RECOMMENDED**)

```
maven {
    Properties props = new Properties()
    def propsFile = new File('local.properties')
    if(propsFile.exists()){
        props.load(new FileInputStream(propsFile))
    }
    name = "external"
    url = uri("https://facephicorp.jfrog.io/artifactory/maven-pro-fphi")
    credentials {
        username = YOUR_CREDENTIALS_USERNAME
        password = YOUR_CREDENTIALS_TOKEN
    }
}
```


#### 2.4.2 Set Android SDK version

For Android, the minimum SDK version required by our native libraries is
**24**, so if your app has a *Minimum SDK* defined less than this, it
must be modified to avoid a compile error. To do this, access the
application's ***build.gradle*** file (located in the ***android***
folder) and modify the following parameter:


```
buildscript {
  ext {
    minSdkVersion = 24
  }
}
```
