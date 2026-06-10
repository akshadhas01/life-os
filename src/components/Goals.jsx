import { useEffect, useState } from "react";

function Goals() {
  const [goals, setGoals] = useState([]);
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState("");

  useEffect(() => {
    const savedGoals = localStorage.getItem("lifeos-goals");

    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "lifeos-goals",
      JSON.stringify(goals)
    );
  }, [goals]);

  const addGoal = () => {
    if (!title.trim()) return;

    setGoals([
      ...goals,
      {
        id: Date.now(),
        title,
        progress: Number(progress) || 0,
      },
    ]);

    setTitle("");
    setProgress("");
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <>
      <h1>Goals</h1>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <input
          placeholder="Goal name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="%"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
        />

        <button onClick={addGoal}>
          Add Goal
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {goals.map((goal) => (
          <div className="list-item" key={goal.id}>
            <div>
              <strong>{goal.title}</strong>
              <p>{goal.progress}% Complete</p>
            </div>

            <button onClick={() => deleteGoal(goal.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Goals;