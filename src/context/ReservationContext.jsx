import { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/firebaseConfig";
import { AuthContext } from "./AuthContext";

const ReservationContext = createContext(null);

export function ReservationProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  const db = FIRESTORE_DB;

  /* ================== LOAD REZERVĂRI ================== */
  useEffect(() => {
    if (!user || !user.uid) {
      setReservations([]);
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, "reservations"),
      where("userId", "==", user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReservations(data);
      setLoading(false);
    });

    return unsubscribe;
  }, [user, db]);


  /* ================== ADD REZERVARE ================== */
  const addReservation = async (reservation) => {
    if (!user || !reservation) return false;

    try {
      await addDoc(collection(db, "reservations"), {
        ...reservation,
        userId: user.uid,
        createdAt: serverTimestamp(),
      });
      return true;
    } catch (error) {
      console.error("Error adding reservation:", error);
      return false;
    }
  };

  return (
    <ReservationContext.Provider
      value={{ reservations, addReservation, loading }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

export const useReservations = () => useContext(ReservationContext);
