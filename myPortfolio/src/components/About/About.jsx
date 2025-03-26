import React from 'react'

export default function About() {
  return (
    <div 
  className="py-16 bg-gray-700 bg-[url('https://t4.ftcdn.net/jpg/13/36/05/13/360_F_1336051399_C93MGq2VkJivK7gquAQSvUNSh479BwCU.webp')] bg-cover bg-center"
>
          <div className="container m-auto px-6 text-white md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://i.postimg.cc/3NJP36zv/Screenshot-2025-03-26-131642.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-white font-bold md:text-4xl">
                          About Me
                      </h2>
                      <p className="mt-6 text-white">
                      I'm Glenn Parmar, an Electrical Engineering graduate with a strong passion for coding and technology. While my background is in electrical engineering, 
                      I've honed my skills in C++, Java, full-stack web development (MERN stack), and competitive programming.
                      I thrive on solving complex problems, building efficient systems, and continuously expanding my knowledge.
                      My experience ranges from developing real-time applications to tackling challenging algorithmic problems on platforms like Codeforces and LeetCode.
                      Beyond programming, I’m always eager to explore emerging technologies, work on impactful projects, and collaborate with like-minded individuals.
                      </p>
                      {/* <p className="mt-4 text-white">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p> */}
                  </div>
              </div>
          </div>
      </div>
  );
}
