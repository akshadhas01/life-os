function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          backgroundColor: "#1f2937",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>Life OS</h2>

        <div style={{ marginTop: "30px" }}>
          <p>📊 Dashboard</p>
          <p>✅ Tasks</p>
          <p>🔥 Habits</p>
          <p>🎯 Goals</p>
          <p>📝 Notes</p>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "30px",
          backgroundColor: "#f3f4f6",
        }}
      >
        <h1>Dashboard</h1>
        <p>Welcome back to Life OS.</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div style={cardStyle}>
            <h3>Tasks</h3>
            <p>0 Tasks</p>
          </div>

          <div style={cardStyle}>
            <h3>Habits</h3>
            <p>0 Completed</p>
          </div>

          <div style={cardStyle}>
            <h3>Goals</h3>
            <p>0 Active Goals</p>
          </div>

          <div style={cardStyle}>
            <h3>Notes</h3>
            <p>0 Notes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

export default App;