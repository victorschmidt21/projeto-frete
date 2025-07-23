import { fontSize } from "@/libs/theme/fontSize";
import { theme } from "@/libs/unistyles";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    padding: theme.space.space24,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
    width: 360,
    borderRadius: theme.space.space8,
  },
  title: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.fontSize24,
    paddingBottom: theme.space.space16,
  },
  description: {
    color: theme.colors.lightGray,
    textAlign: "center",
    paddingBottom: theme.space.space16,
  },
  containerIcon: {
    width: "100%",
    alignItems: "flex-end",
  },
  icon: {
    color: theme.colors.primary,
  },
});
