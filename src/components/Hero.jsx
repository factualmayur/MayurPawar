import React from "react";
import { HERO_CONTENT } from "../constants";
import Prof_Img from "../assets/projects/ProfilePic.jpg";
import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, delay: delay },
  },
});

function Hero() {
  return (
    <div className="pb-4 border-b border-neutral-900 lg:mb-35">
      <div className="flex flex-wrap justify-evenly">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              whileInView="visible"
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Mayur Pawar
            </motion.h1>
            
            <motion.span 
            variants={container(0.3)}
            initial="hidden"
            whileInView="visible"
            className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-200 bg-clip-text">
              Full Stack Developer
            </motion.span>
            
            <motion.p 
            variants={container(0.4)}
            initial="hidden"
            whileInView="visible"
            className="max-w-xl py-6 my-2 font-light tracking-tighter text-pretty">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div>
          <motion.img 
          initial={{x:100,opacity:-10}} 
          whileInView={{x:0, opacity:1}}
          transition={{duration:1}}
          className="w-[400px] rounded-2xl" src={Prof_Img} 
          alt="Prof_Img" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
