"use server";

import { sendEmail } from "@/lib/mailer";

export default async function contactServer(valideData) {
  const {nom, email, message} = valideData.data;

  const validedata = {
    nom: nom,
    email: email,
    message: message
  }

  await sendEmail(validedata)
}
