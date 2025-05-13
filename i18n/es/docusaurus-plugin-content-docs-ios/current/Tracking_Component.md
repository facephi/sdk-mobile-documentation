# Tracking Component

## 0. Requisitos base de SDK Mobile

**SDK Mobile** es un conjunto de librerías (**Componentes**) que ofrece una serie de funcionalidades y servicios, permitiendo a su vez su integración en una aplicación Mobile de forma sencilla y totalmente escalable. Dependiendo del caso de uso que se requiera, se deberá realizar la instalación de unos determinados componentes. Su alto nivel de modularidad permite que, en un futuro, se puedan añadir otros componentes nuevos sin afectar en absoluto a los ya integrados en el proyecto.

Para más información sobre la configuración base, vaya a la sección de
[Primeros Pasos](./Mobile_SDK#11-requisitos-mínimos).

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
Antes de integrar este componente se recomienda leer la documentación de [Integración Inicial](./Mobile_SDK#2-integración-inicial) y seguir las instrucciones indicadas en dicho documento.
</div>

En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. Dependencias requeridas para la integración

Para evitar conflictos y problemas de compatibilidad, en caso de querer instalar el componente en un proyecto que contenga una versión antigua de las librerías de Facephi (Widgets), éstos deberán eliminarse por completo antes de la instalación de los componentes de la **SDKMobile**.

Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:

```
pod 'FPHISDKMainComponent', '~> 2.3.0'
```

Para instalar el componente de Tracking deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```
pod 'FPHISDKTrackingComponent', '~> 2.3.0'
```

Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

- En caso de realizar el desarrollo con **XCode15** se deberá incluir un script de post-instalacion:

![Image](/ios/fix_ldClassic.png)

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la
información asociada correctamente en la plataforma deberá ejecutarse
previamente el comando **newOperation**.

<div class="note">
<span class="note">:information_source:</span>
Este comando debe haberse ejecutado **anteriormente al lanzamiento del
componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de [Iniciar nueva operación](./Mobile_SDK#4-iniciar-nueva-operacion), en el que se detalla y explica en qué consiste este proceso.
</div>

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

El resultado es un objeto _SDKResult_ que devuelve el SDK tendrá siempre 3 campos:

_finishStatus_: Que nos indicará si la operación ha finalizado correctamente. Posibles valores:

```java
FinishStatus.STATUS_OK
FinishStatus.STATUS_ERROR
```

_errorType_: Si el finishStatus indica que ha habido un error, este campo tendrá la descripción del mismo:

Los errores de tracking vienen en el enum _TrackingError_:

  - **APPLICATION_CONTEXT_ERROR**: Error en la inicialización del contexto  
  - **ASSET_LINK**: Error al enviar el enlace del recurso  
  - **ASSET_UPLOAD**: Error durante la carga del recurso  
  - **COMPONENT_LICENSE_ERROR**: Licencia del componente ausente o no válida  
  - **CUSTOMER_ID**: Error al obtener o validar el ID del cliente  
  - **DEVICE_EVENT_ERROR**: Fallo durante un evento relacionado con el dispositivo  
  - **EMPTY_LICENSE**: Datos de licencia vacíos o inexistentes  
  - **FLOW**: Error durante el flujo de ejecución  
  - **INITIALIZATION_ERROR**: Fallo general en la inicialización  
  - **INIT_IDS_ERROR**: Error al generar o asignar IDs durante la inicialización  
  - **INIT_OPERATION**: Operación fallida en la fase de inicialización  
  - **LICENSE_ERROR**: Licencia inválida o corrupta  
  - **MANAGER_NOT_INITIALIZED**: Se intentó usar el gestor sin inicializarlo  
  - **NETWORK_CONNECTION**: Problema con la conexión de red  
  - **NETWORK_ERROR**: Falla genérica de red  
  - **NO_OPERATION_CREATED_ERROR**: No se creó ninguna operación cuando se esperaba  
  - **OCR_DATA**: Error al procesar los datos de OCR  
  - **OPERATION_NOT_CREATED**: No se generó la operación esperada  
  - **OPERATION_ID**: ID de operación inválido o ausente  
  - **SESSION_ID**: Error con la identificación de sesión  
  - **SIGNATURE_RESULT**: Fallo en el proceso o resultado de firma  
  - **STEP_CHANGE**: Transición de paso inesperada o inválida  
  - **STEP_RESULT_CANCELLED**: El paso fue cancelado de forma inesperada  
  - **STEP_RESULT_ERROR**: El paso finalizó con un error  
  - **STEP_RESULT_EXPIRED**: El resultado del paso expiró antes de completarse  
  - **STEP_RESULT_SUCCEEDED**: El paso tuvo éxito pero generó un problema inesperado  
  - **TOKEN_ERROR**: Token ausente, expirado o inválido  
  - **ADVANCED_TRACKING_UPLOAD**: Fallo al subir los datos de seguimiento avanzado  
  - **TENANT_ID_EMPTY_ERROR**: El ID del tenant estaba vacío o ausente  
  - **ADVANCED_TRACKING_SERIALIZATION_ERROR**: Error al serializar los datos de seguimiento avanzado  
  - **ADVANCED_TRACKING_VALIDATION_ERROR**: Fallo en la validación de los datos de seguimiento  
  - **TOKENIZER_ERROR**: Error durante el proceso de tokenización  

---
