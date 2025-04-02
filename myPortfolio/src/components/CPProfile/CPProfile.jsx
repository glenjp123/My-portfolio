import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, LineChart, Line, XAxis, YAxis, ReferenceLine } from "recharts";

const CPProfile = ({ username }) => {
  const [ratingHistory, setRatingHistory] = useState([]);
  const [topicData, setTopicData] = useState([]);
  const [solvedProblems, setSolvedProblems] = useState(0);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(`https://codeforces.com/api/user.info?handles=${username}`);
        setUserData(userResponse.data.result[0]);

        const ratingResponse = await axios.get(`https://codeforces.com/api/user.rating?handle=${username}`);
        setRatingHistory(
          ratingResponse.data.result.map((entry) => ({
            contestId: entry.contestId,
            contestName: entry.contestName,
            rating: entry.newRating,
          }))
        );

        const problemsResponse = await axios.get(`https://codeforces.com/api/user.status?handle=${username}`);
        const solvedSubmissions = problemsResponse.data.result.filter((sub) => sub.verdict === "OK");

        setSolvedProblems(new Set(solvedSubmissions.map((sub) => sub.problem.name)).size);

        const topicCount = {};
        solvedSubmissions.forEach((sub) => {
          sub.problem.tags.forEach((tag) => {
            topicCount[tag] = (topicCount[tag] || 0) + 1;
          });
        });

        setTopicData(Object.entries(topicCount).map(([name, value]) => ({ name, value })));
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data.");
      }
    };

    fetchData();
  }, [username]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#E74C3C", "#2ECC71", "#3498DB"];
  const isMobile = windowWidth < 768;
  const outerRadius = isMobile ? 80 : 120;

  return (
    <motion.div className="p-6 bg-gray-700 min-h-screen flex flex-col items-center text-white bg-[url('https://t4.ftcdn.net/jpg/13/36/05/13/360_F_1336051399_C93MGq2VkJivK7gquAQSvUNSh479BwCU.webp')] bg-cover bg-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      
      <motion.h1 className="text-3xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
        Codeforces Profile
      </motion.h1>

      {error && <p className="text-red-500">{error}</p>}

      {userData && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-2xl text-center">
          <h2 className="text-2xl font-semibold">{userData.handle}</h2>
          <p>Rating: {userData.rating}</p>
          <p>Max Rating: {userData.maxRating}</p>
          <p>Rank: {userData.rank}</p>
          <p>Problems Solved: {solvedProblems}</p>
        </div>
      )}

      {/* Rating Graph */}
      {ratingHistory.length > 0 && (
        <div className="w-full max-w-3xl mt-6">
          <h2 className="text-xl font-semibold mb-2">Rating History</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={ratingHistory}>
              <XAxis dataKey="contestId" tick={false} />
              <YAxis domain={[0, 2000]} />
              <Tooltip />
              <ReferenceLine y={1200} stroke="green" strokeDasharray="3 3" label="1200" />
              <ReferenceLine y={1400} stroke="cyan" strokeDasharray="3 3" label="1400" />
              <ReferenceLine y={1600} stroke="blue" strokeDasharray="3 3" label="1600" />
              <ReferenceLine y={1900} stroke="purple" strokeDasharray="3 3" label="1900" />
              <Line type="monotone" dataKey="rating" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Solved Topics Pie Chart */}
      {topicData.length > 0 && (
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
          <div className="flex justify-center">
            <ResponsiveContainer width={isMobile ? 250 : 400} height={isMobile ? 250 : 300}>
              <PieChart>
                <Pie data={topicData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={outerRadius} fill="#8884d8" label>
                  {topicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Topic List */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Topics Breakdown</h2>
            <ul className="bg-gray-800 p-4 rounded-lg shadow-md text-white w-full max-w-xs md:max-w-md">
              {topicData.map((entry, index) => (
                <li key={index} className="py-1 flex justify-between">
                  <span>{entry.name}</span>
                  <span className="font-bold">{entry.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CPProfile;
