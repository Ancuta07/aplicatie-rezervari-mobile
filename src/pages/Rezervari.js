import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useReservations } from "../context/ReservationContext";

export default function Rezervari() {
  const { reservations } = useReservations();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Rezervările mele</Text>

      {reservations.length === 0 ? (
        <Text style={styles.empty}>Nu ai făcut nicio rezervare încă.</Text>
      ) : (
        <View style={styles.list}>
          {reservations.map((r, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>{r.name}</Text>
              <Text style={styles.cardText}>Oraș: {r.city}</Text>
              <Text style={styles.cardText}>Data: {r.date}</Text>
              <Text style={styles.cardText}>Ora: {r.time}</Text>
            </View>
          ))}
        </View>
      )}
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
  empty: {
    fontSize: 18,
    color: "#666",
  },
  list: {
    marginTop: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 3,
  },
});
