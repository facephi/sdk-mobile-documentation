# Selphi Component

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
[Primeros Pasos](./Mobile_SDK).

---

## 1. Introducción

El _Componente_ tratado en el documento actual recibe el nombre de
**_Selphi Component_**. Éste se encarga de realizar la captura de un
selfie del usuario y la posterior extracción de las características
faciales más importantes. Sus principales funcionalidades son las
siguientes:

- Gestión interna de cámaras.

- Gestión de permisos.

- Asistente en los procesos de captura de la cara del usuario.

- Generación de las plantillas con las características faciales y de
  la imagen de la cara del usuario para el proceso de detección de
  vivacidad (Liveness)

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
  implementation "com.facephi.androidsdk:selphi_component:$sdk_selphi_component_version"
  ```

### 2.1. Fichero zip de recursos

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

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la
información asociada correctamente en la plataforma deberá ejecutarse
previamente el comando **newOperation**.

Este comando debe haberse ejecutado **anteriormente al lanzamiento del
componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de [Primeros Pasos](./Mobile_SDK), en el que se detalla y explica en qué consiste
este proceso.

---

## 4. Controladores disponibles

| **Controlador**           | **Descripción**                                                |
| ------------------------- | -------------------------------------------------------------- |
| SelphiController          | Controlador principal de reconocimiento facial                 |
| RawTemplateController     | Controlador para generar un RawTemplate a partir de una imagen |
| SignatureSelphiController | Controlador para firmar un proceso con una Captura             |

---

## 5. Configuración del componente

Para configurar el componente actual, una vez inicializado, se deberá
crear un objeto _SelphiConfigurationData_ y pasarlo como parámetro al
SDKController durante el lanzamiento del componente.

En el siguiente apartado se mostrarán los campos que forman parte de
esta clase y para qué se utiliza cada uno de ellos.

### 5.1. Class SelphiConfigurationData

#### 5.1.0. _debug_

Activación del modo depuración del componente.

#### 5.1.1. _resourcesPath_

Indica el nombre de los recursos en formato zip del componente. Ejemplo:
“resources-selphi-2-0.zip“.

Este nombre irá a buscar el fichero a la ruta de _assets_.

![Image](/android/selphi_resources.png)

#### 5.1.2. _cropPercent_

Permite modificar el porcentaje de recortado de la cara. Cuanto mayor
sea el número mayor será el recorte del rectángulo con respecto a la
cara.

#### 5.1.3. _cropImageDebug_

Permite al modo de depuración comprobar el porcentaje de recorte de la cara.

#### 5.1.4. _showResultAfterCapture_

Indica si mostrar o no una pantalla con la imagen capturada después del
proceso de análisis. En esta pantalla se le da al usuario la posibilidad
de repetir el proceso de captura si la imagen que se obtuvo no fuera
correcta.

#### 5.1.5. _showTutorial_

Indica si el widget activa la pantalla de tutorial. En esta vista se
explica de forma intuitiva cómo se realiza la captura.

#### 5.1.6. _livenessMode_

Establece el modo liveness del widget. Los valores permitidos son:

- SelphiFaceLivenessMode.NONE: Indica que no debe activarse el modo detección de
  foto en los procesos de autenticación.

- SelphiFaceLivenessMode.PASSIVE: Indica que la prueba de vida pasiva se realiza en
  el servidor, enviando para tal fin la “BestImage” o el “TemplateRaw”
  correspondiente.

- SelphiFaceLivenessMode.MOVE: Indica que el test de liveness es activo, mostrando
  unas instrucciones durante la captura, y devolviendo el correspondiente
  resultado del proceso.

#### 5.1.7. _stabilizationMode_

Establece un modo de estabilización previo a cualquier proceso de
autenticación en el widget. Con este modo se obliga al widget a no
empezar ningún proceso si el usuario no se encuentra con la cabeza,
mirando al frente y sin moverla.

#### 5.1.8. _cameraFlashEnabled_

Indica si se activa el flash de la cámara del dispositivo.

#### 5.1.9 _locale_

Fuerza al widget a utilizar la configuración de idioma indicado por el
parámetro locale. Este parámetro acepta tanto un código de idioma (p.
ej. ‘en’) como un código de identificación regional (p. ej. ‘en_US’). Si
el archivo de recursos del widget no tuviera una localización para el
‘locale’ seleccionado su configuración pasaría a utilizar el idioma por
defecto.

#### 5.1.10 _fullscreen_

Indica si la vista va a tener prioridad para mostrarse en pantalla
completa, si el sistema lo permite.

#### 5.1.11. _templateRawOptimized_

Indica si el template (templateRaw) generado tras el selfie debe
optimizarse o no.

#### 5.1.12. _qrMode_

Booleano que indica si se quiere o no activar la lectura de QR previo al
proceso de autenticación.

#### 5.1.13 _videoFilename_

Establece la ruta absoluta del nombre del archivo en el que se grabará
un video del proceso de captura. La aplicación es la responsable de
solicitar los permisos necesarios al teléfono en caso de que esa ruta
requiera de permisos adicionales. El widget, por defecto, no realizará
ningún proceso de grabación a menos que se especifique una ruta de
archivo mediante este método.

#### 5.1.14 _viewsContent_

Esta propiedad avanzada permite, mediante una cadena en formato xml,
configurar las vistas del widget.

Nota: Esta propiedad no altera el contenido del archivo de recursos.

#### 5.1.15. _showDiagnostic_

Mostrar pantallas de diagnóstico al final del proceso

#### 5.1.16. _logImages_

Al activarlo se devuelve una lista con las 5 mejores imágenes tomadas del usuario

#### 5.1.17. _showPreviousTip_

Muestra una pantalla previa al lanzamiento de la captura con información sobre el proceso a realizar y un botón para el lanzamiento.

#### 5.1.18. _extractionDuration_

Duración del proceso de extracción facial

#### 5.1.19. _cameraPreferred_

Cámara con la que se quiere realizar el proceso: FRONT, BACK

#### 5.1.20. _vibrationEnabled_

Indica si se desea un feedback de vibración al acabar el proceso.

#### 5.1.21. _moveSuccessfulAttempts_

Número de reintentos para la captura correcta en el proceso de movimiento (Por defecto 1)

#### 5.1.22. _moveFailedAttempts_

Número de reintentos para la captura incorrecta en el proceso de movimiento (Por defecto 2)

---

## 6. Uso del componente

Una vez iniciado el componente y creada una nueva operación (**apartado
3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero sí se trackearán los eventos
  internos al servidor de _tracking_:

```java
val response = SDKController.launch(
    SelphiController(SelphiConfigurationData(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("Selphi: ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
val response = SDKController.launchMethod(
    SelphiController(SelphiConfigurationData(...))
)
when (response) {
    is SdkResult.Error -> Napier.d("Selphi: ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
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

En la parte del error, dispondremos de la clase SelphiError.

Listado de errores:

- ACTIVITY_RESULT_ERROR: El resultado de la actividad es incorrecto.
- ACTIVITY_RESULT_MSG_ERROR: El resultado de la actividad recibido en el msg es incorrecto.
- APPLICATION_CONTEXT_ERROR: El contexto de aplicación necesario es nulo.
- BAD_EXTRACTOR_CONFIGURATION_ERROR: Widget: Configuración del extractor incorrecta.
- CAMERA_PERMISSION_DENIED: El usuario ha rechazado los permisos.
- CANCEL_BY_USER: El usuario ha cancelado el proceso.
- CANCEL_LAUNCH: Se ha hecho una cancelación general del SDK.
- COMPONENT_LICENSE_ERROR: La licencia del componente no es correcta.
- CONTROL_NOT_INITIALIZATED_ERROR: Widget: Error de inicialización.
- EMPTY_LICENSE: El String de licencia está vacío.
- EXTRACTION_LICENSE_ERROR: Widget: Error de licencia.
- FETCH_DATA_ERROR: Error en la recogida del resultado.
- FLOW_ERROR: Error en el proceso de flow.
- HARDWARE_ERROR: Widget: Error de hardware.
- INITIALIZATION_ERROR: Error de inicialización.
- MANAGER_NOT_INITIALIZED: Los managers son nulos.
- NO_DATA_ERROR: Los datos de entrada son nulos.
- OPERATION_NOT_CREATED: No hay ninguna operación en curso.
- RESOURCES_NOT_FOUND: No se ha encontrado el zip de recursos.
- SETTINGS_PERMISSION_ERROR: Widget: Error de permisos.
- TEMPLATE_ERROR:
- TIMEOUT: Timeout en el proceso.
- UNEXPECTED_CAPTURE_ERROR: Widget: Error en la captura.
- UNKNOWN_ERROR: Error desconocido.
- WIDGET_RESULT_DATA_ERROR: Error en los datos de salida del widget.

### 7.2. Recepción de ejecución correcta - _data_

En la parte de _data_, dispondremos de la clase SelphiResult.

El resultado devuelve las imágenes en formato **Bitmap**, es posible
convertir las imágenes a **Base64** de la siguiente manera:

`Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)`

El campo _data_ es variable y dependerá de qué componente se ha devuelto
el resultado. En el caso de este componente, los campos devueltos son
los siguientes:

#### 7.2.1 _templateRaw_

Devuelve la plantilla en bruto que se genera después del proceso de
extracción. Válida para el proceso de **matching**.

#### 7.2.2 _template_

Devuelve la plantilla que se genera después del proceso de extracción.
Válida para el proceso de **matching**.

#### 7.2.3 _bestImage_

Devuelve la mejor imagen extraída del proceso de autenticación en
formato SdkImage (Se puede extraer el bitmap de dentro). Esta imagen es
la imagen con el tamaño original extraída de la cámara. Válido para el
proceso de **liveness**.

#### 7.2.4 _bestImageCropped_

Devuelve una imagen recortada centrada en la cara del usuario en formato
SdkImage (Se puede extraer el bitmap de dentro). Esta imagen se obtiene
a partir de la _bestImage_. Ésta es la imagen que se podrá utilizar como
imagen característica del usuario que realizó el proceso a modo de
_avatar_.

#### 7.2.5 _logImages_

Lista con las 5 mejores imágenes capturadas. Se devuelve si se activa el flag "logImages" en la configuración.

#### 7.2.6 _bestImageTokenized_

Devuelve la mejor imagen extraída del proceso cifrada. Válido para el proceso de **liveness**.

---

## 8. Controladores Adicionales

### 8.1. RawTemplateController

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

## 9. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de [Primeros Pasos](./Mobile_SDK)), este componente en concreto permite la
modificación de textos específicos.

### 9.1 Textos

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

### 9.2. Animaciones

Si se desea modificar las animaciones (lottie) de la SDK habría que incluir las animaciones con el mismo nombre en la carpeta res/raw/ de la aplicación.

```text
selphi_anim_prev_tip.json
selphi_anim_prev_tip_move.json
selphi_anim_tuto_m_1.json
selphi_anim_tuto_m_2.json
selphi_anim_tuto_m_3.json
```
