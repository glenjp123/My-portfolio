import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces, SiCodio } from "react-icons/si";

const Contact = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/glenn-parmar-61290a235/" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/glennparmar.556/" },
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/glenjp123" },
    { name: "LeetCode", icon: <SiLeetcode />, url: "https://leetcode.com/glenjp123" },
    { name: "CodeChef", icon: <SiCodechef />, url: "https://www.codechef.com/users/glenjp123" },
    { name: "Codeforces", icon: <SiCodeforces />, url: "https://codeforces.com/profile/GreatestEver" },
    { name: "Codolio", icon: <SiCodio />, url: "https://codolio.com/profile/GreatestEver" },
  ];

  return (
    <div className="p-6 min-h-screen flex items-center justify-center text-white bg-[url('https://t4.ftcdn.net/jpg/13/36/05/13/360_F_1336051399_C93MGq2VkJivK7gquAQSvUNSh479BwCU.webp')] bg-cover bg-center">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 max-w-4xl w-full rounded-lg shadow-lg p-6 bg-opacity-50"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left Side - Contact Heading */}
        <motion.div 
          className="flex flex-col justify-center items-center md:border-r border-gray-400 md:pr-6 mb-6 md:mb-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center">Contact With Me</h1>
        </motion.div>

        {/* Right Side - Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 text-lg p-3 rounded-lg bg-gray-900 bg-opacity-30 hover:bg-opacity-60 transition duration-200 backdrop-blur-sm border border-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ scale: 1.12, rotate: 3, transition: { duration: 0.15 } }} // Faster response
          >
            <span className="text-3xl">{social.icon}</span>
            <span>{social.name}</span>
          </motion.a>
          
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
