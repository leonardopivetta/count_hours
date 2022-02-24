import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import config from "./firebaseConfig.json";

const app = initializeApp(config);

const auth = getAuth(app);
const firestore = getFirestore(app);

if(window.location.hostname === "localhost"){
    const firebasePorts = require("../firebase.json");
    connectAuthEmulator(auth, `http://localhost:${firebasePorts.emulators.auth.port}`);
    connectFirestoreEmulator(firestore, "localhost", firebasePorts.emulators.firestore.port );
}

export { auth, firestore };