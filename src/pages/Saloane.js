import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import ReservationModal from "../components/layout/ReservationModal";
import SalonCard from "../components/layout/SalonCard";
import salons from "../data/salons";

export default function Saloane() {
  const [selectedSalon, setSelectedSalon] = useState(null);

  const [search, setSearch] = useState("");
  const [service, setService] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const cities = Array.from(new Set(salons.flatMap((s) => s.city)));

  const filteredSalons = salons.filter((s) => {
    const matchName = s.name.toLowerCase().includes(search.toLowerCase());
    const matchCity = selectedCity === "" || s.city.includes(selectedCity);
    const matchService =
      service === "" ||
      s.services.some((srv) =>
        srv.toLowerCase().includes(service.toLowerCase())
      );
    return matchName && matchCity && matchService;
  });

  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <Text style={styles.title}>Saloane disponibile</Text>

      {/* FILTRE */}
      <View style={styles.filtersContainer}>
        <TextInput
          placeholder="Caută după nume..."
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />

        <TextInput
          placeholder="Caută un serviciu: tuns, masaj..."
          style={styles.input}
          value={service}
          onChangeText={setService}
        />

        <TextInput
          placeholder="Selectează orașul..."
          style={styles.input}
          value={selectedCity}
          onChangeText={setSelectedCity}
        />
      </View>

      {/* LISTĂ */}
      {filteredSalons.length === 0 ? (
        <Text style={styles.emptyMessage}>Nu există rezultate.</Text>
      ) : (
        <View style={styles.list}>
          {filteredSalons.map((salon) => (
            <SalonCard
              key={salon.id}
              salon={salon}
              selectedCity={selectedCity}
              onReserve={setSelectedSalon}
            />
          ))}
        </View>
      )}

      {/* MODAL */}
      <ReservationModal
        salon={selectedSalon}
        onClose={() => setSelectedSalon(null)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    padding: 20,
    backgroundColor: "#ffc4c4",
    minHeight: "100%",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#850e35",
    marginBottom: 18,
  },

  filtersContainer: {
    gap: 12,
    marginBottom: 20,
  },

  input: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  list: {
    gap: 20,
  },

  emptyMessage: {
    textAlign: "center",
    color: "#555",
    fontSize: 16,
    marginTop: 20,
  },
});
