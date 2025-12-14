import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { useContext } from "react";

import { AuthContext } from "./context/AuthContext";

// PAGES
import Despre from "./pages/Despre";
import Harta from "./pages/Harta";
import Rezervari from "./pages/Rezervari";
import Saloane from "./pages/Saloane";

// AUTH
import Login from "./auth/Login";
import Signup from "./auth/SignUp";

// LAYOUT
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const Stack = createNativeStackNavigator();

/* ================= AUTH STACK ================= */
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

/* ================= APP STACK ================= */
function AppStack() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Harta" component={Harta} />
            <Stack.Screen name="Saloane" component={Saloane} />
            <Stack.Screen name="Rezervari" component={Rezervari} />
            <Stack.Screen name="Despre" component={Despre} />
          </Stack.Navigator>
        </View>

        <Footer />
      </View>
    </SafeAreaView>
  );
}

/* ================= MAIN NAV ================= */
export default function AppNavigator() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
