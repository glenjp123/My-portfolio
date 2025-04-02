import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { category: "Languages", items: ["C/C++", "Java", "HTML", "CSS", "JavaScript"] },
    { category: "Libraries", items: ["C++ Standard Template Library (STL)", "ReactJS"] },
    { category: "Technologies", items: ["Git", "MySQL", "ExpressJS", "NodeJS", "MongoDB"] },
    { category: "Core Competencies", items: ["Data Structures and Algorithms", "Competitive Programming", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)"] },
    { category: "Relevant Coursework", items: ["Object-Oriented Programming with C++"] }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-700 bg-[url('https://t4.ftcdn.net/jpg/13/36/05/13/360_F_1336051399_C93MGq2VkJivK7gquAQSvUNSh479BwCU.webp')] bg-cover bg-center">
      <div className="w-full max-w-4xl">
        
        {/* Heading Animation */}
        <motion.h1 
          className="text-3xl text-white font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h1>

        {/* Skills Grid with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 bg-transparent border border-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h2 className="text-xl font-semibold text-white">{skill.category}</h2>
              <ul className="list-disc list-inside text-gray-200">
                {skill.items.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
