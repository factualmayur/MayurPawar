import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { motion } from "framer-motion"; // Correct import for framer-motion

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between py-6 mb-20 text-4xl w-[86%] m-auto">
        <motion.div 
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center flex-shrink-0"
        >
          <GiTechnoHeart className="text-6xl" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-6 ml-12"
        >
          <a href="https://www.linkedin.com/in/factualmayur/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-800 cursor-pointer hover:scale-110" />
          </a>

          <a href="https://github.com/factualmayur" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white cursor-pointer hover:scale-110" />
          </a>

          <a href="https://www.instagram.com/factualmayur/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-600 cursor-pointer hover:scale-110" />
          </a>
        </motion.div>
      </nav>
    </>
  );
}

export default Navbar;
