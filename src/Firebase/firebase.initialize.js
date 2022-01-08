import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.Config";


const initializeAuth = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuth;