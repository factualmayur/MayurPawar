import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";

function Projects() {
  return (
    <>
      <div className="pb-4 border-b border-neutral-900">
        <div className="my-20 text-xl ">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -70 }}
            transition={{ duration: 0.9 }}
            className="my-20 text-4xl text-center "
          >
            Projects
          </motion.h1>
          <div className="flex flex-col gap-8">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="flex flex-wrap mb-8 lg:justify-evenly"
              >
                <div className="w-full mt-4 lg:w-1/4">
                  <motion.img
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    src={project.image}
                    alt={project.title}
                    height={280}
                    width={280}
                    className="mb-6 rounded-xl text-start"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full max-w-xl lg:w-3/4"
                >
                  <h6 className="mb-2 font-semibold ">{project.title}</h6>
                  <p className="mb-4 text-neutral-400">{project.description}</p>
                  <section className="flex flex-wrap mb-[-10px] gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 text-sm font-medium text-purple-400 rounded py-1mr-2 bg-neutral-900 text-pretty"
                    >
                      {tech}
                    </span>
                  ))}
                  </section>
                  <br />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-2 text-sm tracking-wide rounded shadow-lg bg-neutral-900 text-sky-300 hover:scale-110 ">
                      Project Review
                      {/* font-semibold tracking-tight text-transparent text-[18px] bg-clip-text bg-gradient-to-r from-sky-400 to-white drop-shadow-lg bg-neutral-900 p-1 mt-3  hover:scale-110 */}
                    </button>
                  </a>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
