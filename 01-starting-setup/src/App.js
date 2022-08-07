import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const INITIAL_EXPENSES = [
  { id: "e1", title: "Car", amount: "94.12", date: new Date(2020, 7, 4) },
  { id: "e2", title: "TV", amount: "294.12", date: new Date(2021, 3, 2) },
  { id: "e3", title: "Apple", amount: "394.12", date: new Date(2020, 5, 1) },
  { id: "e4", title: "Phone", amount: "494.12", date: new Date(2019, 6, 2) },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
