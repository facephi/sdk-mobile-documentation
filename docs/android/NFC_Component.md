# NFC Capture

## 1. Introduction

NFC capture is performed with the **NFC Component**. This component handles reading NFC from identity documents and passports. Its main processes are:

- Internal management of the NFC sensor
- Permission handling
- Document data parsing
- Progress tracking
- Guided assistance during the reading process
- Returning all readable information
- Returning images when available for reading

Refer to the [Quickstart](./Mobile_SDK) section for basic SDK integration. This section provides details for launching this component.

---

## 2. Dependency

The component-specific dependency is:

```java
implementation "com.facephi.androidsdk:nfc_component:$sdk_nfc_component_version" {
    exclude group: "org.bouncycastle", module: "bcprov-jdk15on"
    exclude group: "org.bouncycastle", module: "jetified-bcprov-jdk15on-1.68"
}
```

Additionally, add the following to your **build.gradle**:

```groovy
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

## 3. Available Controllers

| **Controller** | **Description**                 |
| -------------- | ------------------------------- |
| NFCController  | Main controller for NFC reading |

---

## 4. Quick Launch

Once the SDK is initialized and a new operation has been created, you can launch the component. Use its controller to execute the NFC reading functionality:

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

## 5. Basic Configuration

To launch the component, create an `NfcConfigurationData` object with the following basic fields:

```java
NfcConfigurationData(
    documentNumber    = NFC_SUPPORT_NUMBER,  // Document or support number
    birthDate         = NFC_BIRTH_DATE,      // "dd/MM/yyyy"
    expirationDate    = NFC_EXPIRATION_DATE  // "dd/MM/yyyy"
)
```

All fields are required and must match the document’s data being read.

---

## 6. Receiving the Result

The launch returns an `SdkResult`. You can differentiate between success and error:

```java
when (response) {
    is SdkResult.Error   -> Napier.d("NFC: ERROR - ${response.error}")
    is SdkResult.Success -> response.data
}
```

### 6.1 Handling Errors

Errors are returned as an `NfcError` object. Possible values include:

- `APPLICATION_CONTEXT_ERROR`: Required application context is null.
- `CANCEL_BY_USER`: The user cancelled the process.
- `CANCEL_LAUNCH`: A general SDK cancellation occurred.
- `COMPONENT_LICENSE_ERROR`: Invalid component license.
- `EMPTY_LICENSE`: The license string is empty.
- `EXTRACT_DATA_ERROR`: Error extracting data.
- `FETCH_DATA_ERROR`: Error fetching the result.
- `FLOW_ERROR`: Error in the flow process.
- `INITIALIZATION_ERROR`: Initialization error.
- `LAST_COMMAND_EXPECTED`: Error in the final command.
- `MANAGER_NOT_INITIALIZED`: Managers are null.
- `NFC_ERROR`: General NFC error.
- `NFC_ERROR_DATA`: Input data error.
- `NFC_ERROR_DISABLED`: NFC is disabled.
- `NFC_ERROR_ILLEGAL_ARGUMENT`: Incorrect NFC tag.
- `NFC_ERROR_IO`: I/O error.
- `NFC_ERROR_NOT_SUPPORTED`: NFC not supported.
- `NFC_ERROR_TAG_LOST`: Connection lost.
- `OPERATION_NOT_CREATED`: No operation in progress.
- `TIMEOUT`: Timeout occurred during the process.

### 6.2 Handling Success – `data`

On success (`SdkResult.Success`), you receive an `NfcResult` object. It returns images as `SdkImage`; to extract a bitmap, use `image.bitmap`. To convert to Base64:

```kotlin
Base64.encodeToString(this.toByteArray(), Base64.NO_WRAP)
```

The `NfcResult` includes the following fields:

#### 6.2.1 `nfcRawData`

Raw NFC data obtained for each data type.

#### 6.2.2 `nfcDocumentInformation`

Document information organized by:

- documentNumber
- expirationDate
- issuer
- mrzString
- type

#### 6.2.3 `nfcPersonalInformation`

Personal information organized by:

- address
- birthdate
- city
- gender
- name
- nationality
- personalNumber
- placeOfBirth
- surname

#### 6.2.4 `nfcImages`

Image data organized by:

- facialImage
- fingerprintImage
- signatureImage

#### 6.2.5 `nfcSecurityData`

Security data organized by:

- dataGroupsHashes
- dataGroupsRead
- documentSigningCertificateData
- issuerSigningCertificateData
- ldsVersion

#### 6.2.6 `nfcValidations`

Validation results organized by:

- accessType
- activeAuthenticationSupported
- activeAuthenticationValidation
- chipAuthenticationValidation
- dataGroupsHashesValidation
- documentSigningValidation
- issuerSigningValidation

#### 6.2.7 `nfcCertificateData`

X.509 certificate information obtained from the document.

---

## 7. Advanced Information

This section provides advanced configuration options for the NFC Component.

### 7.1 Advanced Component Configuration

All fields of `NfcConfigurationData`:

#### 7.1.1. documentNumber

Indicates the document or media number depending on the document to be
read.

This field is mandatory.

#### 7.1.2. birthDate

Indicates the date of birth that appears on the document ("dd/MM/yyyy").

This field is mandatory.

#### 7.1.3. expirationDate

Indicates the expiry date that appears on the document ("dd/MM/yyyy").

This field is mandatory.

#### 7.1.4. extractionTimeout

Sets the maximum time the reading can be done.

#### 7.1.5. showReadingScreen

Sets whether to display the lower modal display with the reading being
taken. If disabled, no view is displayed, and you must listen to the
statuses returned by the controller.

#### 7.1.6. showTutorial

Indicates whether the component activates the tutorial screen. This view
intuitively explains how the capture is performed.

#### 7.1.7. vibrationEnabled

Indicates whether vibration feedback is desired at the end of the
process.

#### 7.1.8. enableDebugMode

Activation of the component's debug mode.

#### 7.1.9. skipPace

Indicates that only NFC BAC reading is desired. It is a simple and fast
reader.

#### 7.1.10. showDiagnostic

Display diagnostic screens at the end of the process

#### 7.1.11. extractFacialImage

Indicates if you want to extract the image of the face.

#### 7.1.12. extractSignatureImage

Indicates if you want to extract the signature image.

#### 7.1.13. documentType

Field used to change the tutorial view to show the different documents.

#### 7.1.14. showPreviousTip

Displays a pre-launch screen with information about the process to be performed and a launch button.

---

## 8. Component Customization

Beyond SDK-level customizations (see [Advanced Settings](./Mobile_SDK_advanced)), this component allows interface modifications.

### 8.1 Texts

To override default texts, include an XML file in your app and modify the string values:

```xml
<string name="nfc_component_start_message">Attach the chip to your mobile.\nWhen it detects it, hold it still.</string>
    <string name="nfc_component_reading_message">Hold the position.</string>
    <string name="nfc_component_reading_face_message">Extracting face image.</string>
    <string name="nfc_component_reading_images_message">Extracting images.</string>
    <string name="nfc_component_reading_fingerprint_message">Extracting fingerprint image.</string>
    <string name="nfc_component_reading_signature_message">Extracting signature image.</string>
    <string name="nfc_component_reading_mrz_message">Extracting MRZ.</string>
    <string name="nfc_component_reading_document_message">Extracting document data.</string>
    <string name="nfc_component_ready_to_scan">Ready to scan</string>
    <string name="nfc_component_reading_device">Reading device</string>
    <string name="nfc_component_in_progress">In progress:</string>
    <string name="nfc_component_connector_of">in</string>
    <string name="nfc_component_error">The NFC could not be\nread correctly</string>
    <string name="nfc_component_retry">Retry</string>
    <string name="nfc_component_finish">Reading finished</string>
    <string name="nfc_component_not_finish">Reading incomplete</string>
    <string name="nfc_component_tutorial">&lt;b&gt;Attach&lt;/b&gt; the document to the back of your device.</string>
    <string name="nfc_component_tutorial_button">Continue</string>
    <string name="nfc_component_tutorial_title">NFC Reader</string>
    <string name="nfc_component_tutorial_1">When we pass a card through a sensor, there is an exchange of information called NFC.</string>
    <string name="nfc_component_tutorial_2">On your mobile, the sensor is in the marked area. Here you must gather your document.</string>
    <string name="nfc_component_tutorial_3">For a better reading, remove the cover of your mobile.</string>
    <string name="nfc_component_tutorial_3_pass">Keep &lt;b&gt; closed &lt;/b&gt; the passport to do the reading.</string>
    <string name="nfc_component_tutorial_more_info_button">Check out these tips</string>
    <string name="nfc_component_timeout_title">Follow the instructions</string>
    <string name="nfc_component_timeout_desc">Join the document &lt;b&gt;after&lt;/b&gt; clicking on the &lt;b&gt;Start button.&lt;/b&gt;</string>
    <string name="nfc_component_internal_error_title">There was a technical problem</string>
    <string name="nfc_component_internal_error_desc">We apologize. The capture could not be made</string>
    <string name="nfc_component_data_error_title">Document could not be read</string>
    <string name="nfc_component_data_error_desc">Review the data entered</string>
    <string name="nfc_component_read_not_finish_title">Reading not finished</string>
    <string name="nfc_component_read_not_finish_desc">Hold the position until the end of the reading</string>
```

### 8.2 Animations

To override Lottie animations, include files with the same names in `res/raw/`:

```
nfc_anim_reader.json
nfc_anim_tuto_1.json
nfc_anim_tuto_2.json
nfc_anim_tuto_3.json
nfc_anim_tuto_3_pass.json
nfc_anim_tuto_id.json
nfc_anim_tuto_passport.json
```

### 8.3 External Views

You can fully replace component screens by implementing the following interfaces:

```kotlin
interface INfcPreviousTipView {
    @Composable
    fun Content(
        onContinue: () -> Unit,
        onClose: () -> Unit,
        onInfo: () -> Unit
    )
}

interface INfcErrorDiagnosticView {
    @Composable
    fun Content(
        error: NfcError,
        onRetry: () -> Unit,
        onClose: () -> Unit
    )
}

interface INfcWaitingBottomView {
    @Composable
    fun Content(
        onClose: () -> Unit
    )
}

interface INfcReadingBottomView {
    @Composable
    fun Content(
        state: NfcReadState,
        onClose: () -> Unit
    )
}

interface INfcSuccessBottomView {
    @Composable
    fun Content(
        onContinue: () -> Unit
    )
}

interface INfcErrorBottomView {
    @Composable
    fun Content(
        error: NfcError,
        onContinue: () -> Unit
    )
}
```

After implementing these classes, pass them via the `customViews` parameter when launching the component to use your custom UI.

---

## 9. Logs

To view logs for this component in the console, filter by: `"NFC:"`

