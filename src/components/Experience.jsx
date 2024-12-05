import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'motion/react'

function Experience() {
  return (
    <>
    <div className='pb-4 border-b border-neutral-900'>
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.8}}
      className='my-20 text-4xl text-center'> Experience</motion.h1>
      <div className='flex flex-col justify-around gap-6'>
        {EXPERIENCES.map((experience,index) =>(
            <div key={index} className='flex flex-wrap mb-8 text-xl lg:justify-center'>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:0.6}}
                className='w-full lg:w-1/2'>
                    <p className='mb-2 text-xl text-neutral-400'>{experience.year}</p>
                </motion.div>
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.6}}
                className='w-full max-w-xl lg:w-1/2'>
                <h6 className='mb-2 font-serif text-pretty'>
                    {experience.role} - <span className='text-sm text-purple-300'>{experience.company}</span>
                </h6>
                <p className='mb-4 text-neutral-400'>{experience.description}</p>
                {experience.technologies.map((tech,index)=>(
                    <span className='px-2 py-2 mt-4 mr-2 font-medium text-purple-800 rounded bg-neutral-900 text-pretty' key={index}>{tech}</span>
                ))}
                </motion.div>
                 </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Experience
