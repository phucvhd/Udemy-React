import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";

export const Expenses = (props) => {
  const [filter, setFilter] = useState("2020");
  const filterHandler = (filterValue) => {
    setFilter(filterValue);
  };
  const filterExpenses = props.items.filter(
    (element) => element.date.getFullYear().toString() === filter
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filter}
          onFilter={filterHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filterExpenses}></ExpensesChart>
        <ExpensesList items={filterExpenses}></ExpensesList>
      </Card>
    </div>
  );
};
