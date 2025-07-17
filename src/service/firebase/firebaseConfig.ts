import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Constants from "expo-constants";
const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.firebaseApiKey,
  authDomain: Constants.expoConfig?.extra?.firebaseAuthDomain,
  projectId: "projeto-frete-8c9fc",
  storageBucket: "projeto-frete-8c9fc.firebasestorage.app",
  messagingSenderId: "584834478713",
  appId: "1:584834478713:web:afb64831618f61d1c8daa8",
  measurementId: "G-R9T1047N5L",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
