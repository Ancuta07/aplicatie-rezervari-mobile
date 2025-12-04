import AppNavigator from "./src/AppNavigator";
import { ReservationProvider } from "./src/context/ReservationContext";

export default function App() {
  return (
    <ReservationProvider>
      <AppNavigator />
    </ReservationProvider>
  );
}
