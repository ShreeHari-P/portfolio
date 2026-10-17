import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiMongodb, SiC } from "react-icons/si";
import { TbApi } from "react-icons/tb";

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

const Technologies = () => {
  return (
    <div className="pb-24 border-b border-stone-900/60">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl tracking-tight text-stone-100"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
      >
        {/* Java */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4 border-2 border-stone-800 rounded-2xl bg-stone-950/40 hover:border-stone-600 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all flex flex-col items-center gap-2 group"
        >
          <FaJava className="text-6xl sm:text-7xl text-red-500 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-stone-400 font-medium">Java</span>
        </motion.div>

        {/* Spring Boot */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4 border-2 border-stone-800 rounded-2xl bg-stone-950/40 hover:border-stone-600 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all flex flex-col items-center gap-2 group"
        >
          <SiSpringboot className="text-6xl sm:text-7xl text-green-500 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-stone-400 font-medium">Spring Boot</span>
        </motion.div>

        {/* REST APIs */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4 border-2 border-stone-800 rounded-2xl bg-stone-950/40 hover:border-stone-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all flex flex-col items-center gap-2 group"
        >
          <TbApi className="text-6xl sm:text-7xl text-cyan-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-stone-400 font-medium">REST APIs</span>
        </motion.div>

        {/* MySQL */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4 border-2 border-stone-800 rounded-2xl bg-stone-950/40 hover:border-stone-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all flex flex-col items-center gap-2 group"
        >
          <SiMysql className="text-6xl sm:text-7xl text-blue-500 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-stone-400 font-medium">MySQL</span>
        </motion.div>

        {/* MongoDB */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4 border-2 border-stone-800 rounded-2xl bg-stone-950/40 hover:border-stone-600 hover:shadow-[0_0_20px_rgba(22,163,74,0.2)] transition-all flex flex-col items-center gap-2 group"
        >
          <SiMongodb className="text-6xl sm:text-7xl text-green-600 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-stone-400 font-medium">MongoDB</span>
        </motion.div>

        {/* Python */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4 border-2 border-stone-800 rounded-2xl bg-stone-950/40 hover:border-stone-600 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all flex flex-col items-center gap-2 group"
        >
          <FaPython className="text-6xl sm:text-7xl text-yellow-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-stone-400 font-medium">Python</span>
        </motion.div>

        {/* C Language */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4 border-2 border-stone-800 rounded-2xl bg-stone-950/40 hover:border-stone-600 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all flex flex-col items-center gap-2 group"
        >
          <SiC className="text-6xl sm:text-7xl text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-stone-400 font-medium">C Language</span>
        </motion.div>

        {/* React / Frontend */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4 border-2 border-stone-800 rounded-2xl bg-stone-950/40 hover:border-stone-600 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all flex flex-col items-center gap-2 group"
        >
          <FaReact className="text-6xl sm:text-7xl text-cyan-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-stone-400 font-medium">React.js</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
