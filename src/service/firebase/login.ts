import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
export const login = async (email: string, password: string) => {
  const userCredintial = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredintial;
};
