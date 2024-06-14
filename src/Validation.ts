import { z } from "zod";

const ComplainsSchema = z.object({
  email: z
    .string()
    .email("Inserta un mail valido")
    .optional()
    .or(z.literal("")),
  description: z.string().min(15, "No puedes enviar quejas vacias"),
});

type ComplainsSchemaType = z.infer<typeof ComplainsSchema>;

export type { ComplainsSchemaType };
export { ComplainsSchema };
