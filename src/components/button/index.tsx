import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  value: string;
  isLoading?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button = ({
  value,
  isLoading,
  buttonStyle,
  textStyle,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.defaultButton, disabled && styles.disabled, buttonStyle]}
      activeOpacity={0.8}
      disabled={disabled}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <Text style={[styles.defaultText, textStyle]}>{value}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    backgroundColor: "#0D47A1",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  defaultText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 10,
    width: "100%",
  },
});
