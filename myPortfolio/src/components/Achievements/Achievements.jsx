import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    { title: "Bronze Medalist - Geek Olympics 2023", description: "Secured 107th rank in Geek Olympics CodeXtreme Weekly Contest 112. Won Bronze Medal for securing a position in the top 150." },
    { title: "Codeforces Rank - Pupil (1300+)", description: "Ranked in the top 10% of Competitive Programmers in India on Codeforces." },
    { title: "CodeChef Rank - 3 Star (Highest 1650+)", description: "Ranked in the top 9% of Competitive Programmers in India on CodeChef." },
    { title: "1st Rank - Quantum Coders", description: "Secured 1st place in the coding competition organized by CodeChef BVM." },
    { title: "2nd Rank - Codigo", description: "Secured 2nd place in the coding competition organized by CodeChef BVM and GFG BVM." },
    { title: "CodeChef Starters 96", description: "Secured 197th Global Rank in Division 3." },
    { title: "HackerEarth July Easy ’23", description: "Secured 79th Global Rank in the contest." },
    { title: "1100+ Problems Solved", description: "Solved over 1100 problems across various coding platforms including Codeforces, CodeChef, and LeetCode." }
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
          Achievements
        </motion.h1>

        {/* Achievements Grid with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="p-4 bg-transparent border border-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.h2 
                className="text-xl font-semibold text-white"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {achievement.title}
              </motion.h2>
              <motion.p 
                className="text-gray-200"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {achievement.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
