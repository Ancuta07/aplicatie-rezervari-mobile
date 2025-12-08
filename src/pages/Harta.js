import { StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import salons, { cityCoords } from "../data/salons";

// culori diferite pentru fiecare salon
const SALON_COLORS = [
  "#ff4d6d", // Beauty
  "#845ec2", // Relax
  "#4d96ff", // Hair & Style
  "#00c9a7", // Wellness Center
  "#ffb72b", // Glam Nails Studio
  "#ff006e", // Barber Pro
];

// mici offset-uri pentru separarea markerelor din același oraș
const OFFSETS = [
  { lat: 0, lon: 0 },
  { lat: 0.12, lon: 0 },
  { lat: -0.12, lon: 0 },
  { lat: 0, lon: 0.12 },
  { lat: 0, lon: -0.12 },
  { lat: 0.09, lon: 0.09 },
  { lat: -0.09, lon: -0.09 },
];

export default function Harta() {
  const markers = [];
  salons.forEach((salon) => {
    salon.city.forEach((cityName) => {
      markers.push({ salon, cityName });
    });
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 45.9432,
          longitude: 24.9668,
          latitudeDelta: 4,
          longitudeDelta: 4,
        }}
      >
        {markers.map((item, index) => {
          const { salon, cityName } = item;
          const base = cityCoords[cityName];

          const sameCityCountBefore = markers
            .slice(0, index)
            .filter((m) => m.cityName === cityName).length;

          const offset = OFFSETS[sameCityCountBefore % OFFSETS.length];

          const latitude = base.latitude + offset.lat;
          const longitude = base.longitude + offset.lon;

          // culoarea markerului = culoare salon
          const markerColor = SALON_COLORS[(salon.id - 1) % SALON_COLORS.length];

          return (
            <Marker
              key={`${salon.id}-${cityName}-${index}`}
              coordinate={{ latitude, longitude }}
              pinColor={markerColor}
            >
              <Callout>
                <View style={{ maxWidth: 200 }}>
                  <Text style={styles.name}>{salon.name}</Text>
                  <Text style={styles.city}>{cityName}</Text>
                  <Text style={styles.rating}>Rating: {salon.rating} ⭐</Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  name: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 4,
  },
  city: {
    fontSize: 14,
    marginBottom: 2,
  },
  rating: {
    fontSize: 14,
    color: "#f97316",
  },
});
