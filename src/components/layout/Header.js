import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const sfLogo = require("../../../assets/images/sf1.png");

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={sfLogo} style={styles.logo} />
        <View style={styles.titleWrapper}>
          <Text style={styles.titleTop}>Salon</Text>
          <Text style={styles.titleBottom}>Finder</Text>
        </View>
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

        <Pressable onPress={() => navigation.navigate("Harta")}>
          <Text style={styles.link}>Hartă</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    elevation: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 42,
    height: 42,
    borderRadius: 10,
    marginRight: 8,
  },

  titleWrapper: {
    flexDirection: "column",
    justifyContent: "center",
  },

  titleTop: {
    fontSize: 18,
    fontWeight: "700",
    color: "#7a57d1",
    lineHeight: 20,
  },

  titleBottom: {
    fontSize: 22,
    fontWeight: "900",
    color: "#7a57d1",
    lineHeight: 22,
    marginTop: -3,
  },

  nav: {
    flexDirection: "row",
    alignItems: "center",
    gap: 22, // spațiu între butoane
  },

  link: {
    fontSize: 16,
    fontWeight: "600",
    color: "#7a57d1",
  },
});
