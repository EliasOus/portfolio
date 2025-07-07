import Link from "next/link";

export default function Header() {
  return (
    <div className="px-15 flex justify-between items-center h-12 ">
      <h1 className="text-gray-950 font-bold text-xl">
        <Link href="/">
          Ousameur.<span className="text-emerald-700 font-black">Elias</span>
        </Link>
      </h1>
      <ul className="flex gap-[1em]">
        <li>
          <Link href="/" className="capitalize font-semibold">
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/" className="font-semibold">
            A-propos
          </Link>
        </li>
        <li>
          <Link href="/" className="capitalize font-semibold">
            Projet
          </Link>
        </li>
        <li>
          <Link href="/" className="capitalize font-semibold">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
