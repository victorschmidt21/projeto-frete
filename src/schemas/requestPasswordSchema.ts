import { email, z } from "zod";

export const requestPasswordSchema = z.object({
  email: z.email({ message: "Digite um email válido" }),
});

export type RequestPasswordSchema = z.infer<typeof requestPasswordSchema>;
