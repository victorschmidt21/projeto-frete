import { TabBar } from "@/components/tabbar";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar props={{ ...props }} />}>
      <Tabs.Screen
        name="vehicles/index"
        options={{
          title: "Veiculos",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={24} name="security" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="relatorios/index"
        options={{
          headerShown: false,
          title: "Relatórios",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={24} name="assessment" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Fretes",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="truck" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil/index"
        options={{
          headerShown: false,
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="user" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more/index"
        options={{
          title: "Mais",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="plus" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
