const { default: z } = require("zod");

export const contactSchema = z.object({
  nom: z
    .string({message: "❌ Le Nom est obligatoire"})
    .min(4, { message: "❌ le Nom doit contenir au moins 4 caractères." })
    .max(50, { message: "❌ le Nom doit contenir au max 50 caractères." }),

  email: z
    .string({message: "❌ L'Email est obligatoire"})
    .email({ message: "❌ Veuillez entrer une adresse email valide." })
    .min(4, { message: "❌ L'Email doit contenir au moins 4 caractères." })
    .max(50, { message: "❌ L'Email doit contenir au max 50 caractères." }),

  message: z
    .string({ message: "❌ Le Message est obligatoire" })
    .min(4, { message: "❌ le Message doit contenir au moins 4 caractères." })
    .max(500, { message: "❌ le Message doit contenir au max 500 caractères." }),
});
