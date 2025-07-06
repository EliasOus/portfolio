import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Projet({
  image,
  titre,
  description,
  lienDemo,
  lienGitHub,
  isInvers = false,
  stacks,
}) {
  return (
    <>
      <div
        className={`flex ${
          isInvers ? "flex-row-reverse border-r-0" : "flex-row border-l-0"
        }  border-[0.05rem] border-zinc-200  rounded-[20px]`}
      >
        <Image
          src={image}
          alt={titre}
          width={500}
          height={500}
          className={`${isInvers ? "rounded-r-[20px]" : "rounded-l-[20px]"}`}
          style={{
            clipPath: `${
              !isInvers
                ? "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"
                : "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)"
            }`,
          }}
        />
        <div
          className={`w-[50%]  capitalize py-10 ${
            isInvers ? "pl-7 pr-5" : "pr-7"
          } `}
        >
          <h1 className="font-black text-2xl mb-3">{titre}</h1>
          <p className="font-medium text-gray-500 text-justify text-base mb-5">
            {description}
          </p>
          <div className="flex flex-row gap-3 mb-5 items-center">
            <h2 className="font-black text-[1.05rem]">Stack technique | </h2>
            <div className="flex flex-row gap-3">
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
          <ul className="flex flex-row gap-10">
            <li>
              <Link
                href={lienDemo}
                className=" flex flex-row justify-center items-center gap-1 font-bold rounded-[5px] border-[0.05rem] p-1  border-zinc-400 capitalize hover:bg-emerald-200 hover:border-emerald-200 transition duration-300 hover:scale-105"
              >
                Live Demo <FaExternalLinkAlt className="text-sm" />
              </Link>
            </li>
            <li>
              <Link
                href={lienGitHub}
                className=" flex flex-row justify-center items-center gap-1 font-bold rounded-[5px] border-[0.05rem] p-1  border-zinc-400 capitalize hover:bg-emerald-200 hover:border-emerald-200 transition duration-300 hover:scale-105"
              >
                code
                <FaGithub className="text-xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
