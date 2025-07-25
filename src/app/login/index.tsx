import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, loginSchema } from "@/schemas/LoginSchema";
import { InputText } from "@/components/InputText";
import { Button } from "@/components/button";
import { login } from "@/service/firebase/login";
import { useRouter } from "expo-router";
import { style } from "./style";
import { Modal } from "@/components/modal";
import { useRef, useState } from "react";
import { RequestNewPassword } from "@/components/requestNewPassword";
import { useUserStore } from "@/store/userStore";
export default function Login() {
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const { updateUser } = useUserStore();

  const { control, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  async function onSubmit(loginValues: LoginSchema) {
    try {
      const user = await login(loginValues.email, loginValues.password);
      updateUser(user.user.uid, "");
      Alert.alert("Login bem sucedido", `Seu usário ${user.user.email}`);
      router.push("/dashboard");
    } catch (err) {
      Alert.alert("Erro ao Fazer Login", `${err}`);
    }
  }

  function handleSignUp() {
    router.push("/signup");
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
          <InputText
            label="Email"
            ref={emailRef}
            inputProps={{
              placeholder: "Digite seu email",
              onSubmitEditing: () => passwordRef.current?.focus(),
              autoCapitalize: "none",
              keyboardType: "email-address",
            }}
            formProps={{
              name: "email",
              control,
            }}
          />
          <InputText
            label="Senha"
            formProps={{
              name: "password",
              control,
            }}
            inputProps={{
              placeholder: "Digite sua senha",
              autoCapitalize: "none",
              secureTextEntry: true,
            }}
          />
          <Pressable onPress={() => setOpen(true)}>
            <Text style={{ color: "#0D47A1", marginBottom: 24, marginTop: 8 }}>
              Esqueceu sua senha?
            </Text>
          </Pressable>s
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
          onPress={handleSignUp}
          activeOpacity={1}
        />
      </View>
      <Modal
        isOpen={open}
        onRequestClose={() => {
          setOpen(false);
        }}
      >
        <View style={{ backgroundColor: "#252525" }}>
          <RequestNewPassword closeModal={() => setOpen(false)} />
        </View>
      </Modal>
    </View>
  );
}
