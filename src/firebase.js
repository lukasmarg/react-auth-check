import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBkXniGjTvTLkwWtU5j_VGBI6YKde1APRg",
  authDomain: "my-react-app-bb9b5.firebaseapp.com",
  projectId: "my-react-app-bb9b5",
  storageBucket: "my-react-app-bb9b5.appspot.com",
  messagingSenderId: "355832671392",
  appId: "1:355832671392:web:3402afc1420864f24eedc5",
  measurementId: "G-8PC19YRF3Y"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
