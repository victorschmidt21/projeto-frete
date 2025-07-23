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
import { styles } from "./style";

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
