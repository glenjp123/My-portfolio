const Skills = () => {
    const skills = [
      { category: "Languages", items: ["C/C++", "Java", "HTML", "CSS", "JavaScript"] },
      { category: "Libraries", items: ["C++ Standard Template Library (STL)", "ReactJS"] },
      { category: "Technologies", items: ["Git", "MySQL", "ExpressJS", "NodeJS", "MongoDB"] },
      { category: "Core Competencies", items: ["Data Structures and Algorithms", "Competitive Programming", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)"] },
      { category: "Relevant Coursework", items: ["Object-Oriented Programming with C++"] }
    ];
  
    return (
      <div className="p-6 bg-gray-700 min-h-screen bg-[url('https://t4.ftcdn.net/jpg/13/36/05/13/360_F_1336051399_C93MGq2VkJivK7gquAQSvUNSh479BwCU.webp')] bg-cover bg-center">
        <h1 className="text-3xl text-white font-bold mb-6 text-center">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-transparent border border-white rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-semibold text-white">{skill.category}</h2>
              <ul className="list-disc list-inside text-gray-200">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;
  