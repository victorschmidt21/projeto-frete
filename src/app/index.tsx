import { Alert, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, loginSchema } from "@/schemas/LoginSchema";
import { InputText } from "@/components/InputText";
import { Button } from "@/components/button";
import { login } from "@/service/firebase/login";
import { useRouter } from "expo-router";

export default function Index() {
  const { control, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();

  async function onSubmit(loginValues: LoginSchema) {
    try {
      const user = await login(loginValues.email, loginValues.password);
      Alert.alert("Login bem sucedido", `Seu usário ${user.user.email}`);
      router.replace("/(tabs)/dashboard");
    } catch (err) {
      Alert.alert("Erro ao Fazer Login", `${err}`);
    }
  }

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={style.container}>
        <View style={style.logo}>
          <FontAwesome name="truck" size={56} color={"#0D47A1"} />
        </View>
        <Text style={style.titleWhite}>Frete Connect</Text>
        <Text style={style.description}>
          Conectando transportadoras e motoristas
        </Text>
      </View>
      <View style={{ paddingHorizontal: 24 }}>
        <Text style={style.titleBlack}>Bem-vindo!</Text>
        <Text style={style.descriptionGray}>
          Entre com sua conta para continuar
        </Text>
        <View style={style.form}>
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <InputText
                label="Email"
                placeholder="Digite seu email"
                onChangeText={field.onChange}
                value={field.value}
                autoCapitalize="none"
                keyboardType="email-address"
                errorMessage={fieldState.error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
              <InputText
                label="Senha"
                placeholder="Digite sua senha"
                onChangeText={field.onChange}
                value={field.value}
                autoCapitalize="none"
                secureTextEntry
                errorMessage={fieldState.error?.message}
              />
            )}
          />
          <Text style={{ color: "#0D47A1", marginBottom: 24, marginTop: 8 }}>
            Esqueceu sua senha?
          </Text>
          <Button value="Entrar" onPress={handleSubmit(onSubmit)} />
        </View>
        <Text
          style={{
            textAlign: "center",
            marginBottom: 16,
            color: "#6B7280",
            fontSize: 16,
          }}
        >
          Não tem uma conta?
        </Text>
        <Button
          buttonStyle={style.buttonSignUp}
          disabled
          textStyle={{ color: "#0D47A1", fontWeight: "bold" }}
          value="Criar conta"
          onPress={handleSubmit(onSubmit)}
          activeOpacity={1}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    height: 260,
    backgroundColor: "#0D47A1",
  },
  form: {
    marginVertical: 24,
  },
  logo: {
    backgroundColor: "#fff",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  titleWhite: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 8,
  },
  titleBlack: {
    color: "#252525",
    fontSize: 32,
    fontWeight: "bold",

    marginVertical: 8,
  },
  description: {
    color: "#fff",
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
  },
  descriptionGray: {
    color: "#6B7280",
    fontSize: 16,
    marginBottom: 16,
  },
  buttonSignUp: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#0D47A1",
  },
});
