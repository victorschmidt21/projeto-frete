import React, { forwardRef } from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import {
  Text,
  TextInput,
  View,
  TextInputProps,
  StyleSheet,
} from "react-native";

interface FormInputProps<T extends FieldValues> {
  label: string;
  formProps: UseControllerProps<T>;
  inputProps: TextInputProps;
}

export const InputText = forwardRef<TextInput, FormInputProps<any>>(
  ({ label, formProps, inputProps }, ref) => {
    return (
      <Controller
        render={({ field, fieldState }) => (
          <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <TextInput
              style={[
                styles.input,
                fieldState.error?.message ? styles.inputError : null,
              ]}
              placeholderTextColor="#999"
              {...inputProps}
              ref={ref}
              value={field.value}
              onChangeText={field.onChange}
            />

            {fieldState.error?.message && (
              <Text style={styles.error}>{fieldState.error?.message}</Text>
            )}
          </View>
        )}
        {...formProps}
      />
    );
  }
);

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
