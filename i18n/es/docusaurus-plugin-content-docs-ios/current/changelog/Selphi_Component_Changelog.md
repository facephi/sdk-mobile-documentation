# Registro de Cambios de Selphi

## Versión 2.3.X  
**Última versión: 2.3.7 – 03/07/2025**

### Actualizaciones Principales
- Introducido commit reversible con comentarios y logs internos mejorados para auditoría.
- Entregada versión accesible alineada con los requisitos de auditoría.
- Revisión completa de accesibilidad para garantizar cumplimiento y mejorar la usabilidad.
- Actualizada y adaptada dependencia de Core a `v2.3.3`.
- Activada integración de seguimiento de vídeo con IDV Tracking.
- Eliminado parámetro `locale` de `SelphiConfigurationData` — ahora se deriva automáticamente de `initSdk()`.
- Añadida integración completa de analítica en el SDK.
- Implementado soporte multilingüe (añadido portugués).
- El idioma se establece dinámicamente desde la configuración de `initSdk()`.
- Mejorado seguimiento y análisis de eventos desde el nivel Widget.
- Revisión y mejora de UI/UX.
- Nuevas animaciones

### Correcciones
- Movida la comprobación `hasOperationCreated` antes de `createStep()` para asegurar inicialización correcta.
- Refactorizado `AnalyticsManager → IAnalyticsController` para unificar la lógica de analítica entre componentes.

---

## Versión 2.2.X  
**Última versión: 2.2.11 – 18/03/2025**

### Actualizaciones Principales
- El idioma por defecto ahora coincide con el del dispositivo.
- Añadida funcionalidad de flash (solo cámara trasera).
- Actualizadas dependencias de Core (`SM-4399`).
- Actualizada dependencia del Widget a `v5.16.3`.
- Introducido modo MOVE con cámara trasera para mejorar detección de vida.
- Añadido parámetro `cameraPreferred` en `SelphiController.swift`.
- Actualizado `SelphiWidget` a `v5.16.0`.
- Añadidos nuevos Lotties accesibles para mayor inclusión.
- Mejorada experiencia de navegación y retroalimentación del usuario.
- Fusionado PR #74 (`feat/SM-4094RevisionUX`) con mejoras UX significativas.
- Mejorada gestión de errores: ahora se encapsulan como resultados exitosos cuando corresponde.
- Creado `RawTemplateWidgetController` reemplazando la implementación anterior.
- Actualizadas constantes y dependencias.
- Mapeado `FPBLivenessDiagnostic` y refactorizado el análisis de resultados.
- Añadida integración de llamada de Advance Tracking.
- Actualizada dependencia de Core a `v2.2.0`.
- Refactorizada la lógica de animaciones para soportar personalización dinámica.
- Fusionado PR #69 (`fix/SM-3828-literal-selphi-signature`) con correcciones literales y mejoras UI.
- Mejorado flujo UX y manejo de colores en `TutorialTipsConfigurationData.swift` y `Constants.swift`.

### Correcciones
- Corregido fallo visual al lanzar el controlador desde un hilo en segundo plano.
- Corregidas inconsistencias menores en UX y navegación.
- Aplicada solución temporal para evitar cierres del Widget en ciertas secuencias de captura.

---

## Versión 2.1.X  
**Última versión: 2.1.2 – 28/08/2024**

### Actualizaciones Principales
- Refactorizada la lógica para mejorar reutilización entre controladores.
- Implementado `CommonCustomization` para control de color y tema.
- Creado `SelphiTheme` para un estilo unificado.
- Añadido soporte de tutoriales y consejos directamente desde el SDK.
- Introducida entidad `LivenessDiagnostic` e integrada en `SelphiResult`.
- Adaptado a Core `v2.1.X`.
- Migrada la lógica de internacionalización (i18n) a Core.
- El proveedor `RawTemplate` ahora usa `tokenizeController` en lugar de `FPhiWidget`.

### Correcciones
- Corregido problema en la jerarquía de vistas diagnósticas.
- Corregida condición de carrera en validación de `SignatureProof`.
- Corregidos errores de compilación y configuración.
- Corregidos nombres inconsistentes en animaciones Lottie.
- Mejorada accesibilidad con nuevos literales y etiquetas.
- Corregido modo MOVE (`PR #54`).

---

## Versión 2.0.X  
**Última versión: 2.0.2 – 15/05/2024**

### Actualizaciones Principales
- Añadido soporte para `bestImageTokenized` para mejorar la calidad de plantilla.
- Implementado mecanismo de reintento ante timeouts.
- Añadida funcionalidad `logImages` y nuevo parámetro de controlador para trazabilidad.
- Adaptado a Core `v2.0.0`.
- Añadido Privacy Manifest para cumplimiento normativo en iOS.
- Mejorada validación de licencia y propagación de errores.

### Correcciones
- Corregido nombre del paso de flujo: `SIGNATURE_SELPHI_CONTROLLER → SIGNATURE_SELPHI_COMPONENT`.
- Corregido fallo donde el estado de licencia fallida no lanzaba callback.
- Añadido valor `TrackAssetType.SELPHI_SIGNATURE` en `SelphiSignatureController`.

---

## Versión 1.5.X  
**Última versión: 1.5.10 – 12/03/2024**

### Actualizaciones Principales
- Refactorizado `SignatureSelphi` para extender la clase principal del controlador.
- Adaptado a Core `v1.5.8`.
- Mejorada integración de flujo y manejo de eventos para mayor fiabilidad.

### Nuevas Funcionalidades y Estructuras
- Creado `SignatureSelphiController`.
- Añadidos nuevos eventos de plataforma en `SelphiController`.
- Introducido parámetro `vibrationEnabled`.
- Añadidas notificaciones hápticas.
- `SelphiConfigurationData` ahora permite parseo directo desde JSON.
- Añadido nuevo inicializador a `RawTemplateController` que acepta `Data`.

### Cambios Estructurales
- Introducido nuevo modo: `SelphiFaceLivenessMode.MOVE`.
- Añadida validación de valores mínimos y máximos en `extractionTimeout`.
- Parámetros de configuración por defecto actualizados:  
  - `showTutorial = true`  
  - `showDiagnostic = true` (requiere `statusComponent`)  
  - `showResultAfterCapture = true`  
  - `debug = false`
- Eliminado fallback a recursos ZIP por defecto.

### Correcciones
- Corregido fallo de inicialización en `RawTemplateController` en ciertos escenarios.
