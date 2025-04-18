# NFC Component

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
**_NFC Component_**. Éste se encarga de realizar la lectura de nfc de
documentos de identidad y pasaportes. Sus principales funcionalidades
son las siguientes:

- Gestión interna del sensor de NFC.

- Gestión de permisos.

- Análisis de documento.

- Análisis del progreso.

- Asistente en los procesos de lectura.

- Devolución de toda la información posible a leer

- Devolución de imágenes cuando estén disponible para su lectura

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
  implementation "com.facephi.androidsdk:nfc_component:$sdk_nfc_component_version"{
        exclude group : "org.bouncycastle", module : "bcprov-jdk15on"
        exclude group : "org.bouncycastle", module : "jetified-bcprov-jdk15on-1.68"
    }
  ```

En el caso de NFC hay que añadir en gradle:

```java
android {
  ...
 packaging {
      resources {
          pickFirsts.add("META-INF/versions/9/OSGI-INF/MANIFEST.MF")
      }
  }
}
```

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

| **Controlador** | **Descripción**                      |
| --------------- | ------------------------------------ |
| NFCController   | Controlador principal de lectura NFC |

---

## 5. Configuración del componente

Para configurar el componente actual, una vez inicializado, se deberá
crear un objeto

_NFCConfigurationData_ y pasarlo como parámetro al SDKController durante
el lanzamiento del componente.

En el siguiente apartado se mostrarán los campos que forman parte de
esta clase y para qué se utiliza cada uno de ellos.

### 5.1. Class NFCConfigurationData

#### 5.1.1. documentNumber

Indica el número de documento o número de soporte dependiendo del
documento a realizar la lectura.

Éste campo es obligatorio.

#### 5.1.2. birthDate

Indica la fecha de nacimiento que aparece en el documento
("dd/MM/yyyy").

Éste campo es obligatorio.

#### 5.1.3. expirationDate

Indica la fecha de expiración que aparece en el documento
("dd/MM/yyyy").

Éste campo es obligatorio.

#### 5.1.4. extractionTimeout

Establece el tiempo máximo que se puede realizar la lectura.

#### 5.1.5. showReadingScreen

Establece si se desea mostrar la pantalla modal inferior con la lectura
que se está realizando. Si se desactiva, no se muestra ninguna vista y
se deberán escuchar los estados que devuelve el controlador.

#### 5.1.6. showTutorial

Indica si el componente activa la pantalla de tutorial. En esta vista se
explica de forma intuitiva cómo se realiza la captura.

#### 5.1.7. vibrationEnabled

Indica si se desea un feedback de vibración al acabar el proceso.

#### 5.1.8. enableDebugMode

Activación del modo depuración del componente.

#### 5.1.9. skipPace

Indica que solo se desea realizar la lectura BAC de NFC. Es una lectura
con información más simple y rápida que permite la lectura de más
variedad de documentos.

#### 5.1.10. showDiagnostic

Mostrar pantallas de diagnóstico al final del proceso

#### 5.1.11. extractFacialImage

Indica si quiere extraer la imagen de la cara.

#### 5.1.12. extractSignatureImage

Indica si quiere extraer la imagen de la firma.

#### 5.1.13. documentType

Campo utilizado para cambiar la vista de tutorial y que muestre los diferentes documentos.

#### 5.1.14. showPreviousTip

Muestra una pantalla previa al lanzamiento de la captura con información sobre el proceso a realizar y un botón para el lanzamiento.

---

## 6. Uso del componente

Una vez iniciado el componente y creada una nueva operación (**apartado
3**) se podrán lanzar los componentes del SDK. Hay dos formas de lanzar
el componente:

- **\[CON TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero sí se trackearán los eventos
  internos al servidor de _tracking_:

```java
val result = SDKController.launch(
    NfcController(
        componentData = NfcConfigurationData(
            documentNumber = NFC_SUPPORT_NUMBER, // Num soport.
            birthDate = NFC_BIRTH_DATE, // "dd/MM/yyyy"
            expirationDate = NFC_EXPIRATION_DATE, // "dd/MM/yyyy",
            ),
        state = { state ->
            Napier.d("NFC: State: ${state.name}")
        },
        debugLogs = {
            Napier.d("NFC Logs: $it")
        }
    )
)
when (result) {
    is SdkResult.Error -> Napier.d("APP: NFC: ERROR - ${result.error.name}")
    is SdkResult.Success -> {
        Napier.d("APP: NFC: OK")
        Napier.d("DOCUMENT: ${result.data.nfcDocumentInformation}")
        Napier.d("PERSONAL: ${result.data.nfcPersonalInformation}")
    }
}
```

- **\[SIN TRACKING\]** Esta llamada permite lanzar la funcionalidad
  del componente con normalidad, pero **no se trackeará** ningún
  evento al servidor de _tracking_:

```java
val result = SDKController.launchMethod(
    NfcController(
        componentData = NfcConfigurationData(
            documentNumber = NFC_SUPPORT_NUMBER, // Num soport.
            birthDate = NFC_BIRTH_DATE, // "dd/MM/yyyy"
            expirationDate = NFC_EXPIRATION_DATE, // "dd/MM/yyyy",
            ),
        state = { state ->
            Napier.d("NFC: State: ${state.name}")
        },
        debugLogs = {
            Napier.d("NFC Logs: $it")
        }
    )
)
when (result) {
    is SdkResult.Error -> Napier.d("APP: NFC: ERROR - ${result.error.name}")
    is SdkResult.Success -> {
        Napier.d("APP: NFC: OK")
        Napier.d("DOCUMENT: ${result.data.nfcDocumentInformation}")
        Napier.d("PERSONAL: ${result.data.nfcPersonalInformation}")
    }
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
  rel="nofollow">6. Retorno de resultado</a> del Android Mobile SDK.

### 7.1. Recepción de errores

En la parte del error, dispondremos de la clase NfcError.

Listado de errores:

- APPLICATION_CONTEXT_ERROR: El contexto de aplicación necesario es nulo.
- CANCEL_BY_USER: El usuario ha cancelado el proceso.
- CANCEL_LAUNCH: Se ha hecho una cancelación general del SDK.
- COMPONENT_LICENSE_ERROR: La licencia del componente no es correcta.
- EMPTY_LICENSE: El String de licencia está vacío.
- EXTRACT_DATA_ERROR: Error en los datos extraídos.
- FETCH_DATA_ERROR: Error en la recogida del resultado.
- FLOW_ERROR: Error en el proceso de flow.
- INITIALIZATION_ERROR: Error de inicialización.
- LAST_COMMAND_EXPECTED: Error en el comando de finalización
- MANAGER_NOT_INITIALIZED: Los managers son nulos.
- NFC_ERROR: Error general
- NFC_ERROR_DATA: Error en los datos de entrada
- NFC_ERROR_DISABLED: NFC deshabilitado
- NFC_ERROR_ILLEGAL_ARGUMENT: NFC con un tag incorrecto
- NFC_ERROR_IO: Error de entrada/salida
- NFC_ERROR_NOT_SUPPORTED: NFC no somportado
- NFC_ERROR_TAG_LOST: Conexión perdida
- OPERATION_NOT_CREATED: No hay ninguna operación en curso.
- TIMEOUT: Timeout en el proceso.

### 7.2. Recepción de ejecución correcta - _data_

En la parte de _data_, dispondremos de la clase _NfcResult_.

El campo _data_ es variable y dependerá de qué componente se ha devuelto
el resultado. En el caso de este componente, los campos devueltos son
los siguientes:

#### 7.2.1. nfcRawData

Información obtenida por cada tipo de dato en formato crudo.

#### 7.2.2. nfcDocumentInformation

Información obtenida del documento ordenada por:

- documentNumber

- expirationDate

- issuer

- mrzString

- type

#### 7.2.3. nfcPersonalInformation

Información obtenida del documento ordenada por:

- address

- birthdate

- city

- gender

- name

- nationality

- personalNumber

- placeOfBirth

- surname

#### 7.2.4. nfcImages

Información de imágenes obtenida del documento ordenada por:

- facialImage

- fingerprintImage

- signatureImage

#### 7.2.5 nfcSecurityData

Información de datos de seguridad del documento ordenada por:

- dataGroupsHashes

- dataGroupsRead

- documentSigningCertificateData

- issuerSigningCertificateData

- ldsVersion

#### 7.2.6. nfcValidations

Información de las validaciones del documento ordenada por:

- accessType

- activeAuthenticationSupported

- activeAuthenticationValidation

- chipAuthenticationValidation

- dataGroupsHashesValidation

- documentSigningValidation

- issuerSigningValidation

#### 7.2.7. nfcCertificateData

Información del certificado X509 obtenido del documento ordenada por.

- X509Certificate

---

## 8. Personalización del componente

Aparte de los cambios que se pueden realizar a nivel de SDK (los cuales
se explican en el documento de [Primeros Pasos](./Mobile_SDK)), este componente en concreto permite la
modificación de su interfaz.

### 8.1 Textos

Si se desea modificar los textos de la SDK habría que incluir el
siguiente fichero XML en la aplicación del cliente, y modificar el valor
de cada _String_ por el deseado.

```xml
    <string name="nfc_component_start_message">Desliza el documento\nhasta que el sensor lo detecte.</string>
    <string name="nfc_component_reading_message">Mantén la posición.</string>
    <string name="nfc_component_reading_face_message">Extrayendo imagen de la cara.</string>
    <string name="nfc_component_reading_images_message">Extrayendo imágenes.</string>
    <string name="nfc_component_reading_fingerprint_message">Extrayendo huella.</string>
    <string name="nfc_component_reading_signature_message">Extrayendo firma.</string>
    <string name="nfc_component_reading_mrz_message">Extrayendo MRZ.</string>
    <string name="nfc_component_reading_document_message">Extrayendo los datos del documento.</string>
    <string name="nfc_component_ready_to_scan">Listo para escanear</string>
    <string name="nfc_component_reading_device">Leyendo dispositivo</string>
    <string name="nfc_component_in_progress">En progreso:</string>
    <string name="nfc_component_connector_of">de</string>
    <string name="nfc_component_error">El NFC no se ha podido\nleer correctamente</string>
    <string name="nfc_component_retry">Reintentar</string>
    <string name="nfc_component_finish">Lectura finalizada</string>
    <string name="nfc_component_not_finish">Lectura incompleta</string>
    <string name="nfc_component_tutorial">Pon &lt;b&gt;en contacto&lt;/b&gt; el documento con la parte trasera de tu dispositivo.</string>
    <string name="nfc_component_tutorial_button">Continuar</string>
    <string name="nfc_component_tutorial_title">Lectura de NFC</string>
    <string name="nfc_component_tutorial_1">Cuando pasamos una tarjeta por un sensor, hay un intercambio de información llamado NFC.</string>
    <string name="nfc_component_tutorial_2">En tu móvil, el sensor está en la zona marcada. Aquí deberás juntar tu documento.</string>
    <string name="nfc_component_tutorial_3">Para una mejor lectura, quita la funda de tu móvil.</string>
    <string name="nfc_component_tutorial_3_pass">Mantén &lt;b&gt; cerrado &lt;/b&gt; el pasaporte para hacer la lectura.</string>
    <string name="nfc_component_tutorial_more_info_button">Mira estos consejos</string>
    <string name="nfc_component_timeout_title">Sigue las instrucciones</string>
    <string name="nfc_component_timeout_desc">Junta el documento &lt;b&gt;después&lt;/b&gt; de pulsar el &lt;b&gt;botón comenzar.&lt;/b&gt;</string>
    <string name="nfc_component_internal_error_title">Hubo un problema técnico</string>
    <string name="nfc_component_internal_error_desc">Pedimos disculpas. No se ha podido hacer la captura</string>
    <string name="nfc_component_data_error_title">No se pudo leer el documento</string>
    <string name="nfc_component_data_error_desc">Revisa los datos introducidos</string>
    <string name="nfc_component_read_not_finish_title">La lectura no finalizó</string>
    <string name="nfc_component_read_not_finish_desc">Mantén la posición hasta que finalice la lectura.</string>
```

### 8.2. Animaciones

Si se desea modificar las animaciones (lottie) de la SDK habría que incluir las animaciones con el mismo nombre en la carpeta res/raw/ de la aplicación.

```text
nfc_anim_reader.json
nfc_anim_tuto_1.json
nfc_anim_tuto_2.json
nfc_anim_tuto_3.json
nfc_anim_tuto_3_pass.json
nfc_anim_tuto_id.json
nfc_anim_tuto_passport.json
```

### 8.3 Vistas externas

Es posible modificar completamente las pantallas del componente manteniendo su funcionalidad y navegación. Para ello deben implementarse los interfaces siguientes:

Pantalla de tip previo:

```kotlin

interface INfcPreviousTipView {
    @Composable
    fun Content(
        onContinue: () -> Unit,
        onClose: () -> Unit,
        onInfo: () -> Unit,
    )
}

```

Pantalla de diagnóstico de error:

```kotlin

interface INfcErrorDiagnosticView {
    @Composable
    fun Content(
        error: NfcError,
        onRetry: () -> Unit,
        onClose: () -> Unit,
    )
}

```

Pantallas del diálogo de lectura:

```kotlin

interface INfcWaitingBottomView {
    @Composable
    fun Content(
        onClose: () -> Unit,
    )
}

```

```kotlin

interface INfcReadingBottomView {
    @Composable
    fun Content(
        state: NfcReadState,
        onClose: () -> Unit
    )
}

```

```kotlin

interface INfcSuccessBottomView {
    @Composable
    fun Content(
        onContinue: () -> Unit,
    )
}

```

```kotlin

interface INfcErrorBottomView {
    @Composable
    fun Content(
        error: NfcError,
        onContinue: () -> Unit,
    )
}

```

Una vez creadas las clases que implementan los interfaces, en el lanzamiento del componente se podrá añadir el parámetro "customViews" para que se utilicen en el SDK.

---

## 9. Logs

Para visualizar en consola los logs de este componente se podrá usar el filtro: "NFC:"
