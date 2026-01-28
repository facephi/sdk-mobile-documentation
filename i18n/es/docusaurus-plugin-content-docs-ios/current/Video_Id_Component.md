# Video Id Component

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

El _Componente_ tratado en el documento actual recibe el nombre de
**_VideoID Component_**. Éste se encarga de realizar la grabación de un
usuario identificándose, mostrando la cara y su documento de identidad.

## 1.1 Requisitos mínimos

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

Para evitar conflictos y problemas de compatibilidad, en caso de querer
instalar el componente en un proyecto que contenga una versión antigua
de las librerías de Facephi (_Widgets_), éstos deberán eliminarse por
completo antes de la instalación de los componentes de la
**_SDKMobile_**.

#### Cocoapods

- Actualmente las librerías de FacePhi se distribuyen de forma remota a través de diferentes gestores de dependencias, en este caso Cocoapods. Las dependencias **obligatorias** que deberán haberse instalado previamente (añadiéndolas en el fichero Podfile del proyecto) son:

```java
  pod 'FPHISDKMainComponent', '~> 2.5.0'
```

- Para instalar el componente de VideoID deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```java
	pod 'VideoIdController', '~> 2.5.0'
```

- Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

- En caso de realizar el desarrollo con **XCode15** se deberá incluir un script de post-instalacion:

![Image](/ios/fix_ldClassic.png)

## 2.2 Permisos y configuraciones

En la aplicación cliente donde se vayan a integrar los componentes es necesario incorporar el siguiente elementos en el fichero **info.plist**

```
Es necesario permitir el uso de la cámara (Privacy - Camera Usage Description)
```

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la información asociada correctamente en la plataforma deberá ejecutarse previamente el comando **newOperation**.

<div class="note">
<span class="note">:information_source:</span>
Este comando debe haberse ejecutado **anteriormente al lanzamiento del componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda consultar la documentación de [Iniciar nueva operación](./Mobile_SDK#4-iniciar-nueva-operacion), en el que se detalla y explica en qué consiste este proceso.
</div>

---

## 4. Controladores disponibles

| **Controlador**            | **Descripción**                                    |
| -------------------------- | -------------------------------------------------- |
| VideoIdController          | Controlador principal de video identificación      |
| SignatureVideoIdController | Controlador para firmar un proceso con una Captura |

---

## 5. Configuración del componente

Los campos incluidos en la configuración (**url, apiKey, tenantId**),
normalmente **no es necesario que sean informados** ya que se completan
internamente a través de la licencia usada.

Estos campos suelen informarse **solo** cuando el **servidor** es
**OnPremise**.

### 5.1. Class VideoIdConfigurationData

#### 5.1.1. url

Ruta al socket de video

#### 5.1.2. apiKey

ApiKey necesaria para la conexión con el socket de video

#### 5.1.3. tenantId

Identificador del tenant que hace referencia al cliente actual,
necesario para la conexión con el servicio de video.

#### 5.1.4. sectionTime

Indica la duración de las secciones con tiempo asociado (captura facial y cambio de cámara).

#### 5.1.5. mode

- ONLY_FACE: El proceso se realiza siendo necesariamente solo
  mostrando la cara.

- FACE_DOCUMENT_FRONT: El proceso se realiza usando tanto la cara como
  el frontal del documento de identidad.

- FACE_DOCUMENT_FRONT_BACK: El proceso se realiza usando la cara, el
  frontal del documento de identidad y la parte trasera del documento.

#### 5.1.6. timeoutServerConnection

Tiempo máximo de espera en ms para la respuesta del servidor.

#### 5.1.7. sectionTimeout

Tiempo máximo permitido para completar una sección (en ms).

#### 5.1.8. autoFaceDetection

Activa/Desactiva la detección automática de cara.

#### 5.1.9. debug

Habilita la visualización de información adicional útil para el diagnóstico y seguimiento del comportamiento interno.

#### 5.1.10. countryFilter

Permite restringir el procesamiento a un conjunto específico de países, aceptando un array de strings que representan los alias en formato ISO3 (código de 3 letras según el estándar ISO 3166-1). 

#### 5.1.11. documentFilter

Permite restringir los tipos de documentos aceptados durante la captura. Los valores posibles son:

- "IDC": Documento de Identidad (ID Card)
- "PSP": Pasaporte (Passport)
- "DLI": Licencia de Conducir (Driver License)
- "VIS": Visado (Visa)
- "FOC": Tarjeta de Extranjero (Foreign Card)
- "INV": Factura (Invoice)
- "CUS": Documento Personalizado (Custom Document) 

#### 5.1.12. speechText

Texto que el usuario deberá pronunciar durante la grabación del video. 

#### 5.1.13. showCompletedTutorial

Indica si se quiere mostrar el tutorial inicial completo. Si no, se
mostrará un progress indicator.

#### 5.1.14. vibrationEnabled

Si se le da valor true, se activa la vibración en errores y si la respuesta del widget es OK.

#### 5.1.15. maxRetries

Número de reintentos permitidos en cada operación. Por defecto, su valor es 3.

#### 5.1.16. ocrValidations

Validaciones a realizar tras la captura del documento. Los datos proporcionados se evalúan contra los obtenidos.

#### 5.1.17. ocrMaxWarnings

Cuántas advertencias se permiten antes de que la captura de VideoID se marque como *_TOLERANCE_ERROR_*.
**El valor por defecto es 5.**

---

## 6. Uso del componente

Una vez iniciado el componente y creada una nueva operación (**Apartado 3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, y **trackeando los eventos** internos al servidor de _tracking_:


```java
let controller = VideoIdController(
  data: videoIdConfigurationData,
  output: { sdkResult in
    // Do whatever with the result
    ...
  }, viewController: viewController)
SDKController.shared.launch(controller: controller)
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
let controller = VideoIdController(
  data: videoIdConfigurationData,
  output: { sdkResult in
    // Do whatever with the result
    ...
  }, viewController: viewController)
SDKController.shared.launchMethod(controller: controller)
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

Los controllers devolverán la información necesaria en formato SdkResult. Más información en la sección de [Retorno de Resultado](./Mobile_SDK#6-retorno-de-resultado).


### 7.1. Recepción de errores

En la parte del error, dispondremos del enumerado común _ErrorType_:

```java
public enum ErrorType: Equatable, Error {
    //COMMON - BASIC
    case NO_ERROR
    case UNKNOWN_ERROR
    case OTHER(String)
    
    //COMMON - REQUIREMENTS
    case NO_DATA_ERROR
    case NO_OPERATION_CREATED_ERROR
    case NETWORK_CONNECTION
    
    //COMMON - PERMISSIONS
    case CAMERA_PERMISSION_DENIED
    case MIC_PERMISSION_DENIED
    case LOCATION_PERMISSION_DENIED
    case STORAGE_PERMISSION_DENIED
    
    //COMMON - USER'S INTERACTION
    case CANCEL_BY_USER
    case SDK_TIMEOUT
    
    //COMMON - LICENSE ERROR
    case LICENSE_CHECKER_ERROR(String)
    case MISSING_COMPONENT_LICENSE_DATA
    case COMPONENT_LICENSE_ERROR
    case EMPTY_LICENSE
}
```

**IMPORTANTE: OCR_ERROR es un error específico de VideoIdComponent. Se utiliza para informar al integrador de qué campos OCR no han superado las validaciones del proceso.**

Los errores 'ErrorType.OTHER' y 'ErrorType.LICENSE_CHECKER_ERROR' son especiales porque además pueden informar del detalle del error.

El _String_ puede tener los siguientes valores en el caso del 'ErrorType.OTHER':

```java
public enum VideoIdError: String {
    case SOCKET_URL_IS_NOT_VALID
    case MISSING_DOCUMENT_READER_RESOURCES
    case NO_FACE_DETECTED
    case OCR_ERROR
}
```

## 8. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de [Personalización de la SDK](./Mobile_SDK#9-personalización-de-la-sdk)), este componente en concreto permite la modificación de animaciones, imágenes, fuentes, colores y textos específicos.

Para personalizar el componente, se debe llamar a ThemeVideoIdManager.setup(theme:`CustomThemeVideoId()` ) antes de lanzar el videoIdController:

```java
let videoidController = VideoIdController(data: data, output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
ThemeVideoIdManager.setup(theme: CustomThemeVideoId())
SDKController.launchVideoId(controller: videoidController)
```

Un ejemplo de la clase CustomThemeVideoId sería este (debe implementar ThemeVideoIdProtocol):

```java
class CustomThemeVideoId: ThemeVideoIdProtocol {
    var images: [R.Image: UIImage?] = [R.Image.ic_sdk_close: UIImage(named: "closeIcon")!]

    var colors: [R.Color: UIColor?] = [R.Color.MessageText: UIColor.red]

    var animations: [R.Animation: String] = [:]

    var name: String {
        "custom"
    }

    var fonts: [R.Font: String] = [:]

    var dimensions: [R.Dimension: CGFloat] {
        [.fontBig: 8]
    }
}
```

### 8.1 Imágenes

- Las imágenes inicializan en la variable images , pasándole un diccionario, siendo la clave uno de los enumerados que representan las distintas imágenes de la pantalla, y el valor la imagen personalizada que se deba mostrar.

```java
case ic_sdk_close_arrow
case ic_sdk_close
case ic_video_id_back_id
case ic_video_id_check
case ic_video_id_front_id
case ic_video_id_logo
case ic_video_id_record_back
case ic_video_id_record_face
case ic_video_id_record_front
case ic_video_id_user
case ic_video_id_micro
case ic_video_id_camera_switch
case ic_video_id_camera_switch_mask
case ic_video_id_record_back_detected
case ic_video_id_record_face_detected
case ic_video_id_record_front_detected
case ic_video_id_no_face_detected
case ic_video_id_timeout
```

### 8.2 Colores

- Los colores se inicializan similarmente en la variable colors con un diccionario, teniendo como valor un UIColor que se desee.

```java
case sdkPrimaryColor
case sdkBackgroundColor
case sdkSecondaryColor
case sdkBodyTextColor
case sdkTitleTextColor
case sdkSuccessColor
case sdkErrorColor
case sdkNeutralColor
case sdkAccentColor
case sdkTopIconsColor
// VideoID Specific Colors
case sdkTopIconsVideoColor
```

### 8.3 Fuentes

Las fuentes se inicializan similarmente en la variable `fonts` con un diccionario, teniendo como valor un **String** con el nombre de la **UIFont** que se desee.

```
case regular
case bold
```

- El tamaño de los textos se inicializa similarmente en la variable dimensions con un diccionario, teniendo como valor un **CGFloat** con el tamaño deseado.

### 8.4 Animaciones

Las animaciones se inicializan similarmente en la variable `animations` con un diccionario, teniendo como valor un **String** con el nombre del archivo **JSON Lottie** que se desee.


```
case video_id_anim_doc_and_face
case video_id_anim_face
case video_id_anim_loading
case video_id_anim_diagnostic_success
case video_id_anim_diagnostic_error
```

### 8.5 Personalizar el tiempo entre pantallas

Para modificar el tiempo que se permanece en cada pantalla de grabación hay que modificar el valor del parámetro time (en ms) del VideoIDConfigurationData:

`VideoIDConfigurationData(...,sectionTime: TIEMPO EN MS,...)`

El mínimo soportado es 5000ms.

### 8.6 Textos - Multiidioma

#### 8.6.1 Configuración de idiomas por defecto

Si se instala el paquete mediante **SPM**, para que funcione la localización de textos, es necesario añadir en el archivo **Info.plist** de la app integradora lo siguiente:

**CFBundleAllowMixedLocalizations = YES**

Quedaría así:

![Image](/ios/sdkVideo-infoplist-image.png)

- Inglés

- Español - España

- Portugués - Portugal

El idioma del componente se puede configurar en el *_initSdk_* mediante el parámetro **_locale_**.
En caso de no configurarse, el SDK escoge el idioma establecido en el dispositivo.

- Si el idioma es cualquiera cuya raíz es el Español (p.e Español - México), por defecto, usará Español - España.

- Si el idioma es cualquiera cuya raíz es el Portugués (p.e Portugués - Brasil), por defecto, usará Portugués - Portugal.

- Para cualquier otro caso, se hará uso del Inglés.

#### 8.6.2 Configuración de idiomas personalizada

El componente permite la personalización de los textos según el idioma, el cual al igual que en el anterior caso, será definido por el lenguaje que esté seleccionado en el dispositivo.

Esta personalización se aplica tanto a nuevas localizaciones como al caso de los idiomas predeterminados (es, en y pt). Se hace a través del uso de los archivos **Localizable.strings.**

#### 8.6.3 Keys para multiidioma

Los textos pueden ser personalizados sobreescribiendo su valor en las siguientes claves del archivo **Localizable.strings**. Las claves que contienen el sufijo **_\_alt_** son las etiquetas de accesibilidad necesarias para el correcto funcionamiento del **_voice over_**.

```java
"video_id_component_init_message_face_docu_content_desc"="Coloca tu rostro y el frente de tu documento en las marcas";
"video_id_component_init_message_face_content_desc"="Coloca tu rostro en las marcas e inicia la grabación";
"video_id_component_finish_message"="¡Videograbación finalizada!";
"video_id_component_finish_button"="FINALIZAR";
"video_id_component_restart"="REPETIR GRABACIÓN";
"video_id_component_ready_button"="CONTINUAR";
"video_id_component_first_message"="Coloca tu rostro y el frente de tu documento en las marcas";
"video_id_component_second_message"="Coloca tu rostro y el dorso de tu documento en las marcas";
"video_id_component_third_message"="Di en voz alta: \"Yo (nombre y apellidos) acepto los términos y condiciones\".";
"video_id_component_exit_alert_cancel"="Cancelar";
"video_id_component_exit_alert_question" = "¿Seguro que quiere finalizar el proceso?";
"video_id_component_exit_alert_finish" = "Finalizar";
"video_id_component_exit_alert_accept" = "Aceptar";
"video_id_component_timeout_title"="Tiempo superado";
"video_id_component_timeout_desc"="No pudimos hacer la grabación a tiempo. Probemos de nuevo.";
"video_id_component_unknown_title"="Se ha producido un error";
"video_id_component_unknown_desc"="Probemos de nuevo.";
"video_id_component_close_alt" = "Cerrar";
"video_id_component_back_alt" = "Atrás";
"video_id_component_logo_alt" = "Logo";
"video_id_component_document_front_message" = "Coloca el frente de tu documento en las marcas";
"video_id_component_document_front_message_readable" = "Mantén el frente de tu documento en las marcas";
"video_id_component_document_front_message_not_readable" = "Acerca el frente de tu documento a las marcas";
"video_id_component_document_back_message" = "Ahora coloca el reverso de tu documento";
"video_id_component_document_back_message_readable" = "Mantén el reverso de tu documento en las marcas";
"video_id_component_document_back_message_not_readable" = "Acerca el reverso de tu documento a las marcas";
"video_id_component_switch_camera_message" = "Prepare su documento mientras se procede al cambio de cámara";
"video_id_component_first_message_face" = "Coloque su cara dentro del marco";
"video_id_component_first_message_multiple_face" = "Varias caras detectadas. Coloque sólo su cara dentro del marco";
"video_id_component_speech_message" = "Yo (nombre y apellidos) acepto los términos y condiciones";
"video_id_component_speech_say_out_loud" = "Di en voz alta: ";
"video_id_component_front_document_captured" = "Frente del documento capturado correctamente";
"video_id_component_document_back_message_finish" = "Reverso del documento capturado correctamente";
"video_id_component_face_timeout_title" = "No hemos detectado tu rostro";
"video_id_component_face_timeout_desc" = "Por favor, coloca tu rostro en la marca para iniciar el proceso";
```

De este modo, si se desea modificar por ejemplo el texto “_Finalizar_” de la clave `video_id_finish_button` para el idioma **es-MX**, se deberá ir al archivo **Localizable.strings** de la carpeta **es-MX.lproj** si es que existe (si no, se deberá crear) y ahí, añadir:

`"video_id_finish_button"="Terminar";`

Si un mensaje no se especifica en el fichero del idioma, este se rellenará con el mensaje por defecto.
