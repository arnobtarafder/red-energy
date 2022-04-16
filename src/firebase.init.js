import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgmga7E5BbbeMXpLdnRtnoZ_vDYR4gq4M",
  authDomain: "red-energy-791e0.firebaseapp.com",
  projectId: "red-energy-791e0",
  storageBucket: "red-energy-791e0.appspot.com",
  messagingSenderId: "98280668124",
  appId: "1:98280668124:web:9318dd14f6d66573136d19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =  getAuth(app);

export default auth;