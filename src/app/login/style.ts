import { StyleSheet } from "react-native";
import { theme } from "@/libs/unistyles";

export const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    height: 260,
    backgroundColor: theme.colors.primary,
  },
  form: {
    marginVertical: theme.space.space24,
  },
  logo: {
    backgroundColor: theme.colors.background,
    padding: theme.space.space16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.space.space16,
  },
  titleWhite: {
    color: theme.colors.white,
    fontSize: theme.fontSize.fontSize32,
    fontWeight: "bold",
    marginTop: theme.space.space8,
  },
  titleBlack: {
    color: theme.colors.black,
    fontSize: theme.fontSize.fontSize32,
    fontWeight: "bold",

    marginVertical: theme.space.space8,
  },
  description: {
    color: theme.colors.white,
    fontSize: theme.fontSize.fontSize16,
    marginTop: theme.space.space8,
    textAlign: "center",
  },
  descriptionGray: {
    color: theme.colors.darkGray,
    fontSize: theme.space.space16,
    marginBottom: theme.space.space16,
  },
  buttonSignUp: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
});
