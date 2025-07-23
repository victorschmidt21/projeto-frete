import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { style } from "./style";
import { TypeUser } from "@/components/typeuser";
import { useRouter } from "expo-router";
export default function SignUp() {
  const router = useRouter();
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={style.container}>
        <View style={style.logo}>
          <FontAwesome name="truck" size={56} color={"#0D47A1"} />
        </View>
        <Text style={style.titleWhite}>Criar sua conta</Text>
        <Text style={style.description}>
          Primeiro selecione o seu tipo de usuário
        </Text>
        <View style={{ paddingHorizontal: 24, gap: 16, marginTop: 16 }}>
          <TypeUser
            title="Sou transportadora"
            icon="building"
            onPress={() => router.push("/driver/new")}
          >
            Aqui você anuncia seus fretes para encontrar motoristas de forma
            rápida e segura.
          </TypeUser>
          <TypeUser
            title="Sou motorista"
            icon="truck"
            onPress={() => router.push("/driver/new")}
          >
            Aqui você anuncia seus fretes para encontrar motoristas de forma
            rápida e segura.
          </TypeUser>
        </View>
      </View>
    </View>
  );
}
