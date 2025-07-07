# Conexión con plataforma
## 1. Introducción

El envío de eventos a la plataforma se realiza con el **_Tracking Component_**. 

Éste se encarga de realizar el trackeo y la monitorización de la información obtenida durante la ejecución de las operaciones. Se podrá realizar el seguimiento en tiempo real de estos datos en la **Plataforma**, mientras se está ejecutando el proceso en el dispositivo del cliente.

Al contrario que ocurre con el resto, este componente no funciona
individualmente, trabaja de forma transversal al resto de componentes
instalados en la _SDKMobile_. 

En el apartado de [Lanzamiento simplificado](./Mobile_SDK) se detallan los pasos necesarios para la integración básica del SDK. En esta sección se añade la información para el lanzamiento de este componente.

---

## 2. Dependencia

La dependencia específica del componente es:

  ```java
  implementation "com.facephi.androidsdk:tracking_component:$version"
  ```

---

## 3. Controladores disponibles

| **Controlador**         | **Descripción**                                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| TrackingController      | Controlador principal de tracking                                                                                                     |
| TrackingErrorController | Controlador para **gestionar** los posibles **errores** que ocurran                                                                   |
| ExtraDataController     | Controlador para obtener el **ExtraData** que permite la **comunicación** desde cliente con el servidor con **SelphIDSdk** instalado. |

---

## 4. Lanzamiento simplificado

Se debe incluir el controlador durante la inicialización de la SDK.

```java
SDKController.initSdk(
    ...
    trackingController = TrackingController(),
)
```

### 4.1. Control de errores

Se podrá configurar el callback para controlar los errores de tracking:

```java
SDKController.launch(
     TrackingErrorController {
        Napier.d("Tracking Error: ${it.name} - ${it.error} - ${it.stepType}")
     }
)
```

## 5. Información avanzada

### 5.1 Controladores Adicionales

#### 5.1.1 ExtraDataController

Este controlador (_ExtraDataController_) permite obtener un identificador de la operación actual. Este dato se enviará con al backend donde se realizarán las verificaciones pertinentes.

La llamada para obtener al extraData, **<u>necesita la información de la
operación en curso</u>,** lo cual **obliga** a que se haya **realizado**
con anterioridad un **_newOperation_**.

```java
val result = SDKController.launch(
    ExtraDataController()
)
when (result) {
    is SdkResult.Success -> logs.add("ExtraData: OK")
    is SdkResult.Error -> logs.add(
        "ExtraData: KO - ${result.error.name}"
    )
}
```

### 5.2. Recepción de errores

En la parte del error, dispondremos de la clase TrackingError. La clase devolverá 3 campos:

  - name: String con el nombre del error
  - error: Información addicional en el caso de que sea necesaria
  - stepType: Componente del SDK en el que ha fallado el envío del evento

Listado de errores:

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
