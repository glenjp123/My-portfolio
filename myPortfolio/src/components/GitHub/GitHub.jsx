import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function GitHub() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/glenjp123')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching GitHub data:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-700 text-white bg-[url('https://t4.ftcdn.net/jpg/13/36/05/13/360_F_1336051399_C93MGq2VkJivK7gquAQSvUNSh479BwCU.webp')] bg-cover bg-center">
            <motion.div 
                className="text-center p-6 bg-opacity-50 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {loading ? (
                    <motion.p 
                        className="text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                        Loading GitHub Data...
                    </motion.p>
                ) : (
                    <>
                        <motion.h1 
                            className="text-3xl font-bold"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            GitHub Followers: {data.followers}
                        </motion.h1>
                        
                        <motion.img 
                            className="mx-auto mt-4 rounded-full border-4 border-white shadow-lg"
                            src={data.avatar_url} 
                            alt="GitHub Avatar" 
                            width={150}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                        />

                        <motion.p 
                            className="mt-4 text-lg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            @{data.login}
                        </motion.p>
                    </>
                )}
            </motion.div>
        </div>
    );
}

export default GitHub;
