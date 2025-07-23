import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebaseConfig";

export const resetPassword = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
};
