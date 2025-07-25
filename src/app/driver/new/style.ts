import { StyleSheet } from "react-native";
import { theme } from "@/libs/unistyles";

export const styles = StyleSheet.create({
  header: {
    paddingTop: theme.space.space16,
    paddingHorizontal: theme.space.space24,
    backgroundColor: theme.colors.white,
  },
  headerTitle: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: theme.fontSize.fontSize18,
    color: theme.colors.black,
    marginBottom: theme.space.space8,
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: theme.colors.lightGray,
    borderRadius: 2,
    marginBottom: theme.space.space8,
    overflow: "hidden",
  },
  progressBar: {
    height: 4,
    backgroundColor: theme.colors.primary,
    borderRadius: 2,
  },
  progressText: {
    alignSelf: "flex-end",
    color: theme.colors.darkGray,
    fontSize: theme.fontSize.fontSize16,
    marginBottom: theme.space.space8,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: theme.space.space24,
    paddingTop: theme.space.space16,
    paddingBottom: theme.space.space24,
    backgroundColor: theme.colors.white,
  },

  footer: {
    padding: theme.space.space24,
    backgroundColor: theme.colors.white,
  },
});
