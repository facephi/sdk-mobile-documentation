# Registro de Cambios de VideoID

## Version 2.6.X
**Última versión: 2.6.0 - 12/02/2026**

### Novedades principales
- Añadido soporte para detección múltiple de rostros.
- Refactorizado `DetectFaceServiceProtocol` para admitir soluciones tanto nativas como basadas en helper.


### Correcciones
- Corregido el literal en portugués para “Cancel”.
- Revertido el uso del servicio Reader y restaurada la implementación legacy con funcionalidades nativas.

---

## Versión 2.5.X  
**Última versión: 2.5.0 – 12/12/2025**

### Actualizaciones Principales
- Actualizada versión minor de core 2.5.0
- Actualizada versión major de SelphID Document's Reader (SDR) 2.0.0
- Refactorizado `ErrorType.TIMEOUT` a `ErrorType.SDK_TIMEOUT`

### Nuevas Funcionalidades
- Nuevos modos (`VideoIdMode.DOCUMENT_FRONT` y `VideoIdMode.DOCUMENT_FRONT_BACK`) para procesos de captura de solo documento.

---

## Versión 2.4.X  
**Última versión: 2.4.1 – 04/11/2025**

### Actualizaciones Principales
- Actualizado y adaptado a los últimos cambios en trackingWidget.
- Actualizada la versión de Core a 2.4.0.
- Actualizada la dependencia SDR a v1.8.0.
- Añadido soporte de trackAssets para IDV.
- Integrado sendVideoIdData para mejorar el flujo de tracking.
- Renombrado matchingSidesScore para mayor claridad.
- Eliminado el enum OcrDiagnostic duplicado.
- Eliminado OCR_ERROR local, ahora se usa el de la librería Core.
- Mejorado el ErrorParser para una mayor precisión en los errores.

### Mejoras de UX y Funcionalidad
- Ajustado el umbral mínimo de tamaño facial para asegurar que la cara se capture correctamente dentro de la máscara, evitando movimientos innecesarios.

### Correcciones
- Corregido el envío de IdvResultData para que solo se realice cuando ocurre un error terminal.
- Corregida la asignación incorrecta de stepData.
- Corregido el manejo general del error NETWORK ERROR.
- Corregido trackeo duplicado de errores.

---

## Versión 2.3.X  
**Última versión: 2.3.23 – 21/10/2025**

### Actualizaciones Principales
- Actualizada dependencia y modelos de Reader para mejorar la captura de documentos.
- Añadida funcionalidad `documentFaceImageMapTokenized`.
- Cambiadas claves `OcrMap` de `0 / 1 → FRONT / BACK`.
- Añadido control `isReadyToRecord` en `RecordingViewModel`.
- Implementado modo `FACE + FRONT`.
- Devuelto `documentFullImage` en los resultados.
- Reducido tamaño y uso de memoria del componente.
- Integración de modelos de Reader.
- Añadido parámetro de configuración `documentQualityThreshold`.
- Implementada lógica de validación ≤ threshold.
- Refactorizados y limpiados métodos internos para mayor claridad.
- Actualizada dependencia de Core a `v2.3.3` y Reader a `v1.9.0`.
- Añadido parámetro de configuración `faceQualityThreshold`.
- Creado `TrackAssetsService` y `GetReaderModelsService` para modularidad.
- Mejorado `DetectDocumentService` y validación OCR.
- Actualizadas constantes y traducciones basadas en Excel.
- Mejoradas animaciones y comportamiento UX.
- Refactorizado sistema de fuentes con `UIFontMetrics`.
- Añadidas dependencias SDR.
- Mejorada precisión de detección en `DocumentReader`.
- Añadida lógica de cambio de lado en capturas multipágina.
- Introducida funcionalidad de captura de documentos con vista superpuesta.
- Integrada primera versión de captura de voz.
- Nuevos eventos y analíticas.
- Añadidos idiomas catalán, portugués (PT/BR) y español.

### Correcciones
- Renombrados `FRONT` y `BACK → Front` y `Back` para coherencia.
- Corregida llamada a `UIViewController` desde hilo en segundo plano en permisos.
- Añadidas referencias `weak self` para evitar fugas de memoria.
- Añido fallback para valores fuera de rango de `documentQualityThreshold`.
- Corregida imagen incorrecta en captura trasera.
- Corregidos errores de literales en modo `ONLY_FACE`.
- Eliminado chequeo obsoleto `iqaReadable` (ahora en Reader).
- Corregidas transiciones de animaciones.
- Corregidas importaciones y problemas de visibilidad.
- Corregido crash al completar captura trasera.
- Bajada versión mínima de iOS de `14 → 13`.
- Corregida lógica de captura de selfie.
- Corregida recuperación de `operationId` desde `operationController`.
- Eliminadas referencias y parámetros obsoletos.
- Corregido error en `Package.swift`.
- Corregida pantalla en blanco por múltiples triggers de navegación.
- Corregidas importaciones y ubicaciones incorrectas.
- Refactorizado `AnalyticsManager → IAnalyticsController`.

---

## Versión 2.2.X  
**Última versión: 2.2.11 – 31/03/2025**

### Actualizaciones Principales
- Añadido parámetro `autoFaceDetection` y lógica del botón de cámara.
- Habilitada selección de cámara y fuentes personalizadas.
- Mejorada barra de progreso y respuesta UX.
- Compatibilidad con Modo Oscuro.
- Gestionado ciclo de vida del delegado `AgoraKit`.
- Añadidas navegaciones de diagnóstico para depuración.
- Refactorizado `VideoIdSteps` para simplificar la UI.
- Actualizada lógica de timeout.
- Añadida configuración de color de imágenes.
- Implementado fallback de 3 segundos en desconexiones.
- Mejorada rotación de imágenes y gestión de StepData.
- Actualizada dependencia Core a `v2.2.0`.
- Añadida detección facial y modo sin tutorial.
- Eliminados recursos no usados y animaciones.
- Actualizados literales para coherencia.

### Correcciones
- Corregido error de configuración `cameraPreferred`.
- Corregidas inconsistencias de UI en pasos específicos.
- Corregidos conflictos de dependencias Core.
- Corregido manejo de `successResponse`.
- Corregido flujo de detección facial y literales de firma.

---

## Versión 2.1.X  
**Última versión: 2.1.2 – 28/08/2024**

### Actualizaciones Principales
- Adaptado a Core `v2.1.X`.
- Añadidos colores, animaciones y etiquetas accesibles personalizadas.
- Ampliada zona de visualización de vídeo.
- Actualizada paleta de colores neutros.

### Correcciones
- Corregido formato de localización.
- Corregida condición de carrera en llamadas de tracking.
- Corregido nombre de animación y gestión de permisos.

---

## Versión 2.0.X  
**Última versión: 2.0.2 – 30/04/2024**

### Actualizaciones Principales
- Actualizados Widget y Constants (`v2.0.0`).
- Añadido Privacy Manifest y recursos `.xcprivacy`.
- Adaptado a Core `v2.0.0`, Agora `v4.3.0` y Lottie `v4.4.0`.
- Refactorizado manejo de errores (vídeo y documento aparecen en logs).
- Añadido comportamiento de reintento tras timeout.

### Correcciones
- Corregida condición de carrera cuando `AgoraKit` no estaba disponible.
- Corregido vídeo en blanco y secuencia incorrecta.
- Corregida inicialización en hilo secundario.
- Corregidos varios errores UX (firma, modo oscuro, permisos).

---

## Versión 1.5.X  
**Última versión: 1.5.11 – 12/03/2024**

### Actualizaciones Principales
- Añadido `SignatureVideoId` y gestión de errores de red.
- Añadido `HapticNotification` y soporte de vibración.
- Actualizada dependencia Starscream y constantes.
- Adaptado a Core `v1.5.6` y refactorizadas configuraciones.
- Actualizada dependencia Core y constantes.
- Añadidas pantallas de diagnóstico y flujo de configuración.
- Mejorada barra de progreso por paso.
- Refactorizada inicialización con JSON.

### Correcciones
- Corregido nombre de paso de tracking.
- Prevenida inicialización nula o vacía de URL/API/Tenant.
- Corregida lógica de timeout y reinicio de firma.
- Corregidos literales y parámetros de payload.
