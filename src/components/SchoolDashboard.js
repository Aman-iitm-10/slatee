import { useState, useEffect } from "react"
import axios from "axios"

function SchoolDashboard() {
  const [achievements, setAchievements] = useState([])

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await axios.get("http://localhost:5000/student/achievements/all", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        setAchievements(response.data)
      } catch (error) {
        console.error("Failed to fetch achievements:", error)
      }
    }

    fetchAchievements()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">School Dashboard</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-xl font-bold">Student Achievements</h2>
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-md">
                    <p>
                      <strong>Student:</strong> {achievement.name}
                    </p>
                    <p>
                      <strong>Achievement:</strong> {achievement.achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolDashboard

