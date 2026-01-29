# Registro de Cambios de NFC

## Versión 2.13.X  
**Última versión: 2.13.4 – 27/01/2026**

### Actualizaciones Principales
- Añadido OCR e imágenes tokenizadas a NfcResult. Los nuevos parámetros son `tokenOcr`, `nfcImages.tokenFacialImage` y `nfcImages.tokenSignatureImage`. **Estos campos solo se informan si se ha [inyectado el TokenizeController en el initSdk(...)](Mobile_SDK.md#322-tokenizecontroller)**
- Añadido soporte IDV
- Añadida gestión del tipo de documento al usar Flows
- Añadido ReadingProgressStyle (DOTS, PERCENTAGE) a NfcConfigurationData
- Actualizada versión minor de core a 2.5.0
- Mejorada la gestión de errores de tracking
- Refactorizado `ErrorType.TIMEOUT` a `ErrorType.SDK_TIMEOUT`

### Correcciones
- Añadido nuevo parámetro de configuración tagSessionTimeout a NfcConfigurationData. Este parámetro es un Int en milisegundos, por defecto 1500. Representa el tiempo que la sesión de tagReader espera hasta que lanza un error de tagConnectionLostTimer
- Algunos documentos (CHL, ESP,...) tienen tiempos de respuesta inusualmente largos para el Paso 1 de PACE y la Autenticación Mutua de BAC (ej. el más largo documentado es de 23s). Hemos eliminado el error TagConnectionLostTimer de esas instrucciones para evitar crear un estado de TagConnectionLost artificial

---

## Versión 2.12.X  
**Última versión: 2.12.0 – 28/10/2025**

### Actualizaciones Principales
- Actualizada la dependencia Core a la versión v2.4.0.
- Mejorada la gestión de datos de tracking para mayor consistencia y fiabilidad.
- Integradas mejoras de accesibilidad en los flujos de tutorial y consejo previo.

### Correcciones
- Corregidos los nombres y transiciones de las animaciones.
- Corregidos los colores de texto en DescriptionTextView.
- Corregidas las animaciones en la secuencia del consejo previo.
- Corregidos los literales mostrados durante la lectura NFC.

---

## Versión 2.11.X  
**Última versión: 2.11.8 – 21/10/2025**

### Actualizaciones Principales
- Actualizado y adaptado SDK Core a `v2.3.3`.
- Refactorizado sistema de fuentes para incluir `UIFontMetrics` con escalado dinámico.
- Añadidos eventos de analítica.
- Añadido override de localización dentro del SDK.
- Mejorado layout de interfaz para dispositivos pequeños.
- Nuevos literales durante la captura del NFC.

### Correcciones
- Integradas mejoras de accesibilidad en tutorial y tips previos.
- Movido `hasOperationCreated` antes de `createStep`.
- Corregido título faltante en alerta de cancelación.
- Corregidas localizaciones en catalán (antes en portugués).
- Movido código sensible al hilo principal (`DispatchQueue.main.async`).
- Corregida configuración de `sdkPrimaryColor` en la primera animación del tutorial.
- Corregidos nombres de animaciones
- Corregido el color en el TextView de descripción
- Corregidas animaciones del tutorial previo

---

## Versión 2.10.X  
**Última versión: 2.10.7 – 14/03/2025**

### Actualizaciones Principales
- Actualizado OpenSSL a `1.1.2301` para compatibilidad con Privacy Manifest.
- Alineados valores con la versión Android.
- Añadido estilo negrita a literales.
- Habilitado parámetro `showPrevious`.
- Actualizado Core a versión `v2.2.2`.
- Añadidas fuentes personalizadas y colores para Modo Oscuro.
- Ajustado timeout (`50000 → 58000 ms`).
- Configurado `SkipSecureElements` como privado y verdadero.
- Añadidos métodos para colores e imágenes personalizadas.
- Actualizado SDK Core a `v2.2.0`.
- Añadido soporte para personalización de animaciones.
- Movida lógica redundante a la capa Core.
- Añadidas flechas y títulos en las tips del tutorial.

### Correcciones
- Corregido `NO_DATA_ERROR` al iniciar desde Flow.
- Mejorada consistencia UX y colores de botones.
- Corregidos fondos rosados en animaciones.
- Corregidos errores de seguimiento StepData en pantallas compartidas.
- Corregidas animaciones y literales para iPhone 15.
- Añadido `autorotate = false` para prevenir orientación horizontal.
- Resuelto error de parseo JSON en `skipSecureElements`.
- Corregida superposición de animaciones en pantallas pequeñas.
- Actualizados varios literales.

---

## Versión 2.9.X  
**Última versión: 2.9.2 – 29/08/2024**

### Actualizaciones Principales
- Añadidas nuevas animaciones y literales para iPhone 15.
- Añadido soporte para `CommonCustomization` y `ThemeFlow`.
- Actualizado Core a `v2.1.0` y adaptados cambios.
- Mejorada accesibilidad, animaciones Lottie y colores personalizados.
- Añadidos nuevos parámetros en `NfcConfigurationData` (`extractFacialImage`, `extractSignatureImage`).

### Correcciones
- Corregida altura del campo de texto modal y animaciones del tutorial.
- Eliminadas animaciones obsoletas de Android.
- Optimizados valores por defecto y manejo de sesión.

---

## Versión 2.8.X  
**Última versión: 2.8.4 – 31/05/2024**

### Actualizaciones Principales
- Creado flujo de “Tips Previos” no saltable cuando `showTutorial = true`.
- Añadidas nuevas animaciones, colores y literales para mejorar UX.
- Introducido `isButtonNotPressed` para gestionar enfriamiento del botón de inicio.
- Reinicio de captura en `tagConnectionLost`.
- Añadido `tagConnectionLostTimer` para sesiones bloqueadas.
- Actualizada internacionalización y deshabilitado botón de inicio NFC durante bloqueo.
- Actualizadas dependencias y adaptado a Core `v2.0.0`.
- Añadido soporte para Privacy Manifest y OpenSSL `3.1.5000`.
- Mensajes personalizados para iOS ≥17.4.
- Mejorada gestión de sesión (`isActive` antes de escaneo).
- Añadida propiedad estática `NfcController.isAvailable`.

### Correcciones
- Revertida dependencia OpenSSL (`3.1.5000 → 1.1.1100`) por fallos en PACE.
- Sustituidas listas maestras por `masterList.pem` unificado.
- Resuelto duplicado `ActiveAuthentication`.
- Mejorado parseo JSON en `NfcConfigurationData`.

---

## Versión 2.7.X  
**Última versión: 2.7.10 – 13/03/2024**

### Actualizaciones Principales
- Adaptado a Core `v1.5.6–v1.5.8`.
- Añadida integración con componente de estado, flujo diagnóstico y control de timeout.
- Refactorizados modelos `NfcResult` y mejorado manejo de errores.
- Añadido tutorial con animaciones, traducciones al catalán y navegación mejorada.
- Añadido nuevo tipo de error: `TagConnectionLost`.
- Actualizado manejo de extracción de MasterList.

### Correcciones
- Gestionadas claves MRZ inválidas y textos truncados en tutorial.
- Mejorada lógica de fallback.
- Corregida clave literal `nfc_component_cancel`.

---

## Versión 2.5.X  
**Última versión: 2.5.6 – 14/09/2023**

### Actualizaciones Principales
- Añadidos nuevos parámetros a `NfcConfigurationData` (`skipPace`, `dataGroups`).
- Actualizada versión mínima de iOS a 13.
- Añadidas traducciones al catalán.
- Añadidos literales personalizables y mejoras en UI de carga.
- Añadido soporte para `BehaviorComponent` y adaptación al SDK `1.4.0`.

### Correcciones
- Corregido error `InvalidMRZ` cuando el número de documento era menor a 9 caracteres.
- Resueltos errores de mapeo OCR, seguimiento `NFC_WIDGET` y comprobaciones MRZ.

---

## Versión 2.4.X  
**Última versión: 2.4.2 – 10/05/2023**

### Actualizaciones Principales
- Cambiado formato de fechas en configuración.
- Downgrade de OpenSSL a `1.1.1100` para compatibilidad híbrida.
- Convertido módulo en Componente, integrando `LicenseChecker` internamente.
- Refactorizado `PassportReader` y restringido acceso público innecesario.
