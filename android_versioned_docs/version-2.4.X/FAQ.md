# FAQ

### When synchronising the project, it does not resolve the dependencies and a 403 appears in the components.

1. Check the device connection.
2. Check if you have correctly configured the <strong>TOKEN and
   USER</strong> of the Facephi repository in Gradle.
3. Check the version of the embedded components
4. Perform <strong>Invalidate Cache &amp; Restart</strong>
5. Try again

<br></br>

### How do I fix the "Failed to transform bcprov-jdk18on-1.78.jar" error due to unsupported major class version 65?

The error indicates that the bcprov-jdk18on-1.78.jar library was compiled using Java 17, which is incompatible with your project's current configuration or environment. To resolve this issue, you have several options:

1. Update the JDK: Ensure you are using Java 17 or higher. Update the JDK and configure Android Studio to use this version under File > Project Structure > SDK Location.

2. Configure compilation compatibility in Gradle:Add or adjust the following lines in your build.gradle file to specify the Java version:

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

3. Verify and adjust the configuration of the Android Gradle Plugin (AGP) and JDK:
Ensure that your AGP and JDK are correctly configured to support the Java version you require.

After making any changes, perform a clean and rebuild of the project with ./gradlew clean build to ensure all settings take effect.

<br></br>

#### If any other problems occur, please contact the support team so that we can help you.
