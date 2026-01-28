# Captura de NFC

## 1. Introducción

La captura facial se realiza con el **_NFC Component_**. 


Este componente se encarga de realizar la lectura del NFC de los
documentos de identidad y pasaportes. Sus principales procesos son:

- Gestión interna del sensor de NFC.
- Gestión de permisos.
- Análisis de documento.
- Análisis del progreso.
- Asistente en los procesos de lectura.
- Devolución de toda la información posible a leer
- Devolución de imágenes cuando estén disponible para su lectura


En el apartado de [Lanzamiento simplificado](./Mobile_SDK) se detallan los pasos necesarios para la integración básica del SDK. En esta sección se añade la información para el lanzamiento de este componente.

---

## 2. Dependencia

La dependencia específica del componente es:

  ```java
  implementation "com.facephi.androidsdk:nfc_component:$sdk_nfc_component_version"{
        exclude group : "org.bouncycastle", module : "bcprov-jdk15on"
        exclude group : "org.bouncycastle", module : "jetified-bcprov-jdk15on-1.68"
    }
  ```

Además habrá que añadir en gradle:

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

## 3. Controladores disponibles

| **Controlador** | **Descripción**                      |
| --------------- | ------------------------------------ |
| NFCController   | Controlador principal de lectura NFC |

---

## 4. Lanzamiento simplificado

Una vez iniciado el SDK y creada una nueva operación se podrá lanzar el componente. 
Se podrá hacer uso de cualquiera de sus controladores para ejecutar su funcionalidad.

Lanzamiento de la captura:

```java
val response = SDKController.launch(
    NfcController(
        componentData = NfcConfigurationData(...),
        state = { state ->
            Napier.d("NFC: State: ${state.name}")
        },
        debugLogs = {
            Napier.d("NFC Logs: $it")
        }
    )
)
when (response) {
    is SdkResult.Error -> Napier.d("NFC: ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

---

## 5. Configuración básica

Para lanzar el componente actual, se deberá crear un objeto _NFCConfigurationData_ que será la configuración del 
controlador del componente.

La configuración básica necesaria para es la siguiente:

```java
NfcConfigurationData(
    documentNumber = NFC_SUPPORT_NUMBER, // Num soport.
    birthDate = NFC_BIRTH_DATE, // "dd/MM/yyyy"
    expirationDate = NFC_EXPIRATION_DATE, // "dd/MM/yyyy",
)
```

Los datos necesarios son los del documento que se va a capturar.

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

Los errores se devolverán como un objeto 'NfcError'.

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

### 6.2. Recepción del resultado correcto - _data_

En la parte de SdkResult.Success - _data_, dispondremos de la clase _NfcResult_.

El resultado devuelve las imágenes en formato **SdkImage**, es posible 
extraer el bitmap accediendo a _image.bitmap_. Si se quisiera convertir a base64 
se puede utilizar la función:

`Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)`

Los campos devueltos en el resultado son los siguientes:

#### 6.2.1. nfcRawData

Información obtenida por cada tipo de dato en formato crudo.

#### 6.2.2. nfcDocumentInformation

Información obtenida del documento. Campos que se devuelven:

- documentNumber
- expirationDate
- issuer
- mrzString
- type

#### 6.2.3. nfcPersonalInformation

Información obtenida del documento. Campos que se devuelven:

- address
- birthdate
- city
- gender
- name
- nationality
- personalNumber
- placeOfBirth
- surname

#### 6.2.4. nfcImages

Información de imágenes obtenidas del documento. Campos que se devuelven:

- facialImage
- signatureImage

#### 6.2.5 nfcSecurityData

Información de datos de seguridad del documento. Campos que se devuelven:

- dataGroupsHashes
- dataGroupsRead
- documentSigningCertificateData
- issuerSigningCertificateData
- ldsVersion

#### 6.2.6. nfcValidations

Información de las validaciones del documento. Campos que se devuelven:

- accessType
- activeAuthenticationSupported
- activeAuthenticationValidation
- chipAuthenticationValidation
- dataGroupsHashesValidation
- documentSigningValidation
- issuerSigningValidation

---

## 7. Información avanzada

Este apartado amplía la información del componente.

### 7.1  Configuración avanzada del componente

Para lanzar el componente actual, se deberá crear un objeto _NFCConfigurationData_ 
que será la configuración del controlador del componente.

A continuación se detallan todos los campos que forman parte de esta clase.

#### 7.1.1. documentNumber

Indica el número de documento o número de soporte dependiendo del
documento a realizar la lectura.

Éste campo es obligatorio.

#### 7.1.2. birthDate

Indica la fecha de nacimiento que aparece en el documento
("dd/MM/yyyy").

Éste campo es obligatorio.

#### 7.1.3. expirationDate

Indica la fecha de expiración que aparece en el documento
("dd/MM/yyyy").

Éste campo es obligatorio.

#### 7.1.4. extractionTimeout

Establece el tiempo máximo que se puede realizar la lectura.

#### 7.1.5. showReadingScreen

Establece si se desea mostrar la pantalla modal inferior con la lectura
que se está realizando. Si se desactiva, no se muestra ninguna vista y
se deberán escuchar los estados que devuelve el controlador.

#### 7.1.6. showTutorial

Indica si el componente activa la pantalla de tutorial. En esta vista se
explica de forma intuitiva cómo se realiza la captura.

#### 7.1.7. vibrationEnabled

Indica si se desea un feedback de vibración al acabar el proceso.

#### 7.1.8. enableDebugMode

Activación del modo depuración del componente.

#### 7.1.9. skipPace

Indica que solo se desea realizar la lectura BAC de NFC. Es una lectura
con información más simple y rápida que permite la lectura de más
variedad de documentos.

#### 7.1.10. showDiagnostic

Mostrar pantallas de diagnóstico al final del proceso

#### 7.1.11. extractFacialImage

Indica si quiere extraer la imagen de la cara.

#### 7.1.12. extractSignatureImage

Indica si quiere extraer la imagen de la firma.

#### 7.1.13. documentType

Campo utilizado para cambiar la vista de tutorial y que muestre los diferentes documentos.

#### 7.1.14. showPreviousTip

Muestra una pantalla previa al lanzamiento de la captura con información sobre el proceso a realizar y un botón para el lanzamiento.

#### 7.1.15. readingProgressStyle

Modificación de la vista del proceso de captura. Progreso con puntos o con porcentaje.

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
