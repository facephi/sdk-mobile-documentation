# NFC Component

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

This command must have been executed **before launch**.

To learn more about how to start a new operation, it is recommended to
consult the [Getting Started](./Mobile_SDK)
documentation, which details and explains what this process consists of.

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

```java
    NfcError.ACTIVITY_RESULT_ERROR
    NfcError.CANCEL_BY_USER
    NfcError.INITIALIZATION_ERROR -> it.error // More info
    NfcError.NFC_ERROR
    NfcError.NFC_ERROR_DATA
    NfcError.NFC_ERROR_DISABLED
    NfcError.NFC_ERROR_ILLEGAL_ARGUMENT
    NfcError.NFC_ERROR_IO
    NfcError.NFC_ERROR_NOT_SUPPORTED
    NfcError.NFC_ERROR_READING
    NfcError.NFC_ERROR_TAG_LOST
    NfcError.NO_DATA_ERROR
    NfcError.TIMEOUT
    NfcError.LAST_COMMAND_EXPECTED
```

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
document), this particular component allows the modification of specific
texts.

### 8.1 Texts

If you want to modify the SDK texts, you would have to include the
following XML file in the client application and change the value of
each String to the desired one.

```xml
    <string name="nfc_component_start_message">Attach the chip to your mobile.\nWhen it detects it, hold it still.</string>
    <string name="nfc_component_ready_to_scan">Ready to scan</string>
    <string name="nfc_component_reading_device">Reading device</string>
    <string name="nfc_component_in_progress">In progress:</string>
    <string name="nfc_component_connector_of">in</string>
    <string name="nfc_component_error">The NFC could not be\nread correctly</string>
    <string name="nfc_component_tutorial">Attach the document to the back of your device.</string>
    <string name="nfc_component_tutorial_button">Continue</string>
    <string name="nfc_component_tutorial_title">Scan NFC</string>
    <string name="nfc_component_tutorial_1">When we pass a card through a sensor, there is an exchange of information called NFC.</string>
    <string name="nfc_component_tutorial_2">On your mobile, the sensor is in the marked area. Here you must gather your document.</string>
    <string name="nfc_component_tutorial_3">For a better reading, remove the cover of your mobile.</string>
    <string name="nfc_component_tutorial_more_info_button">More info</string>
    <string name="nfc_component_timeout_title">Time exceeded</string>
    <string name="nfc_component_timeout_desc">We apologize. The capture could not be made</string>
    <string name="nfc_component_internal_error_title">There was a technical problem</string>
    <string name="nfc_component_internal_error_desc">We apologize. The capture could not be made</string>
    <string name="nfc_component_data_error_title">Document could not be read</string>
    <string name="nfc_component_data_error_desc">Review the data entered</string>
    <string name="nfc_component_read_not_finish_title">Reading not finished</string>
    <string name="nfc_component_read_not_finish_desc">Hold the position until the end of the reading</string>

```
