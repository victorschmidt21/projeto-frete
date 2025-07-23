import { Alert, Pressable, Text, View } from "react-native";
import { InputText } from "../InputText";
import { Button } from "../button";
import { Controller, useForm } from "react-hook-form";
import {
  requestPasswordSchema,
  RequestPasswordSchema,
} from "@/schemas/requestPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { style } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { resetPassword } from "@/service/firebase/resetPassword";

type Props = {
  closeModal: () => void;
};

export function RequestNewPassword({ closeModal }: Props) {
  const { control, handleSubmit } = useForm<RequestPasswordSchema>({
    resolver: zodResolver(requestPasswordSchema),
  });
  async function onSubmit(formValues: RequestPasswordSchema) {
    try {
      await resetPassword(formValues.email);
      Alert.alert("Email enviado com sucesso!");
    } catch (err) {
      Alert.alert("Erro ao enviar email");
    }
  }
  return (
    <View style={style.container}>
      <Pressable style={style.containerIcon} onPress={closeModal}>
        <Ionicons name="close" size={35} style={style.icon} />
      </Pressable>
      <Text style={style.title}>Redefinir senha</Text>
      <Text style={style.description}>
        Digite abaixo para enviarmos o email com a redefinição de senha
      </Text>
      <Controller
        control={control}
        name="email"
        render={({ fieldState, field }) => (
          <InputText
            label="Email"
            placeholder="digite seu email"
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        )}
      />
      <Button value="Enviar redifinição" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
