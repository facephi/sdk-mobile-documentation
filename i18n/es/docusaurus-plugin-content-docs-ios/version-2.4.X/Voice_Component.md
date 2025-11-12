# Voice Component

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
**_Voice Component_**. Éste se encarga de realizar la captura de voz del
usuario y la posterior extracción de las plantillas correspondientes.
Sus principales funcionalidades son las siguientes:

- Entrada de cierto número de frases para posteriormente leer cada una
  en un paso.

- Gestión interna del micrófono.

- Gestión de permisos.

- Análisis de los silencios.

- Análisis del progreso.

- Asistente en los procesos de captura.

- Generación de las plantillas con las características de la voz y puntuaciones.

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

```
  	pod 'FPHISDKMainComponent', '~> 2.4.0'
```

- Para instalar el componente de VoiceID deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```
  	pod 'FPHISDKVoiceIDComponent', '~> 2.4.0'
```

- Una vez instaladas las dependencias, se podrá hacer uso de las diferentes funcionalidades del componente.

- En caso de realizar el desarrollo con **XCode15** se deberá incluir un script de post-instalacion:

![Image](/ios/fix_ldClassic.png)

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la información asociada correctamente en la plataforma deberá ejecutarse previamente el comando **newOperation**.

<div class="note">
<span class="note">:information_source:</span>
Este comando debe haberse ejecutado **anteriormente al lanzamiento del componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de [Iniciar nueva operación](./Mobile_SDK#4-iniciar-nueva-operacion), en el que se detalla y explica en qué consiste este proceso.
</div>

---

## 4. Controladores disponibles

| **Controlador** | **Descripción**                         |
| --------------- | --------------------------------------- |
| VoiceController | Controlador principal de captura de voz |

---

## 5. Configuración del componente

Para configurar el componente actual, una vez inicializado, se deberá
crear un objeto

_VoiceConfigurationData_ y pasarlo como parámetro al SDKController
durante el lanzamiento del componente.

En el siguiente apartado se mostrarán los campos que forman parte de
esta clase y para qué se utiliza cada uno de ellos.

### 5.1. Class VoiceConfigurationData

#### 5.1.1. phrases

Indica la/las frases necesarias para capturar.

#### 5.1.2. vibrationEnabled

Indica la activación de la vibración cuando el widget termine
satisfactoriamente.

#### 5.1.3. showTutorial

Indica si el componente activa la pantalla de tutorial. En esta vista se
explica de forma intuitiva cómo se realiza la captura.

#### 5.1.4. extractionTimeout

Establece el tiempo máximo que se puede realizar la captura.

#### 5.1.5. showDiagnostic

Mostrar pantallas de diagnóstico al final del proceso

---

## 6. Uso del componente

Una vez iniciado el componente y creada una nueva operación (**Apartado 3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, y **trackeando los eventos** internos al servidor de _tracking_:

```java
let controller = VoiceController(
    data: voiceConfigurationData,
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
let controller = VoiceController(
    data: voiceConfigurationData,
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

Los controllers devolverán la información necesaria en formato
SdkResult. Más información en la sección de [Retorno de Resultado](./Mobile_SDK#6-result-return).

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
    case TIMEOUT
    
    //COMMON - LICENSE ERROR
    case LICENSE_CHECKER_ERROR(String)
    case MISSING_COMPONENT_LICENSE_DATA
    case COMPONENT_LICENSE_ERROR
    case EMPTY_LICENSE
}
```

Los errores 'ErrorType.OTHER' y 'ErrorType.LICENSE_CHECKER_ERROR' son especiales porque además pueden informar del detalle del error.

El _String_ puede tener los siguientes valores en el caso del 'ErrorType.OTHER':

```java
enum VoiceError {
    case INTERNAL_ERROR
    case MIC_PERMISSION_DENIED
    case TIMEOUT
    case CANCEL_BY_USER
    
    case VOICE_ENROLLMENT_PARSE_RESPONSE
    case VOICE_MATCHING_PARSE_RESPONSE
}
```

### 7.2. Recepción de ejecución correcta - _data_

En la parte de _data_, dispondremos de la clase _VoiceResult_.

El campo _data_ es variable y dependerá de qué componente se ha devuelto
el resultado. En el caso de este componente, los campos devueltos son
los siguientes:

#### 7.2.1 _audios_

Contiene un listado de audios capturados en formato ByteArray.

#### 7.2.2 _tokenizedAudios_

Contiene el listado de audios capturados en formato tokenizado de
Facephi.

---

## 8. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de [Personalización de la SDK](./Mobile_SDK#9-personalización-de-la-sdk)), este componente en concreto permite la modificación de animaciones, imágenes, fuentes, colores y textos específicos.

Para personalizar el componente, se debe llamar a ThemeVoiceIDManager.setup(theme: CustomThemeVoiceID()) antes de lanzar voiceController:

```java
let voiceController = VoiceController(data: VoiceConfigurationData(), output: { sdkResult in
        // Do whatever with the result
        ...
    }, viewController: viewController)
ThemeVoiceIDManager.setup(theme: CustomThemeVoiceID())
SDKController.shared.launch(controller: voiceController)
```

Un ejemplo de la clase CustomThemeVoiceID sería este (debe extender ThemeVoiceIDProtocol):

```java
class CustomThemeVoiceID: ThemeVoiceIDProtocol {
    var images: [R.Image: UIImage?] = [R.Image.ic_sdk_close: UIImage(named: "closeIcon")!]

    var colors: [R.Color: UIColor?] = [R.Color.sdkPrimaryColor: UIColor.red]

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

Las imagenes inicializan en la variable _images_, pasándole un diccionario, siendo la clave uno de los enumerados que representan las distintas imágenes de la pantalla, y el valor la imagen personalizada que se deba mostrar.

```java
case ic_sdk_logo
case ic_sdk_close_arrow
case ic_sdk_check
case ic_sdk_back
case ic_sdk_close
```

### 8.2 Colores

Los colores se inicializan similarmente en la variable colors con un diccionario, teniendo como valor un UIColor que se desee.

```java
// COMMON SDK Colors 
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
```

### 8.3 Fuentes

Las fuentes se inicializan similarmente en la variable fonts con un diccionario, teniendo como valor un String con el nombre de la UIFont que se desee.

```java
case regular
case bold
```

El tamaño de los textos se inicializa similarmente en la variable dimensions con un diccionario, teniendo como valor un CGFloat con el tamaño deseado.

### 8.4 Animaciones

Las animaciones a usar se inicializan similarmente en la variable animations con un diccionario, teniendo como valor una string con el nombre de la animación que se encuentre en xcassets que se desee usar.

```java
case voice_anim_enroll
case voice_anim_enroll_error
case voice_anim_enroll_ok
case voice_anim_intro
```

### 8.5 Textos - Multiidioma

#### 8.5.1 Configuración de idiomas por defecto

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

#### 8.5.2 Configuración de idiomas personalizada

El componente permite la personalización de los textos según el idioma, el cual al igual que en el anterior caso, será definido por el lenguaje que esté seleccionado en el dispositivo.

Esta personalización se aplica tanto a nuevas localizaciones como al caso de los idiomas predeterminados (es, en y pt). Se hace a través del uso de los archivos **Localizable.strings.**

#### 8.5.3 Keys para multiidioma

Los textos pueden ser customizados sobreescribiendo el valor de las siguientes claves en un **Localizable.strings**. 
Las claves que contienen el sufijo **_\_alt_** son los literales utilizados en las etiquetas de accesibilidad necesarias para la funcionalidad de **_voice over_**.

```java
"voice_component_success_records_message" = "%d/%d grabaciones exitosas";
"voice_component_read_message" = "Di en voz alta:";
"voice_component_speech_message" = "Habla claro y cercano al micrófono";
"voice_component_speech_noisy_message" = "Hay demasiado ruido. Intenta estar en un entorno silencioso.";
"voice_component_success_message" = "Grabación registrada";
"voice_component_phrase_generic_error_feedback" = "Por favor, repite la frase.";
"voice_component_phrase_long_silence_feedback" = "Habla durante 2 segundos o más.";
"voice_component_phrase_long_reverberation_feedback" = "Demasiado eco. Prueba en otro entorno.";
"voice_component_tip_title" = "Reconocimiento de voz";
"voice_component_tip_desc" = "Habla claro y en voz alta.\n\nAsegúrate de estar en un entorno silencioso";
"voice_component_tip_button_message" = "COMENZAR";
"voice_component_exit_alert_accept"="Aceptar";
"voice_component_exit_alert_cancel"="Cancel";
"voice_component_exit_alert_question" = "¿Seguro que finalizar el proceso?";
"voice_component_multiple_speakers_error_feedback" = "Se ha detectado voces de fondo. Asegúrate de estar en un entorno silencioso";
"voice_component_short_recorded_speech_feedback" = "La grabación ha sido muy corta.";
"voice_component_quality_check_error_feedback" = "La calidad del audio es insuficiente.";
"voice_component_back_alt" = "Atrás";
"voice_component_close_alt" = "Cerrar";
"voice_component_logo_alt" = "Logo";
"voice_component_tip_alt"="";
"voice_component_timeout_title"="Tiempo superado";
"voice_component_timeout_desc"="No hemos podido identificarte. Inténtalo de nuevo.";
```

De este modo, si se desea modificar por ejemplo el texto “_COMENZAR_” de la clave `voice_component_tip_button_message` para el idioma **es-MX**, se deberá ir al archivo **Localizable.strings** de la carpeta **es-MX.lproj** si es que existe (si no, se deberá crear) y ahí, añadir:

`"voice_component_tip_button_message"="EMPEZAR";`

Si un mensaje no se especifica en el fichero del idioma, este se rellenará con el mensaje por defecto.