# Verification Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (Components) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Certain components must
be installed depending on the use case required. Its high level of
modularity allows other new components to be added in the future without
affecting those already integrated into the project.

For more information on the base configuration, go to the
[Getting Started](./Mobile_SDK) section.

---

## 1. Introduction

The _Component_ dealt with in the current document is called the
**_Verification Component_**. It is in charge of performing the verifications provided by Facephi
on the extracted data.

---

## 2. Integration of the component

Before integrating this component, it is recommended to read the
documentation related to

[Getting Started](./Mobile_SDK)
and follow the instructions in that document.

This section will explain step by step how to integrate the current
component into an existing project.

### 2.1. Dependencies required for integration

To avoid conflicts and compatibility problems, if you want to install
the component in a project containing an old Facephi libraries
(_Widgets_) version, these must be removed entirely before installing
the **_SDKMobile_** components.

- Currently, FacePhi libraries are distributed remotely through
  different dependency managers. **Mandatory** dependencies that must
  be installed beforehand:

  ```java
  implementation "com.facephi.androidsdk:verifications_component:$sdk_verifications_component_version"
  ```

---

## 3. Start a new operation

When you want to perform a specific operation to generate the associated
information correctly in the platform, the **newOperation** command must
first be executed.

This command must have been executed **before launch**.

To learn more about how to start a new operation, it is recommended to
consult the [Getting Started](./Mobile_SDK)
documentation, which details and explains what this process consists of.

---

## 4. Available controllers

| **Controlador**        | **Descripción**               |
| ---------------------- | ----------------------------- |
| VerificationController | Main Verifications Controller |

In order to make use of it:

```java
  val verificationController = VerificationController(context)
```

---

## 5. Functions

The verification processes are divided into:

- Liveness
- Matching
- Voice

**The _extraData_ will be necessary if tracking component is used**

### 5.1. Liveness

Process to verify that the image corresponds to a living person.

The response of these functions will have the following data:

```java
 data class LivenessResponse(
    val diagnostic: String? = null,
    val trackingMessage: String? = null,
    val trackingStatus: Int? = null,
    val validTimeStamp: Boolean? = null
)
```

#### 5.1.1. Liveness with image

```java
  /api/v1/selphid/passive-liveness/evaluate
```

This service uses the base64 Selphi bestImage and the extra data.

Request:

```java
 data class LivenessWithImageRequest(
    var image: String,
    var extraData: String
)
```

Function:

```java
fun livenessWithImage(
        request: LivenessWithImageRequest,
        baseUrl: String,
    ): VerificationsResult<LivenessResponse>
```

#### 5.1.2. Liveness with _template_

```java
 /api/v1/selphid/passive-liveness/evaluate/token
```

This service uses Selphi's bestImageTokenized and the extra data.

Request:

```java
data class LivenessWithTemplateRequest(
    var tokenImage: String,
    var extraData: String
)
```

Function:

```java
fun livenessWithTemplate(
        request: LivenessWithTemplateRequest,
        baseUrl: String,
    ): VerificationsResult<LivenessResponse>
```

### 5.2. Matching

Process to verify that the two images correspond to the same person.

The response of these functions will have the following data:

```java
 data class MatchingResponse(
    val authStatus: String? = null,
    val similarity: Double? = null,
    val trackingMessage: String? = null,
    val trackingStatus: Int? = null,
    val validTimeStamp: Boolean? = null
)
```

#### 5.2.1. Matching of two facial images in base 64

```java
 /api/v1/selphid/authenticate-facial/images
```

This service uses two images in base 64 and the extra data.

Request:

```java
data class MatchingFacialImagesRequest(
    var image1: String,
    var image2: String,
    var extraData: String
)
```

Function:

```java
 fun matchingFacialImages(
        request: MatchingFacialImagesRequest,
        baseUrl: String,
    ): VerificationsResult<MatchingResponse>
```

#### 5.2.2. Matching of two _templates_

```java
 /api/v1/selphid/authenticate-facial/templates
```

This service uses two base 64 encrypted images. From the data extracted from Selphi, both the bestImageTokenized string and the converted templateRaw can be used.

Request:

```java
data class MatchingFacialTemplatesRequest(
    var faceTemplate1: String,
    var faceTemplate2: String,
    var extraData: String
)
```

Function:

```java
fun matchingFacialTemplates(
        request: MatchingFacialTemplatesRequest,
        baseUrl: String,
    ): VerificationsResult<MatchingResponse>
```

#### 5.2.3. Matching of a base 64 facial image with a _template_.

```java
 /api/v1/selphid/authenticate-facial/image/template
```

Mixture of the two previous cases.

Request:

```java
data class MatchingFacialImageWithTemplateRequest(
    var faceTemplate: String,
    var image: String,
    var extraData: String
)
```

Function:

```java
fun matchingFacialImageWithTemplate(
        request: MatchingFacialImageWithTemplateRequest,
        baseUrl: String,
    ): VerificationsResult<MatchingResponse>
```

#### 5.2.4. Matching of a base 64 facial image with the document image

```java
 /api/v1/selphid/authenticate-facial/document/face-image
```

This service uses, on the one hand, the encrypted image extracted from the document with SelphID _tokenFaceImage_ and, on the other hand, the _bestImage_ in base 64 extracted from Selphi.

Request:

```java
data class MatchingDocumentWithFaceImageRequest(
    var image: String,
    var documentTemplate: String,
    var extraData: String
)
```

Function:

```java
fun matchingDocumentWithFaceImage(
        request: MatchingDocumentWithFaceImageRequest,
        baseUrl: String,
    ): VerificationsResult<MatchingResponse>
```

#### 5.2.5. Matching of a _template_ with the document image

```java
 /api/v1/selphid/authenticate-facial/document/face-template
```

The service uses, on the one hand, the encrypted image extracted from the document with SelphID tokenFaceImage and, on the other hand, if the data extracted from Selphi are used, both from the string
bestImageTokenized string and the templateRaw converted to Base64.

Request:

```java
data class MatchingDocumentWithFaceTemplateRequest(
    var faceTemplate: String,
    var documentTemplate: String,
    var extraData: String
)
```

Function:

```java
fun matchingDocumentWithFaceTemplate(
        request: MatchingDocumentWithFaceTemplateRequest,
        baseUrl: String,
    ): VerificationsResult<MatchingResponse>
```

### 5.3. Voice

Process for making checks on encrypted audios extracted from the speech component.

#### 5.3.1. Enroll

```java
/api/v1/enrollment
```

This service receives the encrypted audios and responds with the _template_ created from them.

Request:

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

Function:

```java
fun voiceEnroll(
        request: VoiceEnrollRequest,
        baseUrl: String = RepositoryConstants.BASE_VOICE_URL,
    ): VerificationsResult<EnrollResponse>
```

Response:

```java
data class EnrollResponse(
    val template: String? = null,
    val validateAudiosResult: List<ValidateAudiosResult>? = null,
    val operationResult: Int? = null,
    val templateType: String? = null,
)
```

#### 5.3.2. Authentication

```java
/api/v1/authentication
```

This service checks whether an encrypted audio corresponds to a _template_ obtained with the enrolment service.

Request:

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

Function:

```java
fun voiceAuthentication(
        request: VoiceAuthenticationRequest,
        baseUrl: String,
    ): VerificationsResult<VoiceAuthenticationResponse>
```

Response:

```java
data class VoiceAuthenticationResponse(
    val match: Boolean? = null,
    val matchingScore: Float? = null,
    val livenessScore: Float? = null,
    val operationResult: Int? = null,
    val trackingMessage: String? = null,
)
```

---

## 6. Extensions and other SDK features

The following extensions can be used for conversions:

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

The following function can be used to obtain the _extraData_ needed for the operations (either viewModelScope.launch or CoroutineScope(Dispatchers.IO).launch can be used):

```java
private fun getExtraData(output: (String) -> Unit)
  {
      viewModelScope.launch {
        when (val result = SDKController.launch(ExtraDataController())) {
            is SdkResult.Success -> output(result.data)
            is SdkResult.Error -> output("")
        }
      }
  }
```

To obtain a base 64 encrypted image in the Mobile SDK, you can use the following function (you can use
viewModelScope.launch or CoroutineScope(Dispatchers.IO).launch) following function (either
viewModelScope.launch or CoroutineScope(Dispatchers.IO).launch can be used):

```java
private fun getTemplateFromImage(
  sdkImage: SdkImage,
  output: (String) -> Unit)
  {
      viewModelScope.launch {
        when (val result = SDKController.launch(RawTemplateController(sdkImage))) {
            is SdkResult.Success -> output(result.data)
            is SdkResult.Error -> output("")
        }
      }
  }
```
