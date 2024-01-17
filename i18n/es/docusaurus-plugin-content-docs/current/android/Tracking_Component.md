# Tracking Component

Este documento hace referencia la **versión 1.5.X** del componente

## 0. Requisitos base de SDK Mobile

**SDK Mobile** es un conjunto de librerías (**Componentes**) que ofrece
una serie de funcionalidades y servicios, permitiendo a su vez su
integración en una aplicación Mobile de forma sencilla y totalmente
escalable. Dependiendo del caso de uso que se requiera, se deberá
realizar la instalación de unos determinados componentes. Su alto nivel
de modularidad permite que, en un futuro, se puedan añadir otros
componentes nuevos sin afectar en absoluto a los ya integrados en el
proyecto.

Para más información sobre la configuración base, vaya a la sección de
<a href="ES_Android_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page">Android Mobile SDK</a>.

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

---

## 2. Integración del componente

Antes de integrar este componente se recomienda leer la documentación
relativa a:

<a href="ES_Android_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u>Android Mobile
SDK</u></strong></a> y seguir las instrucciones indicadas en dicho
documento.

En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. Dependencias requeridas para la integración

Para evitar conflictos y problemas de compatibilidad, en caso de querer
instalar el componente en un proyecto que contenga una versión antigua
de las librerías de Facephi (_Widgets_), éstos deberán eliminarse por
completo antes de la instalación de los componentes de la
**_SDKMobile_**.

- Actualmente las librerías de FacePhi se distribuyen de forma remota
  a través de diferentes gestores de dependencias. Las dependencias
  **obligatorias** que deberán haberse instalado previamente:

  ```java
  implementation "com.facephi.androidsdk:tracking_component:$sdk_tracking_component_version"
  ```

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la
información asociada correctamente en la plataforma deberá ejecutarse
previamente el comando **newOperation**.

Este comando debe haberse ejecutado **anteriormente al lanzamiento del
componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de <a href="ES_Android_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u>Android Mobile
SDK</u></strong></a>, en el que se detalla y explica en qué consiste
este proceso.

---

## 4. Controladores disponibles

|                         |                                                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Controlador**         | **Descripción**                                                                                                                       |
| TrackingController      | Controlador principal de tracking                                                                                                     |
| TrackingErrorController | Controlador para **gestionar** los posibles **errores** que ocurran                                                                   |
| ExtraDataController     | Controlador para obtener el **ExtraData** que permite la **comunicación** desde cliente con el servidor con **SelphIDSdk** instalado. |

## 5. Configuración del componente

Para configurar el componente actual, se realiza en el _initSdk_,
revisar el apartado de inicialización en
<a href="ES_Android_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u>Android Mobile
SDK</u></strong></a>.

### 5.1. Configuración de TrackingController

Se debe incluir este parámetro durante la inicialización de la SDK.

```java
SDKController.initSdk(
    ...
    trackingController = TrackingController(),
)
```

### 5.2. Configuración de control de errores

Se podrá configurar el callback para controlar los errores de tracking:

```java
SDKController.launch(
     TrackingErrorController {
        Napier.d("Tracking Error: ${it.name}")
     }
)
```

En el **apartado 7** se muestran los posibles valores de error que
existen.

### 5.3. Obtención del ExtraData para comunicación con la Plataforma

Este controlador (_ExtraDataController_) permite obtener un array con
los identificadores de la operación actual. Este dato se enviará con al
backend donde se realizarán las verificaciones pertinentes.

La llamada para obtener al extraData, **<u>necesita la información de la
operación en curso</u>,** lo cual **obliga** a que se haya **realizado**
con anterioridad un **_newOperation_**.

```java
SDKController.launch(
    ExtraDataController {
        when (it) {
            is SdkResult.Success -> logs.add("ExtraData: OK")
            is SdkResult.Error -> logs.add(
                "ExtraData: KO - ${it.error.javaClass.simpleName}"
            )
        }
    }
)
```

---

## 6. Uso del componente

Como se ha comentado previamente, una vez inicializado y configurado el
componente de **tracking** no será necesario lanzarlo, ya que se
mantendrá funcionando en segundo plano mientras se ejecutan el resto de
componentes.

---

## 7. Recepción del resultado

### 7.1. Recepción de errores

En la parte del error, dispondremos de la clase TrackingError.

```java
INIT_IDS_ERROR,
LICENSE_ERROR,
APPLICATION_CONTEXT_ERROR,
OPERATION_RESULT,
OPERATION_ID,
SESSION_ID,
CUSTOMER_ID,
STEP_CHANGE,
ASSET_LINK,
ASSET_UPLOAD,
OCR_DATA,
INIT_OPERATION,
NO_OPERATION_CREATED_ERROR,
TOKEN_ERROR,
NETWORK_CONNECTION,
SEND_BYTEARRAY
```

---
