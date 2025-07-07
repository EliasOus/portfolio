"use client"
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-6 md:px-10 py-4 flex justify-between items-center bg-white shadow-sm">
      <h1 className="text-gray-950 font-bold text-xl">
        <Link href="/">
          Ousameur.<span className="text-emerald-700 font-black">Elias</span>
        </Link>
      </h1>

      {/* Menu Desktop */}
      <ul className="hidden md:flex gap-6">
        <li>
          <Link href="/" className="capitalize font-semibold">
            Accueil
          </Link>
        </li>
        <li>
          <Link href="#a-propos" className="font-semibold">
            A-propos
          </Link>
        </li>
        <li>
          <Link href="#projet" className="capitalize font-semibold">
            Projet
          </Link>
        </li>
        <li>
          <Link href="#contact" className="capitalize font-semibold">
            Contact
          </Link>
        </li>
      </ul>

      {/* Burger icon mobile */}
      <div className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Menu Mobile */}
      <ul
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg flex flex-col items-start justify-start gap-6 px-6 py-10 transition-transform duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <li>
          <Link href="/" className="capitalize font-semibold" onClick={() => setMenuOpen(false)}>
            Accueil
          </Link>
        </li>
        <li>
          <Link href="#a-propos" className="font-semibold" onClick={() => setMenuOpen(false)}>
            A-propos
          </Link>
        </li>
        <li>
          <Link href="#projet" className="capitalize font-semibold" onClick={() => setMenuOpen(false)}>
            Projet
          </Link>
        </li>
        <li>
          <Link href="#contact" className="capitalize font-semibold" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}