import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function SalonCard({ salon, selectedCity, onReserve }) {
  return (
    <View style={styles.card}>
      <Image source={salon.image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{salon.name}</Text>
        <Text style={styles.description}>{salon.description}</Text>
        <Text style={styles.city}>Orașe: {salon.city.join(", ")}</Text>
        <Text style={styles.rating}>Rating: {salon.rating} ⭐</Text>

        <Pressable
          style={styles.button}
          onPress={() =>
            onReserve({
              ...salon,
              selectedCity: selectedCity || salon.city[0],
            })
          }
        >
          <Text style={styles.buttonText}>Rezervă</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 160,
  },

  content: {
    padding: 16,
    backgroundColor: "#fcf5ee",
  },

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#850e35",
  },

  description: {
    marginTop: 4,
    fontSize: 14,
  },

  city: {
    marginTop: 6,
    color: "#444",
  },

  rating: {
    marginTop: 4,
    fontWeight: "700",
    color: "#850e35",
  },

  button: {
    marginTop: 12,
    backgroundColor: "#ee6983",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
