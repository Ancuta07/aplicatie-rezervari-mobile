import DateTimePicker from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useReservations } from "../../context/ReservationContext";

// -------------------------------
// FUNCTION TO SEND EMAIL VIA EMAILJS REST API
// -------------------------------
async function sendEmail(data) {
  const serviceID = "service_h6e4sxz";
  const templateID = "template_4cnvq9l";
  const publicKey = "6N-JLSkSoMv-ilrUj";

  const url = "https://api.emailjs.com/api/v1.0/email/send";

  const payload = {
    service_id: serviceID,
    template_id: templateID,
    user_id: publicKey,
    template_params: {
      to_email: data.email,
      salon_name: data.name,
      city: data.city,
      date: data.date,
      time: data.time,
    },
  };

  console.log("TRIMIT EMAIL CU EMAILJS...", payload);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    console.log("RESPONSE EMAIL:", response.status);

    if (response.ok) {
      console.log("Email trimis cu succes!");
    } else {
      console.log("Eroare la trimiterea emailului:", await response.text());
    }
  } catch (err) {
    console.log("Fetch error:", err);
  }
}

export default function ReservationModal({ salon, onClose }) {
  const { addReservation } = useReservations();

  const [selectedCity, setSelectedCity] = useState("");
  const [email, setEmail] = useState("");

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (salon) {
      setConfirmed(false);
      setSelectedCity("");
      setEmail("");
      setDate(new Date());
      setTime(new Date());
    }
  }, [salon]);

  if (!salon) return null;

  const handleSubmit = async () => {
    const reservation = {
      salonId: salon.id,
      name: salon.name,
      city: selectedCity,
      date: date.toDateString(),
      time: time.toLocaleTimeString(),
      email,
    };

    // Salvează în Context
    addReservation(reservation);

    // Trimite email
    await sendEmail(reservation);

    // Afișează confirmare
    setConfirmed(true);

    setTimeout(() => onClose(), 1500);
  };

  return (
    <Modal visible={!!salon} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          {!confirmed ? (
            <>
              <Text style={styles.title}>
                Rezervare la <Text style={styles.bold}>{salon.name}</Text>
              </Text>

              {/* ORAȘ */}
              <TextInput
                placeholder="Oraș"
                value={selectedCity}
                onChangeText={setSelectedCity}
                style={styles.input}
              />

              {/* DATA */}
              <Pressable onPress={() => setShowDate(true)} style={styles.input}>
                <Text>Alege data: {date.toDateString()}</Text>
              </Pressable>

              {showDate && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  onChange={(e, d) => {
                    setShowDate(false);
                    if (d) setDate(d);
                  }}
                />
              )}

              {/* ORA */}
              <Pressable onPress={() => setShowTime(true)} style={styles.input}>
                <Text>Alege ora: {time.toLocaleTimeString()}</Text>
              </Pressable>

              {showTime && (
                <DateTimePicker
                  value={time}
                  mode="time"
                  onChange={(e, t) => {
                    setShowTime(false);
                    if (t) setTime(t);
                  }}
                />
              )}

              {/* EMAIL */}
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={styles.input}
              />

              {/* BUTOANE */}
              <View style={styles.row}>
                <Pressable onPress={onClose} style={styles.cancelButton}>
                  <Text style={styles.btnText}>Anulează</Text>
                </Pressable>

                <Pressable onPress={handleSubmit} style={styles.confirmButton}>
                  <Text style={styles.btnText}>Confirmă</Text>
                </Pressable>
              </View>
            </>
          ) : (
            <Text style={styles.success}>Rezervarea a fost trimisă!</Text>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
  },
  bold: {
    fontWeight: "700",
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cancelButton: {
    flex: 1,
    padding: 12,
    backgroundColor: "#999",
    borderRadius: 8,
    marginRight: 6,
    alignItems: "center",
  },
  confirmButton: {
    flex: 1,
    padding: 12,
    backgroundColor: "#7a57d1",
    borderRadius: 8,
    marginLeft: 6,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "700",
  },
  success: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    padding: 20,
  },
});
