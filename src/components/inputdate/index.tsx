import React, { forwardRef, useState } from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./style";

interface InputDateProps<T extends FieldValues> {
  label: string;
  formProps: UseControllerProps<T>;
  inputProps?: TextInputProps;
}

export const InputDate = forwardRef<TextInput, InputDateProps<any>>(
  ({ label, formProps, inputProps }, ref) => {
    
    const [displayValue, setDisplayValue] = useState("");

    const formatDate = (text: string): string => {
      const numbers = text.replace(/\D/g, "");

      if (numbers.length <= 2) {
        return numbers;
      } else if (numbers.length <= 4) {
        return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
      } else if (numbers.length <= 8) {
        return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(
          4,
          8
        )}`;
      } else {
        return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(
          4,
          8
        )}`;
      }
    };

    const handleChangeText = (text: string) => {
      const formatted = formatDate(text);
      setDisplayValue(formatted);
      return formatted;
    };

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
              autoComplete="off"
              textContentType="none"
              placeholderTextColor="#999"
              placeholder="DD/MM/AAAA"
              keyboardType="numeric"
              maxLength={10}
              {...inputProps}
              ref={ref}
              value={displayValue}
              importantForAutofill="no"
              onChangeText={(text) => {
                const formatted = handleChangeText(text);
                field.onChange(formatted);
              }}
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
