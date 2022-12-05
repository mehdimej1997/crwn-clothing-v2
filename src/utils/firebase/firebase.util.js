import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBevHOxF4X0ekkt3Z9FZKVP0L_EOD9iN8E",
  authDomain: "shop-app-react-practice.firebaseapp.com",
  projectId: "shop-app-react-practice",
  storageBucket: "shop-app-react-practice.appspot.com",
  messagingSenderId: "365778799874",
  appId: "1:365778799874:web:8c93070c5d60846875861b",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
