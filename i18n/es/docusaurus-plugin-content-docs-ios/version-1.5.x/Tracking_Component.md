# Tracking Component

## 0. Requisitos base de SDK Mobile
 
**SDK Mobile** es un conjunto de librerías (**Componentes**) que ofrece una serie de funcionalidades y servicios, permitiendo a su vez su integración en una aplicación Mobile de forma sencilla y totalmente escalable. Dependiendo del caso de uso que se requiera, se deberá realizar la instalación de unos determinados componentes. Su alto nivel de modularidad permite que, en un futuro, se puedan añadir otros componentes nuevos sin afectar en absoluto a los ya integrados en el proyecto.

Para más información sobre la configuración base, vaya a la sección de
<a href="ES_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page">Mobile SDK</a>.

---

## 1. Introducción

El _Componente_ tratado en el documento actual recibe el nombre de
**_Tracking Component_**. Éste se encarga de realizar el trackeo y
monitorización de la información obtenida durante la ejecución del resto
de componentes de la **SDKMobile**, enviándola a los servicios de la
**Plataforma**. Se podrá realizar el seguimiento en tiempo real de estos
datos en la **Plataforma**, mientras se está ejecutando el proceso en el
dispositivo del cliente.

Al contrario que ocurre con el resto, este componente no funciona
individualmente, trabaja de forma transversal al resto de componentes
instalados en la _SDKMobile_. Para trackear la información se mantiene
en segundo plano mientras se ejecuta el proceso de la **SDKMobile**.

### 1.1 Requisitos mínimos
La versión mínima de la SDK de iOS requerida es la siguiente:

Versión mínima de iOS: **13**

---

## 2. Integración del componente
<div class="warning">
<span class="warning">:warning:</span> 
Antes de integrar este componente se recomienda leer la documentación
relativa a:

<a href="ES_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u>Mobile
SDK</u></strong></a> y seguir las instrucciones indicadas en dicho
documento.
</div>
En esta sección se explicará paso a paso cómo integrar el componente actual en un proyecto ya existente.

### 2.1. Dependencias requeridas para la integración
<div class="warning">
<span class="warning">:warning:</span>
Para evitar conflictos y problemas de compatibilidad, en caso de querer instalar el componente en un proyecto que contenga una versión antigua de las librerías de Facephi (Widgets), éstos deberán eliminarse por completo antes de la instalación de los componentes de la **SDKMobile**.
</div>
Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:

```
pod 'FPHISDKMainComponent', '~> 1.5.0'
```

Para instalar el componente de Tracking deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```
pod 'FPHISDKTrackingComponent', '~> 1.5.0'
```

Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

- En caso de realizar el desarrollo con **xCode15** se deberá incluir un script de post-instalacion:

![Image](/iOS/fix_ldClassic.png)

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la
información asociada correctamente en la plataforma deberá ejecutarse
previamente el comando **newOperation**.

Este comando debe haberse ejecutado **anteriormente al lanzamiento del
componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de <a href="ES_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u>Mobile
SDK</u></strong></a>, en el que se detalla y explica en qué consiste
este proceso.

---

## 4. Configuración del componente

El controlador de TrackingController solo se añadirá en caso de tener el tracking de la sdkMobile.

Se añade el import:

```java
import trackingComponent
```

trackingController: trackingController

Inicializamos:

```java
let trackingController = TrackingController(trackingError: { trackingError in
      print("TRACKING ERROR: \(trackingError)")
})
```
Se añade en el initSDK:

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


---

## 5. Uso del componente
Como se ha comentado previamente, una vez inicializado y configurado el
componente de **tracking** no será necesario lanzarlo, ya que se
mantendrá funcionando en segundo plano mientras se ejecutan el resto de
componentes.

---

## 6. Recepción del resultado

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
