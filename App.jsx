import AppNavigator from "./src/AppNavigator";
import { ReservationProvider } from "./src/context/ReservationContext";

// 🔹 importăm SafeAreaView + provider
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AuthProvider>
          <ReservationProvider>
            <AppNavigator />
          </ReservationProvider>
        </AuthProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
