import { useEffect, useState } from "react";

function Dashboard() {
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    totalHabits: 0,
    completedHabits: 0,
    totalGoals: 0,
  });

  useEffect(() => {
    const tasks =
      JSON.parse(localStorage.getItem("lifeos-tasks")) || [];

    const habits =
      JSON.parse(localStorage.getItem("lifeos-habits")) || [];

    const goals =
      JSON.parse(localStorage.getItem("lifeos-goals")) || [];

    setStats({
      totalTasks: tasks.length,
      completedTasks: tasks.filter(
        (task) => task.completed
      ).length,

      totalHabits: habits.length,
      completedHabits: habits.filter(
        (habit) => habit.completed
      ).length,

      totalGoals: goals.length,
    });
  }, []);

  const score =
    stats.totalTasks + stats.totalHabits === 0
      ? 0
      : Math.round(
          ((stats.completedTasks +
            stats.completedHabits) /
            (stats.totalTasks +
              stats.totalHabits)) *
            100
        );

  return (
    <>
      <h1>Life OS Dashboard</h1>

      <p style={{ marginTop: "10px" }}>
        Welcome back.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div className="card">
          <h2>{stats.totalTasks}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="card">
          <h2>{stats.completedTasks}</h2>
          <p>Completed Tasks</p>
        </div>

        <div className="card">
          <h2>{stats.totalHabits}</h2>
          <p>Total Habits</p>
        </div>

        <div className="card">
          <h2>{stats.totalGoals}</h2>
          <p>Goals</p>
        </div>
      </div>

      <div
        className="card"
        style={{ marginTop: "20px" }}
      >
        <h2>{score}%</h2>
        <p>Productivity Score</p>
      </div>
    </>
  );
}

export default Dashboard;