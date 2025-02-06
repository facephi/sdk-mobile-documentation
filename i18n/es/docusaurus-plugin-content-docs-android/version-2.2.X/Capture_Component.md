# Capture Component

## 0. Requisitos base de SDK Mobile

**SDK Mobile** es un conjunto de librerías (**Componentes**) que ofrece
una serie de funcionalidades y servicios, permitiendo a su vez su
integración en una aplicación Mobile de forma sencilla y totalmente
escalable. Dependiendo del caso de uso que se requiera, se deberá
realizar la instalación de unos determinados componentes. Su alto nivel
de modularidad permite que, en un futuro, se puedan añadir otros
componentes nuevos sin afectar en absoluto a los ya integrados en el
proyecto.

Para más información sobre la configuración base, vaya a la sección de [Primeros Pasos](./Mobile_SDK).

---

## 1. Introducción

El _Componente_ tratado en el documento actual recibe el nombre de
**_Capture Component_**. Éste se encarga de realizar la captura de facturas y la captura y generación de QRs.

---

## 2. Integración del componente

Antes de integrar este componente se recomienda leer la documentación
relativa a:

[Primeros Pasos](./Mobile_SDK) y seguir las instrucciones indicadas en dicho
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
  implementation "com.facephi.androidsdk:capture_component:$sdk_capture_component_version"
  ```

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la
información asociada correctamente en la plataforma deberá ejecutarse
previamente el comando **newOperation**.

Este comando debe haberse ejecutado **anteriormente al lanzamiento del
componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de [Primeros Pasos](./Mobile_SDK) , en el que se detalla y explica en qué consiste
este proceso.

---

## 4. Controladores disponibles

| **Controlador**         | **Descripción**                         |
| ----------------------- | --------------------------------------- |
| InvoiceReaderController | Controlador para la captura de facturas |
| QrReaderController      | Controlador para la captura de QRs      |
| QrGeneratorController   | Controlador para la generación de QRs   |

---

## 5. Configuración del componente

Para configurar el componente actual, una vez inicializado, se deberá
crear un objeto _CaptureConfigurationData_ y pasarlo como parámetro al SDKController durante el lanzamiento del componente para capturas.

_QrGeneratorConfiguration_ y pasarlo como parámetro al SDKController
durante el lanzamiento del componente para generación de QRs.

En el siguiente apartado se mostrarán los campos que forman parte de
estas clased y para qué se utiliza cada uno de ellos.

### 5.1. Class QrCaptureConfigurationData

#### 5.1.1. extractionTimeout

Tiempo de extracción máximo

#### 5.1.2. cameraPreferred

Cámara seleccionada: FRONT, BACK

#### 5.1.3. cameraShape

Forma de la máscara que se quiere mostrar sobre la cámara:

- SQUARE: Cuadrado
- CIRCULAR: Círculo
- RECTANGLE_TALL: Rectángulo

#### 5.1.4. vibrationEnabled

Habilitar vibración durante el proceso

#### 5.1.5. showStroke

Mostrar una línea como borde de la cámara

#### 5.1.6. showDiagnostic

Mostrar pantallas de diagnóstico al final del proceso

#### 5.1.7. showTutorial

Muestra la pantalla de tutorial al inicio del proceso (Sólo modo QR)

#### 5.1.8. transparentBackground

Máscara sobre la cámara semitransparente

#### 5.1.9. showPreviousTip

Muestra una pantalla previa al lanzamiento de la captura con información sobre el proceso a realizar y un botón para el lanzamiento.

### 5.2. Class QrGeneratorConfiguration

#### 5.2.1. source

Texto que se va a incluir en el QR

#### 5.2.2. width

Ancho del QR generado

#### 5.2.3. height

Alto del QR generado

### 5.3. Class InvoiceCaptureConfigurationData

#### 5.3.1. extractionTimeout

Tiempo de extracción máximo

#### 5.3.2. vibrationEnabled

Habilitar vibración durante el proceso

#### 5.3.3. showDiagnostic

Mostrar pantallas de diagnóstico al final del procesos

#### 5.1.4. showPreviousTip

Muestra una pantalla previa al lanzamiento de la captura con información sobre el proceso a realizar y un botón para el lanzamiento.

#### 5.3.5. maxScannedDocs

Numero máximo de documentos a escanear.

---

## 6. Uso del componente

### 6.1 Captura de factura

Una vez iniciado el componente y creada una nueva operación (**apartado
3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero sí se trackearán los eventos
  internos al servidor de _tracking_:

```java
val result = SDKController.launch(
    InvoiceReaderController(InvoiceCaptureConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("InvoiceReader: KO - ${result.error.name}")
    is SdkResult.Success -> Napier.d("InvoiceReader OK: ${result.data}")
}
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
val result = SDKController.launchMethod(
    InvoiceReaderController(InvoiceCaptureConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("InvoiceReader: KO - ${result.error.name}")
    is SdkResult.Success -> Napier.d("InvoiceReader OK: ${result.data}")
}
```

El método **launch** debe usarse **por defecto**. Este método permite
utilizar **_tracking_** en caso de estar su componente activado, y no lo
usará cuando esté desactivado (o no se encuentre el componente
instalado).

Por el contrario, el método **launchMethod** cubre un caso especial, en
el cual el integrador tiene instalado y activado el tracking, pero en un
flujo determinado dentro de la aplicación no desea trackear información.
En ese caso se usa este método para evitar que se envíe esa información
a la plataforma.

### 6.2 Captura de QR

Una vez iniciado el componente y creada una nueva operación (**apartado
3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero sí se trackearán los eventos
  internos al servidor de _tracking_:

```java
val result = SDKController.launch(
    QrReaderController(QrCaptureConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("QR: KO - ${result.error.name}")
    is SdkResult.Success -> Napier.d("QR OK: ${result.data}")
}
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
val result = SDKController.launchMethod(
    QrReaderController(QrCaptureConfigurationData())
)
when (result) {
    is SdkResult.Error -> Napier.d("QR: KO - ${result.error.name}")
    is SdkResult.Success -> Napier.d("QR OK: ${result.data}")
}
```

El método **launch** debe usarse **por defecto**. Este método permite
utilizar **_tracking_** en caso de estar su componente activado, y no lo
usará cuando esté desactivado (o no se encuentre el componente
instalado).

Por el contrario, el método **launchMethod** cubre un caso especial, en
el cual el integrador tiene instalado y activado el tracking, pero en un
flujo determinado dentro de la aplicación no desea trackear información.
En ese caso se usa este método para evitar que se envíe esa información
a la plataforma.

### 6.3 Generación de QR

Una vez iniciado el componente y creada una nueva operación (**apartado
3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero sí se trackearán los eventos
  internos al servidor de _tracking_:

```java
val result = SDKController.launch(
    QrGeneratorController(QrGeneratorConfiguration(""))
)
when (result) {
    is SdkResult.Error -> Napier.d("QrGenerator: KO - ${result.error.name}")
    is SdkResult.Success -> Napier.d("QrGenerator OK: ${result.data}")
}
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
val result = SDKController.launchMethod(
    QrGeneratorController(QrGeneratorConfiguration(""))
)
when (result) {
    is SdkResult.Error -> Napier.d("QrGenerator: KO - ${result.error.name}")
    is SdkResult.Success -> Napier.d("QrGenerator OK: ${result.data}")
}
```

El método **launch** debe usarse **por defecto**. Este método permite
utilizar **_tracking_** en caso de estar su componente activado, y no lo
usará cuando esté desactivado (o no se encuentre el componente
instalado).

Por el contrario, el método **launchMethod** cubre un caso especial, en
el cual el integrador tiene instalado y activado el tracking, pero en un
flujo determinado dentro de la aplicación no desea trackear información.
En ese caso se usa este método para evitar que se envíe esa información
a la plataforma.

---

## 7. Recepción del resultado

Los controllers devolverán la información necesaria en formato
SdkResult. Más información en la sección de <a
  href="Mobile_SDK#6-retorno-de-resultado"
  rel="nofollow">6. Retorno de resultado</a> del Android Mobile SDK

### 7.1. Recepción de errores

En la parte del error, dispondremos de la clase _CaptureError_.

Listado de errores:

- ACTIVITY_RESULT_MSG_ERROR: El resultado de la actividad es incorrecto.
- APPLICATION_CONTEXT_ERROR: El contexto de aplicación necesario es nulo.
- CAMERA_ERROR: Error en el lanzamiento de la cámara.
- CAMERA_PERMISSION_DENIED: El usuario ha rechazado los permisos.
- CANCEL_BY_USER: El usuario ha cancelado el proceso.
- CANCEL_LAUNCH: Se ha hecho una cancelación general del SDK.
- COMPONENT_LICENSE_ERROR: La licencia del componente no es correcta.
- EMPTY_LICENSE: El String de licencia está vacío.
- FETCH_DATA_ERROR: Error en la recogida del resultado.
- FLOW_ERROR: Error en el proceso de flow.
- INITIALIZATION_ERROR: Error de inicialización.
- INVOICE_CAPTURE_ERROR: Error en la captura de facturas.
- MANAGER_NOT_INITIALIZED: Los managers son nulos.
- NO_DATA_ERROR: Los datos de entrada son nulos.
- OPERATION_NOT_CREATED: No hay ninguna operación en curso.
- QR_CAPTURE_ERROR: Error en la captura de QR
- QR_GENERATION_ERROR: Error en la generación de código QR
- TIMEOUT: Timeout en el proceso.

### 7.2. Recepción de ejecución correcta - _data_

En la ejecución correcta, simplemente se informa de que todo ha ido bien
con el SdkResult.Success.

---

## 8. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de [Primeros Pasos](./Mobile_SDK)), este componente en concreto permite la
modificación de textos específicos.

### 8.1. Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.

```xml
    <!-- Previous Tip -->
    <string name="capture_component_qr_tip_title">Escanea el código QR</string>
    <string name="capture_component_qr_tip_message">&lt;b&gt; Enfoca &lt;/b&gt; el código QR &lt;b&gt; dentro del recuadro &lt;/b&gt;</string>
    <string name="capture_component_qr_tip_button">Comenzar</string>
    <string name="capture_component_phactura_tip_title">Escanear documentos</string>
    <string name="capture_component_phactura_tip_message">Haz una foto al documento, o sube una imagen.&lt;br&gt;&lt;br&gt; Puedes escanear varios documentos antes de finalizar.</string>
    <string name="capture_component_phactura_tip_button">Comenzar</string>
    <!-- Tutorial -->
    <string name="capture_component_qr_tutorial_1">Asegúrate de que el código QR tiene &lt;b&gt; luz suficiente &lt;/b&gt; y &lt;b&gt; no hay reflejos &lt;/b&gt; o destellos sobre el código.</string>
    <string name="capture_component_qr_tutorial_2">Encaja los bordes del código QR dentro del recuadro.</string>
    <!-- Process -->
    <string name="capture_component_qr_camera_message">Mantén el QR en el centro</string>
    <string name="capture_component_invoice_camera_message">Mantén la factura en el centro</string>
    <string name="capture_component_button_message">Capturar</string>
    <!-- Diagnostic -->
    <string name="capture_component_timeout_title">Tiempo superado</string>
    <string name="capture_component_timeout_desc">Pedimos disculpas. No se ha podido hacer la captura</string>
    <string name="capture_component_internal_error_title">Hubo un problema técnico</string>
    <string name="capture_component_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>
    
```

### 8.2. Animaciones

Si se desea modificar las animaciones (lottie) de la SDK habría que incluir las animaciones con el mismo nombre en la carpeta res/raw/ de la aplicación.

```text
phactura_anim_tip.json
qr_anim_tip_1.json
qr_anim_tip_2.json
```

---

## 9. Logs

Para visualizar en consola los logs de este componente se podrá usar el filtro: "CAPTURE:"
