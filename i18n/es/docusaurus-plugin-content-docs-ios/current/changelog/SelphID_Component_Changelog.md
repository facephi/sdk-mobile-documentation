# Registro de Cambios de SelphID

## Versión 2.6.X
**Última versión: 2.6.0 - 12/02/2026**

### Actualizaciones principales
- Actualizada la dependencia Core y refactorizado TIMEOUT a SELPHID_TIMEOUT(UIImage?, UIImage?). Esas dos imágenes no serían nulas si se detecta un ataque de inyección.
- Actualizado `SelphIDWidget` a la versión `1.37.0`.

---

## Version 2.5.X  
**Última versión: 2.5.1 - 28/01/2026**

### Actualizaciones Principales
- Actualizada versión de la dependencia SelphIDWidget v1.36.3
- Actualizada versión minor de core 2.5.0

### Nuevas Funcionalidades
- Tras la captura correcta de documento, se persisten varios parámetros en el "Flow" para así poder usarlos de input en el lector de documentos de NFC.

---

## Versión 2.4.X  
**Última versión: 2.4.3 - 12/11/2025**

### Actualizaciones Principales
- Actualizada la dependencia SelphIDWidget a la versión v1.35.2.
- Añadida versión del widget con funcionalidad completa de personalización.
- Añadido setParam para UseSdkCustomization en el widget.
- Adaptado a los cambios en resultData introducidos por trackingWidget v1.1.23.
- Configurado generateRawImages para que sea true por defecto.

### Refactorizaciones
- Forzada la bandera de inicialización para devolver siempre true, garantizando un flujo de configuración consistente.

### Correcciones
- Corregida asignación incorrecta de stepData.
- Corregido el comportamiento cuando generateRawImages se recibía como null.
- Corregido un crash mientras se hace una captura de documento ARG con MBSDR.

## Versión 2.3.X  
**Última versión: 2.3.23 – 21/10/2025**

### Actualizaciones Principales
- Actualizado SelphIDWidget a la versión `1.35.0`.
- Actualizado Core a la versión `2.3.3`.
- Eliminadas variables duplicadas en scripts de acción.
- Actualizadas arquitecturas del simulador MBSDR para soportar `arm64`.
- Añido nuevo flavor de configuración de build.
- Creado workspace, proyecto y target para MBSDR.
- Creado esquema MBSDR para pruebas y builds optimizadas.
- Actualizada versión estable de SelphIDWidget solucionando errores previos.
- Unificada convención de nombres XCFramework (`selphidComponent.xcframework`).
- Refactorizado `AnalyticsManager` (revertible) y optimizado `analyticsOutput`.
- Las imágenes procesadas ahora se codifican en JPEG con 95% de calidad.
- Añadidas pruebas y seguimiento de vídeos para flujos IDV.
- Automatizada inclusión de recursos durante publicación.
- Eliminado parámetro `locale` de `SelphiConfigurationData` (ahora derivado de `initSdk()`).
- Añadido `Package-RGL-template.swift` para distribución SPM del componente SelphIDRGL.
- Añadido soporte SPM para builds RGL e integración de analítica.
- Añadido parseo de `licenseManager`, filtrado de respuesta y mejora de localización.
- Renombrada estructura `AllowedProductLicenseValues`.
- Idioma por defecto ahora coincide con el del dispositivo.

### Correcciones
- Corregidos nombres de literales y animaciones.
- Corregido error tipográfico en Podfile y eliminado `arch_sim arm64` para evitar conflictos de build.
- Revertido refactor de analítica por regresiones.
- Corregida tasa de compresión de imágenes.
- Ajustada posición de `hasOperationCreated` para orden correcto.
- Corregidos valores enum y funcionalidad de filtrado.
- Refactorizado `AnalyticsManager → IAnalyticsController`.
- Corregidas inconsistencias de configuración y errores de setup.

---

## Versión 2.2.X  
**Última versión: 2.2.12 – 29/01/2025**

### Actualizaciones Principales
- Actualizada dependencia de Core a `v2.2.2`.
- Actualizado SelphIDWidget de `v1.31.0 → v1.31.2`.
- Eliminadas dependencias redundantes ya definidas en Podspec.
- Actualizado SelphIDWidget a `v1.30.1` y `v1.30.0`.
- Añadidos Lotties accesibles para mejorar la interacción del usuario.
- Añadido flag `dismissViewController` y refactorizado flujo de navegación.
- Introducido nuevo producto MLRGL y workspace.
- Actualizado Core a `v2.2.1`.
- Añadidos parámetros VISA para escenarios de verificación avanzada.
- Actualizado Widget `v1.27.2 → v1.28.1`.
- Actualizado SDR a `v0.32.2` para optimización de rendimiento.
- Actualizado SelphIDWidget a `v1.27.1`.
- Actualizado Widget a `v1.27.0`.
- Mapeado `TVeryLong → VERY_LONG`.
- Mapeado `selphIDResult.statistics` para seguimiento avanzado en modo demo.
- Refactorizada vista de tutorial para mostrar solo el botón de información.
- Refactorizadas animaciones para soporte de personalización completa.
- Actualizada dependencia de Core a `v2.2.0`.
- Añadida configuración de flujo solo tutorial.

### Correcciones
- Corregida referencia del puntero `MLRGL`.
- Corregido error de seguimiento StepData durante compartición de pantalla.
- Actualizado Widget a versión `v1.28.2`.

---

## Versión 2.1.X  
**Última versión: 2.1.4 – 04/09/2024**

### Actualizaciones Principales
- Actualizado SelphID a versión `1.26.X`.
- Creado `SelphIDRGLComponent` distribuido vía Pods.
- Añadido `CommonCustomization` y refactor de colores.
- Introducida nueva animación de salud y literales accesibles.
- Actualizado Widget a `v1.25.1` y constantes a `v2.0.10`.
- Adaptado a Core `v2.1.X` y mejorada estabilidad de `SignatureProof`.
- Garantizado que todas las llamadas al Widget se ejecuten en el hilo principal.
- Añadida visualización de la pista de tutorial anterior.

### Correcciones
- Corregida jerarquía de `diagnosticViewController`.
- Corregida lógica de captura, errores de compilación y nombres Lottie.
- Corregido modo de vida “MOVE”.

---

## Versión 2.0.X  
**Última versión: 2.0.9 – 17/06/2024**

### Actualizaciones Principales
- Actualizado SelphIDWidget (`v1.24.3 – v1.25.0`).
- Añadido mecanismo de reintento ante timeout.
- Añadida accesibilidad para imágenes frontal y trasera tras timeout.
- Actualizadas constantes a `v2.0.6`.
- Actualizadas dependencias en Podfile.
- Actualizado DocumentReader a `v7.1.X`.
- Añadido soporte para Privacy Manifest.
- Actualizado FPhiSelphIDWidgetiOSSim a `v1.23.3`.
- Revisión y mejora UX general.

### Correcciones
- Corregido manejo de permisos en dispositivos específicos.
- Sustituida referencia selphidwidgetiosSim por selphidwidgetios.
- Corregida localización por defecto y rutas de recursos.
- Ajustada frecuencia del tutorial.
- Añadido nuevo mensaje instructivo.

---

## Versión 1.5.X  
**Última versión: 1.5.14 – 12/03/2023**

### Actualizaciones Principales
- Adaptado a Core `v1.5.8`.
- Mejorada integración con FPhiSelphIDWidgetiOSSim.
- Añadido soporte completo `arm64` y `arm64-simulator`.
- Añadidos nuevos eventos de plataforma a `SelphidController`.
- Introducido control de valores mínimo y máximo de `extractionTimeout`.
- Eliminado fallback a recursos ZIP.
- Actualizado FPhiSelphIDWidgetiOSSim a versión `1.23.2`.

### Correcciones
- Corregido manejo de errores al producirse `CANCEL_BY_USER` con `showDiagnostic == true`.
