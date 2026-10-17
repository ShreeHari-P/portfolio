import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaTrophy, FaChessKnight, FaBookOpen, FaPlane } from "react-icons/fa";
import { CERTIFICATIONS, ACHIEVEMENTS, HOBBIES } from "../constants";

const Achievements = () => {
  return (
    <div className="pb-16 border-b border-stone-900/60">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl tracking-tight text-stone-100"
      >
        Certifications &amp; Achievements
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Certifications Card */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-stone-800 bg-stone-950/40 p-6 sm:p-8 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xl">
              <FaCertificate />
            </div>
            <h3 className="text-2xl font-semibold text-stone-100">
              Certifications
            </h3>
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-stone-800/80 bg-stone-900/40 hover:border-stone-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-stone-200 text-base">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-stone-400 mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-stone-800 text-stone-300 font-medium">
                    {cert.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Card */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-stone-800 bg-stone-950/40 p-6 sm:p-8 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xl">
              <FaTrophy />
            </div>
            <h3 className="text-2xl font-semibold text-stone-100">
              Key Achievements
            </h3>
          </div>

          <div className="space-y-4">
            {ACHIEVEMENTS.map((ach, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-stone-800/80 bg-stone-900/40 hover:border-stone-700 transition-colors"
              >
                <h4 className="font-semibold text-stone-200 text-base mb-1">
                  {ach.title}
                </h4>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {ach.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Extracurricular & Hobbies strip */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
        className="mt-12 max-w-5xl mx-auto rounded-2xl border border-stone-800/80 bg-stone-950/40 p-6 flex flex-wrap items-center justify-between gap-4"
      >
        <div className="flex items-center gap-2 text-stone-300">
          <span className="text-sm font-semibold tracking-wider uppercase text-stone-500">
            Hobbies &amp; Interests:
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-stone-800 bg-stone-900 px-4 py-1.5 text-sm text-stone-300">
            <FaChessKnight className="text-amber-400" /> Chess
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-stone-800 bg-stone-900 px-4 py-1.5 text-sm text-stone-300">
            <FaBookOpen className="text-blue-400" /> Reading Books
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-stone-800 bg-stone-900 px-4 py-1.5 text-sm text-stone-300">
            <FaPlane className="text-emerald-400" /> Traveling
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Achievements;
