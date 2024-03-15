// App.jsx
import React, { useReducer, useState } from "react";
import CategorySelect from "./component/CategorySelect"; // Renommé SelectCategory en CategorySelect
import SelectAmount from "./component/SelectAmount";

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

  const addExpense = (e) => {
    e.preventDefault();

    dispatch({ type: "addExpense", payload: { amount, category } });
    setAmount("");
    setCategory("");
  };

  return (
    <div>
      <form onSubmit={addExpense}>
        <SelectAmount value={amount} onChange={handleAmountChange} />
        <CategorySelect onChange={handleCategoryChange} />{" "}
        {/* Utiliser CategorySelect ici */}
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
    </div>
  );
}

export default App;
