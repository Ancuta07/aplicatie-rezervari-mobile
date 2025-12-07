import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Despre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Despre SalonFinder</Text>

      <Text style={styles.intro}>
        SalonFinder este o aplicație modernă creată pentru a simplifica procesul
        de rezervare la saloanele de înfrumusețare...
      </Text>

      <View style={styles.box}>
        <Text style={styles.subtitle}>Ce oferă aplicația?</Text>
        <Text style={styles.text}>✔️ Listă de saloane cu imagini reale.</Text>
        <Text style={styles.text}>✔️ Filtre după nume, oraș și servicii.</Text>
        <Text style={styles.text}>✔️ Rezervări în câteva secunde.</Text>
        <Text style={styles.text}>✔️ Experiență modernă și ușoară.</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.subtitle}>De ce este o alegere excelentă?</Text>
        <Text style={styles.text}>
          SalonFinder elimină telefoanele și căutările lungi...
        </Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.subtitle}>De ce să folosești SalonFinder? ✨</Text>
        <Text style={styles.text}>💇‍♀️ Găsești rapid saloane de top.</Text>
        <Text style={styles.text}>📍 Filtrare inteligentă.</Text>
        <Text style={styles.text}>🖼️ Prezentare vizuală clară.</Text>
        <Text style={styles.text}>⚡ Rezervare rapidă.</Text>
        <Text style={styles.text}>❤️ Economisești timp.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 16,
  },
  intro: {
    fontSize: 16,
    marginBottom: 20,
    color: "#444",
  },
  box: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 6,
  },
});
