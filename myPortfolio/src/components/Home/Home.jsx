import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="bg-gray-700 w-full min-h-screen flex flex-col items-center justify-center text-center bg-[url('https://t4.ftcdn.net/jpg/13/36/05/13/360_F_1336051399_C93MGq2VkJivK7gquAQSvUNSh479BwCU.webp')] bg-cover bg-center p-6">
      
      {/* Typing Animation Heading */}
      <motion.h2
        className="text-white text-3xl sm:text-5xl font-bold mb-6 font-[Montserrat]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span>Hi! I am </span>
        <span className="text-white">
          <Typewriter
            words={["Glenn Parmar"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
          />
        </span>
      </motion.h2>

      {/* Animated Profile Image */}
      <motion.div
        className="w-32 sm:w-48 md:w-64 lg:w-80"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <img
          className="rounded-full shadow-lg border-4 border-white"
          src="https://i.postimg.cc/Xq5WydkK/1742973619345-enhanced.png"
          alt="Glenn Parmar"
        />
      </motion.div>

      {/* Animated About Text */}
      <motion.p
        className="text-white text-lg sm:text-2xl max-w-3xl mt-6 px-4 leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        An Electrical Engineer passionate about coding, problem-solving, and web development.
      </motion.p>
    </div>
  );
}
