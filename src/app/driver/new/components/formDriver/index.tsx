import { Control, UseFormHandleSubmit } from "react-hook-form";
import { DriverSchema } from "../../schemas/DriverSchema";
import { InputText } from "@/components/InputText";
import { Text, View } from "react-native";
import { styles } from "./style";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { InputDate } from "@/components/inputdate";

interface Props {
  control: Control<DriverSchema>;
}

export function FormDriver({ control }: Props) {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  return (
    <View>
      <Text style={styles.title}>
        Agora vamos finalizar o cadastro de seus dados!
      </Text>
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

      <InputDate
        label="Dat de nascimento"
        formProps={{ control: control, name: "birthDate" }}
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
