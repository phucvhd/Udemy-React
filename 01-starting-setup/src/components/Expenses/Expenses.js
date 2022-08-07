import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export const Expenses = (props) => {
  const [filter, setFilter] = useState("2020");
  const filterHandler = (filterValue) => {
    setFilter(filterValue);
  };
  const filterExpenses = props.items.filter(
    (element) => element.date.getFullYear().toString() === filter
  );
  let expensesContent = <p>No expenses found.</p>;

  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map((element, i) => {
      return (
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        ></ExpenseItem>
      );
    });
  }

  return (
    <div>
      <ExpensesFilter
        selected={filter}
        onFilter={filterHandler}
      ></ExpensesFilter>
      <Card className="expenses">{expensesContent}</Card>
    </div>
  );
};
