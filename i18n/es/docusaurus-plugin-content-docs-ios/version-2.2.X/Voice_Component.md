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

- Generación de las plantillas con las características de la voz y
  puntuaciones.

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
  	pod 'FPHISDKMainComponent', '~> 2.2.0'
```

- Para instalar el componente de VoiceID deberá incluirse la siguiente entrada en el Podfile de la aplicación:

```
  	pod 'FPHISDKVoiceIDComponent', '~> 2.2.0'
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
            data: data,
            output: { sdkResult in
                let voiceIdSdkResult = SdkResult(finishStatus: sdkResult.finishStatus, errorType: sdkResult.errorType, data: sdkResult.data)
                output(voiceIdSdkResult)
            }, viewController: viewController)
        SDKController.shared.launch(controller: controller)
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
let controller = VoiceController(
            data: data,
            output: { sdkResult in
                let voiceIdSdkResult = SdkResult(finishStatus: sdkResult.finishStatus, errorType: sdkResult.errorType, data: sdkResult.data)
                output(voiceIdSdkResult)
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

En la parte del error, dispondremos de la clase VoiceError.

```java
 INTERNAL_ERROR
 MIC_PERMISSION_DENIED
 TIMEOUT
 CANCEL_BY_USER
 VOICE_ENROLLMENT_PARSE_RESPONSE
 VOICE_MATCHING_PARSE_RESPONSE
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

### 8.1 Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.

```java
"voice_component_success_records_message" = "%d/%d successful recordings";
"voice_component_read_message" = "Say loudly:";
"voice_component_speech_message" = "Speak clearly and close to the microphone";
"voice_component_speech_noisy_message" = "There is too much noise. Try to be in a quiet environment.";
"voice_component_success_message" = "Recording registred";
"voice_component_phrase_generic_error_feedback" = "Please, repeat the sentence.";
"voice_component_phrase_long_silence_feedback" = "Talk for 2 seconds or more.";
"voice_component_phrase_long_reverberation_feedback" = "Too much echo. Try in another environment.";
"voice_component_tutorial_title" = "Voice Recognition";
"voice_component_tutorial_message" = "Speak clearly and aloud\n\nMake sure your surroundings are silent";
"voice_component_tutorial_button" = "Start";
"voice_component_success_button" = "Continue";
"voice_component_ok"="Ok";
"voice_component_cancel"="Cancel";
"voice_component_end_confirmation_title" = "Are you sure you will finish the process?";
"voice_component_text_results_finish_button" = "Finish";
"voice_component_agree" = "Accept";

```
