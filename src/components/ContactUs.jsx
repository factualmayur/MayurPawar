import React from 'react';
import { motion } from 'framer-motion'; // Correct import for motion
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

function ContactUs() {
  return (
    <div className='pb-12 mt-8 border-b border-neutral-900'>
      {/* Title with smooth fade-in effect */}
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold tracking-tight text-center text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-200 bg-clip-text"
      >
        Link up
      </motion.h1>

      {/* Social Links */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-6 mt-8 text-4xl"
      >
        <a 
          href="https://www.linkedin.com/in/factualmayur/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-800 transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>

        <a 
          href="mailto:factualmayur@gmail.com" 
          className="transform transsition-transform text-slate-300 hover:scale-110"
        >
          <MdEmail />
        </a>

        <a 
          href="https://www.instagram.com/factualmayur/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-pink-600 transition-transform transform hover:scale-110"
        >
          <FaInstagram />
        </a>
      </motion.div>
    </div>
  );
}

export default ContactUs;
