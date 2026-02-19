import React, { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);

  const numClick = (n) => setDisplay(display === "0" ? String(n) : display + n);
  
  const opClick = (operator) => {
    setPrev(display);
    setOp(operator);
    setDisplay("0");
  };

  const calculate = () => {
    const a = parseFloat(prev);
    const b = parseFloat(display);
    if (op === "+") setDisplay(String(a + b));
    if (op === "-") setDisplay(String(a - b));
    if (op === "*") setDisplay(String(a * b));
    if (op === "/") setDisplay(String(a / b));
    setOp(null);
  };

  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "10px" }}>
      <div style={{ fontSize: "2rem", textAlign: "right", border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
        {display}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "5px" }}>
        {[7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", "C", 0, "=", "+"].map(btn => (
          <button 
            key={btn}
            onClick={() => {
              if (typeof btn === "number") numClick(btn);
              else if (btn === "=") calculate();
              else if (btn === "C") setDisplay("0");
              else opClick(btn);
            }}
            style={{ padding: "20px", fontSize: "1.2rem", cursor: "pointer" }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;