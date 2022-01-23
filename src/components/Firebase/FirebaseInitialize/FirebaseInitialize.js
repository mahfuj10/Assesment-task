import FirebaseConfig from "../FirebaseConfig/FirebaseConfig";
import { initializeApp } from "firebase/app";

// Initialize Firebase

const FirebaseInitialize = () => {
    initializeApp(FirebaseConfig);
};

export default FirebaseInitialize;