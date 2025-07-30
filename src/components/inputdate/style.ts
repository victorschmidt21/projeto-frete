import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      marginBottom: 16,
      width: "100%",
    },
    label: {
      marginBottom: 4,
      fontWeight: "600",
      color: "#333",
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 12,
      borderRadius: 8,
      fontSize: 16,
      color: "#000",
    },
    inputError: {
      borderColor: "#e63946",
    },
    error: {
      marginTop: 4,
      color: "#e63946",
      fontSize: 14,
    },
  });