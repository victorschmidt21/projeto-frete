import { z } from "zod";

export const credentialsDriverSchema = z
  .object({
    email: z.email({ message: "Email é obrigatório" }),
    password: z.string().min(1, { message: "Senha é obrigatória" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirmação de senha é obrigatória" }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "As senhas não coincidem",
      path: ["confirmPassword"],
    }
  );

export type CredentialsDriverSchema = z.infer<typeof credentialsDriverSchema>;
