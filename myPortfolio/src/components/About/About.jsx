import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex items-center bg-gray-700 bg-[url('https://t4.ftcdn.net/jpg/13/36/05/13/360_F_1336051399_C93MGq2VkJivK7gquAQSvUNSh479BwCU.webp')] bg-cover bg-center p-6">
      <div className="container mx-auto text-white md:px-12 xl:px-6">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Left Section - Animated Text */}
          <motion.div
            className="w-full md:w-7/12 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <p className="mt-6 text-white text-base sm:text-lg leading-relaxed">
              I'm <span className="text-yellow-400 font-semibold">Glenn Parmar</span>, an Electrical Engineering graduate with a strong passion for coding and technology. 
              While my background is in electrical engineering, I've honed my skills in <strong>C++, Java, full-stack web development (MERN stack), and competitive programming.</strong>
            </p>
            <p className="mt-4 text-white text-base sm:text-lg leading-relaxed ">
              I thrive on solving complex problems, building efficient systems, and continuously expanding my knowledge. 
              My experience includes developing real-time applications and tackling algorithmic challenges on platforms like <strong>Codeforces</strong> and <strong>LeetCode</strong>.
            </p>
          </motion.div>

          {/* Right Section - Animated Image */}
          <motion.div
            className="w-full md:w-5/12 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img
              className="w-40 sm:w-60 md:w-72 lg:w-80 xl:w-96 rounded-lg shadow-lg"
              src="https://i.postimg.cc/3NJP36zv/Screenshot-2025-03-26-131642.png"
              alt="Glenn Parmar"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
