# Captura facial

## 1. Introducción

La captura facial se realiza con el **_Selphi Component_**. 

Este componente se encarga de realizar la captura de un
selfie del usuario y de la posterior extracción de las características
faciales más importantes. Sus principales procesos son:

- Gestión interna de cámaras y permisos.

- Asistente en los procesos de captura de la cara del usuario.

- Generación de las plantillas con las características faciales y de
  la imagen del usuario.

En el apartado de [Lanzamiento simplificado](./Mobile_SDK) se detallan los pasos necesarios para la integración básica del SDK. En esta sección se añade la información para el lanzamiento de este componente.

---

## 2. Dependencia

La dependencia específica del componente es:

  ```java
  implementation "com.facephi.androidsdk:selphi_component:$version"
  ```

---

## 3. Controladores disponibles

Este componente contiene varios controladores que ejecutan diferente funcionalidad:

| **Controlador**           | **Descripción**                                                |
| ------------------------- | -------------------------------------------------------------- |
| SelphiController          | Controlador principal de reconocimiento facial                 |
| RawTemplateController     | Controlador para generar un RawTemplate a partir de una imagen |
| SignatureSelphiController | Controlador para firmar un proceso con una Captura             |

---

## 4. Lanzamiento simplificado

Una vez iniciado el SDK y creada una nueva operación se podrá lanzar el componente. 
Se podrá hacer uso de cualquiera de sus controladores para ejecutar su funcionalidad.

Lanzamiento de la captura facial:

```java
val response = SDKController.launch(
    SelphiController(SelphiConfigurationData(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("Selphi: ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

---

## 5. Configuración básica 

Para lanzar el componente actual, se deberá crear un objeto _SelphiConfigurationData_ que será la configuración del 
controlador del componente.

La configuración básica necesaria para es la siguiente:

```java
SelphiConfigurationData(
  resourcesPath = "resources_file.zip",
  livenessMode = SelphiFaceLivenessMode.NONE
)
```

Los diferentes modos de lanzamiento son:

- SelphiFaceLivenessMode.NONE
- SelphiFaceLivenessMode.PASSIVE
- SelphiFaceLivenessMode.MOVE

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

Los errores se devolverán como un objeto 'SelphiError'.

Listado de errores:

- SPI_ACTIVITY_RESULT_ERROR: El resultado de la actividad es incorrecto.
- SPI_ACTIVITY_RESULT_MSG_ERROR: El resultado de la actividad recibido en el msg es incorrecto.
- SPI_APPLICATION_CONTEXT_ERROR: El contexto de aplicación necesario es nulo.
- SPI_BAD_EXTRACTOR_CONFIGURATION_ERROR: Widget: Configuración del extractor incorrecta.
- SPI_CAMERA_PERMISSION_DENIED: El usuario ha rechazado los permisos.
- SPI_CANCEL_BY_USER: El usuario ha cancelado el proceso.
- SPI_CANCEL_LAUNCH: Se ha hecho una cancelación general del SDK.
- SPI_COMPONENT_LICENSE_ERROR: La licencia del componente no es correcta.
- SPI_CONTROL_NOT_INITIALIZATED_ERROR: Widget: Error de inicialización.
- SPI_EMPTY_LICENSE: El String de licencia está vacío.
- SPI_EXTRACTION_LICENSE_ERROR: Widget: Error de licencia.
- SPI_FETCH_DATA_ERROR: Error en la recogida del resultado.
- SPI_FLOW_ERROR: Error en el proceso de flow.
- SPI_HARDWARE_ERROR: Widget: Error de hardware.
- SPI_INITIALIZATION_ERROR: Error de inicialización.
- SPI_MANAGER_NOT_INITIALIZED: Los managers son nulos.
- SPI_NO_DATA_ERROR: Los datos de entrada son nulos.
- SPI_OPERATION_NOT_CREATED: No hay ninguna operación en curso.
- SPI_RESOURCES_NOT_FOUND: No se ha encontrado el zip de recursos.
- SPI_SETTINGS_PERMISSION_ERROR: Widget: Error de permisos.
- SPI_TEMPLATE_ERROR:
- SPI_TIMEOUT: Timeout en el proceso.
- SPI_UNEXPECTED_CAPTURE_ERROR: Widget: Error en la captura.
- SPI_UNKNOWN_ERROR: Error desconocido.
- SPI_WIDGET_RESULT_DATA_ERROR: Error en los datos de salida del widget.

### 6.2. Recepción del resultado correcto - _data_

En la parte de SdkResult.Success - _data_, dispondremos de la clase _SelphiResult_.

El resultado devuelve las imágenes en formato **SdkImage**, es posible 
extraer el bitmap accediendo a _image.bitmap_. Si se quisiera convertir a base64 
se puede utilizar la función:

`Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)`

Los campos devueltos en el resultado son los siguientes:

#### 6.2.1 _templateRaw_

Devuelve la plantilla en bruto que se genera después del proceso de
extracción. Válida para el proceso de **matching**.

#### 6.2.2 _template_

Devuelve la plantilla que se genera después del proceso de extracción.
Válida para el proceso de **matching**.

#### 6.2.3 _bestImage_

Devuelve la mejor imagen extraída del proceso de autenticación. Esta imagen 
tiene el tamaño original extraída de la cámara. Válida para el
proceso de **liveness**.

#### 6.2.4 _bestImageCropped_

Devuelve una imagen recortada centrada en la cara del usuario. Esta imagen se obtiene
a partir de la _bestImage_.

#### 6.2.5 _logImages_

Lista con las 5 mejores imágenes capturadas. Se devuelve si se activa el flag "logImages" en la configuración.

#### 6.2.6 _bestImageTokenized_

Devuelve la mejor imagen extraída en el proceso cifrada. Válida para el proceso de **liveness**.

---

## 7. Información avanzada

Este apartado amplía la información del componente.

### 7.1 Controladores Adicionales

#### 7.1.1 SignatureSelphiController

Se utiliza de la misma manera que _SelphiController_ con la diferencia de que genera
un fichero de firma en la plataforma.

#### 7.1.2 RawTemplateController

Controlador para generar un RawTemplate a partir de una imagen (bitmap).

Ejemplo de uso:

```java
val result = SDKController.launch(
    RawTemplateController(SdkImage(image))
)
when (result) {
    is SdkResult.Error -> Napier.d("GenerateRaw: KO - ${result.error}")
    is SdkResult.Success -> result.data
}
```

### 7.2  Configuración avanzada del componente

Para lanzar el componente actual, se deberá crear un objeto _SelphiConfigurationData_ 
que será la configuración del controlador del componente.

A continuación se detallan todos los campos que forman parte de esta clase.

#### 7.2.0. _debug_

Activación del modo depuración del componente.

#### 7.2.1. _resourcesPath_

Indica el nombre de los recursos en formato zip del componente. Ejemplo:
“resources-selphi-2-0.zip“.

Este nombre irá a buscar el fichero a la ruta de _assets_.

![Image](/android/selphi_resources.png)

#### 7.2.2. _cropPercent_

Permite modificar el porcentaje de recortado de la cara. Cuanto mayor
sea el número mayor será el recorte del rectángulo con respecto a la
cara.

#### 7.2.3. _cropImageDebug_

Permite al modo de depuración comprobar el porcentaje de recorte de la cara.

#### 7.2.4. _showResultAfterCapture_

Indica si mostrar o no una pantalla con la imagen capturada después del
proceso de análisis. En esta pantalla se le da al usuario la posibilidad
de repetir el proceso de captura si la imagen que se obtuvo no fuera
correcta.

#### 7.2.5. _showTutorial_

Indica si el widget activa la pantalla de tutorial. En esta vista se
explica de forma intuitiva cómo se realiza la captura.

#### 7.2.6. _livenessMode_

Establece el modo liveness del widget. Los valores permitidos son:

- SelphiFaceLivenessMode.NONE: Indica que no debe activarse el modo detección de
  foto en los procesos de autenticación.

- SelphiFaceLivenessMode.PASSIVE: Indica que la prueba de vida pasiva se realiza en
  el servidor, enviando para tal fin la “BestImage” o el “TemplateRaw”
  correspondiente.

- SelphiFaceLivenessMode.MOVE: Indica que el test de liveness es activo, mostrando
  unas instrucciones durante la captura, y devolviendo el correspondiente
  resultado del proceso.

#### 7.2.7. _stabilizationMode_

Establece un modo de estabilización previo a cualquier proceso de
autenticación en el widget. Con este modo se obliga al widget a no
empezar ningún proceso si el usuario no se encuentra con la cabeza,
mirando al frente y sin moverla.

#### 7.2.8. _cameraFlashEnabled_

Indica si se activa el flash de la cámara del dispositivo.

#### 7.2.9 _locale_

Fuerza al widget a utilizar la configuración de idioma indicado por el
parámetro locale. Este parámetro acepta tanto un código de idioma (p.
ej. ‘en’) como un código de identificación regional (p. ej. ‘en_US’). Si
el archivo de recursos del widget no tuviera una localización para el
‘locale’ seleccionado su configuración pasaría a utilizar el idioma por
defecto.

#### 7.2.10 _fullscreen_

Indica si la vista va a tener prioridad para mostrarse en pantalla
completa, si el sistema lo permite.

#### 7.2.11. _templateRawOptimized_

Indica si el template (templateRaw) generado tras el selfie debe
optimizarse o no.

#### 7.2.12. _qrMode_

Booleano que indica si se quiere o no activar la lectura de QR previo al
proceso de autenticación.

#### 7.2.13 _videoFilename_

Establece la ruta absoluta del nombre del archivo en el que se grabará
un video del proceso de captura. La aplicación es la responsable de
solicitar los permisos necesarios al teléfono en caso de que esa ruta
requiera de permisos adicionales. El widget, por defecto, no realizará
ningún proceso de grabación a menos que se especifique una ruta de
archivo mediante este método.

#### 7.2.14 _viewsContent_

Esta propiedad avanzada permite, mediante una cadena en formato xml,
configurar las vistas del widget.

Nota: Esta propiedad no altera el contenido del archivo de recursos.

#### 7.2.15. _showDiagnostic_

Mostrar pantallas de diagnóstico al final del proceso

#### 7.2.16. _logImages_

Al activarlo se devuelve una lista con las 5 mejores imágenes tomadas del usuario

#### 7.2.17. _showPreviousTip_

Muestra una pantalla previa al lanzamiento de la captura con información sobre el proceso a realizar y un botón para el lanzamiento.

#### 7.2.17. _extractionDuration_

Duración del proceso de extracción facial

#### 7.2.19. _cameraPreferred_

Cámara con la que se quiere realizar el proceso: FRONT, BACK

#### 7.2.20. _vibrationEnabled_

Indica si se desea un feedback de vibración al acabar el proceso.

#### 7.2.21. _moveSuccessfulAttempts_

Número de reintentos para la captura correcta en el proceso de movimiento (Por defecto 1)

#### 7.2.22. _moveFailedAttempts_

Número de reintentos para la captura incorrecta en el proceso de movimiento (Por defecto 2)

---

## 8. Personalización del componente

Además de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de [Ajustes avanzados](./Mobile_SDK_advanced)), este componente en concreto permite su propia personalización.

### 8.1 Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.

```xml
<!-- Diagnostic -->
    <string name="selphi_component_timeout_title">Tiempo superado</string>
    <string name="selphi_component_timeout_desc">No hemos podido identificarte. Inténtalo de nuevo.</string>
    <string name="selphi_component_internal_error_title">Hubo un problema técnico</string>
    <string name="selphi_component_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>
    <!-- Previous Tip -->
    <string name="selphi_component_tip_message">Coloca tu cara en el centro del círculo</string>
    <string name="selphi_component_tip_message_alt">Coloca tu cara en el centro del círculo</string>
    <string name="selphi_component_tip_anim_desc">Una persona muestra su cara dentro del círculo y la aplicación le hace una foto.</string>
    <string name="selphi_component_tip_title">Reconocimiento facial</string>
    <string name="selphi_component_tip_button">Comenzar</string>
    <string name="selphi_component_tip_button_alt">Comenzar captura de rostro</string>
    <string name="selphi_component_tip_move_message">Coloca tu cara en el centro del círculo y sigue las indicaciones</string>
    <string name="selphi_component_tip_move_message_alt">Coloca tu cara en el centro del círculo y sigue las indicaciones</string>
    <string name="selphi_component_tip_move_anim_desc">Una persona muestra su cara dentro del círculo, la mueve ligeramente hacia un lado y la aplicación le hace una foto.</string>
    <string name="selphi_component_tip_move_title">Reconocimiento facial</string>
    <string name="selphi_component_tip_move_button">Comenzar</string>
    <string name="selphi_component_qr_tip_title">Escanea el código QR</string>
    <string name="selphi_component_qr_tip_message">Enfoca el código QR dentro del recuadro</string>
    <string name="selphi_component_qr_tip_anim_desc">Enfoca el código QR dentro del recuadro</string>
    <string name="selphi_component_qr_tip_button">Comenzar</string>
    <string name="selphi_component_tip_close_button_alt">Volver</string>
    <string name="selphi_component_tip_info_button_alt">Ver consejos</string>
    <!-- Tutorial -->
    <string name="selphi_component_tutorial_message_1">Coloca tu cara en el centro y mira de frente a la cámara.</string>
    <string name="selphi_component_tutorial_message_2">Retira cualquier elemento que cubra tu cara.</string>
    <string name="selphi_component_tutorial_message_3">Busca un entorno bien iluminado, sin sombras sobre tu rostro.</string>
    <string name="selphi_component_tutorial_message_1_anim_desc">La foto se realiza cuando la persona está en el centro.</string>
    <string name="selphi_component_tutorial_message_2_anim_desc">Una persona se quita las gafas de sol y se retira el pelo de los ojos.</string>
    <string name="selphi_component_tutorial_message_3_anim_desc">La imagen aparece oscura y una persona enciende la luz.</string>
    <string name="selphi_component_tutorial_close_button_alt">Volver al tutorial previo</string>

```

### 8.2. Animaciones

Si se desea modificar las animaciones (lottie) de la SDK habría que incluir las animaciones con el mismo nombre en la carpeta res/raw/ de la aplicación.

```text
selphi_anim_prev_tip.json
selphi_anim_prev_tip_move.json
selphi_anim_tuto_m_1.json
selphi_anim_tuto_m_2.json
selphi_anim_tuto_m_3.json
```

---

## 9. Fichero zip de recursos

Tabla de versiones de sdk y versiones de recursos asociados (Se pueden encontrar en el apartado de **Resources**):

| **Versión SDK** | **Selphi versión de recursos** |
| --------------- | ------------------------------ |
| 2.0.2           | 5.13.1                         |
| 2.0.3           | 5.13.4                         |
| 2.1.0           | 5.14.1                         |
| 2.1.1           | 5.14.2                         |
| 2.1.2           | 5.15.0                         |
| 2.2.0           | 5.16.1                         |
| 2.2.1           | 5.16.2                         |
| 2.2.2           | 5.16.2                         |
| 2.2.3           | 5.17.1                         |
| 2.3.1           | 5.17.2                         |
| 2.3.2           | 5.17.3                         |
| 2.3.3           | 5.17.5                         |
| 2.3.4           | 5.17.5                         |
| 2.3.5           | 5.17.5                         |
| 2.3.6           | 5.18.2                         |