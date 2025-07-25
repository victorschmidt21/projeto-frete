import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "Email obrigátorio!" }),
  password: z.string().min(1, { message: "Senha obrigátoria!" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
