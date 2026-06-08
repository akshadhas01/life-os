import { useEffect, useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("lifeos-tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lifeos-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);

    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <>
      <h1>Task Manager</h1>

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
          placeholder="Add a task..."
          style={{
            padding: "10px",
            flex: 1,
          }}
        />

        <button
          onClick={addTask}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
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
        <h3>Total Tasks: {tasks.length}</h3>
        <h3>Completed: {completedTasks}</h3>
      </div>

      <div style={{ marginTop: "20px" }}>
        {tasks.map((task) => (
          <div
            key={task.id}
            style={{
              background: "white",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              <span
                style={{
                  marginLeft: "10px",
                  textDecoration: task.completed
                    ? "line-through"
                    : "none",
                }}
              >
                {task.text}
              </span>
            </div>

            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tasks;