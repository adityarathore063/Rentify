// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rentify-71e9c.firebaseapp.com",
  projectId: "rentify-71e9c",
  storageBucket: "rentify-71e9c.appspot.com",
  messagingSenderId: "1099300751498",
  appId: "1:1099300751498:web:e3f91a4373e2d39b2f0573",
  measurementId: "G-NW41WYJGBX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);