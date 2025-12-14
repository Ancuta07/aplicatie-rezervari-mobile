// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDkLX2lJkaljR8g9OMqlGvj5mIqcgFPyAg",
  authDomain: "salonfinder-292db.firebaseapp.com",
  projectId: "salonfinder-292db",
  storageBucket: "salonfinder-292db.firebasestorage.app",
  messagingSenderId: "305616007008",
  appId: "1:305616007008:web:68a0b141a4195786a5f805",
  measurementId: "G-M7EV4TB45P",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Auth for React Native with AsyncStorage persistence
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
