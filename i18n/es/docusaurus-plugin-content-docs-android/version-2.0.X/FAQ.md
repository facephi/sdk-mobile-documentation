# FAQ

### Cuando se sincroniza el proyecto, no se resuelven las dependencias y aparece un 403 en los componentes.

1. Verifica la conexión del dispositivo.
2. Comprueba si has configurado correctamente el <strong>TOKEN y
   USER</strong> del repositorio de Facephi en Gradle.
3. Verifica la versión de los componentes integrados
4. Realiza <strong>Invalidate Cache &amp; Restart</strong>
5. Intenta de nuevo

<br></br>

### ¿Cómo corrijo el error "Failed to transform bcprov-jdk18on-1.78.jar" debido a la incompatibilidad de la versión de la clase mayor 65?

El error indica que la biblioteca bcprov-jdk18on-1.78.jar fue compilada con Java 17, incompatible con la configuración actual de tu proyecto o entorno. Para resolver este problema, tienes varias opciones:

1. Actualizar el JDK: Asegúrate de que estás utilizando Java 17 o superior. Actualiza el JDK y configura Android Studio para usar esta versión en File > Project Structure > SDK Location.

2. Configurar compatibilidad de compilación en Gradle: Añade o ajusta las siguientes líneas en tu archivo build.gradle para especificar la versión de Java:

```java
android {
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_17
        targetCompatibility JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
}

```

3. Verificar y ajustar la configuración del Android Gradle Plugin (AGP) y JDK: Asegúrate de que tu AGP y JDK estén correctamente configurados para soportar la versión de Java que requieres.

Después de realizar cualquier cambio, realiza una limpieza y reconstrucción del proyecto con ./gradlew clean build para asegurarte de que todos los ajustes tengan efecto.

<br></br>

#### Si surgen otros problemas, ponte en contacto con el equipo de asistencia para que podamos ayudarte.
