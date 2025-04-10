import React, { useRef, useEffect } from "react";
import { View, Text, Animated, StyleSheet, Dimensions } from "react-native";
import Logo from "./Logo";

const { width, height } = Dimensions.get("window");

export default function SplashScreen() {
  const bookPosition = useRef(new Animated.Value(height * 0.7)).current; // Comienza fuera de la pantalla
  const textPosition = useRef(new Animated.Value(0)).current; // Posición inicial del texto

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(bookPosition, {
          toValue: height * 0.1, // Sube hasta su posición final
          duration: 1500,
          easing: (t) => 1 - Math.pow(1 - t, 3),
          useNativeDriver: true,
        }),
        Animated.timing(textPosition, {
          toValue: -50, // El texto se eleva suavemente
          duration: 1500,
          easing: (t) => 1 - Math.pow(1 - t, 3),
          useNativeDriver: true,
        }),
      ]).start();
    }, 1000); // Espera 1 segundo antes de animar
  }, []);

  return (
    <View style={styles.container}>
      {/* Texto ya visible desde el inicio, más arriba */}
      <Animated.Text
        style={[styles.title, { transform: [{ translateY: textPosition }] }]}
      >
        StudyFlow
      </Animated.Text>

      {/* Logo debajo del texto, oculto al inicio */}
      <Animated.View
        style={[
          styles.logoContainer,
          { transform: [{ translateY: bookPosition }] },
        ]}
      >
        <Logo size={width * 0.6} color="#007AFF" />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: width * 0.18, // Texto más grande
    fontWeight: "bold",
    position: "absolute",
    top: "35%", // Más arriba
  },
  logoContainer: {
    position: "absolute",
  },
});
