import { useState } from "react";
import Tasks from "./components/Tasks";
import Habits from "./components/Habits";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("tasks");

  const renderPage = () => {
    switch (activePage) {
      case "tasks":
        return <Tasks />;
      case "habits":
        return <Habits />;
      default:
        return <Tasks />;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "260px",
          backgroundColor: "#111827",
          color: "white",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            margin: 0,
            marginBottom: "8px",
          }}
        >
          Life OS
        </h1>

        <p
          style={{
            color: "#9CA3AF",
            fontSize: "14px",
            marginBottom: "30px",
          }}
        >
          Personal Productivity Hub
        </p>

        <button
          onClick={() => setActivePage("tasks")}
          style={buttonStyle(activePage === "tasks")}
        >
          ✅ Tasks
        </button>

        <button
          onClick={() => setActivePage("habits")}
          style={buttonStyle(activePage === "habits")}
        >
          🔥 Habits
        </button>

        <button
          disabled
          style={disabledButtonStyle}
        >
          🎯 Goals (Coming Soon)
        </button>

        <button
          disabled
          style={disabledButtonStyle}
        >
          📝 Notes (Coming Soon)
        </button>

        <div
          style={{
            marginTop: "auto",
            color: "#6B7280",
            fontSize: "12px",
          }}
        >
          Version 1.0
        </div>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "32px",
          backgroundColor: "#F3F4F6",
          overflowY: "auto",
        }}
      >
        {renderPage()}
      </main>
    </div>
  );
}

const buttonStyle = (active) => ({
  padding: "12px",
  marginBottom: "10px",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  textAlign: "left",
  backgroundColor: active ? "#374151" : "transparent",
  color: "white",
  fontSize: "15px",
});

const disabledButtonStyle = {
  padding: "12px",
  marginBottom: "10px",
  border: "none",
  borderRadius: "10px",
  textAlign: "left",
  backgroundColor: "transparent",
  color: "#6B7280",
  cursor: "not-allowed",
};

export default App;