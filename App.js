import AppNavigator from "./src/AppNavigator";
import { ReservationProvider } from "./src/context/ReservationContext";

// 🔹 importăm SafeAreaView + provider
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ReservationProvider>
          <AppNavigator />
        </ReservationProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
