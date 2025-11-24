# Subida de ficheros y gestión de QR

## 1. Introducción

La captura de documentos y la lectura y generación de QRs se realizan con el **_CaptureComponent_**. 

Este componente permitirá la subida de documentos realizando una foto con la cámara del dispositivo
o desde galeria.

---

## 2. Dependencia

La dependencia específica del componente es:

  ```java
  implementation "com.facephi.androidsdk:capture_component:$version"
  ```

--- 

## 3. Controladores disponibles

| **Controlador** | **Descripción**                         |
| --------------- | --------------------------------------- |
| FileUploaderController | Controlador para la captura de facturas |
| QrReaderController      | Controlador para la captura de QRs      |
| QrGeneratorController   | Controlador para la generación de QRs   |

--- 

## 4. Lanzamiento simplificado

Una vez iniciado el SDK y creada una nueva operación se podrá lanzar el componente. 
Se podrá hacer uso de cualquiera de sus controladores para ejecutar su funcionalidad.

Lanzamiento de la captura de documentos:

```java
val response = SDKController.launch(
    FileUploaderController(FileUploaderConfigurationData(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

Lanzamiento de la captura de QR:

```java
val response = SDKController.launch(
    QrReaderController(QrCaptureConfigurationData(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

Lanzamiento de la generación de QR:

```java
val response = SDKController.launch(
    QrGeneratorController(QrGeneratorConfiguration(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

--- 

## 5. Configuración básica

Para los controladores de captura de componentes y captura de QR se puede generar la configuración con los parámetros por defecto. Para el caso de la geneación del QR se necesitará el texto que se va a utilizar:

```java
QrGeneratorConfiguration(source = "QR text")
```

--- 

## 6. Recepción del resultado

El lanzamiento devolverá la información en formato SdkResult. Pudiendo diferenciarse entre un lanzamiento correcto y uno incorrecto:

```java
when (response) {
    is SdkResult.Error -> Napier.d("ERROR - ${response.error}")
    is SdkResult.Success -> response.data
}
```

### 6.1. Recepción de errores

Los errores se devolverán como un objeto 'CaptureError'.

Listado de errores:

- CAP_ACTIVITY_RESULT_MSG_ERROR: El resultado devuelto por la actividad es incorrecto o no contiene la información necesaria para continuar.
- CAP_APPLICATION_CONTEXT_ERROR: El contexto de aplicación requerido es nulo o no válido, impidiendo inicializar correctamente el módulo de captura.
- CAP_CAMERA_ERROR: Ha ocurrido un error interno relacionado con la cámara del dispositivo (fallo de apertura, inicialización o captura).
- CAP_CAMERA_PERMISSION_DENIED: El usuario ha denegado los permisos necesarios para acceder a la cámara.
- CAP_CANCEL_BY_USER: El usuario ha cancelado manualmente el proceso de captura.
- CAP_CANCEL_LAUNCH: El proceso ha sido cancelado de forma general por el SDK o por una acción externa.
- CAP_COMPONENT_LICENSE_ERROR: La licencia del componente no es válida, ha expirado o no coincide con la configuración requerida.
- CAP_EMPTY_LICENSE: La cadena de licencia está vacía o no se ha proporcionado.
- CAP_FETCH_DATA_ERROR: Se ha producido un error al obtener o procesar los datos necesarios para ejecutar el flujo.
*(Incluye información adicional en el campo `error`.)*
- CAP_FLOW_ERROR: Se ha producido un error interno durante la ejecución del flujo de captura.
*(Incluye información adicional en el campo `error`.)*
- CAP_INITIALIZATION_ERROR: Error al inicializar los componentes necesarios del SDK.
*(Incluye información detallada en el campo `error`.)*
- CAP_FILE_UPLOADER_CAPTURE_ERROR: Error durante el proceso de subida de los archivos generados en la captura.
- CAP_MANAGER_NOT_INITIALIZED: Los managers necesarios para ejecutar el proceso no han sido inicializados correctamente.
- CAP_NO_DATA_ERROR: Los datos de entrada requeridos son nulos, inexistentes o insuficientes para continuar el proceso.
- CAP_OPERATION_NOT_CREATED: No se ha podido crear o recuperar una operación activa necesaria para continuar.
*(Incluye información detallada en el campo `error`.)*
- CAP_QR_CAPTURE_ERROR: Error durante la captura o lectura del código QR.
- CAP_QR_GENERATION_ERROR: Error al generar el código QR solicitado.
- CAP_TIMEOUT: Se ha alcanzado el tiempo máximo permitido en alguna de las fases del proceso.
- CAP_FLOW_VIDEO_RECORDING_ERROR: Error durante la grabación de vídeo dentro del flujo establecido.
- CAP_FLOW_TRACKING_ERROR: Error al realizar el tracking necesario para completar el flujo de captura.

### 6.2. Recepción del resultado correcto - _data_

#### 6.2.1 Recepción del resultado de la captura de documentos

En la parte de SdkResult.Success - _data_, dispondremos de la clase  _FileUploaderResult_.

Los campos devueltos en el resultado son los siguientes:

##### 6.2.1.1 _capturedDocumentList_

Listado de ficheros capturados. Pueden ser imágenes o PDFs. Los campos devueltos de cada uno son:

- mimeType
- timestampMillis
- content: Contenido del documento. Será diferente si es una imagen o un documento PDF. Para diferenciarlo:

```java
capturedDocumentList.forEach { documentData ->
                            when (val content = documentData.content) {
                                is FileContent.UploaderImage -> {
                                    // Uploader: New image found
                                    // content.image
                                }

                                is FileContent.UploaderDocument -> {
                                    // Uploader: New document found
                                    // content.bytes
                                }
                            }
                        }
```

#### 6.2.2 Recepción del resultado de la captura de QR

En la parte de SdkResult.Success - _data_, dispondremos de la clase  _QrResult_.

Los campos devueltos en el resultado son los siguientes:

##### 6.2.2.1 _qrText_

Texto obtenido del QR

#### 6.2.3 Recepción del resultado de la generación de QR

En la parte de SdkResult.Success - _data_, dispondremos de una SdkImage con el QR creado.

--- 

## 7. Información avanzada

Este apartado amplía la información del componente.

### 7.1  Configuración avanzada del componente

#### 7.1.1 Configuración de la captura de documentos

Para lanzar el componente actual, se deberá crear un objeto _FileUploaderConfigurationData_ 
que será la configuración del controlador del componente.

A continuación se detallan todos los campos que forman parte de esta clase.

- `vibrationEnabled`: Indica la activación de la vibración cuando el widget termine satisfactoriamente.
- `extractionTimeout`: Establece el tiempo máximo que se puede realizar la captura.
- `showDiagnostic`: Mostrar pantallas de diagnóstico al final del proceso.
- `showPreviousTip`: Muestra una pantalla previa al lanzamiento de la captura con información sobre el proceso a realizar y un botón para el lanzamiento.
- `maxScannedDocs`: Número máximo de documentos que se podrán capturar 
- `allowGallery`: Se habilita el acceso a la galería para la obtención de imágenes o PDFs

#### 7.1.2 Configuración de la captura de QR

Para lanzar el componente actual, se deberá crear un objeto _QrCaptureConfigurationData_ 
que será la configuración del controlador del componente.

A continuación se detallan todos los campos que forman parte de esta clase.

- `vibrationEnabled`: Indica la activación de la vibración cuando el widget termine satisfactoriamente.
- `extractionTimeout`: Establece el tiempo máximo que se puede realizar la captura.
- `showDiagnostic`: Mostrar pantallas de diagnóstico al final del proceso.
- `showPreviousTip`: Muestra una pantalla previa al lanzamiento de la captura con información sobre el proceso a realizar y un botón para el lanzamiento.
- `showTutorial`: Indica si el componente activa la pantalla de tutorial. En esta vista se explica de forma intuitiva cómo se realiza la captura.
- `cameraShape`: Permite elegir entre una máscara cuadrada y una redonda.

---

## 8. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de [Ajustes avanzados](./Mobile_SDK_advanced)), este componente en concreto permite la
modificación de su interfaz.

### 8.1 Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.

```xml
<resources>
    <!-- Previous Tip -->
    <string name="capture_component_qr_tip_title">Escanea el código QR</string>
    <string name="capture_component_qr_tip_message">&lt;b&gt; Enfoca &lt;/b&gt; el código QR &lt;b&gt; dentro del recuadro &lt;/b&gt;</string>
    <string name="capture_component_qr_tip_button">Comenzar</string>
    <string name="capture_component_qr_tip_anim_desc">Animación de un teléfono móvil haciendo una foto a un código QR. En la pantalla del móvil aparece un recuadro. Cuando el código QR encaja dentro del recuadro, la aplicación hace una foto.</string>
    <string name="capture_component_qr_tutorial_1_anim_desc">Se muestra un código QR sobre un fondo blanco. Los bordes del código QR no se distinguen con claridad. Mediante una animación, el fondo cambia de color.</string>
    <string name="capture_component_qr_tutorial_2_anim_desc">Un teléfono móvil hace una foto a un código QR. El código QR aparece en horizontal, y el móvil en posición vertical. En la pantalla del móvil aparece un recuadro. Cuando el código QR encaja dentro del recuadro, la aplicación hace una foto.</string>
    <!-- Tutorial -->
    <string name="capture_component_qr_tutorial_1">Asegúrate de que el código QR tiene &lt;b&gt; luz suficiente &lt;/b&gt; y &lt;b&gt; no hay reflejos &lt;/b&gt; o destellos sobre el código.</string>
    <string name="capture_component_qr_tutorial_2">Encaja los bordes del código QR dentro del recuadro.</string>
    <!-- Process -->
    <string name="capture_component_qr_camera_message">Mantén el QR en el centro</string>
    <string name="capture_component_button_message">Capturar</string>
    <!-- Diagnostic -->
    <string name="capture_component_timeout_title">Tiempo superado</string>
    <string name="capture_component_timeout_desc">Pedimos disculpas. No se ha podido hacer la captura</string>
    <string name="capture_component_internal_error_title">Hubo un problema técnico</string>
    <string name="capture_component_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>

    <!-- WIDGET -->
    <!-- Previous Tip -->
    <string name="capture_widget_tip_title">Escanear documentos</string>
    <string name="capture_widget_tip_message">Haz una foto al documento, o sube una imagen.&lt;br&gt;&lt;br&gt; Puedes escanear varios documentos antes de finalizar.</string>
    <string name="capture_widget_tip_message_alt">Haz una foto al documento, o sube una imagen. Puedes escanear varios documentos antes de finalizar.</string>
    <string name="capture_widget_tip_button">Comenzar</string>
    <string name="capture_widget_tip_button_alt">Comenzar captura de documentos</string>
    <string name="capture_widget_tip_close_button_alt">Volver</string>
    <string name="capture_widget_tip_info_button_alt">Ver consejos</string>
    <string name="capture_widget_tip_anim_desc">Animación de un teléfono móvil haciendo una foto a un documento. En la pantalla del móvil aparece un recuadro. Cuando el documento encaja dentro del recuadro, la aplicación hace una foto.</string>
    <!-- Camera -->
    <string name="capture_widget_document_camera_button_gallery">Galería</string>
    <string name="capture_widget_document_camera_button_capture">Capturar</string>
    <string name="capture_widget_document_camera_button_cancel">Cancelar captura</string>
    <string name="capture_widget_document_camera_button_finish">Finalizar</string>
    <!-- Gallery -->
    <string name="capture_widget_gallery_images">Imágenes</string>
    <string name="capture_widget_gallery_pdf">Seleccionar PDF</string>
    <string name="capture_widget_gallery_cancel">Cancelar</string>
    <!-- Confirmation -->
    <string name="capture_widget_image_captured">Imagen capturada</string>
    <string name="capture_widget_confirmation_message">¿Todos los datos se leen de forma clara y nítida?</string>
    <string name="capture_widget_confirmation_retry">NO, QUIERO REPETIR LAS FOTOGRAFÍAS</string>
    <string name="capture_widget_confirmation_continue">Sí, finalizar</string>
    <string name="capture_widget_confirmation_delete">Borrar foto</string>
    <string name="capture_widget_confirmation_image_unavailable">Vista previa no disponible</string>
    <string name="capture_widget_confirmation_no_images">No hay capturas disponibles</string>
    <string name="capture_widget_confirmation_delete_dialog_title">¿Quieres eliminar este documento?</string>
    <string name="capture_widget_confirmation_delete_dialog_message">Al eliminar este documento no vas a poder recuperarlo. Deberás realizar una nueva fotografía.</string>
    <string name="capture_widget_confirmation_delete_dialog_cancel">CANCELAR</string>
    <string name="capture_widget_confirmation_delete_dialog_confirm">ELIMINAR DOCUMENTO</string>
    <!-- Diagnostic -->
    <string name="capture_widget_timeout_title">Tiempo superado</string>
    <string name="capture_widget_timeout_desc">Pedimos disculpas. No se ha podido hacer la captura</string>
    <string name="capture_widget_internal_error_title">Hubo un problema técnico</string>
    <string name="capture_widget_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>

</resources>

```

### 8.2. Animaciones

Si se desea modificar las animaciones (lottie) de la SDK habría que incluir las animaciones con el mismo nombre en la carpeta res/raw/ de la aplicación.

```text
qr_anim_tip_1.json
qr_anim_tip_2.json
capture_anim_tip.json
```