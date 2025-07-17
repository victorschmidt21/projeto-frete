import React from "react";
import {
  Text,
  TextInput,
  View,
  TextInputProps,
  StyleSheet,
} from "react-native";

interface FormInputProps extends TextInputProps {
  label: string;
  errorMessage?: string;
}

export const InputText = ({ label, errorMessage, ...rest }: FormInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={[styles.input, errorMessage ? styles.inputError : null]}
        placeholderTextColor="#999"
        {...rest}
      />

      {!!errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
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
