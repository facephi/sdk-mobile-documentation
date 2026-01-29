# Registro de Cambios de Tracking


## Versión 2.5.X  
**Última versión: 2.5.3 - 28/01/2026**

### Actualizaciones Principales
- Actualizada versión de la dependencia TrackingWidget v1.1.25
- Actualizada versión minor de core 2.5.0

### Nuevas Funcionalidades
- Añadido soporte para el Proxy de IDV
- Añadido soporte para el paso de NFC en IDV

### Correcciones
- El parámetro `steps` de la función `newOperation` no se estaba parseando correctamente en varios casos de uso.
- Se ha añadido el manifiesto de privacidad que evita el error ITMS a la hora de subir una app a la Appstore.

---

## Versión 2.4.X  
**Última versión: 2.4.0 – 28/10/2025**

### Actualizaciones Principales
- Refactorizados varios modelos internos.
- Actualizados y adaptados los eventos y llamadas de assets de TrackingController.
- Actualizados y adaptados los cambios en trackingWidget.
- Añadido authenticationId y preparada la estructura para futuros cambios.
- Actualizado trackingWidget a v1.1.23.
- Adaptada la actualización de Core en las interfaces.
- Evitado el envío de assets WSQ cuando se usa TrackingX.
- Actualizada versión del SDK a v2.4.0.
- Añadido integrationId tanto a configurationData como a TrackingConfigurationData.
- Eliminado evento único innecesario sendAdvanceTracking.
- Añadida detección automática de país desde diccionario en sendDocumentData.
- Implementado comportamiento completo de tracking IDV.
- Eliminado widgetError duplicado.
- Refactorizado NO_OPERATION_CREATED_ERROR → OPERATION_NOT_CREATED.

---

## Versión 2.3.X  
**Última versión: 2.3.6 – 21/10/2025**

### Actualizaciones Principales
- Actualizada la dependencia de Core a `v2.3.3`
- Añadidos nuevos `TrackingWidgetErrors`
- Revertida la firma del callback `trackingError` por compatibilidad
- Añadido nuevo parámetro `idv` en `TrackingLicense`
- Actualizado y adaptado `tracking-widget-kmp` a `v1.1.16`
- Modificado y adaptado `TrackingController` a interfaz; ahora usa `TrackingXWidgetController` cuando IDV está habilitado
- Añadida integración de huella dactilar en `TrackingComponent`
- Creada clase `FingerprintData` para parsear `FingerprintResponse`
- Añadida configuración e inicialización de huella en `TrackingController`
- Creado SPM para `FPHITrackingWidget-SPM`

### Refactorizaciones
- Refactorizadas pruebas y ejemplos (añadido `idv` a los datos de test)
- Refactorizado `sendAdvTracking()` (ahora dentro de la interfaz)

### Correcciones
- Hecho públicos los parámetros de `TrackingError`
- Corregido valor del enum de assets
- Corregido problema en hilo secundario al localizar la solicitud
- Corregidas dependencias de huella y desajustes con Core
- Corregido fallo en `initOperation v3`
- Eliminado operador optimista de la dependencia del widget
- Corregidas restricciones de versión de `FingerprintPro` (`upToNextMinor`)

---

## Versión 2.2.X  
**Última versión: 2.2.2 – 11/10/2024**

### Actualizaciones Principales
- Actualizadas XCFrameworks locales de `v1.1.0 → v1.1.2`
- Actualizadas constantes a `v2.2.1`
- Añadido `sendAdvanceTrackingEvent()` en `TrackingWidgetKMP`
- Añadido nuevo parámetro de depuración
- Añadidos dos nuevos errores de widget para parsing
- Actualizada dependencia de Core a `v2.2.0`
- Añadido binario en `Package.swift`
- Añadido `TrackingControllerKMP`
- Totalmente adaptado a la arquitectura del widget KMP
- Actualizados archivos locales y remotos de distribución
- Actualizadas constantes y limpieza de código
- `TrackingController` ahora usa el nuevo widget KMP
- Actualizada dependencia de `trackingWidget` a `v1.0.1`
- Mejorado `LocationManager` y gestión de distribución del SDK

### Refactorizaciones
- Refactorizado y mapeado `TrackingError`
- Implementada solución temporal para compatibilidad con interfaz Core antigua

### Correcciones
- Corregido crash en `advanceTracking()`
- Asegurado que `setTrackingError` se ejecute antes de `start()`
- Corregidos errores de compilación y condiciones de carrera
- `tenantId` ahora es privado

---

## Versión 2.1.X  
**Última versión: 2.1.1 – 28/08/2024**

### Actualizaciones Principales
- Añadido `sdkVersion` a la función `initOperation` del tracking
- Actualizadas constantes a `v2.1.1`
- Adaptado a Core `v2.1.X` y nueva interfaz

### Refactorizaciones
- Añadido mecanismo de reintento a `sendEvents()`
- Refactorizado `AssetResponse` para soportar `timestamp: Int/String`
- Añadido `apiKey` a `TrackingLicense` y `Api.shared`
- Añadidos encabezados HTTP (`x-api-key`, `Authorization`, `Content-Type`)
- Eliminado parámetro `token` (ahora gestionado desde `Api.shared`)
- Añadidos más detalles a `PayloadModel`

### Correcciones
- Corregido error de parsing
- Corregida recursión infinita en la extensión del protocolo `ITrackingController`
- Corregida condición de carrera; `libraryPackageVersion` ahora es público
- Corregidos conflictos de merge tras refactor de cabeceras

---

## Versión 2.0.X  
**Última versión: 2.0.1 – 16/05/2024**

### Actualizaciones Principales
- Añadido Privacy Manifest y campos de datos de privacidad
- Corregida ubicación del archivo `privacyInfo`
- Actualizadas dependencias y adaptado a Core `v2.0.0`
- Añadido bundle de recursos con `.xcprivacy`

### Correcciones
- Añadida comprobación condicional para validación de SIM — devuelve `nil` en iOS 16+

---

## Versión 1.5.X  
**Última versión: 1.5.6 – 15/04/2024**

### Actualizaciones Principales
- Adaptado a Core `v1.5.8`
- Mejorada la arquitectura interna de tracking y el flujo de eventos
- Actualizadas referencias a Core `v1.5.0`
- Adaptado al nuevo sistema de gestión de errores

### Nuevas Funcionalidades y Estructuras
- Añadidos nuevos eventos de plataforma
- Añadido `osName: "iOS"` a todos los eventos de tracking
- Añadidos nuevos parámetros a `Payload`
- Creado `signatureProofEvent(signatureResult: String)`

### Cambios Estructurales
- Eliminada estructura `PersonalData`

### Correcciones
- Corregido evento de firma
- Corregido evento `OCR_DATA`
- Corregido fallo donde `newOperation` no respondía cuando fallaba `setupToken`
