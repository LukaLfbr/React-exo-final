// App.jsx
import React, { useReducer, useState } from "react";
import CategorySelect from "./component/CategorySelect";
import SelectAmount from "./component/SelectAmount";
import "./App.css";

const initialState = {
  expenses: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addExpense":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCategoryChange = (selectedValue) => {
    setCategory(selectedValue);
  };

  const [isWarningActive, setWarning] = useState(false);

  const addExpense = (e) => {
    e.preventDefault();
    if (amount > 0 && category !== "") {
      dispatch({ type: "addExpense", payload: { amount, category } });
      setAmount("");
      setCategory("");
      setWarning(false);
    } else {
      setWarning(true);
    }
  };

  const totalExpense = state.expenses.reduce(
    (total, expense) => total + parseFloat(expense.amount),
    0
  );

  return (
    <div>
      <form onSubmit={addExpense}>
        <div className="wrapper">
          <SelectAmount value={amount} onChange={handleAmountChange} />
          <CategorySelect onChange={handleCategoryChange} />
        </div>
        <p style={{ display: isWarningActive ? "block" : "none" }}>
          You must enter a value and a category
        </p>
        <button type="submit">Add Expense</button>
      </form>

      <h2>Expenses:</h2>
      <ul>
        {state.expenses.map((expense, index) => (
          <li key={index}>
            Amount: {expense.amount}, Category: {expense.category}
          </li>
        ))}
      </ul>
      <div>Total spent : {totalExpense}</div>
    </div>
  );
}

export default App;
