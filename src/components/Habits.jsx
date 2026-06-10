import { useEffect, useState } from "react";

function Habits() {
  const [habits, setHabits] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedHabits = localStorage.getItem("lifeos-habits");

    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "lifeos-habits",
      JSON.stringify(habits)
    );
  }, [habits]);

  const addHabit = () => {
    if (!input.trim()) return;

    setHabits([
      ...habits,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);

    setInput("");
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed: !habit.completed,
            }
          : habit
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits(
      habits.filter((habit) => habit.id !== id)
    );
  };

  const completedHabits = habits.filter(
    (habit) => habit.completed
  ).length;

  return (
    <>
      <h1>Habit Tracker</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a habit..."
          style={{
            padding: "10px",
            flex: 1,
          }}
        />

        <button onClick={addHabit}>
          Add
        </button>
      </div>

      <div
        style={{
          marginTop: "20px",
          background: "white",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h3>Total Habits: {habits.length}</h3>

        <h3>
          Completed: {completedHabits}
        </h3>
      </div>

      <div style={{ marginTop: "20px" }}>
        {habits.map((habit) => (
          <div
            key={habit.id}
            style={{
              background: "white",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "10px",
              display: "flex",
              justifyContent:
                "space-between",
            }}
          >
            <div>
              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() =>
                  toggleHabit(habit.id)
                }
              />

              <span
                style={{
                  marginLeft: "10px",
                  textDecoration:
                    habit.completed
                      ? "line-through"
                      : "none",
                }}
              >
                {habit.text}
              </span>
            </div>

            <button
              onClick={() =>
                deleteHabit(habit.id)
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Habits;