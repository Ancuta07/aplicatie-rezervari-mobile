import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Despre from "./pages/Despre";
import Rezervari from "./pages/Rezervari";
import Saloane from "./pages/Saloane";

import { StyleSheet, View } from "react-native";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* HEADER GLOBAL */}
        <Header />

        {/* PAGINI */}
        <View style={styles.content}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Saloane" component={Saloane} />
            <Stack.Screen name="Rezervari" component={Rezervari} />
            <Stack.Screen name="Despre" component={Despre} />
          </Stack.Navigator>
        </View>

        {/* FOOTER GLOBAL */}
        <Footer />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
