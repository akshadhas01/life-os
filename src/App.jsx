import { useState } from "react";

import Dashboard from "./components/Dashboard";
import Tasks from "./components/Tasks";
import Habits from "./components/Habits";
import Goals from "./components/Goals";
import Notes from "./components/Notes";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;

      case "tasks":
        return <Tasks />;

      case "habits":
        return <Habits />;

      case "goals":
        return <Goals />;

      case "notes":
        return <Notes />;

      default:
        return <Dashboard />;
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
            marginBottom: "6px",
            fontSize: "28px",
          }}
        >
          Life OS
        </h1>

        <p
          style={{
            color: "#9CA3AF",
            marginBottom: "30px",
            fontSize: "14px",
          }}
        >
          Your personal productivity hub
        </p>

        <button
          className={`sidebar-btn ${
            activePage === "dashboard" ? "active" : ""
          }`}
          onClick={() => setActivePage("dashboard")}
        >
          🏠 Dashboard
        </button>

        <button
          className={`sidebar-btn ${
            activePage === "tasks" ? "active" : ""
          }`}
          onClick={() => setActivePage("tasks")}
        >
          ✅ Tasks
        </button>

        <button
          className={`sidebar-btn ${
            activePage === "habits" ? "active" : ""
          }`}
          onClick={() => setActivePage("habits")}
        >
          🔥 Habits
        </button>

        <button
          className={`sidebar-btn ${
            activePage === "goals" ? "active" : ""
          }`}
          onClick={() => setActivePage("goals")}
        >
          🎯 Goals
        </button>

        <button
          className={`sidebar-btn ${
            activePage === "notes" ? "active" : ""
          }`}
          onClick={() => setActivePage("notes")}
        >
          📝 Notes
        </button>

        <div
          style={{
            marginTop: "auto",
            color: "#6B7280",
            fontSize: "12px",
          }}
        >
          Life OS v1.0
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

export default App;