# Core Component

## 1. Introduction 

The Component addressed in the current document is called ***Core
Component***. This component is **mandatory installation**, regardless
of the use case, as it contains **generic functionality** to the entire
sdk, as well as allowing the use of more specific components.  

### 1.1 Minimum requirements

The minimum native version (Android and iOS) of the SDK are as follows:

-   Minimum Android version: **24 - JDK 17**
-   Minimum Build Tools version: **8.1.4**
-   Minimum Kotlin Android version **(sdk {'<'}= 2.2.x)**: **1.9.0**
-   Minimum Kotlin Android version **(sdk >= 2.3.x)**: **2.1.0**
-   Minimum iOS version: **13**
-   Minimum Cordova Android version: **12.0.0**
-   Minimum Cordova iOS version: **7.0.0** 

Regarding the architecture of the mobile device:

-   armeabi-v7, x86, arm64 and x64

### 1.2 Plugin version

The current plugin version can be checked as follows:

-   Look for the ***package.json*** file at the root of the plugin.
-   The KEY/TAG ***version*** indicates the version.

### 1.3 Plugin installation: Android
#### 1.3.1 Permissions for geolocation
Because the **Tracking** component has geolocation options, it is necessary to add permissions for this. In the AndroidManifest add the following permissions:

```
<!-- Always include this permission -->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<!-- Include only if your app benefits from precise location access. -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```
---

## 2. Session initialisation
### 2.1 Initialisation

<div class="note">
<span class="note">:information_source:</span>
All the configuration can be found in the component's *plugins/@facephi/com.facephi.sdk.core/www/**Config.js* files.
</div>

Each component has a controller that will allow access to its functionality. Before they can be used, they must be properly initialised. This initialisation must be done as soon as possible, preferably at the application init. Moreover, once all the operations are finished, and the interaction with the SDK Mobile is over, the session must be closed (***section 6***).

<div class="warning">
<span class="warning">:warning:</span>
This controller ***SDKController*** it will be used for every *Component* call.
</div>

There are currently two ways to **inject the licence**:

<div class="note">
<span class="note">:information_source:</span>

- a. Online: Obtaining the licence through a service using a URL and a API-KEY
- b. Offline: Injecting the licence as String
  
</div>

In both cases, the result will be returned through a ***Promise*** containing an object ***CoreResult***. More information will be added in ***section 5.***

#### a. Injecting the licence as String

You can assign the licence directly as a String, as follows:

```
const launchInitSession = async () => 
{ 
    try 
    {
        console.log("Starting initSession...");
        let config: InitSessionConfiguration = {
            license: Platform.OS === 'ios' ? JSON.stringify(<enter_your_lic_here>) : JSON.stringify(<enter_your_lic_here>),
            //licenseUrl: LICENSE_URL,
            //licenseApiKey: Platform.OS === 'ios' ? LICENSE_APIKEY_IOS : LICENSE_APIKEY_ANDROID
        };

        console.log(config);
        return await SdkMobileCore.initSession(config)
        .then((result: CoreResult) => 
        {
            console.log("result", result);
        })
        .catch((error: any) => 
        {
            console.log(error);
        })
        .finally(()=> {
            console.log("End closeSession...");
        });
    } 
    catch (error) {
        setMessage(JSON.stringify(error));
    }
};
```

#### b. Obtaining the licence through a service

Through a service that will simply require a URL and an API-KEY as an identifier. This would avoid problems when manipulating the licence, as well as the constant substitution of said licences when a problem arises in this regard (malformation or improper modification, licence expiry...):

```
const launchInitSession = async () => 
{ 
    try 
    {
        console.log("Starting initSession...");
        let config: InitSessionConfiguration = {
            //license: Platform.OS === 'ios' ? JSON.stringify(LICENSE_IOS_NEW) : JSON.stringify(LICENSE_ANDROID_NEW),
            licenseUrl: "https://***.***.pro",
            licenseApiKey: "<enter_your_apikey_here>",
        };

        console.log(config);
        return await SdkMobileCore.initSession(config)
        .then((result: CoreResult) => 
        {
            console.log("result", result);
        })
        .catch((error: any) => 
        {
            console.log(error);
        })
        .finally(()=> {
            console.log("End closeSession...");
        });
    } 
    catch (error) {
        setMessage(JSON.stringify(error));
    }
};
```

### 2.2 Init session configuration

In the previous section, there is a class called
***InitSessionConfiguration*** that customises the current session. The
properties of this class are the following:


#### 2.2.1 license (string)
Sets the SDK Mobile *license*. This license is provided by Facephi.

```
license: "valid license“
```

#### 2.2.2 licenseUrl (string)
Sets the *url* where the service remotely validates the current license.
This *endpoint* is provided by Facephi (online license).


```
licenseUrl: "https://***.***.pro"
```

#### 2.2.3 licenseApiKey (string) 
Sets the *apikey* for the license service (online license).
```
licenseApiKey: "valid ApiKey"
```

#### 2.2.4 enableTracking (boolean)
This property enables or disables the tracking component. This parameter allows the information tracking from the SDK to the Platform. 

```
enableTracking: true
```

#### 2.2.5 locale

This is a string that allows you to change the locale and language of
the widget. Examples of values they can have are as follows:

- ““ for use the system language

- “es” for Spanish.

- “en” for English.

- “fr” for french.

---

## 3. Start a new operation
Every time you wish to start the flow of a new operation (examples of operations would be: onboarding, authentication, videocall,...) it is essential to tell the **SDKController** that it is going to start, and thus the SDK will know that the next calls of **Components** (also called **Steps**) will be part of said operation. This is necessary to *successfully track the global information of this operation to the platform*.

<div class="warning">
<span class="warning">:warning:</span>
When starting a process or flow, the **initOperation** method call should **<u>always</u>** be made
</div>

This method has 2 input parameters:

- **operationType**: Indicates if an ONBOARDING or AUTHENTICATION process is going to be carried out
- **customerId**: User's unique id if any (controlled at the application level)

To execute the **initOperation** method, the call must be done using the **SdkMobileCore** class:


```
const initOperation = async () => 
{ 
    try 
    {
      console.log("Starting initOperation...");

      return await SdkMobileCore.initOperation(getInitOperationConfiguration())
      .then((result: CoreResult) => 
      {
        console.log("result", result);
      })
      .catch((error: any) => 
      {
        console.log(error);
      })
      .finally(()=> {
        console.log("End initOperation...");
      });
    } 
    catch (error) {
      setMessage(JSON.stringify(error));
    }
};

const getInitOperationConfiguration = () => 
{
    let config: InitOperationConfiguration = {
      customerId: CUSTOMER_ID,
      type: SdkOperationType.Onboarding,
    };

    return config;
};
```


---

## 4. Launch of components
<div class="note">
<span class="note">:information_source:</span>
Once the **new operation has been created (section 3)**, the different SDK controllers may be launched. To consult this information, you must access the documentation of **each of the specific components**.
</div>

---

## 5.  Return of result
The result of each component will be returned through the SDK always maintaining the same structure:

```
export interface CoreResult {
  finishStatus: number;
  finishStatusDescription?: string;
  errorType: string;
  errorMessage?: string;
  tokenized?: string;
  operationId?: string;
  sessionId?: string;
  data?: string;
  flow?: string;
}
```
The parameters are the following:

### 5.1 finishStatus
Returns the global diagnostic. The possible values are:

    - **1**: The operation was successful.

    - **2**: An error has occurred, which will be indicated in the *errorDiagnostic* enumerated and, optionally, an extra information message will be displayed in the *errorMessage* property.


### 5.2 finishStatusDescription
Returns an optional description of **finishStatus**.
  
### 5.3 errorMessage
Returns a message with additional information about the error if it is necessary. Is an optional value.

### 5.4 errorType
Returns the type of error that occurred (if there was one, which is indicated by the \`finishStatus\` parameter with the value \`Error\`). They are defined in the \`SdkErrorType\` class. The values ​​it can have are the following:

-   **NoError:** No error has occurred. The process can continue.

-   **UnknownError:** Unhandled error. Possibly caused by a bug in the
    resource bundle.

-   **CameraPermissionDenied:** The exception that is thrown when the
    sdk does not have permission to access the camera.

-   **SettingsPermissionDenied**: The exception that is thrown when the
    widget does not have permission to access system settings
    (\*deprecated\*).

-   **HardwareError**: Exception that occurs when there is a hardware
    problem with the device, usually caused by very few available
    resources.

-   **ExtractionLicenceError**: Exception that occurs when there has
    been a licencing problem on the server.

-   **UnexpectedCaptureError**: Exception that occurs during the capture
    of frames by the camera.

-   **ControlNotInitialisedError**: The widget configurator has not been
    initialised.

-   **BadExtractorConfiguration**: Problem arose during widget
    configuration.

-   **CancelByUser**: The exception that is thrown when the user stops
    the extraction manually.

-   **TimeOut**: Exception that is thrown when a maximum time elapses
    without successfully completing the extraction.

-   **InitProccessError**: Exception that is thrown when the sdk cannot
    process the captured images.

-   **NfcError:** The exception that is thrown when the sdk does not
    have permission to access the nfc.

-   **NetworkConnection**: The exception that is thrown when there are
    issues with the means the device uses to connect to the network.

-   **TokenError:** The exception that is thrown when an invalid token
    is passed as a parameter.

-   **InitSessionError**: The exception that is thrown

-   when session cannot be initialised. The normal thing is that it
    happens because the \`SdkCore\` was not called when calling any
    other component.

-   **ComponentControllerError**: The exception that is thrown when the
    component cannot be instantiated.

### 5.5 tokenized
Optional parameter. Only visible if the *Tokenized* method is called. The plugin will return a value in ***string*** format. More information in **section 7.**

### 5.6 data

Optional parameter. Only visible if the *GetExtraData* method is called. The plugin will return a value in ***string*** format. More information in **section 8.**

---

## 6. Close Session
**Before the application is destroyed**, the SDK session must be closed to notify the platform of its termination. To do this, the following line of code is executed:


```
const launchCloseSession = async () => 
{ 
    try 
    {
      console.log("Starting closeSession...");
      return await SdkMobileCore.closeSession()
      .then((result: CoreResult) => 
      {
        console.log("result", result);
      })
      .catch((error: any) => 
      {
        console.log(error);
      })
      .finally(()=> {
        console.log("End closeSession...");
      });
    } 
    catch (error) {
      setMessage(JSON.stringify(error));
    }
};
``` 
---

## 7. ExtraData method
The *getExtraData* method generates the identifiers related to a specific operation. These identifiers are tokenized and prepared to be sent to the *Facephi Validation Service* (Backend). That Service needs these identifiers to know which operation the client is currently executing. Thus, all the process information generated in the client and server can be successfully gathered in the different services. 

```
const getExtraData = async () => 
{ 
    try 
    {
      console.log("Starting getExtraData...");

      return await SdkMobileCore.getExtraData()
      .then(async (result: CoreResult) => 
      {
        console.log("result", result);
        if (result.finishStatus == SdkFinishStatus.Ok)
        {
          const params1 = {'extraData': result.data, 'image': bestImageApi};
          const params2 = {'documentTemplate': tokenFaceImage, 'extraData': result.data, 'image1': bestImageApi};
          
          let r1: any = await apiPost('/v5/api/v1/selphid/passive-liveness/evaluate', params1);
          console.log("r1", r1);
          let r2: any = await apiPost('/v5/api/v1/selphid/authenticate-facial/document/face-image', params2);
          console.log("r2", r2);
        }
      })
      .catch((error: any) => 
      {
        console.log(error);
      })
      .finally(()=> {
        console.log("End getExtraData...");
      });
    } 
    catch (error) {
      setMessage(JSON.stringify(error));
    }
};
```

## 8. Tokenize Method

The Tokenize method tokenizes and encrypts the images obtained from the different components of the SDK Mobile. Thus, these images can be sent to the *Facephi Validation Service* (Backend) securely. 

```
const getTokenize = async () => 
{ 
  try 
  {
    console.log("Starting getTokenize...", getTokenizeConfiguration());
    return await SdkMobileCore.tokenize(getTokenizeConfiguration())
    .then((result: CoreResult) => 
    {
      console.log("result", result);
    })
    .catch((error: any) => 
    {
      console.log(error);
    })
    .finally(()=> {
      console.log("End getTokenize...");
    });
  } 
  catch (error) {
    setMessage(JSON.stringify(error));
  }
};
const getTokenizeConfiguration = () => 
{
  const sdkConfiguration: TokenizeConfiguration = {
    stringToTokenize: "String to Tokenize ..."
  };
  return sdkConfiguration;
};
```