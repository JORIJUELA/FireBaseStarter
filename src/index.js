// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAITLrJqHYvVpDyVl8A4xtVhHXVYFvlmtw",
  authDomain: "my2ndgswfbase.firebaseapp.com",
  projectId: "my2ndgswfbase",
  storageBucket: "my2ndgswfbase.appspot.com",
  messagingSenderId: "753024335632",
  appId: "1:753024335632:web:3cabd0d546d0f527f92f95",
  measurementId: "G-B8T680XGYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);
