import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="pb-16 border-b border-stone-900/60">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl tracking-tight text-stone-100"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap lg:justify-center items-center gap-6 lg:gap-12"
          >
            {/* Project Image Preview */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3 flex justify-center"
            >
              <div className="group relative overflow-hidden rounded-2xl border border-stone-800 bg-stone-950/60 shadow-xl transition-all duration-500 hover:border-stone-600 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <img
                  src={project.image}
                  alt={project.title}
                  width={380}
                  height={240}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Project Information */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/3"
            >
              <h3 className="mb-2 font-semibold text-2xl text-stone-100 tracking-tight">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400 leading-relaxed text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-md bg-stone-900/90 border border-stone-800 px-3 py-1 text-sm font-medium text-stone-300"
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

export default Projects;
