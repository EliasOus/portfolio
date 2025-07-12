"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const handleClick = (label) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click", {
      event_category: "social",
      event_label: label,
    });
  }
};

export default function Lient({ href, label }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => handleClick(label)}
    >
      {label === "Linkedin" ? (
        <FaLinkedin className="text-2xl transition duration-300 hover:scale-110" />
      ) : (
        <FaGithub className="text-2xl transition duration-300 hover:scale-110" />
      )}
    </Link>
  );
}
