import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
    width: "100%",
  },
  iconContainer: {
    backgroundColor: "#e4e6f1",
    borderRadius: 32,
    padding: 12,
    marginRight: 12,
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    color: "#2c2c2c",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#5e5e5e",
  },
  arrow: {
    fontSize: 24,
    color: "#999",
    marginLeft: 8,
  },
});
