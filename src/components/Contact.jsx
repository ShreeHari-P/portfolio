import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheck, FaCopy } from "react-icons/fa";
import { CONTACT } from "../constants";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="contact" className="border-t border-stone-900 pb-20 pt-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl tracking-tight text-stone-100"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center tracking-tight flex flex-col items-center justify-center space-y-4"
      >
        <div className="flex items-center gap-2 text-stone-400">
          <FaMapMarkerAlt className="text-stone-500" />
          <p className="my-1 text-base sm:text-lg">{CONTACT.address}</p>
        </div>

        <div className="flex items-center gap-2 text-stone-400">
          <FaPhone className="text-stone-500" />
          <a
            href={`tel:${CONTACT.phoneNo.replace(/\s+/g, '')}`}
            className="my-1 text-base sm:text-lg hover:text-stone-200 transition-colors"
          >
            {CONTACT.phoneNo}
          </a>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <FaEnvelope className="text-stone-500" />
          <a
            href={`mailto:${CONTACT.email}`}
            className="border-b border-stone-500 pb-0.5 text-base sm:text-lg text-stone-200 hover:text-white hover:border-white transition-colors"
          >
            {CONTACT.email}
          </a>
          <button
            onClick={handleCopyEmail}
            className="p-1.5 rounded-md hover:bg-stone-800 text-stone-400 hover:text-stone-200 transition-colors"
            title="Copy email to clipboard"
            aria-label="Copy email"
          >
            {copied ? <FaCheck className="text-green-400 text-sm" /> : <FaCopy className="text-sm" />}
          </button>
        </div>

        {copied && (
          <p className="text-xs text-green-400 animate-fade-in font-medium">
            Email copied to clipboard!
          </p>
        )}

        <div className="pt-16 text-xs text-stone-600 font-mono">
          &copy; {new Date().getFullYear()} Shree Hari P. Built with React &amp; Tailwind CSS.
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
