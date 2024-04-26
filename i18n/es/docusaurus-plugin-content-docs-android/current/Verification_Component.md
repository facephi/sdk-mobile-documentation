# Verification Component

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
<a href="ES_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page">Android Mobile SDK</a>.

---

## 1. Introducción

El _Componente_ tratado en el documento actual recibe el nombre de
**_Verification Component_**. Éste se encarga de realizar las verificaciones 
facilitadas por Facephi sobre los datos extraídos.
---

## 2. Integración del componente

Antes de integrar este componente se recomienda leer la documentación
relativa a:

<a href="ES_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u>Android Mobile
SDK</u></strong></a> y seguir las instrucciones indicadas en dicho
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
  implementation "com.facephi.androidsdk:verifications_component:$sdk_verifications_component_version"
  ```

---

## 3. Iniciar nueva operación

Cuando se desea realizar una determinada operación, para generar la
información asociada correctamente en la plataforma deberá ejecutarse
previamente el comando **newOperation**.

Este comando debe haberse ejecutado **anteriormente al lanzamiento del
componente**.

Para saber más acerca de cómo iniciar una nueva operación, se recomienda
consultar la documentación de <a href="ES_Mobile_SDK"
data-linked-resource-id="2605285492" data-linked-resource-version="11"
data-linked-resource-type="page"><strong><u>Android Mobile
SDK</u></strong></a>, en el que se detalla y explica en qué consiste
este proceso.

---

## 4. Controladores disponibles

| **Controlador**    | **Descripción**                             |
| ------------------ | ------------------------------------------- |
| VerificationController | Controlador principal de Verificaciones |

Para hacer uso del mismo:

```java
  val verificationController = VerificationController(context)
  ```

---

## 5. Funciones

Los procesos de verificación se dividen en:

- Liveness
- Matching
- Voz

**El _extraData_ será necesario cuando se utilice el componente de tracking**

### 5.1. Liveness

Proceso para verificar que la imagen corresponde a una persona "viva"

#### 5.1.1. Liveness con imagen

```java
  /api/v1/selphid/passive-liveness/evaluate
  ```

Para utilizar este servicio se debe enviar la bestImage de Selphi en base64 y el extra data.

Datos de entrada:

```java
 data class LivenessWithImageRequest(
    var image: String,
    var extraData: String
)
  ```

Función:

```java
fun livenessWithImage(
        request: LivenessWithImageRequest,
        baseUrl: String,
    ): VerificationsResult<LivenessResponse>
  ```

#### 5.1.2. Liveness con _template_

```java
 /api/v1/selphid/passive-liveness/evaluate/token
  ```

Para utilizar este servicio se debe enviar la bestImageTokenized de Selphi  y el extra data.

Datos de entrada:

```java
data class LivenessWithTemplateRequest(
    var tokenImage: String,
    var extraData: String
)
  ```

Función:

```java
fun livenessWithTemplate(
        request: LivenessWithTemplateRequest,
        baseUrl: String,
    ): VerificationsResult<LivenessResponse>
  ```

### 5.2. Matching

Proceso para verificar que las dos imágenes corresponden a la mispa persona.

#### 5.2.1. Matching de dos imágenes faciales en base 64

```java
 /api/v1/selphid/authenticate-facial/images
  ```

Para utilizar este servicio se deben enviar dos imágenes en base 64 y el extra data.

Datos de entrada:

```java
data class MatchingFacialImagesRequest(
    var image1: String,
    var image2: String,
    var extraData: String
)
  ```

Función:

```java
 fun matchingFacialImages(
        request: MatchingFacialImagesRequest,
        baseUrl: String,
    ): VerificationsResult<MatchingResponse>
  ```


#### 5.2.2. Matching de dos _templates_

```java
 /api/v1/selphid/authenticate-facial/templates
  ```

Para utilizar este servicio se deben enviar dos imágenes tokenizadas en base 64. Si se 
utilizan los datos extraídos de Selphi se puede hacer uso tanto del string bestImageTokenized 
como de la templateRaw convertida.

Datos de entrada:

```java
data class MatchingFacialTemplatesRequest(
    var faceTemplate1: String,
    var faceTemplate2: String,
    var extraData: String
)
  ```

Función:

```java
fun matchingFacialTemplates(
        request: MatchingFacialTemplatesRequest,
        baseUrl: String,
    ): VerificationsResult<MatchingResponse>
  ```

#### 5.2.3. Matching de una imagen facial en base 64 con un _template_

```java
 /api/v1/selphid/authenticate-facial/image/template
  ```

Mezcla de los dos casos anteriores.

Datos de entrada:

```java
data class MatchingFacialImageWithTemplateRequest(
    var faceTemplate: String,
    var image: String,
    var extraData: String
)
  ```

Función:

```java
fun matchingFacialImageWithTemplate(
        request: MatchingFacialImageWithTemplateRequest,
        baseUrl: String,
    ): VerificationsResult<MatchingResponse>
  ```

#### 5.2.4. Matching de una imagen facial en base 64 con la imagen del documento

```java
 /api/v1/selphid/authenticate-facial/document/face-image
  ```

Para utilizar este servicio se deben enviar, por un lado, la imagen tokenizada extraída del 
ocumento con SelphID tokenFaceImage y, por otro, la bestImage en base 64 extraída de Selphi.

Datos de entrada:

```java
data class MatchingDocumentWithFaceImageRequest(
    var image: String,
    var documentTemplate: String,
    var extraData: String
)
  ```

Función:

```java
fun matchingDocumentWithFaceImage(
        request: MatchingDocumentWithFaceImageRequest,
        baseUrl: String,
    ): VerificationsResult<MatchingResponse>
  ```

#### 5.2.5. Matching de una _template_ con la imagen del documento 

```java
 /api/v1/selphid/authenticate-facial/document/face-template
  ```

Para utilizar este servicio se deben enviar, por un lado, la imagen tokenizada extraída del documento 
con SelphID tokenFaceImage y, por otro, si se utilizan los datos extraídos de Selphi, tanto del string 
bestImageTokenized como de la templateRaw convertida a Base64.

Datos de entrada:

```java
data class MatchingDocumentWithFaceTemplateRequest(
    var faceTemplate: String,
    var documentTemplate: String,
    var extraData: String
)
  ```

Función:

```java
fun matchingDocumentWithFaceTemplate(
        request: MatchingDocumentWithFaceTemplateRequest,
        baseUrl: String,
    ): VerificationsResult<MatchingResponse>
  ```

### 5.3. Voz

Proceso para hacer verificaciones sobre los audios tokenizados extraídos del componente de voz.

#### 5.3.1. Enroll

```java
/api/v1/enrollment
  ```

Este servicio recibe los audios tokenizados y responde con la _template_ creada a partir de ellos.

Datos de entrada:

```java
data class VoiceEnrollRequest(
    var audios: Array<String>,
    var checkLiveness: Boolean = true,
    var livenessThreshold: Double = 0.5,
    var minimumSnrDb: Int = 8,
    var minimumSpeechDurationMs: Int = 1500,
    var minimumSpeechRelativeLenght: Float? = null,
    var maximumMultipleSpeakersDetectorScore: Int? = null,
    var extraData: String
)
  ```

Función:

```java
fun voiceEnroll(
        request: VoiceEnrollRequest,
        baseUrl: String = RepositoryConstants.BASE_VOICE_URL,
    ): VerificationsResult<EnrollResponse>
  ```

#### 5.3.2. Authentication

```java
/api/v1/authentication
  ```

Este servicio verifica si un audio tokenizado corresponde con una _template_ obtenida de audios anteriores con el servicio de enroll.

Datos de entrada:

```java
data class VoiceAuthenticationRequest(
    var audio: String,
    var template: String,
    var livenessThreshold: Double = 0.5,
    var minimumSnrDb: Int = 8,
    var minimumSpeechDurationMs: Int = 1500,
    var extraData: String
)
  ```

Función:

```java
fun voiceAuthentication(
        request: VoiceAuthenticationRequest,
        baseUrl: String,
    ): VerificationsResult<VoiceAuthenticationResponse>
  ```

---

## 6. Extensiones y otras funciones del SDK

Para las conversiones se pueden hacer uso de las siguientes extemsiones:

```java
fun Bitmap.toBase64(): String? {
    return Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)
}


fun Bitmap.toByteArray(quality: Int = 95): ByteArray {
    ByteArrayOutputStream().apply {
        compress(Bitmap.CompressFormat.JPEG, quality, this)
        return toByteArray()
    }
}
  ```

Para la obtención del _extraData_ necesario para las operaciones se puede utilizar la siguiente función (se puede usar viewModelScope.launch o CoroutineScope(Dispatchers.IO).launch):

```java
private fun getExtraData(output: (String) -> Unit) 
  {
      viewModelScope.launch {
        when (val result = SDKController.launch(ExtraDataController(sdkImage)) {
            is SdkResult.Success -> output(result.data)
            is SdkResult.Error -> output("")
        }
      }
  }
  ```

Para la obtención de una imagen tokenizada en base 64 en el SDK Mobile se puede a utilizar la 
siguiente función (se puede usar viewModelScope.launch o CoroutineScope(Dispatchers.IO).launch):

```java
private fun getTemplateFromImage(
  sdkImage: SdkImage, 
  output: (String) -> Unit) 
  {
      viewModelScope.launch {
        when (val result = SDKController.launch(RawTemplateController(sdkImage)) {
            is SdkResult.Success -> output(result.data)
            is SdkResult.Error -> output("")
        }
      }
  }
  ```