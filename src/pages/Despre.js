import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Despre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Despre SalonFinder</Text>

      <Text style={styles.intro}>
        SalonFinder este o aplicație modernă creată pentru a simplifica procesul
        de rezervare la saloanele de înfrumusețare. Indiferent că ai nevoie de
        un tuns, un masaj, un tratament facial sau o programare rapidă la
        manichiură, platforma îți oferă acces instant la cele mai bune saloane
        din orașul tău.
      </Text>

      <View style={styles.box}>
        <Text style={styles.subtitle}>Ce oferă aplicația?</Text>

        <Text style={styles.text}>
          ✔️ O listă selectată de saloane cu imagini reale și informații clare.
        </Text>
        <Text style={styles.text}>
          ✔️ Filtre rapide după nume, oraș și servicii.
        </Text>
        <Text style={styles.text}>
          ✔️ Rezervări intuitive în câteva secunde.
        </Text>
        <Text style={styles.text}>
          ✔️ O experiență modernă, rapidă și plăcută.
        </Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.subtitle}>De ce este o alegere excelentă?</Text>

        <Text style={styles.text}>
          SalonFinder elimină telefoanele, căutările lungi și programările
          dificile. Totul este centralizat într-un singur loc: servicii,
          imagini, ratinguri și disponibilitate.
        </Text>

        <Text style={[styles.text, styles.mt]}>
          Scopul aplicației este să aducă simplitate acolo unde era nevoie: în
          programările la salon. Rapid, eficient și accesibil oricui.
        </Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.subtitle}>De ce să folosești SalonFinder? ✨</Text>

        <Text style={styles.text}>
          💇‍♀️ Găsești rapid saloane de top – totul într-un singur loc.
        </Text>
        <Text style={styles.text}>
          📍 Filtrare după oraș și servicii – vezi doar ce te interesează.
        </Text>
        <Text style={styles.text}>
          🖼️ Prezentare vizuală clară – imagini reale și ratinguri actualizate.
        </Text>
        <Text style={styles.text}>
          ⚡ Rezervare în câteva secunde – fără așteptări sau telefoane.
        </Text>
        <Text style={styles.text}>
          ⭐ Experiență modernă și intuitivă – rapidă și fluidă.
        </Text>
        <Text style={styles.text}>
          ❤️ Ideal pentru persoane ocupate – economisești timp prețios.
        </Text>
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
  mt: {
    marginTop: 10,
  },
});
