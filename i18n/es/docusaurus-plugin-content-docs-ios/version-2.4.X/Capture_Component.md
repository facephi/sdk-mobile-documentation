# Subida de ficheros y gestión de QR

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

La captura de documentos y la lectura y generación de QRs se realizan con el CaptureComponent.
Este componente permitirá la subida de documentos realizando una foto con la cámara del dispositivo o desde galeria.

## 2. Dependencias

Para evitar conflictos y problemas de compatibilidad, en caso de querer instalar el componente en un proyecto que contenga una versión antigua de las librerías de Facephi (Widgets), éstos deberán eliminarse por completo antes de la instalación de los componentes de la **SDKMobile**.

### Cocoapods

- Actualmente las librerías de Facephi se distribuyen de forma remota a través de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:

```java
pod 'FPHISDKMainComponent', '~> 2.4.0'
```

- Para instalar el componente de Captura deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```java
pod 'FPHISDKCaptureComponent', '~> 2.4.0'
```

### SPM

-  Las dependencias obligatorias que deberán haberse instalado previamente son:
HTTPS  
```java
https://github.com/facephi-clienters/SDK-SdkPackage-SPM.git
```
SSH  
```java
git@github.com:facephi-clienters/SDK-SdkPackage-SPM.git
```

- Para instalar el componente de Subida de ficheros deberá incluirse en los módulos del proyecto:

HTTPS  
```java
https://github.com/facephi-clienters/SDK-CapturePackage-SPM.git
```

SSH  
```java
git@github.com:facephi-clienters/SDK-CapturePackage-SPM.git
```

## 3. Controladores disponibles

### Lanzamiento simplificado

Una vez iniciado el SDK y creada una nueva operación se podrá lanzar el componente. Se podrá hacer uso de cualquiera de sus controladores para ejecutar su funcionalidad.

Lanzamiento de la captura de documentos:
```swift
let controller = FileUploaderController(
    data: fileUploaderConfigurationData,
    output: { sdkResult in },
    viewController: viewController
)
SDKController.shared.launch(controller: controller)
```

Lanzamiento de la captura de QR:
```swift
let controller = QrReaderController(
    data: qrReaderConfigurationData,
    output: { sdkResult in },
    viewController: viewController
)
SDKController.shared.launch(controller: controller)
```

Lanzamiento de la generación de QR:
```swift
let controller = QrGeneratorController(
    data: qrGeneratorConfigurationData,
    output: { sdkResult in },
    viewController: viewController
)
SDKController.shared.launch(controller: controller)
```

## 4. Configuración básica
Para los controladores de captura de componentes y captura de QR se puede generar la configuración con los parámetros por defecto. Para el caso de la geneación del QR se necesitará el texto que se va a utilizar:
```swift
QrGeneratorConfiguration(source: "QR text")
```

## 5. Recepción de resultado
El resultado se devuelve como un `SdkResult` que incluye:
- errorType  
- finishStatus  
- data  

### Recepción de errores
Los errores se devolverán como un objeto 'CaptureError'.

Listado de errores:
```swift
CAP_ACTIVITY_RESULT_MSG_ERROR: El resultado devuelto por la actividad es incorrecto o no contiene la información necesaria para continuar.
CAP_APPLICATION_CONTEXT_ERROR: El contexto de aplicación requerido es nulo o no válido, impidiendo inicializar correctamente el módulo de captura.
CAP_CAMERA_ERROR: Ha ocurrido un error interno relacionado con la cámara del dispositivo (fallo de apertura, inicialización o captura).
CAP_CAMERA_PERMISSION_DENIED: El usuario ha denegado los permisos necesarios para acceder a la cámara.
CAP_CANCEL_BY_USER: El usuario ha cancelado manualmente el proceso de captura.
CAP_CANCEL_LAUNCH: El proceso ha sido cancelado de forma general por el SDK o por una acción externa.
CAP_COMPONENT_LICENSE_ERROR: La licencia del componente no es válida, ha expirado o no coincide con la configuración requerida.
CAP_EMPTY_LICENSE: La cadena de licencia está vacía o no se ha proporcionado.
CAP_FETCH_DATA_ERROR: Se ha producido un error al obtener o procesar los datos necesarios para ejecutar el flujo. (Incluye información adicional en el campo error.)
CAP_FLOW_ERROR: Se ha producido un error interno durante la ejecución del flujo de captura. (Incluye información adicional en el campo error.)
CAP_INITIALIZATION_ERROR: Error al inicializar los componentes necesarios del SDK. (Incluye información detallada en el campo error.)
CAP_FILE_UPLOADER_CAPTURE_ERROR: Error durante el proceso de subida de los archivos generados en la captura.
CAP_MANAGER_NOT_INITIALIZED: Los managers necesarios para ejecutar el proceso no han sido inicializados correctamente.
CAP_NO_DATA_ERROR: Los datos de entrada requeridos son nulos, inexistentes o insuficientes para continuar el proceso.
CAP_OPERATION_NOT_CREATED: No se ha podido crear o recuperar una operación activa necesaria para continuar. (Incluye información detallada en el campo error.)
CAP_QR_CAPTURE_ERROR: Error durante la captura o lectura del código QR.
CAP_QR_GENERATION_ERROR: Error al generar el código QR solicitado.
CAP_TIMEOUT: Se ha alcanzado el tiempo máximo permitido en alguna de las fases del proceso.
CAP_FLOW_VIDEO_RECORDING_ERROR: Error durante la grabación de vídeo dentro del flujo establecido.
CAP_FLOW_TRACKING_ERROR: Error al realizar el tracking necesario para completar el flujo de captura.
```

### Recepción del resultado correcto - data

**Recepción del resultado de la captura de documentos**
En la parte de SdkResult.Success - data, dispondremos de la clase FileUploaderResult.

Los campos devueltos en el resultado son los siguientes:

_capturedDocumentList_

Listado de ficheros capturados. Pueden ser imágenes o PDFs. Los campos devueltos de cada uno son:

- mimeType

- timestampMillis

- content: Contenido del documento. Será diferente si es una imagen o un documento PDF.

**Recepción del resultado de la captura de QR**
En la parte de SdkResult.Success - data, dispondremos de la clase QrResult.

Los campos devueltos en el resultado son los siguientes:

_qrText_

Texto obtenido del QR

**Recepción del resultado de la generación de QR**
En la parte de SdkResult.Success - data, dispondremos de una SdkImage con el QR creado.

## 6. Información avanzada

Este apartado amplía la información del componente.

### Configuración avanzada del componente

**Configuración de la captura de documentos**
Para lanzar el componente actual, se deberá crear un objeto FileUploaderConfigurationData que será la configuración del controlador del componente.

A continuación se detallan todos los campos que forman parte de esta clase.

- ```vibrationEnabled```: Indica la activación de la vibración cuando el widget termine satisfactoriamente.

- ```extractionTimeout```: Establece el tiempo máximo que se puede realizar la captura.

- ```showDiagnostic```: Mostrar pantallas de diagnóstico al final del proceso.

- ```showPreviousTip```: Muestra una pantalla previa al lanzamiento de la captura con información sobre el proceso a realizar y un botón para el lanzamiento.

- ```maxScannedDocs```: Número máximo de documentos que se podrán capturar

- ```allowGallery```: Se habilita el acceso a la galería para la obtención de imágenes o PDFs

**Configuración de la captura de QR**
Para lanzar el componente actual, se deberá crear un objeto QrCaptureConfigurationData que será la configuración del controlador del componente.

A continuación se detallan todos los campos que forman parte de esta clase.

- ```vibrationEnabled```: Indica la activación de la vibración cuando el widget termine satisfactoriamente.

- ```extractionTimeout```: Establece el tiempo máximo que se puede realizar la captura.

- ```showDiagnostic```: Mostrar pantallas de diagnóstico al final del proceso.

- ```showPreviousTip```: Muestra una pantalla previa al lanzamiento de la captura con información sobre el proceso a realizar y un botón para el lanzamiento.

- ```showTutorial```: Indica si el componente activa la pantalla de tutorial. En esta vista se explica de forma intuitiva cómo se realiza la captura.

- ```cameraShape```: Permite elegir entre una máscara cuadrada y una redonda.

## 7.Personalización del componente
Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales se explican en el documento de [Personalización de la SDK](./Mobile_SDK#9-personalización-de-la-sdk)), este componente en concreto permite la modificación de su interfaz.

### Textos
Si se desea modificar los textos de la SDK habría que incluir el siguiente fichero XML en la aplicación del cliente, y modificar el valor de cada String por el deseado.

```swift
"capture_component_qr_camera_message" = "Keep the QR in the center";
"capture_component_qr_tutorial_title" = "Scan QR Code";
"capture_component_qr_tutorial_desc" = "Focus the QR code inside the box";
"capture_component_qr_tutorial_button_message" = "START";
"capture_component_qr_tutorial_1" = "Make sure the QR code has enough light and there are no reflections or glare on the code.";
"capture_component_qr_tutorial_2" = "Fit the edges of the QR code inside the box.";
"capture_component_invoice_tip_button_message" = "START";
"capture_component_exit_alert_question" = "Are you sure you want to end the process? ";
"capture_component_exit_alert_accept" = "Accept";
"capture_component_exit_alert_cancel" = "Cancel";
"capture_component_invoice_finish_button_message" = "Finish";
"capture_component_invoice_preview_finish_button_message" = "FINISH";
"capture_component_invoice_remove_question" = "Do you want to remove this document?";
"capture_component_invoice_image_count_label" = "Image";
"capture_component_invoice_retry_button_message" = "NO, I WANT TO REPEAT THE PICTURE";
"capture_component_invoice_retry_add_image_message" = "ADD NEW PHOTO";
"capture_component_invoice_tip_title" = "Scan your documents";
"capture_component_invoice_tip_desc" = "Take a picture of the document, or upload an image.\nYou can scan several documents before finishing";
"capture_component_invoice_close_alt" = "Close";
"capture_component_invoice_upload_alt" = "Upload photo";
"capture_component_invoice_capture_alt" = "Capture";
"capture_component_invoice_remove_alt" = "Remove";
"capture_component_invoice_back_image_alt" = "Previous image";
"capture_component_invoice_forward_image_alt" = "Next image";
"capture_component_timeout_title"="Timeout";
"capture_component_timeout_desc"="We apologize. The capture could not be made";
"capture_component_logo_alt" = "Logo";
"capture_component_qr_generation_failed_alert_title" = "QR generation failed";
"capture_component_qr_generation_failed_alert_message" = "Please try again";

"capture_widget_tip_title" = "Document capture";
"capture_widget_tip_message" = "Place your finger inside the mark";
"capture_widget_tip_button" = "Start";
"capture_widget_tip_button_alt" = "Start fingerprint capture";
"capture_widget_tip_close_button_alt" = "Back";
"capture_widget_tip_info_button_alt" = "Show tips";
"capture_widget_tip_anim_desc" = "Instructional animation for fingerprint capture";
"capture_widget_document_camera_preview_placeholder" = "Camera preview will appear once you start the capture.";

"capture_widget_tip_title_document" = "Scan your documents";
"capture_widget_tip_message_document" = "Take a photo of the document, or upload an image.\n\nYou can scan multiple documents before finishing.";
"capture_widget_tip_message_document_alt" = "Take a photo of the document, or upload an image. You can scan multiple documents before finishing.";

"capture_widget_document_camera_button_gallery" = "Gallery";
"capture_widget_document_camera_button_capture" = "Capture";
"capture_widget_document_camera_button_cancel" = "Cancel capture";
"capture_widget_document_camera_button_finish" = "Finish";

"capture_widget_tutorial_message_1" = "Place your face in the center and face the camera.";
"capture_widget_tutorial_message_2" = "Remove any items covering your face.";
"capture_widget_tutorial_message_3" = "Look for a well-lit environment with no shadows on your face.";
"capture_widget_tutorial_message_1_anim_desc" = "The photo is taken when the person is in the centre.";
"capture_widget_tutorial_message_2_anim_desc" = "A person takes off his sunglasses and removes his hair from his eyes.";
"capture_widget_tutorial_message_3_anim_desc" = "The image appears dark and a person switches on the light.";
"capture_widget_tutorial_close_button_alt" = "Back to previous tutorial";

"capture_widget_image_captured" = "Image captured";
"capture_widget_confirmation_message" = "Are all the data read clearly and sharply?";
"capture_widget_confirmation_retry" = "NO, I WANT TO RETAKE THE PHOTO";
"capture_widget_confirmation_continue" = "Yes, finish";
"capture_widget_confirmation_delete" = "Delete photo";
"capture_widget_confirmation_image_unavailable" = "Preview not available";
"capture_widget_confirmation_no_images" = "No captures available";
"capture_widget_confirmation_delete_dialog_title" = "Do you want to delete this document?";
"capture_widget_confirmation_delete_dialog_message" = "Once you delete this document, you will not be able to recover it. You will need to take a new photo.";
"capture_widget_confirmation_delete_dialog_cancel" = "Cancel";
"capture_widget_confirmation_delete_dialog_confirm" = "DELETE DOCUMENT";
```
#### Animaciones
Si se desea modificar las animaciones (lottie) de la SDK habría que incluir las animaciones con el mismo nombre en la carpeta res/raw/ de la aplicación.

```swift
qr_anim_tip_1.json
qr_anim_tip_2.json
capture_anim_tip.json
```