# Registro de Cambios del SDK


## Versión 2.5.X  
**Última versión: 2.5.0 – 12/12/2025**

### Actualizaciones Principales
- Actualizada versión minor de core 2.5.0

### Nuevas Funcionalidades
- Los flujos de IDV ahora pueden ser retomados usando los nuevos parámetros `resumeOperationId` y `resumeSessionId`.

---

## Version 2.4.X  
**Última versión: 2.4.0 – 28/10/2025**

### Actualizaciones Principales
- Refactorizada la interfaz de ITrackingController para soportar IDV y nuevos eventos.
- Refactorizado NO_OPERATION_CREATED_ERROR → OPERATION_NOT_CREATED.
- Devuelto operationId en cada SdkFlowResult.
- Actualizada dependencia Core a v2.4.0.
- Eliminado FlowPreviewController no utilizado.
- Eliminada la caché en GetFlowService.
- Añadido integrationId para uso en VideoRecording.
- Añadido evento finish flow change_step.
- Creado método público para obtener los IDs y tipos de flujo.
- Refactorizadas y movidas clases a la carpeta Data.
- Eliminadas las banderas activateFlow e iaModels de initSdk().
- Hechos públicos los IDs y operationType de FlowData.
- Refactorizada la inicialización y métodos de SDKController relacionados con Flow.
- Eliminado FlowLicense e introducido IdvLicense.
- Copiada internamente la funcionalidad de LicensingComponent y eliminada su dependencia externa.
- Añadido nuevo método público para personalización.

### Nuevas Funcionalidades
- IDV

### Correcciones
- Eliminado operationId antes de establecerlo.
- Corregida la aplicación de customization.colors en lugar del objeto padre.
- Actualizada dependencia de LicenseChecker v2.4.0 para fixear problema con Bundle IDs erróneos.
- Corregida la lógica de referencia de paso — ahora tomada desde operation.start en lugar del primer elemento del array.

## Versión 2.3.X  
**Última versión: 2.3.6 – 21/10/2025**

### Actualizaciones Principales
- Renombrado `AnalyticsManager`
- Actualizada dependencia de Core a `v2.3.3`
- Implementada funcionalidad de cifrado IDV (desde 2.3.1)
- Añadido soporte completo para eventos de analítica dentro del SDK
- Los eventos de analítica se gestionan directamente desde la capa del SDK
- La configuración de idioma ahora se establece dinámicamente desde los parámetros de `initSdk()`

### Nuevas Funcionalidades
- Añadido parámetro opcional `integrationId` en `initSdk()`
- Reintroducido `FlowPreviewController` tras su eliminación anterior
- Añadido `FlowOffline` de nuevo para simplificar pruebas de flujo
- Añadida capacidad de inyección de operaciones para una configuración flexible en tiempo de ejecución
- FlowComponent: Se lanza el paso "target" en lugar del primero del array

### Refactorizaciones
- Refactorizado `AnalyticsManager` → `IAnalyticsController`

### Correcciones y Mantenimiento
- Corregida la inyección del parámetro `initSdk` entre modos de inicialización automático y manual  
- Corregidos problemas de personalización de color en el flujo  
- Actualizado `ColorFlowKeys.swift`  
- Fusionado PR #90: `fix/SM-4537_Revision_Parametros`

---

## Versión 2.2.X  
**Última versión: 2.2.4 – 29/01/2025**

### Actualizaciones Principales
- Actualizada dependencia de Core a `v2.2.2`
- Actualizada versión de licenciamiento
- Fusionado PR #89: `feat/SM-4399_update_core`
- Mejorado el `StepData` de Tracking para la implementación de compartición de pantalla
- Actualizadas constantes internas
- Eliminado el flujo previo y renombrado el archivo JSON de `json → jsonX`
- Corregido un problema donde la configuración del flujo persistía al iniciar una operación normal
- Corregido manifiesto inválido en `Package-template`

### Refactorizaciones y Correcciones
- Mejorado `fix_customization_flow`
- Revertidos cambios incorrectos previos
- Eliminada lógica obsoleta del flujo previo

---

## Versión 2.1.X  
**Última versión: 2.1.0 – 21/10/2024**

### Actualizaciones Principales
- Añadido paso Selphix

---

## Versión 2.0.X  
**Última versión: 2.0.0 – 15/04/2024**

### Actualización Principal
- Adaptado a Core `v2.0.0`

---

## Versión 1.5.X  
**Última versión: 1.5.11 – 12/03/2023**

### Actualizaciones Principales
- Adaptado a Core versión `1.5.8`
- Introducidas mejoras de arquitectura de Flow versión 2
- Mejorada la lógica interna del flujo y la gestión de pasos
- Introducido `FlowController` (desde 1.5.1)
- Implementado nuevo sistema de gestión de errores

### Nuevas Funcionalidades y Estructuras
- Creado `FlowConfigurationData` para reemplazar los antiguos parámetros de inicialización  
- Añadido `SdkFlowResult` para unificar la salida del flujo  
- Introducido `cancelFlow()` para una finalización controlada del flujo  
- Añadido `IStatusController` para gestión centralizada del estado del SDK  
- Añadido `GetModels` IA_OCR y parámetro `iaModels` en `initSdk()` para descarga automática de modelos IA  
- Añadido `GetFlowConfiguration` y `GetFlowPreviewConfiguration` desde la API de Builder  
- Añadido `ExternalStepController` para manejo de pasos externos  
- Añadido parámetro `onlineFlow` en `initSdk()` para precargar la configuración `flow.json`  
- Añadido `FlowController.controllers` como variable estática pública  

### Cambios Estructurales
- Unificado `flowOutput` como `((SdkFlowResult) -> Void)` — ahora se ejecuta tras finalizar cada componente  
- Eliminado parámetro `newOperation` de `FlowConfigurationData` — las nuevas operaciones comienzan automáticamente  
- Renombrado `onlineFlow → activateFlow`  
- `launchNextStep()` ahora es público  
- `cancelFlow()` se ejecuta automáticamente al finalizar el flujo  
- Añadidos parámetros `enableTracking` y `automatic` en la configuración del flujo  
- Sustituido el orden basado en arrays por IDs y targets  
- Mejorada la inyección de personalización en `flowableController`

### Correcciones
- Corregido `LICENSE_CHECKER_ERROR_INVALID_LICENSE` durante `initSdk` automático  
- Corregidas llamadas duplicadas (n+1) a `flowOutput` tras la finalización  
- Corregido el orden incorrecto de pasos (ahora correctamente indexado)
