import React, { useState } from "react";
import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const enteredData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(enteredData);

    setIsEditing(false);
  };

  const startEditingHandler = (event) => {
    setIsEditing(true);
  };

  const stopEditingHandler = (event) => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};
