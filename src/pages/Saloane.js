import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import ReservationModal from "../components/layout/ReservationModal";
import SalonCard from "../components/layout/SalonCard";
import salons from "../data/salons";

export default function Saloane() {
  const [selectedSalon, setSelectedSalon] = useState(null);

  // 🔍 Căutare după nume
  const [search, setSearch] = useState("");

  // 🟣 Dropdown servicii
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState(
    Array.from(new Set(salons.flatMap((s) => s.services))).map((srv) => ({
      label: srv.charAt(0).toUpperCase() + srv.slice(1),
      value: srv.toLowerCase(),
    }))
  );

  // 🟢 Dropdown orașe
  const [cityOpen, setCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cities, setCities] = useState(
    Array.from(new Set(salons.flatMap((s) => s.city))).map((c) => ({
      label: c,
      value: c,
    }))
  );

  // 🔎 FILTRARE
  const filteredSalons = salons.filter((s) => {
    const matchName = s.name.toLowerCase().includes(search.toLowerCase());
    const matchCity = !selectedCity || s.city.includes(selectedCity);
    const matchService =
      !selectedService ||
      s.services.some((srv) =>
        srv.toLowerCase().includes(selectedService.toLowerCase())
      );
    return matchName && matchCity && matchService;
  });

  return (
    <ScrollView
      contentContainerStyle={styles.pageContainer}
      keyboardShouldPersistTaps="handled" // IMPORTANT PENTRU IOS
    >
      <Text style={styles.title}>Saloane disponibile</Text>

      {/* CĂUTARE DUPĂ NUME */}
      <View style={{ zIndex: 3000 }}>
        <TextInput
          placeholder="Caută după nume..."
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* DROPDOWN SERVICII */}
      <View style={{ zIndex: 2500 }}>
        <DropDownPicker
          placeholder="Caută un serviciu..."
          open={serviceOpen}
          value={selectedService}
          items={services}
          setOpen={setServiceOpen}
          setValue={setSelectedService}
          setItems={setServices}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          zIndex={2500}
          zIndexInverse={2500}
        />
      </View>

      {/* DROPDOWN ORAȘE */}
      <View style={{ zIndex: 2000, marginBottom: 20 }}>
        <DropDownPicker
          placeholder="Selectează orașul..."
          open={cityOpen}
          value={selectedCity}
          items={cities}
          setOpen={setCityOpen}
          setValue={setSelectedCity}
          setItems={setCities}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          zIndex={2000}
          zIndexInverse={2000}
        />
      </View>

      {/* LISTĂ SALOANE */}
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
    gap: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#850e35",
  },

  input: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginBottom: 12,
  },

  dropdown: {
    borderRadius: 12,
    borderColor: "#ddd",
    marginBottom: 12,
    zIndex: 999,
  },

  dropdownContainer: {
    borderRadius: 12,
    borderColor: "#ccc",
    zIndex: 999,
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
