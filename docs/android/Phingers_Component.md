# Fingerprint Capture

## 1. Introduction

Fingerprint capture is performed with the **Phingers Component**. This component handles capturing the user’s fingerprints and extracting templates. Its main processes are:

- Internal camera and permission management
- Multiple extraction modes (four-finger slap, thumb-only, etc.)
- Built-in liveness detection
- Guided assistance during capture
- Generation of fingerprint templates, images, and quality scores

**Important:** To generate fingerprint templates (the `template` field in `FingerResponse`), the device must have **3 GB of RAM or more**.

Refer to the [Quickstart](./Mobile_SDK) section for basic SDK integration. This section provides details for launching this component.

---

## 2. Dependency

Add the component-specific dependency:

```java
implementation "com.facephi.androidsdk:phingers_tf_component:$version"
```

---

## 3. Available Controllers

| **Controller**        | **Description**                                          |
| --------------------- | -------------------------------------------------------- |
| PhingersTFController  | Main controller for Phingers TF capture                  |
| FPhingersTFController | Flow controller for Phingers TF (Flow integrations only) |

---

## 4. Quick Launch

Once the SDK is initialized and a new operation has been created, launch the component:

```java
val response = SDKController.launch(
    PhingersTFController(
        PhingersConfigurationData(...)
    )
)

when (response) {
    is SdkResult.Error   -> Napier.d("PHINGERS: ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}
```

---

## 5. Basic Configuration

Create a `PhingersConfigurationData` object with the following fields:

```java
PhingersConfigurationData(
    reticleOrientation = ReticleOrientation.LEFT,
    fingerFilter       = FingerFilter.SLAP,
    templateType       = TemplateType.NIST_TEMPLATE
)
```

**ReticleOrientation** options:

- `LEFT`
- `RIGHT`

**FingerFilter** options:

- `SLAP`
- `ALL_4_FINGERS_ONE_BY_ONE`
- `ALL_5_FINGERS_ONE_BY_ONE`
- `INDEX_FINGER`
- `MIDDLE_FINGER`
- `RING_FINGER`
- `LITTLE_FINGER`
- `THUMB_FINGER`

**TemplateType** options:

- `NIST_TEMPLATE`
- `ISO_TEMPLATE`
- `NIST_T5_TEMPLATE`

---

## 6. Receiving the Result

The launch returns an `SdkResult`. Handle success and error:

```java
when (response) {
    is SdkResult.Error   -> Napier.d("PHINGERS: ERROR - ${response.error}")
    is SdkResult.Success -> response.data
}
```

### 6.1 Handling Errors

Errors are returned as a `PhingersError`. Possible reasons include:

- PHG_ACTIVITY_RESULT_ERROR: The activity result is invalid.
- PHG_ACTIVITY_RESULT_MSG_ERROR: The activity result message is invalid.
- PHG_APPLICATION_CONTEXT_ERROR: The application context is null.
- PHG_CANCEL_BY_USER: The user cancelled the process.
- PHG_CANCEL_LAUNCH: The SDK cancelled the launch.
- PHG_COMPONENT_LICENSE_ERROR: Invalid component license.
- PHG_EMPTY_LICENSE: Empty license string.
- PHG_FETCH_DATA_ERROR: Error retrieving the result.
- FLOW_ERROR: Error in the flow process.
- PHG_INITIALIZATION_ERROR: Initialization error.
- PHG_INTERNAL_ERROR: Internal error.
- PHG_LOW_QUALITY: Low image quality.
- PHG_MANAGER_NOT_INITIALIZED: Managers are null or not initialized.
- PHG_NO_DATA_ERROR: No data received from the capture.
- PHG_OPERATION_NOT_CREATED: No operation is in progress.
- PHG_PERMISSION_DENIED: User denied required permissions.
- PHG_AUTOFOCUS_FAILURE: Autofocus failure.
- PHG_CAMERA_FAILURE: Camera failure.
- PHG_CAPTURE_FAILURE: Capture failure.
- PHG_CONFIGURATION_FAILURE: Configuration error.
- PHG_FINGERPRINT_CAPTURE_FAILURE: Fingerprint capture failure.
- PHG_FINGERPRINT_TEMPLATE_IO_ERROR: Template IO failure.
- PHG_LICENSING_FAILURE: Licensing error.
- PHG_LIVENESS_FAILURE: Liveness check error.
- PHG_NO_FINGERS_DETECTED: No fingers detected.
- PHG_UNIQUE_USER_ID_NOT_SPECIFIED: User ID not specified.
- PHG_TIMEOUT: Timeout during capture.
- PHG_FLOW_VIDEO_RECORDING_ERROR: Flow video recording error.
- PHG_FLOW_TRACKING_ERROR: Flow tracking error.
- PHG_TRACKING_STEP_ERROR: Tracking step error.

### 6.2 Handling Success - `data`

On success (`SdkResult.Success`), you receive a `PhingersResult` object. Binary fields are returned as `ByteArray`. To convert to Base64:

```kotlin
Base64.encodeToString(byteArray, Base64.NO_WRAP)
```

The `PhingersResult` includes the following fields:

- **fingers**: List of `FingerResponse` (one entry per captured finger)
- **slapImages**: List of `SlapResponse` (slap captures when applicable)
- **livenessScore**: Average liveness score (nullable)

#### 6.2.1 `FingerResponse`

- **position**: Finger position index
- **wsq**: WSQ image (`ByteArray`)
- **displayImage**: Display image (`ByteArray`, PNG)
- **minutiaesNumber**: Number of minutiae detected
- **quality**: Quality score
- **nistQuality**: NIST quality score
- **nist2Quality**: NIST2 quality score
- **template**: Fingerprint template (`ByteArray`)
- **proprietaryQuality**: Vendor-specific quality score
- **templateType**: Template type identifier
- **imageWidth**: Image width in pixels
- **imageHeight**: Image height in pixels

#### 6.2.2 `SlapResponse`

- **position**: Slap position index
- **image**: Slap image (`ByteArray`)

---

## 7. Advanced Information

This section provides advanced configuration options for the Phingers Component.

### 7.1 Advanced Component Configuration

All fields of `PhingersConfigurationData`:

#### 7.1.1 reticleOrientation

Defines the capture orientation:

- **LEFT**: Capture left-hand fingers
- **RIGHT**: Capture right-hand fingers

#### 7.1.2 fingerFilter

Selects the capture mode (slap or specific fingers).

#### 7.1.3 templateType

Defines the template format to be generated (NIST/ISO variants).

#### 7.1.4 useLiveness

Enables or disables liveness detection. Default is `true`.

#### 7.1.5 extractionTimeout

Timeout for the extraction process in milliseconds. Default is `50000`.

#### 7.1.6 showPreviousTip

Shows a pre-launch information screen with a start button.

#### 7.1.7 showTutorial

Shows the tutorial screen explaining how to perform the capture.

#### 7.1.8 showDiagnostic

Shows diagnostic screens at the end of the process.

#### 7.1.9 threshold

Quality threshold for capture. The SDK clamps this value to the range `0.0-1.0`.

#### 7.1.10 showEllipses

Shows the ellipses overlay during capture.

#### 7.1.11 cropWidth

Crop width for segmented finger images (px). Values `<= 0` disable cropping; values are clamped to `64-2048`.

#### 7.1.12 cropHeight

Crop height for segmented finger images (px). Values `<= 0` disable cropping; values are clamped to `64-2048`.

#### 7.1.13 vibrationEnabled

Enables vibration feedback. Default is `true`.

#### 7.1.14 enableFlash

Enables the camera flash. Default is `true`.

#### 7.1.15 reticle

Optional reticle identifier. Default is `"R_S"`.

#### 7.1.16 showPreviousFingerSelector

Shows the finger selector screen before capture.

#### 7.1.17 fingerSelectorHandOrientation

Defines which hand(s) are available in the finger selector (`LEFT`, `RIGHT`, `BOTH`).

#### 7.1.18 fingerSelectorOptions

Defines the list of finger filters shown in the selector. If empty, the SDK uses:
`ALL_4_FINGERS_ONE_BY_ONE`, `SLAP`, `INDEX_FINGER`.

---

## 8. Component Customization

Beyond SDK-level settings (see [Advanced Settings](./Mobile_SDK_advanced)), you can modify the UI.

### 8.1 Texts

Override default texts by adding an XML file in your app:

```xml
<!-- Previous Tip -->
<string name="phingers_widget_tip_title">Captura de huellas</string>
<string name="phingers_widget_tip_message">Coloca tu dedo dentro de la marca</string>
<string name="phingers_widget_tip_message_alt">Coloca tu dedo dentro de la marca</string>
<string name="phingers_widget_tip_button">Comenzar</string>
<string name="phingers_widget_tip_button_alt">Comenzar captura de huellas</string>
<string name="phingers_widget_tip_close_button_alt">Volver</string>
<string name="phingers_widget_tip_info_button_alt">Ver consejos</string>
<string name="phingers_widget_tip_anim_desc">Animación de instrucciones para la captura de huella</string>
<!-- Previous Tip (tipos específicos) -->
<string name="phingers_widget_tip_title_left_slap">Huellas mano izquierda</string>
<string name="phingers_widget_tip_message_left_slap">Junta tus dedos. Acerca o aleja la mano hasta que se enfoquen tus huellas.</string>
<string name="phingers_widget_tip_title_right_slap">Huellas mano derecha</string>
<string name="phingers_widget_tip_message_right_slap">Junta tus dedos. Acerca o aleja la mano hasta que se enfoquen tus huellas.</string>
<string name="phingers_widget_tip_title_left_finger">Huellas mano izquierda</string>
<string name="phingers_widget_tip_message_left_finger">Enfoca el dedo índice en el recuadro. Acerca o aleja el dedo hasta que se enfoque tu huella.</string>
<string name="phingers_widget_tip_title_right_finger">Huellas mano derecha</string>
<string name="phingers_widget_tip_message_right_finger">Enfoca el dedo índice en el recuadro. Acerca o aleja el dedo hasta que se enfoque tu huella.</string>
<string name="phingers_widget_tip_title_thumb">Huella dedo pulgar</string>
<string name="phingers_widget_tip_message_thumb">Enfoca el dedo pulgar en el recuadro. Acerca o aleja el dedo hasta que se enfoque tu huella.</string>
<!-- Selector de dedos -->
<string name="phingers_widget_selector_hand_question">¿Qué mano utilizarás?</string>
<string name="phingers_widget_selector_hand_left">Izquierda</string>
<string name="phingers_widget_selector_hand_right">Derecha</string>
<string name="phingers_widget_selector_secondary_question">¿Qué huellas quieres escanear?</string>
<string name="phingers_widget_selector_option_index">Dedo índice</string>
<string name="phingers_widget_selector_option_middle">Dedo corazón</string>
<string name="phingers_widget_selector_option_ring">Dedo anular</string>
<string name="phingers_widget_selector_option_little">Dedo meñique</string>
<string name="phingers_widget_selector_option_thumb">Dedo pulgar</string>
<string name="phingers_widget_selector_option_all4">4 dedos (índice, corazón, anular y meñique)</string>
<string name="phingers_widget_selector_option_all4_sequence">4 dedos (uno a uno)</string>
<string name="phingers_widget_selector_option_all5_sequence">5 dedos (uno a uno)</string>
<string name="phingers_widget_selector_primary_button">Continuar</string>
<!-- Capture -->
<string name="phingers_widget_capture_close_button_alt">Volver</string>
<!-- Tutorial -->
<string name="phingers_widget_tutorial_message_1">Coloca tu cara en el centro y mira de frente a la cámara.</string>
<string name="phingers_widget_tutorial_message_2">Retira cualquier elemento que cubra tu cara.</string>
<string name="phingers_widget_tutorial_message_3">Busca un entorno bien iluminado, sin sombras sobre tu rostro.</string>
<string name="phingers_widget_tutorial_message_1_anim_desc">La foto se realiza cuando la persona está en el centro.</string>
<string name="phingers_widget_tutorial_message_2_anim_desc">Una persona se quita las gafas de sol y se retira el pelo de los ojos.</string>
<string name="phingers_widget_tutorial_message_3_anim_desc">La imagen aparece oscura y una persona enciende la luz.</string>
<string name="phingers_widget_tutorial_close_button_alt">Volver al tutorial previo</string>
<!-- Confirmation -->
<string name="phingers_widget_image_captured">Imagen capturada</string>
<string name="phingers_widget_confirmation_message">¿Tu foto se ve de forma clara y nítida?</string>
<string name="phingers_widget_confirmation_retry">Reintentar</string>
<string name="phingers_widget_confirmation_continue">Continuar</string>

<!-- Camera status (ES) -->
<string name="phingers_widget_camera_status_position_fingers">Coloca tus dedos dentro de la marca</string>
<string name="phingers_widget_camera_status_processing">Procesando…</string>
<string name="phingers_widget_camera_status_too_far">Acerca la mano</string>
<string name="phingers_widget_camera_status_too_close">Aleja la mano</string>
<string name="phingers_widget_camera_status_low_focus">Mueve el dedo para enfocar</string>
<string name="phingers_widget_camera_status_good_focus">Mantén el dedo quieto</string>
<string name="phingers_widget_camera_status_wrong_angle">Coloca el dedo en vertical</string>
<string name="phingers_widget_camera_status_too_few">No se ha detectado el dedo</string>
<string name="phingers_widget_camera_status_too_many">Varios dedos detectados</string>
<string name="phingers_widget_camera_status_wrong_hand_left">Debes poner el dedo de la mano izquierda</string>
<string name="phingers_widget_camera_status_wrong_hand_right">Debes poner el dedo de la mano derecha</string>
<string name="phingers_widget_camera_status_error">Error en la captura</string>
<string name="phingers_widget_camera_status_timeout">Tiempo de captura agotado</string>
<string name="phingers_widget_camera_status_success">¡Huella capturada!</string>
<string name="phingers_widget_camera_status_keep_hand_steady">Mantén tu mano firme</string>
<string name="phingers_widget_timeout_desc">La captura ha superado el tiempo. Inténtalo de nuevo.</string>

<!-- Dynamic finger hint (ES) -->
<!-- %1$s = lado (izquierdo/derecho), %2$s = dedo (índice/medio/anular/meñique/pulgar) -->
<string name="phingers_widget_hint_place_finger_mark">Coloca tu %2$s %1$s dentro de la marca</string>
<string name="phingers_widget_side_left">izquierdo</string>
<string name="phingers_widget_side_right">derecho</string>
<string name="phingers_widget_finger_index">índice</string>
<string name="phingers_widget_finger_middle">medio</string>
<string name="phingers_widget_finger_ring">anular</string>
<string name="phingers_widget_finger_little">meñique</string>
<string name="phingers_widget_finger_thumb">pulgar</string>
```

### 8.2 Animations

Override Lottie animations by placing files in `res/raw/`:

```
phingers_anim_left.json
phingers_anim_left_finger.json
phingers_anim_right.json
phingers_anim_right_finger.json
phingers_anim_success.json
phingers_anim_thumb.json
phingers_anim_thumb_left.json
phingers_anim_thumb_right.json
phingers_anim_thumbs.json
```

---

## 9. Logs

Filter console logs for this component by: `"PHINGERS_TF:"`
