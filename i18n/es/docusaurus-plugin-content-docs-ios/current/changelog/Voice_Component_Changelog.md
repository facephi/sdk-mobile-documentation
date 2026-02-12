# Registro de Cambios de VoiceID

## Version 2.6.X

**Última versión: 2.6.0 - 12/02/2026**

### Novedades principales
- Modificados los literales de VoiceOver.

---

## Versión 2.5.X  
**Última versión: 2.5.0 – 12/12/2025**

### Actualizaciones Principales
- Actualizada versión minor de core 2.5.0
- Refactorizado `ErrorType.TIMEOUT` a `ErrorType.SDK_TIMEOUT`

---

## Version 2.4.X    
**Última versión: 2.4.0 – 24/11/2025**

### Actualizaciones Principales
- Actualizada la versión del SDK a 5.3.0.
- Añadido ErrorParser con un manejo de errores mejorado y diagnósticos más detallados.
- Actualizada la dependencia Core a la versión v2.4.0.
- Marcado el proceso de matching como obsoleto — el matching local ya no está soportado.

### Mejoras de UX
- Revisión general de la UX para mayor coherencia en el diseño y mejora de accesibilidad.

### Correcciones
- Corregida la asignación incorrecta de stepData.
- El evento de tracking que informaba sobre el diagnóstico de error estaba siendo duplicado.

---

## Versión 2.3.X  
**Última versión: 2.3.6 – 21/10/2025**

### Actualizaciones Principales
- Actualizada dependencia Core a v2.3.3.
- Refactorizado sistema de fuentes para integrar UIFontMetrics y escalado dinámico.
- Añadida integración con Analytics y mejora de eventos de seguimiento.
- Corregida incompatibilidad de versión de Lottie para mayor estabilidad.
- Añadido registro de información del componente durante la inicialización.
- Actualizada versión del SDK de Voz.
- Unificados atributos y valores con la implementación de Android.
- Añadido control de tip previo y corregido comportamiento del feedback háptico.
- Reemplazado uso redundante de String.data.

### Correcciones
- Corregido orden de hasOperationCreated (movido antes de createStep).
- Refactorizado AnalyticsManager → IAnalyticsController para coherencia con otros componentes.

---

## Versión 2.2.X  
**Última versión: 2.2.7 – 29/01/2025**

### Actualizaciones Principales
- Actualizada dependencia Core y añadido soporte de colores para Modo Oscuro.
- Parametrizada configuración minSpeechLength.
- Añadido soporte para personalización de color de imágenes.
- Incluidos logs y chequeos de uso de micrófono.
- Añadido comportamiento de advertencia para MultipleSpeakers cuando enableQualityCheck = false.
- Actualizada dependencia Voice SDK a v4.1.0.
- Añadido soporte para animaciones personalizadas.
- Refactorizada lógica de tutoriales (ahora basada en flujo por estado).

### Refactorizaciones
- Refactorizados timeouts y simplificado manejo de dismiss (solo en retryAction).

### Correcciones
- Corregida navegación inválida en errores TIMEOUT.
- Corregido comportamiento al cancelar y reiniciar grabación.
- Corregido error de Tracking StepData durante pantallas compartidas.
- Eliminada clase pública redundante VoiceEnvironment.
- Corregido error en PrivacyInfo.xcprivacy.

---

## Versión 2.1.X  
**Última versión: 2.1.1 – 28/07/2024**

### Actualizaciones Principales
- Adaptado a Core v2.1.X y actualizadas dependencias.
- Añadidos eventos de tracking encadenados.
- Establecido showTutorial = true por defecto.
- Actualizada paleta de colores neutros y constantes.
- Añadidos nuevos Lotties, etiquetas accesibles y tags.
- Aumentado target mínimo de iOS de 11 → 13.
- Añadida personalización de color y tinte para iconos.
- Añadido parámetro de configuración enableCheckQuality.
- Añadidas frases a la configuración de entorno.

### Refactorizaciones
- Eliminado código y extensiones duplicadas o no utilizadas.
- Usados métodos de Core para evitar redundancias.
- Mejorada integración de accesibilidad.

### Correcciones
- Corregidos problemas de permisos y reproducción de audio.
- Forzada ejecución de UIView.fromNib en el hilo principal para evitar errores de concurrencia.

---

## Versión 2.0.X  
**Última versión: 2.0.3 – 17/05/2024**

### Actualizaciones Principales
- Añadido Privacy Manifest y actualizada dependencia Core a v2.0.0.
- Actualizadas constantes.
- Adaptado a Agora 4.3.0 y Lottie 4.4.0.
- Actualizado VoiceEnrollmentResult.swift.

### Correcciones
- Corregido momento de visualización de la frase (antes aparecía antes de la animación).
- Añadido reintento en caso de timeout.
- Corregido manejo de callbacks y secuencia de parada de grabación.
- Corregida ubicación de PrivacyInfo.

---

## Versión 1.5.X  
**Última versión: 1.5.9 – 14/03/2024**

### Actualizaciones Principales
- Grandes cambios funcionales y de UI.
- Adaptado a Core v1.5.8.
- Mejorada interacción del usuario y respuesta del flujo.
- El controlador ahora extiende IFlowableController.
- Añadido IStatusController para gestión centralizada del estado.
- Añadidos parámetros de configuración showDiagnostic y vibrationEnabled.
- Actualizado FPHIVoiceSDK a v3.13.0.

### Nuevas Funcionalidades y Estructuras
- Añadidos nuevos eventos de plataforma a VoiceIdController.
- Timeout por defecto cambiado de 60000 → 30000 ms.
- Añadidas notificaciones hápticas.
- Mejorada UI con ajustes de color y rediseño de RecorderView.
- Movido startRecording de viewWillAppear → viewDidLoad.
- Añadidos controles para valores mínimos/máximos de extractionTimeout.

### Correcciones
- Adaptado al nuevo Sistema de Gestión de Errores.
