import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { HERO_CONTENT } from "../constants";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse items-center">
        {/* Right column: Profile photo */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-12">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-stone-600 to-stone-400 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-700"></div>
              <img
                src="/assets/profile.jpg"
                alt="Shree Hari P"
                className="relative border border-stone-800 rounded-3xl object-cover shadow-2xl max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] w-full aspect-[3/4] object-top"
                width={460}
                height={600}
                fetchPriority="high"
              />
            </motion.div>
          </div>
        </div>

        {/* Left column: Bio & Actions */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10 lg:mt-16"
          >
            <motion.h1
              variants={childVariants}
              className="pb-2 text-4xl font-light tracking-tighter lg:text-7xl xl:text-8xl text-stone-100"
            >
              Shree Hari P
            </motion.h1>

            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-200 via-stone-400 to-stone-600 bg-clip-text text-2xl lg:text-3xl font-semibold tracking-tight text-transparent"
            >
              Software Developer &amp; MCA Student
            </motion.span>

            <motion.p
              variants={childVariants}
              className="my-2 max-w-xl py-6 text-lg lg:text-xl leading-relaxed tracking-tight text-stone-400 text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div variants={childVariants} className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Shree_Hari_P_Resume.pdf"
                className="bg-white rounded-full px-6 py-4 text-sm font-semibold text-stone-900 hover:bg-stone-200 hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-2"
              >
                <FaDownload className="text-sm" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="rounded-full px-6 py-4 text-sm font-medium text-stone-300 border border-stone-800 hover:border-stone-600 hover:bg-stone-900/60 hover:text-white transition-all"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
