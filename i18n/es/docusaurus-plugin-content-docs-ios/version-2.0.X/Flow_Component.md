# Flow Component

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
<a href="ES_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page">Android Mobile SDK</a>.

---

## 1. Introducción

Este documento de Flow es un **anexo** al común de **SDK**, ya que esta
funcionalidad está contenida en el propio componente de SDK.

Flow es una funcionalidad que conecta la sección de **Design Studio** de
la **Plataforma** con el SDK y la implementación que realiza el cliente.
A través de un identificador de Flow, podrá lanzar un flujo diseñado en
la web, que puede contener de 1 a N pasos de los componentes existentes
en el SDK.

---

## 2. Integración del componente

<div class="warning">
<span class="warning">:warning:</span>
Antes de integrar este componente se recomienda leer la documentación de [Integración](./Mobile_SDK#2-integración-inicial) y seguir las instrucciones indicadas en dicho documento.
</div>
En esta sección se explicará paso a paso cómo integrar el componente
actual en un proyecto ya existente.

### 2.1. Dependencias requeridas para la integración

No es necesaria **ninguna dependencia extra** para utilizar Flow.

Se <u>deberán añadir las dependencias requeridas de cada componente</u>
que se quiera lanzar dentro del Flow. Si se quiere lanzar
**reconocimiento facial,** deberá ser **necesario** instalar el
**componente de Selphi**, y así sucesivamente con el resto de
componentes.

---

## 3. Iniciar nueva operación

Al iniciar el lanzamiento de una operación de Flow, internamente se
genera una nueva operación de manera completamente transparente.

**<u>No es necesario</u>** realizar una nueva operación con
anterioridad.

---

## 4. Controladores disponibles

| **Controlador**       | **Descripción**                                                            |
| --------------------- | -------------------------------------------------------------------------- |
| FlowController        | Controlador principal de Flow. Lanzamiento de flujos publicados.           |
| FlowPreviewController | Controlador para el lanzamiento de flujos pendientes de publicar (pruebas) |

### 4.1. Controladores de componentes con flow

| **Controlador**            | **Descripción**           |
| -------------------------- | ------------------------- |
| FSelphiController          | Reconocimiento facial     |
| FSelphIDController         | Reconocimiento documental |
| FVoiceController           | Captura de voz            |
| FPhingersController        | Captura de huellas        |
| FNfcController             | Lectura de NFC            |
| FQrReaderController        | Lectura de QR             |
| FPhacturasReaderController | Captura de facturas       |
| FVideoIdController         | Video Identificación      |
| FVideoCallController       | Video Asistencia          |

---

## 5. Inicialización del SDK con flow

La función de inicialización del SDK tiene el parámetro _activateFlow_
para gestionar su activación:

```java
val sdkConfig = SdkConfigurationData(
    ...
    activateFlow = true,
    ...
)

val result = SDKController.initSdk(sdkConfig)
```

---

## 6. Uso del componente

#### 6.1 Lanzamiento de un flujo publicado

Se usará el _FlowController_ para lanzar un flujo que el cliente tiene
publicado en la plataforma:

```java
val flowController = FlowController (
     FlowConfigurationData(
            id = "flowId",
            controllers = listOf(FSelphiController(), FSelphIDController()),
            customerId = "customerId",
        ))

viewModelScope.launch {
     flowController.stateFlow.collect { flowResult ->
          Napier.d("APP: FLOW STEP ID ${flowResult.step?.id}")

          when (flowResult.step?.key) {
          FlowKeys.EXTERNAL_STEP.name -> {
               delay(DELAY_EXTERNAL_STEP)
               flowController.launchNextStep()
          }

          FlowKeys.SELPHI_COMPONENT.name -> {
               when (val sdkResult = flowResult.result) {
                    is SdkResult.Error -> {
                         Napier.d("APP: Selphi FLOW ERROR: ${sdkResult.error.getSelphiError().name}")
                    }

                    is SdkResult.Success -> {
                         val result = sdkResult.data.getSelphiResult()
                         Napier.d("APP: Selphi OK ${result.bestImage?.bitmap?.byteCount}")
                    }
               }
          }

          FlowKeys.SELPHID_COMPONENT.name -> {
               when (val sdkResult = flowResult.result) {
                    is SdkResult.Error -> {
                         Napier.d("APP: SelphID FLOW ERROR: ${sdkResult.error.getSelphiError().name}")
                    }

                    is SdkResult.Success -> {
                         val result = sdkResult.data.getSelphIDResult()
                         Napier.d("APP: SelphID OK ${result.documentCaptured}")
                    }
               }
          }
          }

          if (flowResult.flowFinish) {
          Napier.d("APP: FLOW FINISH")
          }
     }
}
viewModelScope.launch {
     SDKController.launch(flowController)
}
```

#### 6.2 Lanzamiento de un flujo pendiente de publicar

Se usará el _FlowPreviewController_ para probar un flujo que el cliente
tiene pendiente de publicar en la plataforma:

```java
val flowController = FlowPreviewController (
     FlowConfigurationData(
            id = "flowId",
            controllers = listOf(FSelphiController(), FSelphIDController()),
            customerId = "customerId",
        ))

viewModelScope.launch {
     flowController.stateFlow.collect { flowResult ->
          Napier.d("APP: FLOW STEP ID ${flowResult.step?.id}")

          when (flowResult.step?.key) {
          FlowKeys.EXTERNAL_STEP.name -> {
               delay(DELAY_EXTERNAL_STEP)
               flowController.launchNextStep()
          }

          FlowKeys.SELPHI_COMPONENT.name -> {
               when (val sdkResult = flowResult.result) {
                    is SdkResult.Error -> {
                         Napier.d("APP: Selphi FLOW ERROR: ${sdkResult.error.getSelphiError().name}")
                    }

                    is SdkResult.Success -> {
                         val result = sdkResult.data.getSelphiResult()
                         Napier.d("APP: Selphi OK ${result.bestImage?.bitmap?.byteCount}")
                    }
               }
          }

          FlowKeys.SELPHID_COMPONENT.name -> {
               when (val sdkResult = flowResult.result) {
                    is SdkResult.Error -> {
                         Napier.d("APP: SelphID FLOW ERROR: ${sdkResult.error.getSelphiError().name}")
                    }

                    is SdkResult.Success -> {
                         val result = sdkResult.data.getSelphIDResult()
                         Napier.d("APP: SelphID OK ${result.documentCaptured}")
                    }
               }
          }
          }

          if (flowResult.flowFinish) {
          Napier.d("APP: FLOW FINISH")
          }
     }
}
viewModelScope.launch {
     SDKController.launch(flowController)
}
```

---

## 7. Recepción del resultado

El resultado del flow tendrá 3 campos:

- step: Información del paso del flujo que se ha realizado. Con el
  valor de “key” se podrá identificar el componente ejecutado en el
  paso.

- result: Resultado del paso en formato SdkResult. Más información en
  la sección de <a
  href="Mobile_SDK#6-retorno-de-resultado"
  rel="nofollow">6. Retorno de resultado</a> del Android Mobile SDK.

- flowFinish: Flag que indicará si ha terminado el proceso

### 7.1. Recepción de errores

En la parte del error, dentro de _SdkResult.Error_ dispondremos
**_flowResult.step.key_** para identificar que componente ha fallado y
el **_flowResult.result.error_** que contiene el error que ha ocurrido.

### 7.2. Recepción de ejecución correcta - _data_

En la ejecución correcta de un flujo, se lanzarán los componentes
correspondientes hasta la finalización del mismo o hasta obtener un
error.

Si el resultado de un paso lanzado es SdkResult.Success, se podrá
localizar, por un lado, la _key_ que identifica al componente y por otro
lado el _data_ con el resultado del componente, como es un resultado
genérico, dentro del SDK, se ha creado un conversor para cada tipo de
resultado. Ej:

```java
flowController.stateFlow.collect { flowResult ->
     Napier.d("APP: FLOW STEP ID ${flowResult.step?.id}")

     when (flowResult.step?.key) {
     FlowKeys.EXTERNAL_STEP.name -> {
          delay(DELAY_EXTERNAL_STEP)
          flowController.launchNextStep()
     }

     FlowKeys.SELPHI_COMPONENT.name -> {
          when (val sdkResult = flowResult.result) {
               is SdkResult.Error -> {
                    Napier.d("APP: Selphi FLOW ERROR: ${sdkResult.error.getSelphiError().name}")
               }

               is SdkResult.Success -> {
                    val result = sdkResult.data.getSelphiResult()
                    Napier.d("APP: Selphi OK ${result.bestImage?.bitmap?.byteCount}")
               }
          }
     }

     FlowKeys.SELPHID_COMPONENT.name -> {
          when (val sdkResult = flowResult.result) {
               is SdkResult.Error -> {
                    Napier.d("APP: SelphID FLOW ERROR: ${sdkResult.error.getSelphiError().name}")
               }

               is SdkResult.Success -> {
                    val result = sdkResult.data.getSelphIDResult()
                    Napier.d("APP: SelphID OK ${result.documentCaptured}")
               }
          }
     }
     }

     if (flowResult.flowFinish) {
          Napier.d("APP: FLOW FINISH")
     }
}
```

Tras comprobar los resultados, deberemos revisar si el flow ha
finalizado o aún quedan pasos, para poder gestionar los siguientes pasos
fuera del SDK.

```java
if (flowResult.flowFinish) {
    Napier.d("APP: FLOW FINISH")
}
```

---
