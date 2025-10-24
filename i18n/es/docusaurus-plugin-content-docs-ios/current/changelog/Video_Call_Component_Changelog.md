# Registro de Cambios de VideoCall

## Versión 2.3.X  
**Última versión: 2.3.7 – 21/10/2025**

**Actualizaciones principales**
- Reducido el peso del componente.
- Mejorado el rendimiento durante screen sharing.
- Actualizada dependencia Core a v2.3.3.
- Mejora y revisión de la UX/UI.

**Correcciones**
- Solucionado el problema de silencio durante compartir pantalla.

---

### VideoCall 2.3.3 – 09/06/2025
- Actualizada dependencia Core a v2.3.2.

---

### VideoCall 2.3.2 – 06/05/2025
**Actualizaciones**
- Refactor tipográfico con soporte para escalado dinámico (UIFontMetrics).

**Correcciones**
- Reordenada la comprobación de `hasOperationCreated`.
- Asegurada ejecución de `fromNib` en hilo principal.
- Refactor de AnalyticsManager → IAnalyticsController.

---

### VideoCall 2.3.0 – 27/03/2025
**Actualizaciones principales**
- Integración de Analytics en el SDK.
- Adaptado a Core v2.3.0.
- Unificación visual y funcional con Android.
- Añadidos idiomas: catalán y portugués (PT/BR).
- Idioma configurado automáticamente desde `initSdk()`.

**Refactorizaciones**
- Eliminadas vistas no utilizadas y mejoradas pantallas locales.

---

## Versión 2.2.X

### VideoCall 2.2.5 – 29/01/2025
**Actualizaciones**
- Actualización de Core.
- Añadidas fuentes personalizadas y botón de cambio de cámara.
- Ajustes visuales de iconografía y colores.

**Correcciones**
- Arreglado error en timeoutDispatcher.
- Eliminadas restricciones redundantes.

---

### VideoCall 2.2.3 – 28/11/2024
**Actualizaciones**
- Añadida pantalla de reintento y lógica de recuperación.
- Añadido finish call cuando el agente abandona.
- Añadida configuración de color de imagen.
- Timeouts alineados con Android.

**Correcciones**
- Arreglado problema de Tracking StepData en screen sharing.
- Corrección al llamar `dismiss()` al reintentar.
- Evitada marcación de éxito incorrecta.

---

### VideoCall 2.2.0 – 01/10/2024
**Actualizaciones**
- Actualizada dependencia Core a v2.2.0.
- Cambio breaking: `extensionName` → `extensionIdentifier`.

**Correcciones**
- Corregidos casos faltantes en switch.
- Arreglado crash al presentar diagnósticos tras cierre.
- Asegurado `agoraKit.disableAudio()` antes de grabar.

---

## Versión 2.1.X

### VideoCall 2.1.3 – 28/08/2024
**Actualizaciones**
- Añadida CommonCustomization y themeFlow.
- Añadido control de shareScreen.
- Añadidas animaciones, colores e iconos accesibles.
- Añadidos timeouts.
- Adaptado a Core v2.1.X.

**Correcciones**
- Corregido comportamiento en pantalla de permisos.
- Bloqueado modo horizontal.
- Corregidos errores de navegación y plantilla.

---

## Versión 2.0.X

### VideoCall 2.0.1 – 30/04/2024
- Añadido Privacy Manifest.
- Adaptado a Core v2.0.0.
- Actualizado Agora 4.3.0 y Lottie 4.4.0.

**Correcciones**
- Corregido origen del appId.
- Corregido icono de cierre.

---

## Versión 1.5.X

### VideoCall 1.5.9 – 12/03/2024
**Actualizaciones**
- Adaptado a Core v1.5.8.
- Mejora en permisos de cámara y diagnósticos.

**Nuevas funcionalidades**
- Nuevos eventos en VideoCallController.
- Integración con StatusController.
- Añadidas vibración y haptics.
- Validación de red.

**Cambios estructurales**
- Control de rangos para extractionTimeout.

**Correcciones**
- Manejo de parámetros nulos o vacíos.

---

### VideoCall 1.5.0 – 14/11/2023
- Controlador ahora extiende IFlowableController.
- Adaptado al nuevo sistema de gestión de errores.
