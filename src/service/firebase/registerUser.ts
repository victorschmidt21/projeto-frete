import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

/**
 * Registra um novo usuário no Firebase Auth com e-mail e senha.
 * @param email E-mail do usuário
 * @param password Senha do usuário
 * @returns O usuário criado ou lança um erro padronizado
 */
export async function registerUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error: any) {
    // Tratamento de erros comuns do Firebase Auth
    let message = "Erro ao registrar usuário.";
    if (error.code === "auth/email-already-in-use") {
      message = "E-mail já está em uso.";
    } else if (error.code === "auth/invalid-email") {
      message = "E-mail inválido.";
    } else if (error.code === "auth/weak-password") {
      message = "Senha muito fraca.";
    }
    throw new Error(message);
  }
}
