import { StyleSheet } from "react-native";
import { theme } from "@/libs/unistyles";

export const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
  header: {
    paddingTop: theme.space.space24,
    paddingHorizontal: theme.space.space24,
    backgroundColor: theme.colors.white,
  },
  headerTitle: {
    fontSize: theme.fontSize.fontSize24,
    fontWeight: "700",
    color: theme.colors.black,
    marginBottom: theme.space.space8,
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: theme.fontSize.fontSize16,
    color: theme.colors.darkGray,
    marginBottom: theme.space.space16,
    textAlign: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.space.space24,
    backgroundColor: theme.colors.white,
  },
});
