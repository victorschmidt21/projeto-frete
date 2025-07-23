import { useUserStore } from "@/store/userStore";
import { Text, View } from "react-native";

export default function Dashboard() {
  const { user } = useUserStore();
  return (
    <View style={{ backgroundColor: "#0D47A1", flex: 1 }}>
      <Text style={{ color: "#252525" }}>Página Dashboard</Text>
      <Text style={{ color: "#252525" }}>{user.uuid}</Text>
    </View>
  );
}
