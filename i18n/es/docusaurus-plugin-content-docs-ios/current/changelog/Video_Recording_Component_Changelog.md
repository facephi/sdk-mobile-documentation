# Registro de Cambios de VideoRecording

## Versión 2.3.X  
**Última versión: 2.3.9 – 21/10/2025**

### Actualizaciones Principales
- Añadido timestamp dentro de los metadatos de grabación para mejorar la trazabilidad.
- Actualizada dependencia de Core a `v2.3.3`.
- Sustituida la lógica anterior de parada por la nueva llamada `stopCapture`.
- Eliminada referencia innecesaria a carpeta de recursos faltante.
- Eliminada dependencia de la extensión de grabación de pantalla.
- Añadidos nuevos eventos: `COMPONENT_START`, `STOP` y modal `screenSharingPermission`.

### Correcciones
- Corregida referencia del nombre del componente.
- Corregido comportamiento del modal de permisos.
- Refactorizado `AnalyticsManager → IAnalyticsController` para consistencia entre componentes.

---

## Versión 2.2.X  
**Última versión: 2.2.2 – 29/01/2025**

### Actualizaciones Principales
- Actualizada versión de dependencia de Core.
- Añadidas fuentes personalizadas para coherencia visual.
- Actualizado seguimiento — ahora marca éxito al detener la grabación, no al iniciarla.
- Actualizado Core a `v2.2.0`.
- Cambio rompedor: renombrado `extensionName → extensionIdentifier`.
- Código interno limpiado y refactorizado para mejor mantenibilidad.

### Correcciones
- Corregido error de seguimiento `StepData` durante sesiones de pantalla compartida.
- Corregido error de inicialización de audio — ahora `agoraKit.disableAudio()` se ejecuta antes de iniciar la grabación.

---

## Versión 2.1.X  
**Última versión: 2.1.1 – 28/08/2024**

### Actualizaciones Principales
- Adaptado a Core `v2.1.X` y actualizadas dependencias.
- Añadido `CommonCustomization` y refactor del manejo de colores.
- Actualizada estructura `SdkResult` en resultados exitosos.
- Eliminadas extensiones de `String` innecesarias.

### Correcciones
- Corregido error que impedía iniciar la transmisión.
- Corregido comportamiento de parada de grabación fuera del ciclo de vida de la app.

---

## Versión 2.0.X  
**Última versión: 2.0.2 – 30/04/2024**

### Actualizaciones Principales
- Actualizadas dependencias de Agora y Constants.
- Añadido Privacy Manifest y extensión `.xcprivacy`.
- Adaptado a Core `v2.0.0` y Agora `v4.3.0`.
- Añadido motivo explícito de uso de `UserDefaults` en `PrivacyInfo`.
- Actualizadas dependencias menores.

### Correcciones
- Corregidos errores de grabación durante manejo de sesiones.
- Degradado temporalmente Agora a `v4.3.0` (hasta versión `v4.3.1`).

---

## Versión 1.5.X  
**Última versión: 1.5.4 – 12/03/2024**

### Actualizaciones Principales
- Actualizado Starscream a versión `4.0.8`.
- Adaptado a Core `v1.5.4`, `v1.5.6` y `v1.5.8`.
- Mejorada estabilidad e integración general del flujo.

### Nuevas Funcionalidades y Estructuras
- Añadidos nuevos eventos de plataforma en `VideoRecordingController`.
- Creado `VideoRecordingComponent`.
