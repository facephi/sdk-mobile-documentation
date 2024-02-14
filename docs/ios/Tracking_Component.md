# Tracking Component

## 0. SDK Mobile basic requirements
 
**SDK Mobile** is a set of libraries (**Components**) that offers a series of functionalities and services, allowing its integration in a Mobile application in a simple and totally scalable way. Depending on the use case required, certain components must be installed. Its high level of modularity allows other new components to be added in the future without affecting those already integrated in the project.

For more information on the base configuration, go to the [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>*** section. 

---
## 1. Introduction

**SDK Mobile** is a set of libraries (**Components**) that offers a series of functionalities and services, allowing its integration in a Mobile application in a simple and totally scalable way. Depending on the use case required, certain components must be installed. Its high level of modularity allows other new components to be added in the future without affecting those already integrated in the project.

The component dealt with in the current document is called **Tracking Component**. It is in charge of tracking and monitoring the information obtained during the execution of the rest of the **SDKMobile** components, sending it to the **Platform** services. This data can be tracked in real time on the **Platform**, while the process is running on the client's device.

Unlike the rest, this component does not work individually, it works transversally to the rest of the components installed in the *SDKMobile*. To track the information, it is kept in the background while the **SDKMobile** process is running.


### 1.1 Minimum requirements
The minimum iOS SDK version required is as follows:

Minimum iOS version: **13**

---

## 2. Component integration
 

Before integrating this component, it is recommended to read the documentation related to [1.5.X][EN] ***<a href="Mobile_SDK"
data-linked-resource-id="2605678593" data-linked-resource-version="15"
data-linked-resource-type="page">iOS Mobile SDK</a>*** and follow the instructions given in that document.

This section will explain step by step how to integrate the current component into an existing project.

### 2.1. Dependencies required for integration
To avoid conflicts and compatibility problems, in case you want to install the component in a project containing an old version of the Facephi libraries (Widgets), these must be completely removed before the installation of the **SDKMobile** components.

Currently FacePhi libraries are distributed remotely through different dependency managers, in this case Cocoapods. The **mandatory** dependencies that must be previously installed (by adding them in the Podfile file of the project) are:

```
pod 'FPHISDKMainComponent', '~> 1.4.0'
```

Para instalar el componente de Selphi deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```
pod 'FPHISDKTrackingComponent', '~> 1.4.0'
```

Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

- En caso de realizar el desarrollo con **xCode15** se deberá incluir un script de post-instalacion:

![Image](/iOS/fix_ldClassic.png)
---

## 3. Configuración del componente

El controlador de TrackingController solo se añadirá en caso de tener el tracking de la sdkMobile.

Se añade el import:

```
import trackingComponent
```

trackingController: trackingController

Inicializamos:

```
let trackingController = TrackingController(trackingError: { trackingError in
      print("TRACKING ERROR: \(trackingError)")
})
```
Se añade en el initSDK:

```
// AUTO License
SDKController.shared.initSdk(licensingUrl: SdkConfigurationManager.LICENSING_URL, apiKey: SdkConfigurationManager.APIKEY_LICENSING, output: { sdkResult in
    if sdkResult.finishStatus == .STATUS_OK {
        self.log("Licencia automática seteada correctamente")
    } else {
        self.log("Ha ocurrido un error al intentar obtener la licencia: \(sdkResult.errorType)")
    }
}, trackingController: trackingController)
```


---

## 4. Uso del componente
Como se ha comentado previamente, una vez inicializado y configurado el
componente de **tracking** no será necesario lanzarlo, ya que se
mantendrá funcionando en segundo plano mientras se ejecutan el resto de
componentes.


---


## 5. Recepción del resultado

El resultado es un objeto *SDKResult* que devuelve el SDK tendrá siempre 3 campos:

*finishStatus*: Que nos indicará si la operación ha finalizado correctamente. Posibles valores:
```
FinishStatus.STATUS_OK
FinishStatus.STATUS_ERROR
```
*errorType*: Si el finishStatus indica que ha habido un error, este campo tendrá la descripción del mismo:

Los errores de tracking vienen en el enum *TrackingError*:

```
INIT_DATA_ERROR
ASSET_UPLOAD
INIT_IDS_ERROR
ASSET_LINK
STEP_CHANGE
OCR_DATA
INIT_OPERATION
EXTERNAL_EVENT
OPERATION_RESULT
CUSTOMER_ID
TOKEN_ERROR
```
---
