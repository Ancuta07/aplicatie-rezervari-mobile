import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

// Import corect imagine
const sfLogo = require("../../../assets/images/sf1.png");

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <Image source={sfLogo} style={styles.logo} />
        <Text style={styles.logoTitle}>SalonFinder</Text>
      </View>

      <View style={styles.nav}>
        <Pressable onPress={() => navigation.navigate("Saloane")}>
          <Text style={styles.link}>Saloane</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Rezervari")}>
          <Text style={styles.link}>Rezervări</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Despre")}>
          <Text style={styles.link}>Despre</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  logoTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  nav: {
    flexDirection: "row",
    gap: 20,
  },
  link: {
    fontSize: 16,
    fontWeight: "600",
    color: "#7a57d1",
  },
});
