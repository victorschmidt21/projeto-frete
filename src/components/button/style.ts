import { fontSize } from "@/libs/theme/fontSize";
import { theme } from "@/libs/unistyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  defaultButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.space.space16,
    borderRadius: theme.space.space12,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  defaultText: {
    color: theme.colors.white,
    fontWeight: "600",
    fontSize: fontSize.fontSize16,
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.space.space16,
    borderRadius: theme.space.space12,
    width: "100%",
  },
});
