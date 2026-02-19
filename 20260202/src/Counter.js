import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // 🎨 Dynamic number color
  const getCountColor = () => {
    if (count > 0) return "#2ecc71"; // Green
    if (count < 0) return "#e74c3c"; // Red
    return "#2c3e50"; // Dark
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2 style={{ color: "#7f8c8d", marginBottom: "20px" }}>
          Counter Application
        </h2>

        <h1 style={{ fontSize: "60px", color: getCountColor(), margin: "20px 0" }}>
          {count}
        </h1>

        <div>
          <button
            onClick={increment}
            style={{ ...buttonStyle, backgroundColor: "#2ecc71" }}
          >
            Increment
          </button>

          <button
            onClick={decrement}
            style={{
              ...buttonStyle,
              backgroundColor: "#e74c3c",
              margin: "0 10px",
            }}
          >
            Decrement
          </button>

          <button
            onClick={reset}
            style={{ ...buttonStyle, backgroundColor: "#34495e" }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

/* 🌈 Full page background */
const pageStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #74ebd5, #9face6)",
  fontFamily: "Arial, sans-serif",
};

/* 📦 Card */
const cardStyle = {
  backgroundColor: "#ffffff",
  padding: "40px 60px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
};

/* 🔘 Buttons */
const buttonStyle = {
  padding: "12px 22px",
  fontSize: "16px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  color: "white",
};

export default Counter;
