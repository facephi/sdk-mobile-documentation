# Core Component - Android \[ENG\]

This document refers to **version 1.4.X** of the component

-   [1. Introduction](#CoreComponent-Android%5BENG%5D-1.Introduction)
    -   [1.1 Minimum
        requirements](#CoreComponent-Android%5BENG%5D-1.1Minimumrequirements)
-   [2. Component
    integration](#CoreComponent-Android%5BENG%5D-2.Componentintegration)
    -   [2.1. Add private
        repository](#CoreComponent-Android%5BENG%5D-2.1.Addprivaterepository)
    -   [2.2. Required dependencies for
        integration](#CoreComponent-Android%5BENG%5D-2.2.Requireddependenciesforintegration)
-   [3. Component
    initialisation](#CoreComponent-Android%5BENG%5D-3.Componentinitialisation)
    -   [3.1 Licence
        injection](#CoreComponent-Android%5BENG%5D-3.1Licenceinjection)
        -   [a. Obtaining the licence through a
            service](#CoreComponent-Android%5BENG%5D-a.Obtainingthelicencethroughaservice)
        -   [b. Injecting the licence as
            String](#CoreComponent-Android%5BENG%5D-b.InjectingthelicenceasString)
    -   [3.2 Enable Debug
        mode](#CoreComponent-Android%5BENG%5D-3.2EnableDebugmode)
-   [4. Start new
    operation](#CoreComponent-Android%5BENG%5D-4.Startnewoperation)
    -   [4.1 Existing types of
        operation](#CoreComponent-Android%5BENG%5D-4.1Existingtypesofoperation)
-   [5. Launch of
    components](#CoreComponent-Android%5BENG%5D-5.Launchofcomponents)
-   [6. Return of
    result](#CoreComponent-Android%5BENG%5D-6.Returnofresult)
-   [7. Close Session](#CoreComponent-Android%5BENG%5D-7.CloseSession)
-   [8. ExtraData
    Method](#CoreComponent-Android%5BENG%5D-8.ExtraDataMethod)
-   [9. SDK
    customisation](#CoreComponent-Android%5BENG%5D-9.SDKcustomisation)
    -   [9.1 Colours and
        logo](#CoreComponent-Android%5BENG%5D-9.1Coloursandlogo)
    -   [9.2 Texts](#CoreComponent-Android%5BENG%5D-9.2Texts)
    -   [9.3 Source](#CoreComponent-Android%5BENG%5D-9.3Source)
    -   [9.4 Buttons](#CoreComponent-Android%5BENG%5D-9.4Buttons)

## 1. Introduction

**Mobile SDK** is a set of libraries (**Components**) that offers a
series of functionalities and services, allowing its integration into a
Mobile application in a simple, totally scalable way. Depending on the
use case that is required, the installation of certain components must
be carried out. Its high level of modularity allows that, in the future,
other new components can be added without affecting at all those already
integrated into the project.

The Component addressed in the current document is called ***Core
Component***. This component is **mandatory installation**, regardless
of the use case, as it contains **generic functionality** to the entire
sdk, as well as allowing the use of more specific components. Its main
characteristics are the following:

-   Allows you to configure and initialise the other installed
    components

-   Allows you to make calls to components and get the relevant results

-   Licence management

### 1.1 Minimum requirements

The minimum Android SDK version required is as follows:

-   Minimum SDK (minSdk): **23**

-   API Version: **33**

-   Kotlin: **1.8.0**

------------------------------------------------------------------------

## 2. Component integration

This section will explain step by step how to integrate the current
component into an existing project.

### 2.1. Add private repository

For security and maintenance reasons, the new ***SDKMobile*** components
are stored in private repositories that require specific credentials to
access them. Those credentials must be obtained from the support team of
**Facephi**.

Once the credentials are obtained, the following code snippet must be
included to configure the maven repository in the **Gradle** of your
project, or in the **settings.gradle** file of your project. It is
recommended to include it after *mavenCentral()*

``` java
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

For the project to correctly retrieve the dependencies, the credentials
(**Username** and **Token**) must be configured correctly

There are several ways of configuring the repository access credentials:

-   As environment variables with the following name. For example:

    ``` java
    export USERNAME_ARTIFACTORY=YOUR_CREDENTIALS_USERNAME
    export TOKEN_ARTIFACTORY=YOUR_CREDENTIALS_TOKEN
    ```

    **If dependencies are not recognised when synchronising**, they must
    be included via environment variables in the file:

`~/.zshrc`

-   Incluidos en el fichero *local.properties* con la siguiente
    estructura:

    ``` java
    artifactory.user=YOUR_CREDENTIALS_USERNAME
    artifactory.token=YOUR_CREDENTIALS_TOKEN
    ```

### 2.2. Required dependencies for integration

To avoid conflicts and compatibility problems, if you wish to install
the component in a project that contains an old version of the Facephi
libraries (Widgets), these must be completely removed before installing
the **SDKMobile** components.

-   Currently, FacePhi libraries are distributed remotely through
    different dependency managers. The **mandatory** dependencies that
    must have been previously installed:

``` java
timber_version = '5.0.1'
appcompat_version = '1.6.1'
core_ktx_version = '1.9.0'
kotlinx_coroutines_version = '1.6.4'
kotlin_reflect_version = '1.7.10'
ktor_version = '1.6.7'
kotlinx_serialization_json_version = '1.3.3'

// 3rd Parties Dependencies
implementation "androidx.core:core-ktx:$core_ktx_version"
implementation "androidx.appcompat:appcompat:$appcompat_version"
implementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:$kotlinx_coroutines_version"
implementation "com.jakewharton.timber:timber:$timber_version"
implementation "io.ktor:ktor-client-serialization:$ktor_version"
implementation "org.jetbrains.kotlin:kotlin-reflect:$kotlin_reflect_version"
implementation "org.jetbrains.kotlinx:kotlinx-serialization-json:$kotlinx_serialization_json_version"

// Facephi Dependencies
implementation "com.facephi.androidsdk:license_checker_component:$versions.license_checker_component"
implementation "com.facephi.androidsdk:licensing_component:$versions.licensing_component"
```

-   Once the necessary dependencies have been installed, the different
    functionalities of the current **component** can be used:

    ``` java
    implementation "com.facephi.androidsdk:sdk:$sdk_version"
    implementation "com.facephi.androidsdk:core:$core_version"
    ```

------------------------------------------------------------------------

## 3. Component initialisation

Each of the components has a controller (Controller) that will allow
access to its own functionality. Before they can be used, they must be
properly initialised. **Initialising a controller that is not going to
be used should be strictly avoided.** The steps to follow in the
initialisation are:

1.  The **Application** object is include

2.  It is decided if the licence will be included through a String or
    with a remote licencing service (see **section 3.1**).

3.  The TrackingController if you wish to connect to the platform.

**Point 3** is optional, and would require using the Tracking component
(more information about this module in its own documentation).

``` java
 try {
/*   INIT WITH LICENSE STRING   */
  SDKController.initSdk(
          application,
          "LICENSE",
          TrackingController()
      ){
          log("Init SDK: ${it.finishStatus}")
      }
  }
          
```

### 3.1 Licence injection

As previously mentioned, there are currently two ways to inject the
licence:

#### a. Obtaining the licence through a service

Through a service that will simply require a URL and an API-KEY as an
identifier. This would avoid problems when manipulating the licence, as
well as the constant substitution of said licences when a problem arises
in this regard (malformation or improper modification, licence
expiry...)

``` java
/*   INIT WITH EnvironmentLicensingData   */

  SDKController.initSdk(
      application,
      EnvironmentLicensingData(
        url = "https://...",
        apiKey = "APIKEY"
      ),
      TrackingController()
  ){
      log("Init SDK: ${it.finishStatus}")
  }
} catch (e: SdkException) {
    Timber.d("APP: INIT ERROR ${e.errorType.name}")
}
```

#### b. Injecting the licence as String

You can assign the licence directly as a String, as follows:

``` java
/*   INIT WITH STRING   */
  SDKController.initSdk(
          application,
          "LICENSE",
          TrackingController()
      ){
          log("Init SDK: ${it.finishStatus}")
      }
  }
...
```

### 3.2 Enable Debug mode

To enable logging in *debug* mode, the following code snippet must be
included:

``` java
if (BuildConfig.DEBUG) {
    SDKController.enableDebugMode()
}
```

It should be emphasised that this must be carried out **as soon as the**
***sdkController*** **is created**, **before** the initialisations.

------------------------------------------------------------------------

## 4. Start new operation

Every time you wish to start the flow of a new operation (examples of
operations would be: onboarding, authentication, videocall,...) it is
essential to tell the **SDKController** that it is going to start, and
thus the SDK will know that the next calls of **Components** (also
called **Steps**) will be part of said operation. This is necessary to
*track* to the platform the global information of this operation
successfully.

When starting a process or flow, the **newOperation** method call should
**<u>always</u>** be made

This method has 3 input parameters:

1.  **operationType**: Indicates if an ONBOARDING or AUTHENTICATION
    process is going to be carried out

2.  **customerId:** User's unique id if any (controlled at the
    application level)

3.  **steps**: List of operation steps if they have been previously
    defined

There are 2 ways of carrying out this start of operation, depending on
whether **the steps** that will make up the registration or
authentication process flow **are known** (if the components are
executed sequentially and always in the same way) or, on the contrary,
if the flow **is not defined** and is unknown (for example, the end
client is the one who decides the order of execution of the components).

-   **Known** flow (the tracked operation will appear on the platform
    with all the steps on the list). Implementation example:

``` java
try {
    SDKController.newOperation(
        operationType = OperationType.ONBOARDING,        
        customerId = onboarding-android-sdk@facephi.com,
        steps = listOf(Step.SELPHI, Step.SELPHID)    
        )
} catch (e: SdkException) {
    Timber.d("APP: INIT ERROR ${e.errorType.name}")
}
```

-   Flow **unknown** (the *tracked* operation will appear on the
    platform with an ellipsis). Implementation example:

``` java
try {
    SDKController.newOperation(
        operationType = OperationType.ONBOARDING,        
        customerId = onboarding-android-sdk@facephi.com,    
        )
} catch (e: SdkException) {
    Timber.d("APP: INIT ERROR ${e.errorType.name}")
}
```

`sdkResult` → Contains in terms of data the information of the operation
created.

 

**<u>Once the operation has been created,</u>** the SDK components
associated with this operation can be executed. Consult the specific
documentation of each component to know how to do it.

### 4.1 Existing types of operation

Currently, there are the following operations, during which certain
**Components (STEPS)** are used. Below is a table with the relationship
between *operations* and *steps*:

<table class="confluenceTable" data-layout="default"
data-local-id="32fbe475-2014-4d4d-91f8-be4e77260ea5">
<tbody>
<tr class="header">
<th class="confluenceTh"><p><strong>Operación
(</strong><em><strong>OperationType</strong></em><strong>)</strong></p></th>
<th class="confluenceTh"><p><strong>Componente
(</strong><em><strong>Step</strong></em><strong>)</strong></p></th>
<th class="confluenceTh"><p><strong>Descripción</strong></p></th>
</tr>
&#10;<tr class="odd">
<td class="confluenceTd"><p>ONBOARDING</p></td>
<td class="confluenceTd"><ul>
<li><p>SELPHID</p></li>
<li><p>SELPHI</p></li>
</ul></td>
<td class="confluenceTd"><ul>
<li><p>Facial validation of a selfie against the face of a
document</p></li>
<li><p>Extraction of the document OCR</p></li>
<li><p>Liveness detection</p></li>
</ul></td>
</tr>
<tr class="even">
<td class="confluenceTd"><p>AUTHENTICATION</p></td>
<td class="confluenceTd"><ul>
<li><p>SELPHI</p></li>
</ul></td>
<td class="confluenceTd"><ul>
<li><p>Facial validation through templates</p></li>
<li><p>Liveness detection</p></li>
</ul></td>
</tr>
</tbody>
</table>

This list will be expanded in future SDK updates, as new components and
use cases appear.

------------------------------------------------------------------------

## 5. Launch of components

Once the **new operation has been created (section 4)**, the different
SDK controllers may be launched. To consult this information, you must
access the documentation of each of the specific components.

------------------------------------------------------------------------

## 6. Return of result

The result of each component will be returned through the SDK always
maintaining the same 3-field structure:

1.  **finishStatus**: That will tell us if the operation has finished
    correctly. Possible values FinishStatus.STATUS_OK,
    FinishStatus.STATUS_ERROR

2.  **errorType**: If *finishStatus* indicates that there has been an
    error, this field will contain the description of the error.

3.  **data:** It will have the response data from the SDK function. This
    field will be different depending on the component that has been
    executed. The documentation for each specific component will detail
    the different fields that this object can return.

------------------------------------------------------------------------

## 7. Close Session

**Before the application is to be destroyed**, the SDK session must be
closed to notify the platform of its termination. To do this, the
following line of code is executed:

``` java
SDKController.closeSession()
```

------------------------------------------------------------------------

## 8. ExtraData Method

The **extraData** method allows a tokenised, encrypted parameter with
the necessary information for its communication with the **Facephi
Verification Server (SDK).** With these services, there are the
necessary tools to deserialise and detokenise said parameters for their
later use. Below is the code needed to use this functionality:

``` java
SDKController.getExtraData {    
  when (it.finishStatus) {
        FinishStatus.STATUS_OK -> {
            Timber.i("Tokenizer extraData: OK")
                      it.data?.let { extraData ->
                        //extraData
                    )
            }            
        }
        FinishStatus.STATUS_ERROR -> Timber.i("Tokenizer extraData: KO - ${it.errorType.name}")
    }
}
```

This method is necessary for communication with the **Facephi** service
if you wish to perform any verification and wish to track a certain
operation.

------------------------------------------------------------------------

## 9. SDK customisation

This version of the SDK allows you to modify some visual characteristics
of the components. The following are possible changes that can be made.

It is recommended to add the modifications in both the **light** and
**dark** (night) themes.

### 9.1 Colours and logo

To change the colours and the logo of the SDK, you would have to include
an XML file in the client application (for example,
***sdk_styles.xml***) changing the hex (RGB) value of each main colour:

``` java
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- GENERAL -->
    <color name="sdkPrimaryColor">#FF6200EE</color>
    <color name="sdkPrimaryVariantColor">#FF3700B3</color>
    <color name="sdkSecondaryColor">#FF03DAC5</color>
    <color name="sdkTitleTextColor">#121212</color>
    <color name="sdkBodyTextColor">#5a6476</color>
    <color name="sdkBackgroundColor">#f2f2f7</color>
    
  <!-- ..Add particulars of each component... -->
  
  
</resources>
```

To modify the **logo** visible in the different components of the sdk,
it is enough to include the following line in the file including the
name of the logo of the client application:

``` java
    <!-- SDK LOGO -->
    <drawable name="sdk_logo">@drawable/logo_name</drawable>
```

 

### 9.2 Texts

If you wish to modify the texts of the SDK, you should include the
following XML file in the client application, and modify the value of
each *String* with the desired one.

``` java
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- GENERAL -->
    <string name="sdk_permissions_exit_alert_title">Permissions needed</string>
    <string name="sdk_permissions_exit_alert_question">Permissions are needed to continue</string>
    <string name="sdk_permissions_exit_alert_confirm">Request permissions</string>
    <string name="sdk_permissions_exit_alert_cancel">Exit</string>
    <string name="sdk_permissions_exit_alert_title_settings">Permissions needed</string>
    <string name="sdk_permissions_exit_alert_question_settings">Permissions are needed to continue, go to settings to give the app permissions.</string>
    <string name="sdk_permissions_exit_alert_confirm_settings">Open settings</string>
    <string name="sdk_permissions_exit_alert_cancel_settings">Exit</string>
    <string name="sdk_exit_alert_title">Finish the process</string>
    <string name="sdk_exit_alert_question">Do you want to finish the process?</string>
    <string name="sdk_exit_alert_exit">Finish</string>
    <string name="sdk_exit_alert_cancel">Cancel</string>
    <string name="sdk_exit_finish_exit">Exit</string>
    <string name="sdk_text_video_error">An error has occurred with the connection to the video. Please try again.</string>
    <string name="sdk_text_socket_error">An error has occurred with the connection to the server. Please try again.</string>
    <string name="sdk_text_data_error">An error has occurred with the system configuration. Please try again.</string>
    <string name="sdk_text_timeout_error">Sorry, the operation has timed out. Please try again later.</string>
    <string name="sdk_exit_finish_retry">Repeat the process</string>
    <string name="sdk_network_connection_error_title">Connection error</string>
    <string name="sdk_network_connection_error_desc">Check your internet connection</string>
    <string name="sdk_network_connection_error_button">Exit</string>
 
  <!-- ..Add particulars of each component... -->
  
  
</resources>
```

### 9.3 Source

To modify the font, add the .ttf files to the *font* folder of the
application and rename them as they appear in the image:

<img src="attachments/2563112997/2563113003.png" class="image-center"
loading="lazy" data-image-src="attachments/2563112997/2563113003.png"
data-height="111" data-width="387" data-unresolved-comment-count="0"
data-linked-resource-id="2563113003" data-linked-resource-version="1"
data-linked-resource-type="attachment"
data-linked-resource-default-alias="d886b449-da3f-4670-8f44-19f13fcb3d48.png"
data-base-url="https://facephicorporative.atlassian.net/wiki"
data-linked-resource-content-type="image/png"
data-linked-resource-container-id="2563112997"
data-linked-resource-container-version="2"
data-media-id="d17083d1-f15d-47d0-b16b-889787e509be"
data-media-type="file" />

### 9.4 Buttons

If you wish to change the shape of the SDK buttons, you should include
this line in the SDK styles XML file, changing the *dp* value of the
*dimen* variable:

``` java
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <dimen name="sdk_buttons_corner_dimen">5dp</dimen>
</resources>
```

## Attachments:

<img src="images/icons/bullet_blue.gif" width="8" height="8" />
[d886b449-da3f-4670-8f44-19f13fcb3d48.png](attachments/2563112997/2563113003.png)
(image/png)  
