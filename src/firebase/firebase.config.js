// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDFkhE8IPBK-6QEYCa-394pPTLAmGTpK4",
  authDomain: "brand-shop-22074.firebaseapp.com",
  projectId: "brand-shop-22074",
  storageBucket: "brand-shop-22074.appspot.com",
  messagingSenderId: "127048445576",
  appId: "1:127048445576:web:7690a2febe33e17268b93d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;