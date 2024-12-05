import React from "react";
// import AboutImg from '../assets/projects/about2.jpg'
import AboutImg from '../assets/projects/abtimg.png'
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react"

function About() {
  return (
    <>
      <div className="pb-4 border-b border-neutral-900">
        <motion.h1 
        whileInView={{opacity:1,y:30}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.8}}
        className="my-20 text-4xl text-center ">
          About 
          <span className="m-2 text-neutral-400">  Me</span>
        </motion.h1>
        <div className="flex flex-wrap items-center">
        <motion.div 
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ x: -100, opacity: 0 }}
  transition={{ duration: 0.6 }}
  className="w-full lg:w-1/2 lg:p-8"
>
  <div className="flex items-center justify-center">
    <div className="relative ">
      <img
        className="transition-all duration-500 rounded-2xl w-[75%]"
        src={AboutImg} 
        alt="About Image"
      />
    </div>
  </div>
</motion.div>

            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial ={{x:100,opacity:1}}
            transition={{duration:0.6}}
            className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="max-w-xl py-6 my-2 tracking-tight text-pretty">{ABOUT_TEXT}</p>
                </div>
                </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
