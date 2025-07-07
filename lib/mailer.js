import nodemailer from "nodemailer";

export async function sendEmail(data) {
  // Crée le transporteur SMTP avec Gmail et mot de passe d'application
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASS_EMAIL,
    },
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Définir le contenu du mail
  const mailOptions = {
    from: `"Portfolio | " ${process.env.USER_EMAIL}`,
    to: process.env.USER_EMAIL,
    subject: `***** Portfolio *****`,
    text: `De: nom : ${data.nom} || email : ${data.email} \n\nMessage:\n${data.message}`,
  };

  // Envoyer le mail
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
  }
}
