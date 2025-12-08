// 🗺️ Coordonate pentru orașele din România
const cityCoords = {
  "București": { latitude: 44.4268, longitude: 26.1025 },
  "Cluj-Napoca": { latitude: 46.7712, longitude: 23.6236 },
  "Brașov": { latitude: 45.6579, longitude: 25.6012 },
  "Timișoara": { latitude: 45.7557, longitude: 21.2268 },
  "Iași": { latitude: 47.1585, longitude: 27.6014 },
};

const salons = [
  {
    id: 1,
    name: "Beauty Salon Lux",
    city: ["București", "Brașov"],
    description:
      "Servicii premium de coafură, vopsit, manichiură și pedichiură",
    image: require("../../assets/images/salon1.png"),
    rating: 4.5,
    services: ["coafor", "manichiură", "pedichiură", "vopsit"],
  },
  {
    id: 2,
    name: "Relax Spa",
    city: ["Cluj-Napoca", "București", "Brașov"],
    description: "Spa, saună, tratamente corporale și masaj relaxant",
    image: require("../../assets/images/salon2.png"),
    rating: 4.8,
    services: ["masaj", "saună", "împachetări", "spa"],
  },
  {
    id: 3,
    name: "Hair & Style",
    city: ["București", "Brașov", "Cluj-Napoca"],
    description: "Tunsori moderne și vopsit",
    image: require("../../assets/images/salon3.png"),
    rating: 4.2,
    services: ["tuns", "coafor", "vopsit", "styling"],
  },
  {
    id: 4,
    name: "Wellness Center",
    city: ["Timișoara", "Brașov"],
    description: "Masaj, saună și tratamente faciale",
    image: require("../../assets/images/salon4.png"),
    rating: 4.7,
    services: ["masaj", "saună", "tratamente faciale"],
  },
  {
    id: 5,
    name: "Glam Nails Studio",
    city: ["Iași", "Cluj-Napoca", "Brașov"],
    description: "Manichiură, pedichiură și nail art profesional",
    image: require("../../assets/images/salon5.png"),
    rating: 4.6,
    services: [
      "manichiură",
      "pedichiură",
      "nail art",
      "gel",
      "întărire unghii",
    ],
  },
  {
    id: 6,
    name: "Barber Pro",
    city: ["Brașov", "Timișoara", "Iași"],
    description: "Tuns bărbătești moderne și bărbierit tradițional",
    image: require("../../assets/images/salon6.png"),
    rating: 4.9,
    services: ["tuns", "barbierit", "contur", "styling barba"],
  },
];

export default salons;
export { cityCoords };

