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
      <div className="flex flex-col my-15 lg:my-30 px-4">
        <div className="flex flex-col justify-center lg:flex-row-reverse mb-5 lg:justify-between gap-6 items-center">
          <Image
            src="/avatar3.png"
            alt="Profile picture"
            width={700}
            height={700}
            className="object-cover w-50 h-50 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80"
          />
          <div className="w-full flex flex-col justify-center lg:w-[33rem]">
            <h1 className="font-black text-[clamp(1.5rem,5vw,3.5rem)] text-center lg:text-start">
              Full Stack JavaScript Developer
            </h1>
            {/* <h1 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem]">
              Full Stack JavaScript Developer
            </h1> */}
            <p className="font-medium text-gray-500 text-sm sm:text-base md:text-lg mt-2 text-center lg:text-start">
              Hey 👋, je suis Elias. je suis Développeur full stack JavaScript
              junior, basé à Québec, Canada.
            </p>
            <ul className="flex gap-2 mt-4 justify-center lg:justify-start">
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

        <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
          <h2 className="font-black capitalize text-lg sm:text-xl md:text-2xl text-center sm:text-left">
            Stack technique |
          </h2>
          <div className="flex gap-6 flex-wrap justify-center sm:justify-start">
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

      <div
        id="a-propos"
        className="flex flex-col md:flex-row my-20 md:my-40 border border-zinc-200 rounded-[10px]"
      >
        {/* Section gauche : titre */}
        <div className="bg-zinc-800 flex justify-center items-center p-4 clip-triangle w-full md:w-[40%] rounded-t-[.8rem] md:rounded-l-[.8rem] md:rounded-tr-none">
          <h1 className="uppercase text-[clamp(1.5rem,4vw,3rem)] text-center underline decoration-2 font-black text-white">
            A-propos
          </h1>
        </div>

        {/* Section droite : contenu */}
        <div className="w-full md:w-[60%] px-4 pb-4">
          <h2 className="font-black text-center md:text-start lg:text-start text-[clamp(1.25rem,3vw,2.5rem)] my-4">
            Développeur full-Stack passionné. 🧑‍💻
          </h2>
          <p className="font-medium text-gray-500 text-center md:text-justify lg:text-justify text-[clamp(0.9rem,2.2vw,1.125rem)]">
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
          <h1 className=" text-[clamp(2rem,8vw,3.5rem)] uppercase font-black text-emerald-700 mb-3">
            Portfolio
          </h1>
          <span className="border-[.1px] border-zinc-200 mb-5"></span>
          <h1 className="font-black text-[clamp(1.05rem,3vw,1.25rem)]">
            Chaque projet constitue une réalisation unique, conçue avec rigueur
            et créativité. 🧩
          </h1>
        </div>

        <div className="flex flex-col gap-20 mb-30">
          <Projet
            image={manageStockImg}
            titre={"ManageStock 📦"}
            description={
              "ManageStock est une plateforme web conçue pour optimiser la gestion des stocks des petites et moyennes entreprises (PME). Il s’agit d’un projet éducatif réalisé dans le cadre de ma formation, dont la partie front-end a été initialement développée en équipe. Je l’ai ensuite enrichie et finalisée en y intégrant un back-end complet ainsi que des fonctionnalités avancées."
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
        <div className="flex flex-col mb-5 items-center text-center">
          <h1 className=" text-[clamp(1.5rem,5vw,3.25rem)] uppercase text-5xl font-black text-emerald-700 mb-3">
            Disponible pour vos projets !
          </h1>
          <span className="border-[.1px] w-[100%] border-zinc-200 mb-5"></span>
          <h1 className="font-black capitalize text-[clamp(1.05rem,3vw,1.25rem)]">
            Je suis ouvert à de nouvelles opportunités, en freelance ou en
            emploi. 📩
          </h1>
          <Contact />
        </div>
      </div>
    </>
  );
}

// export default function Home() {
//   return (
//     <>
//       <div className="flex flex-col my-30">
//         <div className="flex flex-row-reverse mb-5 justify-between">
//           <Image
//             src="/avatar3.png"
//             alt="Profile picture"
//             width={700}
//             height={700}
//             className="object-cover w-80 h-80"
//           />
//           <div className="w-[33rem]">
//             <h1 className="font-black text-[3.5rem]">
//               Full Stack JavaScript Developer
//             </h1>
//             <p className="font-medium text-gray-500">
//               Hey 👋, je suis Elias. je suis Développeur full stack JavaScript
//               junior, basé à Québec, Canada.
//             </p>
//             <ul className="flex gap-2 mt-4">
//               <li>
//                 <Link href="https://www.linkedin.com/in/elias-ousameur-b632241a3/">
//                   <FaLinkedin className="text-2xl transition duration-300 hover:scale-110" />
//                 </Link>
//               </li>
//               <li>
//                 <Link href="https://github.com/EliasOus">
//                   <FaGithub className="text-2xl transition duration-300 hover:scale-110" />
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex flex-row items-center gap-6">
//           <h2 className="font-black capitalize text-xl">Stack technique |</h2>
//           <div className="flex gap-8">
//             <Image src="/nextjs.svg" alt="logo nextJS" width={40} height={40} />
//             <Image
//               src="/javascript.svg"
//               alt="logo javascript"
//               width={40}
//               height={40}
//             />
//             <Image src="/nodejs.svg" alt="logo nodejs" width={40} height={40} />
//             <Image src="/react.svg" alt="logo react" width={40} height={40} />
//             <Image
//               src="/tailwind.svg"
//               alt="logo tailwind"
//               width={40}
//               height={40}
//             />
//             <Image src="/html5.svg" alt="logo html5" width={40} height={40} />
//             <Image src="/css3.svg" alt="logo css3" width={40} height={40} />
//           </div>
//         </div>
//       </div>

//       <div
//         id="a-propos"
//         className="flex my-40 border border-zinc-200 rounded-[10px]"
//       >
//         <div className="bg-zinc-800 flex justify-center items-center p-4 clip-triangle w-[40%] rounded-l-[.8rem]">
//           <h1 className="uppercase text-4xl text-center underline  decoration-2 font-black text-white">
//             A-propos
//           </h1>
//         </div>
//         <div className="w-[60%] pl-3 pb-3">
//           <h2 className="font-black text-4xl my-4">
//             Développeur full-Stack passionné. 🧑‍💻
//           </h2>
//           <p className="font-medium text-gray-500 text-justify text-base">
//             Développeur full-stack junior passionné par la création de solutions
//             web modernes, je mets mes compétences techniques au service de
//             projets solides, performants et centrés sur l'utilisateur. Mon
//             parcours m’a permis d’acquérir une forte rigueur analytique, que
//             j’applique au quotidien dans la conception d’interfaces intuitives
//             et évolutives.
//           </p>
//         </div>
//       </div>
//       <div id="projet">
//         <div className="flex flex-col mb-10 text-center">
//           <h1 className=" uppercase text-5xl font-black text-emerald-700 mb-3">
//             Portfolio
//           </h1>
//           <span className="border-[.1px] border-zinc-200 mb-5"></span>
//           <h1 className="font-black text-xl">
//             Chaque projet constitue une réalisation unique, conçue avec rigueur
//             et créativité. 🧩
//           </h1>
//         </div>

//         <div className="flex flex-col gap-20 mb-30">
//           <Projet
//             image={manageStockImg}
//             titre={"ManageStock 📦"}
//             description={
//               "ManageStock est une plateforme web conçue pour optimiser la gestion des stocks des petites et moyennes entreprises (PME). Il s’agit d’un projet éducatif réalisé dans le cadre de ma formation, dont la partie front-end a été initialement développée en équipe. Je l’ai ensuite enrichie et finalisée en y intégrant un back-end complet ainsi que des fonctionnalités avancées."
//             }
//             lienDemo={"https://manage-stock-v2.vercel.app/"}
//             lienGitHub={"https://github.com/EliasOus/ManageStock-v2"}
//             stacks={[
//               "/nextjs.svg",
//               "/react.svg",
//               "/postgresql.svg",
//               "/css3.svg",
//             ]}
//           />

//           <Projet
//             image={videGarageImg}
//             titre={"VideGarage 💰"}
//             description={
//               "videGarage est une plateforme simple et intuitive dédiée à la gestion des événements de vente de garage de quartier. Ce projet a été réalisé dans un cadre d'étude et se concentre uniquement sur la partie frontend, sans backend."
//             }
//             lienDemo={"https://videgarage.vercel.app/"}
//             lienGitHub={"https://github.com/EliasOus/videgarage"}
//             isInvers={true}
//             stacks={["/nextjs.svg", "/react.svg", "/sqlite.svg", "/css3.svg"]}
//           />
//           <Projet
//             image={swapPagesImg}
//             titre={"SwapPages 📚"}
//             description={
//               "SwapPages est une plateforme web dédiée aux passionnés de lecture et aux amateurs de découvertes littéraires. Elle offre un espace unique où chaque lecteur peut échanger les livres qu’il ne lit plus contre de nouvelles histoires à explorer, favorisant ainsi le partage, l'économie circulaire et l’amour des livres."
//             }
//             lienDemo={"https://swappages.onrender.com/"}
//             lienGitHub={"https://github.com/EliasOus/SwapPages"}
//             stacks={[
//               "/nodejs.svg",
//               "/javascript.svg",
//               "sqlite.svg",
//               "/css3.svg",
//               "/html5.svg",
//             ]}
//           />
//         </div>
//       </div>

//       <div id="#contact">
//         <div className="flex flex-col mb-5 items-center text-center">
//           <h1 className=" uppercase text-5xl font-black text-emerald-700 mb-3">
//             Disponible pour vos projets !
//           </h1>
//           <span className="border-[.1px] w-[100%] border-zinc-200 mb-5"></span>
//           <h1 className="font-black text-xl capitalize">
//             Je suis ouvert à de nouvelles opportunités, en freelance ou en
//             emploi. 📩
//           </h1>
//           <Contact />
//         </div>
//       </div>
//     </>
//   );
// }
