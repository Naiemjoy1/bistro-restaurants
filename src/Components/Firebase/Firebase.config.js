// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANdYEa8cQ4YX-umoErP5fRYAt-7UHxEbE",
  authDomain: "bistro-restaurant-a96f2.firebaseapp.com",
  projectId: "bistro-restaurant-a96f2",
  storageBucket: "bistro-restaurant-a96f2.appspot.com",
  messagingSenderId: "547461665204",
  appId: "1:547461665204:web:3b56c252e30c170cd7a2e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// export
export { app, auth };
