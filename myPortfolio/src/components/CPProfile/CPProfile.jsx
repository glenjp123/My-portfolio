import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceArea, ReferenceLine } from "recharts";

const CPProfile = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [solvedProblems, setSolvedProblems] = useState(0);
  const [ratingHistory, setRatingHistory] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(`https://codeforces.com/api/user.info?handles=${username}`);
        setUserData(userResponse.data.result[0]);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to load user data.");
      }
    };

    const fetchSolvedProblems = async () => {
      try {
        const problemsResponse = await axios.get(`https://codeforces.com/api/user.status?handle=${username}`);
        const uniqueProblems = new Set(problemsResponse.data.result.map((sub) => sub.problem.name));
        setSolvedProblems(uniqueProblems.size);
      } catch (err) {
        console.error("Error fetching solved problems:", err);
        setError("Failed to load solved problems.");
      }
    };

    const fetchRatingHistory = async () => {
      try {
        const ratingResponse = await axios.get(`https://codeforces.com/api/user.rating?handle=${username}`);
        const ratingData = ratingResponse.data.result.map((entry) => ({
          contestId: entry.contestId,
          contestName: entry.contestName,
          rating: entry.newRating,
        }));
        setRatingHistory(ratingData);
      } catch (err) {
        console.error("Error fetching rating history:", err);
        setError("Failed to load rating history.");
      }
    };

    fetchUserData();
    fetchSolvedProblems();
    fetchRatingHistory();
  }, [username]);

  return (
    <div 
    className="p-6 bg-gray-700 min-h-screen bg-[url('https://t4.ftcdn.net/jpg/13/36/05/13/360_F_1336051399_C93MGq2VkJivK7gquAQSvUNSh479BwCU.webp')] bg-cover bg-center"
  >
      <h1 className="text-3xl text-white font-bold">Codeforces Profile</h1>

      {error && <p className="text-red-500">{error}</p>}

      {userData ? (
        <div className="mt-4 p-4 bg-gray-200 shadow rounded-lg">
          <h2 className="text-xl font-semibold">{userData.handle}</h2>
          <p>Rating: {userData.rating}</p>
          <p>Max Rating: {userData.maxRating}</p>
          <p>Rank: {userData.rank}</p>
          <p>Problems Solved: {solvedProblems}</p>

          {/* Rating Graph */}
          <h2 className="text-xl font-semibold mt-6">Rating History</h2>
          {ratingHistory.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={ratingHistory}>
                {/* Background Rating Bands */}
                <ReferenceArea y1={1200} y2={1400} fill="green" opacity={0.5} />
                <ReferenceArea y1={1400} y2={1600} fill="cyan" opacity={0.5} />
                <ReferenceArea y1={1600} y2={1900} fill="blue" opacity={0.5} />

                {/* Level Reference Lines */}
                <ReferenceLine y={1200} stroke="green" strokeDasharray="3 3" label="1200" />
                <ReferenceLine y={1400} stroke="cyan" strokeDasharray="3 3" label="1400" />
                <ReferenceLine y={1600} stroke="blue" strokeDasharray="3 3" label="1600" />
                <ReferenceLine y={1900} stroke="purple" strokeDasharray="3 3" label="1900" />

                <XAxis dataKey="contestId" tick={false} />
                <YAxis domain={[0, 2000]} allowDataOverflow={true} />
                <Tooltip />
                <Line type="monotone" dataKey="rating" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p>Loading rating graph...</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CPProfile;
