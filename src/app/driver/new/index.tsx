import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/button";
import { theme } from "@/libs/unistyles";
import { driverSchema, DriverSchema } from "./schemas/DriverSchema";
import { styles } from "./style";
import {
  CredentialsDriverSchema,
  credentialsDriverSchema,
} from "./schemas/CredentialsDriverSchema";
import { FormCredentialsDriver } from "./components/formCredentialsDriver";
import { FormDriver } from "./components/formDriver";
import { registerUser } from "@/service/firebase/registerUser";
import { toastError, toastSucess } from "@/toast/toast";
import ToastManager from "toastify-react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useUserStore } from "@/store/userStore";

type Step = 1 | 2;

export default function NewDriver() {
  const [step, setStep] = useState<Step>(1);
  const { updateUser } = useUserStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleSubmit: handleSubmitCredentials, control: controlCredentials } =
    useForm<CredentialsDriverSchema>({
      resolver: zodResolver(credentialsDriverSchema),
    });

  const { control: controlDriver, handleSubmit: handleSubmitDriver } =
    useForm<DriverSchema>({
      resolver: zodResolver(driverSchema),
    });

  async function onSubmitCredentials(data: CredentialsDriverSchema) {
    setIsLoading(true);
    try {
      // const newUser = await registerUser(data.email, data.password);

      // await updateUser(newUser.uid, newUser.email || "");
      setTimeout(() => {
        setIsLoading(false);
        setStep(2);
      }, 3000);
    } catch (err) {
      toastError({ title: "Erro", description: `${err}` });
      setIsLoading(false);
    }
  }

  function onSubmitDriver(data: DriverSchema) {
    console.log(data);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => router.push("/signup")}
          >
            <FontAwesome name="arrow-left" size={25} color={"#252525"} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Dados pessoais</Text>
          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progressBar,
                { width: step === 1 ? "50%" : "100%" },
              ]}
            />
          </View>
          <Text style={styles.progressText}>{step === 1 ? "50%" : "100%"}</Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          {step === 1 && !isLoading && (
            <FormCredentialsDriver control={controlCredentials} />
          )}
          {step === 2 && !isLoading && <FormDriver control={controlDriver} />}
          {isLoading && <ActivityIndicator />}
        </ScrollView>
        <View style={styles.footer}>
          {step === 1 && (
            <Button
              value="Continuar"
              onPress={handleSubmitCredentials(onSubmitCredentials)}
            />
          )}
          {step === 2 && (
            <Button
              value="Finalizar cadastro"
              onPress={handleSubmitDriver(onSubmitDriver)}
            />
          )}
        </View>
      </KeyboardAvoidingView>
      <ToastManager />
    </SafeAreaView>
  );
}
