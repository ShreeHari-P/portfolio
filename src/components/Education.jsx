import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Education = () => {
  return (
    <div className="pb-16 border-b border-stone-900/60">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl tracking-tight text-stone-100"
      >
        Education
      </motion.h2>

      <div>
        {EXPERIENCES.map((item, index) => (
          <div
            key={index}
            className="mb-10 flex flex-wrap lg:justify-center gap-2 lg:gap-8"
          >
            {/* Year column */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <span className="inline-block rounded-full bg-stone-900/80 border border-stone-800 px-3 py-1 text-sm font-medium text-stone-300">
                {item.year}
              </span>
            </motion.div>

            {/* Content column */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-xl text-stone-100">
                {item.role} &minus;{" "}
                <span className="text-sm font-normal text-stone-400">
                  {item.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-400 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-stone-900 px-2.5 py-1 text-xs font-medium text-stone-300 border border-stone-800/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
