import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { CONTACT } from "../constants";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="home" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-stone-200 to-stone-500 flex items-center justify-center text-black font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform">
            SH
          </div>
          <span className="font-semibold text-xl tracking-tight text-stone-200 group-hover:text-white transition-colors hidden sm:inline">
            Shree Hari
          </span>
        </a>
      </div>
      <div className="flex items-center justify-center gap-5 text-2xl text-stone-300">
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-400 hover:scale-110 transition-all duration-200"
          title="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-stone-100 hover:scale-110 transition-all duration-200"
          title="GitHub Profile"
        >
          <FaGithub />
        </a>
        <a
          href={`mailto:${CONTACT.email}`}
          aria-label="Email"
          className="hover:text-red-400 hover:scale-110 transition-all duration-200"
          title={`Email: ${CONTACT.email}`}
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
