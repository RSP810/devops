import { useState } from "react";
import "./App.css";

function App() {
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const [amount, setAmount] = useState("");

  const handleAddIncome = () => {
    if (!amount) return alert("Enter an amount");
    setIncomeList([...incomeList, Number(amount)]);
    setAmount("");
  };

  const handleAddExpense = () => {
    if (!amount) return alert("Enter an amount");
    setExpenseList([...expenseList, Number(amount)]);
    setAmount("");
  };

  const totalIncome = incomeList.reduce((sum, val) => sum + val, 0);
  const totalExpense = expenseList.reduce((sum, val) => sum + val, 0);
  const balance = totalIncome - totalExpense;

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">💰 Personal Finance Tracker</h1>
        <p className="subtitle">Track your income and expenses easily.</p>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input"
        />

        <div className="button-group">
          <button className="income-btn" onClick={handleAddIncome}>
            Add Income
          </button>
          <button className="expense-btn" onClick={handleAddExpense}>
            Add Expense
          </button>
        </div>

        <div className="summary">
          <h3>📈 Income: ₹{totalIncome}</h3>
          <h3>📉 Expense: ₹{totalExpense}</h3>
          <h3>💼 Balance: ₹{balance}</h3>
        </div>

        <div className="history">
          <h4>📜 History</h4>
          {incomeList.map((amt, i) => (
            <p key={"inc" + i}>+ ₹{amt}</p>
          ))}
          {expenseList.map((amt, i) => (
            <p key={"exp" + i}>- ₹{amt}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;