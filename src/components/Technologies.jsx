import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import JavaSvg from '../assets/projects/java.svg'
import { motion } from "motion/react"
import { animate } from 'motion';
import { RiTailwindCssFill } from "react-icons/ri";

const iconsVariants = (duration) => ({
  initial: { y: -10 }, // Initial position
  animate: {
    y: [10, -10], // Animation range
    transition: {
      duration: duration, // Duration for the animation
      ease: "linear", // Smooth, linear movement
      repeat: Infinity, // Infinite loop
      repeatType: "reverse" // Reverse direction on each loop
    }
  }
});

function Technologies() {
  return (
    <>
     <div className='pb-24 border-b border-neutral-900'>
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
        className='my-20 text-4xl text-center'>Technologies</motion.h1>
        
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration :1.2}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconsVariants(2.5)}
            initial="initial"
            animate="animate"
            className='p-4 border-2 rounded-2xl border-neutral-800'>
            <FaHtml5 className='text-orange-600 text-7xl'/>
            </motion.div>
            
            <motion.div 
            variants={iconsVariants(3)}
            initial="initial"
            animate="animate"
            className='p-4 border-2 rounded-2xl border-neutral-800'>
            <DiCss3 className='text-blue-500 text-7xl'/>
            </motion.div>
            
            <motion.div 
            variants={iconsVariants(6)}
            initial="initial"
            animate="animate"
            className='p-4 border-2 rounded-2xl border-neutral-800'>
            <RiTailwindCssFill className='text-sky-500 text-7xl'/>
            </motion.div>
            
            <motion.div 
            variants={iconsVariants(2)}
            initial="initial"
            animate="animate"
            className='p-4 border-2 rounded-2xl border-neutral-800'>
            <RiJavascriptFill className='text-yellow-400 text-7xl'/>
            </motion.div>

            <motion.div 
            variants={iconsVariants(6)}
            initial="initial"
            animate="animate"
            className='p-4 border-2 rounded-2xl border-neutral-800'>
            <FaReact className='text-sky-400 text-7xl'/>
            </motion.div>

            <motion.div 
            variants={iconsVariants(3)}
            initial="initial"
            animate="animate"
            className='p-4 border-2 rounded-2xl border-neutral-800'>
            <img className='w-[70px]' src={JavaSvg} alt="" />
            </motion.div>

            <motion.div 
            variants={iconsVariants(5)}
            initial="initial"
            animate="animate"
            className='p-4 border-2 rounded-2xl border-neutral-800'>
            <FaGithub className='text-white text-7xl'/>
            </motion.div>
            
        </motion.div>
        </div> 
    </>
  )
}

export default Technologies
