import React, { ReactNode } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
  View,
} from "react-native";
import type { ComponentProps } from "react";
import { styles } from "./style";
import { FontAwesome } from "@expo/vector-icons";

type FontAwesomeIconNames = ComponentProps<typeof FontAwesome>["name"];

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  children: ReactNode;
  icon: FontAwesomeIconNames;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const TypeUser = ({
  title,
  children,
  icon,
  buttonStyle,
  textStyle,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.5} {...rest}>
      <View style={styles.iconContainer}>
        <FontAwesome name={icon} size={32} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{children}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
};
