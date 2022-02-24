import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function login(email: string, password: string){
    return signInWithEmailAndPassword(auth, email, password);
}

export default login;