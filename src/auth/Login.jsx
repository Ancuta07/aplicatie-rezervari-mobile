import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet, Text } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase/firebaseConfig";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email || !password) {
      return Alert.alert(
        "Atenție",
        "Vă rugăm să introduceți email-ul și parola."
      );
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email.trim(),
        password
      );
    } catch (e) {
      let msg = "Autentificare eșuată.";

      if (
        e.code === "auth/invalid-credential" ||
        e.code === "auth/wrong-password" ||
        e.code === "auth/user-not-found"
      ) {
        msg = "Email sau parolă greșită. Verificați credențialele.";
      } else if (e.code === "auth/invalid-email") {
        msg = "Formatul email-ului este invalid.";
      } else {
        msg = e.message;
      }

      Alert.alert("Eroare", msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
        editable={!loading}
      />

      <TextInput
        placeholder="Parola"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        style={styles.input}
        editable={!loading}
      />

      {loading ? (
        <Text style={styles.loadingText}>Se autentifică...</Text>
      ) : (
        <>
          <Button title="Login" onPress={login} />
          <View style={{ height: 10 }} />
          <Button
            title="Creează cont"
            onPress={() => navigation.navigate("Signup")}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  loadingText: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    color: "#007AFF",
  },
});
