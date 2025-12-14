import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase/firebaseConfig";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      return Alert.alert("Eroare", "Completează toate câmpurile.");
    }

    if (password !== confirmPassword) {
      return Alert.alert("Eroare", "Parolele nu coincid.");
    }

    if (password.length < 6) {
      return Alert.alert(
        "Eroare",
        "Parola trebuie să aibă minim 6 caractere."
      );
    }

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email.trim(),
        password
      );
      Alert.alert("Succes", "Contul a fost creat cu succes!");
    } catch (error) {
      let msg = "A apărut o eroare la înregistrare.";

      if (error.code === "auth/email-already-in-use") {
        msg = "Acest email este deja asociat unui cont existent.";
      } else if (error.code === "auth/invalid-email") {
        msg = "Email invalid. Verificați formatul.";
      } else if (error.code === "auth/weak-password") {
        msg =
          "Parola este prea slabă. Alegeți o parolă mai sigură (minim 6 caractere).";
      } else {
        msg = error.message;
      }

      Alert.alert("Înregistrare eșuată", msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Creează cont</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
        editable={!loading}
      />

      <TextInput
        placeholder="Parolă"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        editable={!loading}
      />

      <TextInput
        placeholder="Confirmă parola"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
        editable={!loading}
      />

      <TouchableOpacity
        style={[styles.button, loading && styles.disabled]}
        onPress={handleSignup}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Se creează..." : "Înregistrează-te"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Ai deja cont? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  disabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  link: {
    marginTop: 16,
    textAlign: "center",
    color: "#007AFF",
  },
});
