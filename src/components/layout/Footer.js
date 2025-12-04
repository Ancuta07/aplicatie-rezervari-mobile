import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        © {new Date().getFullYear()} SalonFinder. Toate drepturile rezervate.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#eee",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: "#555",
  },
});
