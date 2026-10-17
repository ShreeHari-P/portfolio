import React from "react";
import { motion } from "framer-motion";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiJunit5, SiPostman } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tools = () => {
  return (
    <div className="pb-24 border-b border-stone-900/60">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl tracking-tight text-stone-100"
      >
        Tools &amp; Environment
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
      >
        {/* VS Code */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4 border-2 border-stone-800 rounded-2xl bg-stone-950/40 hover:border-stone-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all flex flex-col items-center gap-2 group"
        >
          <VscVscode className="text-6xl sm:text-7xl text-blue-500 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-stone-400 font-medium">VS Code</span>
        </motion.div>

        {/* Git */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4 border-2 border-stone-800 rounded-2xl bg-stone-950/40 hover:border-stone-600 hover:shadow-[0_0_20px_rgba(234,88,12,0.2)] transition-all flex flex-col items-center gap-2 group"
        >
          <FaGitAlt className="text-6xl sm:text-7xl text-orange-600 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-stone-400 font-medium">Git</span>
        </motion.div>

        {/* GitHub */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(7)}
          className="p-4 border-2 border-stone-800 rounded-2xl bg-stone-950/40 hover:border-stone-600 hover:shadow-[0_0_20px_rgba(245,245,244,0.2)] transition-all flex flex-col items-center gap-2 group"
        >
          <FaGithub className="text-6xl sm:text-7xl text-stone-100 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-stone-400 font-medium">GitHub</span>
        </motion.div>

        {/* Postman */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4 border-2 border-stone-800 rounded-2xl bg-stone-950/40 hover:border-stone-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all flex flex-col items-center gap-2 group"
        >
          <SiPostman className="text-6xl sm:text-7xl text-orange-500 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-stone-400 font-medium">Postman</span>
        </motion.div>

        {/* JUnit 5 */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4 border-2 border-stone-800 rounded-2xl bg-stone-950/40 hover:border-stone-600 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all flex flex-col items-center gap-2 group"
        >
          <SiJunit5 className="text-6xl sm:text-7xl text-green-500 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-stone-400 font-medium">JUnit 5</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tools;
