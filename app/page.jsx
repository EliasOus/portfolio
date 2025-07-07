import Projet from "@/components/Projet";
import Contact from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import manageStockImg from "@/public/manageStock.png";
import videGarageImg from "@/public/videGarage.png";
import swapPagesImg from "@/public/swapPages.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-col my-30">
        <div className="flex flex-row-reverse mb-5 justify-between gap-10">
          <Image
            src="/avatar.jpg"
            alt="Profile picture"
            width={500}
            height={500}
            className="object-cover w-60 h-60"
          />
          <div className="w-[33rem]">
            <h1 className="font-black text-[3.5rem]">
              Full Stack JavaScript Developer
            </h1>
            <p className="font-medium text-gray-500">
              Hey 👋, je suis Elias. je suis Développeur full stack JavaScript
              junior, basé à Québec, Canada.
            </p>
            <ul className="flex gap-2 mt-4">
              <li>
                <Link href="https://www.linkedin.com/in/elias-ousameur-b632241a3/">
                  <FaLinkedin className="text-2xl transition duration-300 hover:scale-110" />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/EliasOus">
                  <FaGithub className="text-2xl transition duration-300 hover:scale-110" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-center gap-6">
          <h2 className="font-black capitalize text-xl">Stack technique |</h2>
          <div className="flex gap-8">
            <Image src="/nextjs.svg" alt="logo nextJS" width={40} height={40} />
            <Image
              src="/javascript.svg"
              alt="logo javascript"
              width={40}
              height={40}
            />
            <Image src="/nodejs.svg" alt="logo nodejs" width={40} height={40} />
            <Image src="/react.svg" alt="logo react" width={40} height={40} />
            <Image
              src="/tailwind.svg"
              alt="logo tailwind"
              width={40}
              height={40}
            />
            <Image src="/html5.svg" alt="logo html5" width={40} height={40} />
            <Image src="/css3.svg" alt="logo css3" width={40} height={40} />
          </div>
        </div>
      </div>

      <div id="a-propos" className="flex my-40">
        <div className="bg-zinc-800 flex justify-center items-center p-4 clip-triangle w-[40%] rounded-l-[.8rem]">
          <h1 className="uppercase text-4xl text-center underline  decoration-2 font-black text-white">
            A-propos
          </h1>
        </div>
        <div className="w-[60%] pl-3">
          <h2 className="font-black text-4xl my-4">
            Développeur full-Stack passionné. 🧑‍💻
          </h2>
          <p className="font-medium text-gray-500 text-justify text-base">
            Développeur full-stack junior passionné par la création de solutions
            web modernes, je mets mes compétences techniques au service de
            projets solides, performants et centrés sur l'utilisateur. Mon
            parcours m’a permis d’acquérir une forte rigueur analytique, que
            j’applique au quotidien dans la conception d’interfaces intuitives
            et évolutives.
          </p>
        </div>
      </div>
      <div id="projet">
        <div className="flex flex-col mb-10 text-center">
          <h1 className=" uppercase text-5xl font-black text-emerald-700 mb-3">
            Portfolio
          </h1>
          <span className="border-[.1px] border-zinc-200 mb-5"></span>
          <h1 className="font-black text-xl">
            Chaque projet constitue une réalisation unique, conçue avec rigueur
            et créativité. 🧩
          </h1>
        </div>

        <div className="flex flex-col gap-20 mb-30">
          <Projet
            image={manageStockImg}
            titre={"ManageStock 📦"}
            description={
              "ManageStock est une plateforme web destinée à améliorer la gestion d'inventaire des petites et moyennes entreprises (PME). Ce dépôt contient la version complète et fonctionnelle du projet avec la partie front-end initiale développée en équipe, enrichie et finalisée par mes soins avec un back-end complet et des fonctionnalités avancées."
            }
            lienDemo={"https://manage-stock-v2.vercel.app/"}
            lienGitHub={"https://github.com/EliasOus/ManageStock-v2"}
            stacks={[
              "/nextjs.svg",
              "/react.svg",
              "/postgresql.svg",
              "/css3.svg",
            ]}
          />

          <Projet
            image={videGarageImg}
            titre={"VideGarage 💰"}
            description={
              "videGarage est une plateforme simple et intuitive dédiée à la gestion des événements de vente de garage de quartier. Ce projet a été réalisé dans un cadre d'étude et se concentre uniquement sur la partie frontend, sans backend."
            }
            lienDemo={"https://videgarage.vercel.app/"}
            lienGitHub={"https://github.com/EliasOus/videgarage"}
            isInvers={true}
            stacks={["/nextjs.svg", "/react.svg", "/sqlite.svg", "/css3.svg"]}
          />
          <Projet
            image={swapPagesImg}
            titre={"SwapPages 📚"}
            description={
              "SwapPages est une plateforme web dédiée aux passionnés de lecture et aux amateurs de découvertes littéraires. Elle offre un espace unique où chaque lecteur peut échanger les livres qu’il ne lit plus contre de nouvelles histoires à explorer, favorisant ainsi le partage, l'économie circulaire et l’amour des livres."
            }
            lienDemo={"https://swappages.onrender.com/"}
            lienGitHub={"https://github.com/EliasOus/SwapPages"}
            stacks={[
              "/nodejs.svg",
              "/javascript.svg",
              "sqlite.svg",
              "/css3.svg",
              "/html5.svg",
            ]}
          />
        </div>
      </div>

      <div id="#contact">
        <div className="flex flex-col mb-10 text-center">
          <h1 className=" uppercase text-5xl font-black text-emerald-700 mb-3">
            Disponible pour vos projets !
          </h1>
          <span className="border-[.1px] border-zinc-200 mb-5"></span>
          <h1 className="font-black text-xl capitalize">
            Je suis ouvert à de nouvelles opportunités, en freelance ou en
            emploi. 📩
          </h1>
          
          <Contact />
        </div>
      </div>
    </>
  );
}
