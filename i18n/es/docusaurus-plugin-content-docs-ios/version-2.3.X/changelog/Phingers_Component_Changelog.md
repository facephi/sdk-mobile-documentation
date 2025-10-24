# Registro de Cambios de Phingers

## Versión 2.3.X  
**Última versión: 2.3.12 – 21/10/2025**

### Actualizaciones Principales
- Añadida información de plantilla a la estructura del resultado para procesamiento posterior.
- Introducido soporte para imágenes de “slap” (captura de múltiples dedos).
- Actualizado el analizador de datos para mejorar la consistencia de resultados entre operaciones.
- Actualizada dependencia Core a v2.3.3.
- Añadidos nuevos modos de mano para ampliar las capacidades de escaneo.
- Integradas nuevas animaciones Lottie para mejorar la experiencia del usuario.
- Refactorizado el sistema de fuentes para integrar UIFontMetrics y permitir escalado dinámico.
- Añadidas dependencias AirSnapUI e incluido Storyboard en el paquete.
- Añadidos templateType y nuevas acciones en el flujo de captura.
- Actualizados LivenessScore.swift y FingerCaptureViewController.swift.
- Implementado manejo completo de localización (getLocale()), añadiendo Catalán (ca.lproj) y Portugués (pt-BR).
- Actualizadas y corregidas dependencias TF y Lottie.
- Añadidos modos fingerFilter, ALL_4 y ALL_5 en resultados para mejorar los reportes.
- Creado componente SPM e integración inicial de demo.

### Refactorizaciones y UX
- Revisiones de UX y ajustes de diseño para una guía visual más clara.
- Refactor menor en PhingersError para mejorar la trazabilidad de errores.
- Mejorada la estabilidad en iPad (corregido crash al reanudar sesiones de captura).
- Renombrado PhingersTF → Phingers.
- Refactorizados extractionTimeout, fingerFilter y manejo de orientación.
- Añadidas propiedades de sonar y documentación interna mejorada.
- Limpieza de código y reactivación de validaciones fundamentales (operación y licencia).
- Actualizado esquema de colores, normalización de resultados y lógica de LivenessScore.

### Correcciones
- Corregido Error 2300 (SM-5770) relacionado con la decodificación de resultados.
- Corregida detección de uñas (SM-5772) mejorando la precisión en la detección de límites de dedos.
- Corregida detección errónea de objetos (SM-5774) dentro del área de captura.
- Corregidos problemas de UI en orientación horizontal.
- Corregida referencia XCF faltante en el Podspec de plantilla.
- Corregido mensaje de “Previous Tip” que mostraba la mano incorrecta (“mano izquierda”).
- Corregidos errores de distribución de dependencias de terceros en el pipeline.
- Corregidos problemas con simulador arm64 y bajada de swift-tools-version a 5.5 para compatibilidad.
