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
[Primeros Pasos](./Mobile_SDK#11-requisitos-mínimos).

---

## 1. Introducción

Este documento Flow es un **anexo** al **SDK** común, ya que esta funcionalidad está contenida en el propio componente **SDK**.

Flow es una funcionalidad que conecta la sección **Design Studio** de la **Plataforma** con el SDK y la implementación realizada por la **Plataforma** con el SDK y la implementación del cliente.

A través de un identificador Flow, podrás lanzar un flujo diseñado en la web, que puede contener hasta que puede contener de 1 a N pasos de los componentes existentes en el SDK.

---

## 2. Integración del componente

<div class="warning">
<span class="warning">:warning:</span>
Antes de integrar este componente se recomienda leer la documentación de [Integración Inicial](./Mobile_SDK#2-integración-inicial) y seguir las instrucciones indicadas en dicho documento.
</div>

En esta sección se explicará paso a paso cómo integrar el componente actual en un proyecto ya existente.

### 2.1. Dependencies required for integration

No se requiere **ninguna dependencia adicional** para utilizar Flow.

Usted <u>debe añadir las dependencias requeridas de cada componente</u> que quieras lanzar dentro de Flow. Si quieres lanzar **reconocimiento facial,** debería ser **necesario** instalar el  componente **Selphi**, y así sucesivamente con el resto de componentes.

---
## 3. Iniciar una nueva operación

Al iniciar el lanzamiento de una operación Flow, se genera internamente una nueva operación de forma totalmente transparente.
**<u>No es necesario</u>** realizar una nueva operación previamente.
---

## 4. Controladores disponibles

| **Controller**        | **Description**                                                   |
| --------------------- | ----------------------------------------------------------------- |
| FlowController        | Flow controlador principal. Lanzamiento de flujos publicados.     |

### 4.1. Controladores disponibles par flow

| **Controlador**           | **Descripción**           |
| ------------------------- | ------------------------- |
| SelphiController          | Reconocimiento facial     |
| SelphIDController         | Reconocimiento documental |
| VoiceController           | Captura de voz            |
| PhingersController        | Captura de huellas        |
| NfcController             | Lectura de NFC            |
| QrReaderController        | Lectura de QR             |
| QrGeneratorController     | Generador de QR           |
| InvoiceReaderController   | Captura de facturas       |
| VideoIdController         | Video Identificación      |
| VideoCallController       | Video Asistencia          |
| VideoRecordingController  | Video ScreenSharing       |

---

## 5. Inicialización SDK con Flow

La función de inicialización SDK dispone del parámetro _activateFlow_ para gestionar su activación:

```java
SDKController.shared.initSdk(
     ...
     activateFlow: true,
     ...
)
```

---

## 6. Uso del componente

#### 6.1 Launching a published stream

Utilizará el _FlowController_ para lanzar un flujo que el cliente ha publicado en la plataforma, se deberá indicar el flowID en el objeto FlowConfigurationData:

```java
public func launchFlow(customerId: String, viewController: UIViewController, output: @escaping (SdkResult<String>) -> Void, offline: Bool = false) {

        let selphidController = SelphIDController(data: nil, output: {
            print("SelphidController output: \($0.errorType)")
        }, viewController: viewController)
        
        let selphiController = SelphiController(data: nil, output: {
            print("SelphiController output: \($0.errorType)")
        }, viewController: viewController)
        
        let externalStepController = ExternalStepController(output: {
            print("externalStepController output")
        })
        
        let controllers: [IFlowableController] =
        [selphidController, selphiController, selphixController, nfcController, qrReaderController,
         invoiceReaderController, phingersController, videoIdController, videoCallController, voiceController, externalStepController]
        
        let flowConfigurationData = FlowConfigurationData(
            id: "flowId",
            controllers: controllers,
            customerId: customerId)
        
        let flowOutput: (SdkFlowResult) -> Void = { sdkFlowResult in
            print("FlowController: STEP - \(sdkFlowResult.step)")
            print("FlowController: FLOW FINISH: \(sdkFlowResult.flowFinish)")
            print("FlowController: SDKResult: ERROR=\(sdkFlowResult.result.errorType) - DATA=\(sdkFlowResult.result.data)")

            switch (sdkFlowResult.result.data) {
            case (let data as SelphIDResult):
                break
            case (let data as SelphiResult):
                break
            default: break
            }
        }
        
        let flowController = offline
        ? FlowOfflineController(flowConfigurationData: flowConfigurationData, output: flowOutput)
        : FlowController(flowConfigurationData: flowConfigurationData, output: flowOutput)
        
        self.flowController = flowController
        SDKController.shared.launch(controller: flowController)
    }

     func flowNextStep() {
        self.flowController?.launchNextStep()
    }
    
    func cancelFlow() {
        self.flowController?.cancelFlow()
        self.flowController = nil
    }

```

---

## 7. Recepción del resultado

El resultado del flujo tendrá 3 campos:

- step: Información sobre el paso de flujo que se ha realizado. Con el valor
  valor de "key" se podrá identificar el componente ejecutado en el paso.

- result: Los controllers devolverán la información necesaria en formato SdkResult. Más información en la sección de [Retorno de Resultado](./Mobile_SDK#6-result-return).

- flowFinish: Flag que indica si el proceso ha finalizado.

### 7.1. Recepción de errores

En el resultado, dentro de _sdkFlowResult_ tendremos
el **_sdkFlowResult.step_** para identificar qué componente ha fallado, y
el **_sdkFlowResult.result.errorType_** que contiene el error que se ha producido.

```java
print("FlowController: STEP - \(sdkFlowResult.step)")
print("FlowController: SDKResult: ERROR=\(sdkFlowResult.result.errorType) - DATA=\(sdkFlowResult.result.data)")
```

### 7.2. Recepción de la ejecución con éxito - _data_

En caso de ejecución correcta de un flujo, los componentes correspondientes se lanzarán hasta la finalización del flujo o hasta que se produzca un error.
componentes se lanzarán hasta la finalización o hasta que se produzca un error.

Tras comprobar los resultados, deberemos comprobar si el flujo ha finalizado o aún quedan pasos, para poder gestionar los siguientes pasos fuera del SDK.

Ejemplo:
```java
let flowOutput: (SdkFlowResult) -> Void = { sdkFlowResult in
    print("FlowController: STEP - \(sdkFlowResult.step)")
    print("FlowController: FLOW FINISH: \(sdkFlowResult.flowFinish)")
    print("FlowController: SDKResult: ERROR=\(sdkFlowResult.result.errorType) - DATA=\(sdkFlowResult.result.data)")

    switch (sdkFlowResult.result.data) {
    case (let data as SelphIDResult):
        break
    case (let data as SelphiResult):
        break
    case (let data as SelphixResult):
        break
    default: break
    }
    }
```

Después de comprobar los resultados, debemos comprobar si el flujo se ha finalizado o aún quedan pasos, para poder gestionar los siguientes pasos fuera del SDK.

```java
print("FlowController: FLOW FINISH: \(sdkFlowResult.flowFinish)")
```

En caso de que haya un paso externo, al final de este paso se debe llamar al método _launchNextStep_.

```java
func flowNextStep() {
     self.flowController?.launchNextStep()
}
```

Si desea cancelarlo, debe llamar a _cancelFlow_.

```java
func cancelFlow() {
     self.flowController?.cancelFlow()
     self.flowController = nil
}
```

---
