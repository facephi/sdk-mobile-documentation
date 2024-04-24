# Changelog

## Versiones

### 2.0.1

- General

  - SdkConfigurationData corrección de texto "iaModels" a "aiModels"
  - Mejoras internas de PreviousTips
  - Dependencias importantes actualizadas:
    - composeCompilerVersion = 1.5.12
    - androidGradlePlugin = 8.3.2
    - kotlinAndroidGradlePlugin = 1.9.23

- Selphi

  - Nueva versión 5.12.3

- SelphID

  - Nueva versión 1.24.2

- VideoCall

  - Imagen de Timeout actualizada

- Phingers
  - Simplificado ConfigurationData

### 2.0.0

- General

  - Todas las funciones de SDKController, pasan de tener output con lambda, a ser suspend functions y devolver el resultado de manera sincrona.
    Para consumirlo ahora será necesario usar una Coroutine.
    Si se llama desde un ViewModel, se puede usar viewModelScore.launch, si no CoroutineScope(Dispatchers.IO).launch

  - La inicialización del SDK ahora tiene un SDKConfigurationData con los datos que se han de rellenar

  - En el SDKConfigurationData podrás elegir entre LicensingOnline o LicensingOffline

  - Todos los ConfigurationData con imágenes en su interior han sido modificados para cambiar el nombre de los parámetros (Image)

- Tracking

  - Ajustes y mejoras

- Voice
  - Librería del widget actualizada a la versión 3.13.0
  - Mejorado el UX/UI
  - Mejorados los resultados de las verificaciones

### 1.5.6

- Selphi
  - Nueva versión 5.12.3

### 1.5.5

- General
  - Ajustes y mejoras de seguridad
  - Selphi and Selphid mejora de la gestión interna de imágenes
- NFC
  - Corrección del campo Personal Number

### 1.5.4

- General
  - Ajustes y mejoras de seguridad
  - Ajustes de diseño en las vistas de tutorial con fullscreen
- Selphi
  - Nueva versión 5.12.1
- SelphID
  - Nueva versión 1.23.1

### 1.5.3

- General
  - Pantallas de diagnóstico con reintentar
  - Flow
    - Nuevas funcionalidades
    - Tema dinámico
    - Preview controller
    - Servicios de cliente y preview
    - Mejoras
- Selphi
  - Nueva versión 5.12.0
  - Tutoriales
  - Envío de bestImage completa a tracking
- SelphID
  - Nueva versión 1.22.3
- Phingers
  - Se ha añadido retroalimentación háptica con vibración
  - Mejoras en tutorial
- NFC
  - Mejoras
- VideoId
  - Mejoras en la conexión
  - Ajustes UX
- VideoCall
  - ScreenSharing
  - Nuevos estados
  - Mejoras en la conexión
- VideoRecording
  - Nuevos estados
  - Mejoras en la conexión
  - Incidencia conocida: API 34 Android
- Capture QR
  - QR formatos

### 1.5.2

- General
  - Mejoras en pantallas pequeñas
  - Nuevo SelphiSignController
  - Nuevo VideoIdSignController
  - Nuevas clases SDKImage y SDKApplication
- NFC
  - Mejoras
- SelphID
  - 1.21.1
- Selphi
  - 5.11.2
- Voz
  - Mejora del tamaño de la librería

### 1.5.1

- General
  - Mejoras y corrección de errores
- Voz
  - Actualización de la librería interna
  - Ajustes de calibración
  - Devolución de audios tokenizados
- Phingers
  - Seguimiento WSQ
- Comportamiento
  - Actualización de la librería interna
  - Mejoras y correcciones

### 1.5.0

- Compatible con API 34 (Android 14)
- Actualizados los plugins Gradle de Android (8.1.1)
- Versión actualizada de Kotlin utilizada (1.9.10)
- Ajustes de datos de entrada del componente de vídeo
- Mejorado SdkResult como clase sellada
- Nomenclatura de los pasos de entrada NewOperation
