# Vídeo grabación

## 1. Introducción

La captura de documentos se realiza con el **_VideoRecording Component_**. 

Este componente se encarga de  capturar la pantalla
del dispositivo en segundo plano. Está orientado principalmente para la
grabación del proceso de onboarding.

---

## 2. Dependencia

La dependencia específica del componente es:

  ```java
  implementation "com.facephi.androidsdk:video_recording_component:$version"
  ```

---

## 3. Controladores disponibles

| **Controlador**              | **Descripción**                                            |
| ---------------------------- | ---------------------------------------------------------- |
| VideoRecordingController     | Controlador principal de video grabación.                  |
| StopVideoRecordingController | Controlador para realizar la parada de la video grabación. |

---

## 4. Lanzamiento simplificado

Una vez iniciado el SDK y creada una nueva operación se podrá lanzar el componente. 
Se podrá hacer uso de cualquiera de sus controladores para ejecutar su funcionalidad.

### 4.1. Lanzamiento de la captura

Para iniciar la grabación de pantalla: 

```java
val response = SDKController.launch(
    VideoRecordingController(
        VideoRecordingConfigurationData(...)
    )
)

when (response) {
    is SdkResult.Error   -> Napier.d("ERROR - ${response.error.name}")
    is SdkResult.Success -> response.data
}

```

### 4.2. Detener la captura

Para detener la grabación de pantalla:

```java
val controller = StopVideoRecordingController()

controller.setOutput {
    Napier.d("APP: VIDEO RECORDING STATE (stop): ${it.name}")
}

SDKController.launch(controller)

```

---

## 5. Información avanzada

Este apartado amplía la información del componente.

### 5.1.  Configuración avanzada del componente

Para lanzar el componente actual, se deberá crear un objeto _VideoRecordingConfigurationData_ 
que será la configuración del controlador del componente.

A continuación se detallan todos los campos que forman parte de esta clase.

Los campos incluidos en la configuración, normalmente **no es necesario
que sean informados** ya que se completan internamente a través de la
licencia usada.

Estos campos suelen informarse **solo** cuando el **servidor** es
**OnPremise**.

#### 5.1.1. url

Ruta al socket de video

#### 5.1.2. apiKey

ApiKey necesaria para la conexión con el socket de video

#### 5.1.3. tenantId

Identificador del tenant que hace referencia al cliente actual,
necesario para la conexión con el servicio de video.

---

## 8. Logs

Para visualizar en consola los logs de este componente se podrá usar el filtro: "VIDEO_RECORDING:"