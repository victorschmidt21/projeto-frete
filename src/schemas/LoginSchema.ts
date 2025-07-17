import { email, z } from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "Email obrigátorio!" }),
  password: z.string({ message: "Campo obrigátorio" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
