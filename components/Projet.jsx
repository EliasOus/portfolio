"use client";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Projet({
  image,
  titre,
  description,
  lienDemo,
  lienGitHub,
  isInvers = false,
  stacks,
}) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Fonction pour vérifier la taille de l'écran
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1023);
    };

    // Appel initial
    checkScreen();
    // Écoute les changements de taille
    window.addEventListener("resize", checkScreen);

    // Nettoyage
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <div
        className={`flex flex-col lg:flex-row lg:h-[26.5rem] ${
          isInvers ? "md:flex-row-reverse md:border-r-0" : "md:border-l-0"
        } border-[0.05rem] border-zinc-200 rounded-[20px] overflow-hidden`}
      >
        <Image
          src={image}
          alt={titre}
          width={500}
          height={500}
          className={`w-full h-auto lg:w-1/2 object-cover md:object-fill   ${
            isInvers ? "md:rounded-r-[20px]" : "md:rounded-l-[20px]"
          }`}
          style={{
            clipPath: isDesktop
              ? isInvers
                ? "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)"
                : "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"
              : "none",
          }}
        />

        <div
          className={`flex flex-col justify-center w-full capitalize py-5 px-5`}
        >
          <h1 className="font-black text-center sm:text-start text-[clamp(1.5rem,2.5vw,2rem)] mb-3">
            {titre}
          </h1>
          <p className="font-medium text-gray-500 text-justify text-[clamp(1rem,1.3vw,1.1rem)] mb-5">
            {description}
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-5 items-center">
            <h2 className="font-black  text-[clamp(1rem,1.2vw,1.1rem)] whitespace-nowrap">
              Stack technique |
            </h2>
            <div className="flex flex-wrap gap-3">
              {stacks.map((stack, index) => (
                <Image
                  key={index}
                  src={stack}
                  alt="logo"
                  width={25}
                  height={25}
                />
              ))}
            </div>
          </div>

          <ul className="flex flex-row sm:flex-col sm:flex-row gap-4 sm:gap-10">
            <li className="w-[50%] md:w-auto">
              <Link
                href={lienDemo}
                className="flex justify-center sm:justify-start items-center gap-1 font-bold rounded-[5px] border-[0.05rem] p-2 border-zinc-300 capitalize hover:bg-emerald-100 hover:border-emerald-100 transition duration-300 hover:scale-[1.01]"
              >
                Live Demo <FaExternalLinkAlt className="text-sm" />
              </Link>
            </li>
            <li className="w-[50%] md:w-auto">
              <Link
                href={lienGitHub}
                className="flex justify-center sm:justify-start items-center gap-1 font-bold rounded-[5px] border-[0.05rem] p-2 border-zinc-300 capitalize hover:bg-emerald-100 hover:border-emerald-100 transition duration-300 hover:scale-[1.01]"
              >
                Code <FaGithub className="text-xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

// return (
//   <>
//     <div
//       className={`flex ${
//         isInvers ? "flex-row-reverse border-r-0" : "flex-row border-l-0"
//       }  border-[0.05rem] border-zinc-200  rounded-[20px]`}
//     >
//       <Image
//         src={image}
//         alt={titre}
//         width={500}
//         height={500}
//         className={`${isInvers ? "rounded-r-[20px]" : "rounded-l-[20px]"}`}
//         style={{
//           clipPath: `${
//             !isInvers
//               ? "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"
//               : "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)"
//           }`,
//         }}
//       />
//       <div
//         className={`w-[50%]  capitalize py-10 ${
//           isInvers ? "pl-7 pr-5" : "pr-7"
//         } `}
//       >
//         <h1 className="font-black text-2xl mb-3">{titre}</h1>
//         <p className="font-medium text-gray-500 text-justify text-base mb-5">
//           {description}
//         </p>
//         <div className="flex flex-row gap-3 mb-5 items-center">
//           <h2 className="font-black text-[1.05rem]">Stack technique | </h2>
//           <div className="flex flex-row gap-3">
//             {stacks.map((stack, index) => (
//               <Image
//                 key={index}
//                 src={stack}
//                 alt="logo"
//                 width={25}
//                 height={25}
//               />
//             ))}
//           </div>
//         </div>
//         <ul className="flex flex-row gap-10">
//           <li>
//             <Link
//               href={lienDemo}
//               className=" flex flex-row justify-center items-center gap-1 font-bold rounded-[5px] border-[0.05rem] p-1  border-zinc-300 capitalize hover:bg-emerald-100 hover:border-emerald-100 transition duration-300 hover:scale-[1.01]"
//             >
//               Live Demo <FaExternalLinkAlt className="text-sm" />
//             </Link>
//           </li>
//           <li>
//             <Link
//               href={lienGitHub}
//               className=" flex flex-row justify-center items-center gap-1 font-bold rounded-[5px] border-[0.05rem] p-1  border-zinc-300 capitalize hover:bg-emerald-100 hover:border-emerald-100 transition duration-300 hover:scale-[1.01]"
//             >
//               code
//               <FaGithub className="text-xl" />
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </>
// );
