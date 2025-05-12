# NFC Component

## 0. SDK Mobile baseline requirements

**SDK Mobile** is a set of libraries (**Components**) that offer a series of
functionalities and services, allowing their integration into a Mobile
application in a simple and fully scalable way. Certain components must
be installed depending on the use case required. Its high level of
modularity allows other new components to be added in the future without
affecting those already integrated into the project.

For more information on the base configuration, go to the
[Getting Started](./Mobile_SDK) section.

---

## 1. Introduction

The Component discussed in the current document is called **NFC
Component**. It is responsible for NFC reading of ID cards and
passports. Its main functionalities are the following:

- Internal management of the NFC sensor.

- Permission management.

- Document analysis.

- Progress analysis.

- Assistant in reading processes.

- Return all possible information to be read

- Return of images when they are available for reading.

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
  implementation "com.facephi.androidsdk:nfc_component:$sdk_nfc_component_version"{
        exclude group : "org.bouncycastle", module : "bcprov-jdk15on"
        exclude group : "org.bouncycastle", module : "jetified-bcprov-jdk15on-1.68"
    }
  ```

In the case of the NFC component, it is necessary to add in gradle:

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

## 3. Start a new operation

When you want to perform a specific operation, in order to generate the
associated information correctly in the platform, the **newOperation**
command must first be executed.

<div class="note">
<span class="note">:information_source:</span>
This command must have been executed **before launch**.
To learn more about how to start a new operation, it is recommended to consult the [Start a new operation](./Mobile_SDK#4-start-a-new-operation) documentation, which details and explains what this process consists of.
</div>

---

## 4. Available controllers

|                |                            |
| -------------- | -------------------------- |
| **Controller** | **Description**            |
| NFCController  | NFC main reader controller |

---

## 5. Component configuration

Once initialized, a _NFCConfigurationData_ object must be created and
passed as a parameter to the SDKController during component launch to
configure the current component.

The following section will show the fields part of this class and what
each is used for.

### 5.1. Class NFCConfigurationData

#### 5.1.1. documentNumber

Indicates the document or media number depending on the document to be
read.

This field is mandatory.

#### 5.1.2. birthDate

Indicates the date of birth that appears on the document ("dd/MM/yyyy").

This field is mandatory.

#### 5.1.3. expirationDate

Indicates the expiry date that appears on the document ("dd/MM/yyyy").

This field is mandatory.

#### 5.1.4. extractionTimeout

Sets the maximum time the reading can be done.

#### 5.1.5. showReadingScreen

Sets whether to display the lower modal display with the reading being
taken. If disabled, no view is displayed, and you must listen to the
statuses returned by the controller.

#### 5.1.6. showTutorial

Indicates whether the component activates the tutorial screen. This view
intuitively explains how the capture is performed.

#### 5.1.7. vibrationEnabled

Indicates whether vibration feedback is desired at the end of the
process.

#### 5.1.8. enableDebugMode

Activation of the component's debug mode.

#### 5.1.9. skipPace

Indicates that only NFC BAC reading is desired. It is a simple and fast
reader.

#### 5.1.10. showDiagnostic

Display diagnostic screens at the end of the process

#### 5.1.11. extractFacialImage

Indicates if you want to extract the image of the face.

#### 5.1.12. extractSignatureImage

Indicates if you want to extract the signature image.

#### 5.1.13. documentType

Field used to change the tutorial view to show the different documents.

#### 5.1.14. showPreviousTip

Displays a pre-launch screen with information about the process to be performed and a launch button.

---

## 6. Component use

Once the component has been started and a new operation has been created
(**section 3**), the SDK components can be launched. There are two ways
to launch the component:

- **\[WITH TRACKING\]** This call allows to launch the functionality
  of the component, but internal events will be tracked to the
  _tracking_ server:

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

- **\[WITHOUT TRACKING\]** This call allows to launch the
  functionality of the component, but **no event will be tracked** to
  the _tracking_ server:

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

The **launch** method must be used by **default**. This method allows
**_tracking_** to be used if your component is enabled and will not be
used when it is disabled (or the component is not installed).

On the other hand, the **launchMethod** method covers a particular case
in which the integrator has tracking installed and activated but, in a
certain flow within the application does not want to track information.
In this case, this method is used to prevent this information from being
sent to the platform.

---

## 7. Receipt of the result

The controllers will return the required information in SdkResult format
-more details in the Android Mobile SDK's <a
href="Mobile_SDK#6-result-return"
rel="nofollow">6. Result return</a> section-.

### 7.1. Receipt of errors

On the error side, we will have the _NfcError_ class.

Error list:

- APPLICATION_CONTEXT_ERROR: The required application context is null.
- CANCEL_BY_USER: The user has cancelled the process.
- CANCEL_LAUNCH: A general cancellation of the SDK has been made.
- COMPONENT_LICENSE_ERROR: The component license is not correct.
- EMPTY_LICENSE: The licence string is empty.
- EXTRACT_DATA_ERROR: Error in data extracted.
- FETCH_DATA_ERROR: Error in the result retrieval.
- FLOW_ERROR: Error in the flow process.
- INITIALIZATION_ERROR: Initialisation error.
- LAST_COMMAND_EXPECTED: Error in the completion command.
- MANAGER_NOT_INITIALIZED: Managers are null.
- NFC_ERROR: General error
- NFC_ERROR_DATA: Error in input data
- NFC_ERROR_DISABLED: NFC disabled
- NFC_ERROR_ILLEGAL_ARGUMENT: NFC with wrong tag
- NFC_ERROR_IO: Input/output error
- NFC_ERROR_NOT_SUPPORTED: NFC not supported
- NFC_ERROR_TAG_LOST: Lost connection
- OPERATION_NOT_CREATED: No operation in progress.
- TIMEOUT: Timeout in the process.

### 7.2. Receipt of correct execution - _data_

In the data part, we have the _NfcResult class_.

The data field is variable and will depend on which component has
returned the result. In the case of this component, the fields returned
are the following:

#### 7.2.1. nfcRawData

Information obtained for each data type in raw format.

#### 7.2.2. nfcDocumentInformation

Information obtained from the document ordered by:

- documentNumber

- expirationDate

- issuer

- mrzString

- type

#### 7.2.3. nfcPersonalInformation

Information obtained from the document ordered by:

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

Image information obtained from the document sorted by:

- facialImage

- fingerprintImage

- signatureImage

#### 7.2.5 nfcSecurityData

Document security data information sorted by:

- dataGroupsHashes

- dataGroupsRead

- documentSigningCertificateData

- issuerSigningCertificateData

- ldsVersion

#### 7.2.6. nfcValidations

Document validation information sorted by:

- accessType

- activeAuthenticationSupported

- activeAuthenticationValidation

- chipAuthenticationValidation

- dataGroupsHashesValidation

- documentSigningValidation

- issuerSigningValidation

#### 7.2.7. nfcCertificateData

X509 certificate information obtained from the document ordered by.

- X509Certificate

---

## 8. Customizing the component

Apart from the changes that can be made at the SDK level (explained in
the [Getting Started](./Mobile_SDK)
document), this particular component allows several modifications.

### 8.1 Texts

If you want to modify the SDK texts, you would have to include the
following XML file in the client application and change the value of
each String to the desired one.

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

### 8.2. Animations

If you want to modify the animations (lottie) of the SDK you would have to include the animations with the same name in the res/raw/ folder of the application.

```text
nfc_anim_reader.json
nfc_anim_tuto_1.json
nfc_anim_tuto_2.json
nfc_anim_tuto_3.json
nfc_anim_tuto_3_pass.json
nfc_anim_tuto_id.json
nfc_anim_tuto_passport.json
```

### 8.3 External custom views

It is possible to completely modify the component screens while maintaining their functionality and navigation. To do so, the following interfaces must be implemented:

Previous tip screen:

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

Error diagnosis screen:

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

Read screens:

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

Once the classes that implement the interfaces have been created, the "customViews" parameter can be added at component launch to be used in the SDK.

---

## 9. Logs

To display the logs of this component on the console, you can use the filter: "NFC:"
