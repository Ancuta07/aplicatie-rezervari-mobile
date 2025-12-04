import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

export function ReservationProvider({ children }) {
  const [reservations, setReservations] = useState([]);

  const addReservation = (reservation) => {
    setReservations((prev) => [...prev, reservation]);
  };

  return (
    <ReservationContext.Provider value={{ reservations, addReservation }}>
      {children}
    </ReservationContext.Provider>
  );
}

export const useReservations = () => useContext(ReservationContext);
