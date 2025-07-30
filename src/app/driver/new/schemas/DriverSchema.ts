import { z } from "zod";
import { validarCPF, validateDate } from "@/libs/validators";

export const driverSchema = z
  .object({
    name: z.string().min(1, { message: "Nome é obrigatório" }),
    cpf: z.string().min(1, { message: "CPF é obrigatório" }),
    birthDate: z
      .string()
      .length(10, { message: "Data de nascimento é obrigatória" }),
    rntrc: z.string().min(1, { message: "RNTRC é obrigatório" }),
  })
  .refine(
    (data) => {
      return validarCPF(data.cpf);
    },
    {
      message: "CPF inválido",
      path: ["cpf"],
    }
  )
  .refine(
    (data) => {
      return validateDate(data.birthDate);
    },
    {
      message: "Data de nascimento inválida!",
      path: ["birthDate"],
    }
  );

export type DriverSchema = z.infer<typeof driverSchema>;
