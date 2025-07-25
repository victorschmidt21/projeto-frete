import { Control, UseFormHandleSubmit } from "react-hook-form";
import { DriverSchema } from "../../schemas/DriverSchema";
import { InputText } from "@/components/InputText";
import { Text, View } from "react-native";
import { styles } from "./style";
interface Props {
  control: Control<DriverSchema>;
}

export function FormDriver({ control }: Props) {
  return (
    <View>
      <Text style={styles.title}>Agora vamos finalizar o cadastro de seus dados!</Text>
      <InputText
        label="Nome completo"
        inputProps={{
          placeholder: "Digite seu nome",
          autoCapitalize: "words",
        }}
        formProps={{
          name: "name",
          control: control,
        }}
      />
      <InputText
        label="CPF"
        inputProps={{
          placeholder: "Digite seu CPF",
          keyboardType: "numeric",
        }}
        formProps={{
          name: "cpf",
          control: control,
        }}
      />
      <InputText
        label="Data de nascimento"
        inputProps={{
          placeholder: "AAAA-MM-DD",
        }}
        formProps={{
          name: "birthDate",
          control: control,
        }}
      />
      <InputText
        label="RNTRC"
        inputProps={{
          placeholder: "Digite o RNTRC",
        }}
        formProps={{
          name: "rntrc",
          control: control,
        }}
      />
    </View>
  );
}
