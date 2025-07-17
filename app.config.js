import "dotenv/config";

export default {
  expo: {
    name: "MeuApp",
    slug: "meu-app",
    extra: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    },
  },
};
