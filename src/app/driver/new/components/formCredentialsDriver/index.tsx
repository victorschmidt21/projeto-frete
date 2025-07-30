import { Control, UseFormHandleSubmit } from "react-hook-form";
import { CredentialsDriverSchema } from "../../schemas/CredentialsDriverSchema";
import { TextInput, View, Text } from "react-native";
import { useRef } from "react";
import { InputText } from "@/components/InputText";
import { styles } from "./style";
import { InputDate } from "@/components/inputdate";

interface Props {
  control: Control<CredentialsDriverSchema>;
}

export function FormCredentialsDriver({ control }: Props) {
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);
  return (
    <View>
      <Text style={styles.title}>Digite seu e-mail e senha</Text>
      
      <InputText
        label="E-mail"
        ref={emailRef}
        inputProps={{
          placeholder: "Digite seu e-mail",
          autoCapitalize: "none",
          keyboardType: "email-address",
          returnKeyType: "next",
          onSubmitEditing: () => passwordRef.current?.focus(),
        }}
        formProps={{
          name: "email",
          control: control,
        }}
      />
      <InputText
        label="Senha"
        ref={passwordRef}
        inputProps={{
          placeholder: "Digite sua senha",
          autoCapitalize: "none",
          secureTextEntry: true,
          returnKeyType: "done",
        }}
        formProps={{
          name: "password",
          control: control,
        }}
      />
      <InputText
        label="Confirmar senha"
        ref={confirmPasswordRef}
        inputProps={{
          placeholder: "Confirme sua senha",
          autoCapitalize: "none",
          secureTextEntry: true,
          returnKeyType: "done",
        }}
        formProps={{
          name: "confirmPassword",
          control: control,
        }}
      />
    </View>
  );
}
