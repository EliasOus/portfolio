"use client";
import contactServer from "@/actions/contact-action";
import { contactSchema } from "@/lib/schema";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [erreur, setErreur] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const datas = {
      nom: data.get("nom"),
      email: data.get("email"),
      message: data.get("message"),
    };

    console.log(datas);

    const isValideData = contactSchema.safeParse(datas);

    if (!isValideData.success) {
      setErreur(isValideData.error.errors[0].message);
      setSuccess("");
      return;
    }

    setErreur("");

    try {
      await contactServer(isValideData);
      setSuccess(
        "Votre message a bien été envoyé. Merci de nous avoir contactés !"
      );
      form.reset();
    } catch (err) {
      console.error("Erreur d'envoi :", err);
      setErreur("Une erreur est survenue lors de l'envoi du message.");
      setSuccess("");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center my-[clamp(1rem,5vw,4rem)] border min-w-[50%] max-w-[90%] border-zinc-200 rounded-[.8rem] p-[clamp(1rem,3vw,2rem)] tracking-wide shadow-md">
        <h1 className="text-[clamp(1.5rem,2.5vw,1.75rem)] tex font-black text-emerald-700 capitalize text-center mb-[clamp(0.5rem,1vw,1rem)]">
          Contactez-moi
        </h1>

        <span className="border-[.5px] w-full border-zinc-300 mb-[clamp(1rem,2vw,2rem)]"></span>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full items-start"
          noValidate
        >
          <label className="flex flex-col mb-[clamp(0.5rem,1vw,1rem)] w-full">
            <input
              type="text"
              name="nom"
              placeholder="Votre Nom *"
              required
              className="border-b-[.5px] border-zinc-400 pl-2 rounded-[0.3rem] mb-[clamp(0.8rem,1.5vw,1.2rem)] text-[clamp(1rem,2vw,1.1rem)]"
            />
            <input
              type="text"
              name="email"
              placeholder="Votre Email *"
              required
              className="border-b-[.5px] border-zinc-400 pl-2 rounded-[0.3rem] mb-[clamp(0.8rem,1.5vw,1.2rem)] text-[clamp(1rem,2vw,1.1rem)]"
            />
            <textarea
              name="message"
              minLength={10}
              maxLength={200}
              placeholder="Votre Message *"
              className="border-b-[.5px] border-zinc-400 pl-2 rounded-[0.3rem] mb-[clamp(1rem,2vw,2rem)] min-h-[7rem] text-[clamp(1rem,2vw,1.1rem)]"
              required
            />
          </label>

          <button className="w-full flex items-center justify-center gap-2 mb-4 px-[clamp(0.5rem,1vw,1rem)] py-[clamp(0.5rem,1vw,1rem)] border border-zinc-200 rounded-full tracking-wide shadow-md hover:bg-emerald-100 hover:border-emerald-100 transition duration-200 hover:scale-[1.01]">
            <Image
              src="/send.png"
              alt="logo envoyer le message"
              width={50}
              height={50}
              className="w-6 h-6"
            />
            <span className="font-semibold text-black capitalize text-[clamp(1rem,2vw,1.1rem)]">
              Envoyer le Message
            </span>
          </button>

          {erreur && (
            <h2 className="text-red-400 font-bold text-[clamp(1rem,2vw,1.1rem)]">
              {erreur}
            </h2>
          )}
          {success && (
            <h2 className="text-green-600 font-bold text-[clamp(1rem,2vw,1.1rem)]">
              {success}
            </h2>
          )}
        </form>
      </div>
    </>
  );
}
