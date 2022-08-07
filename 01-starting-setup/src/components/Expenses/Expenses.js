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
  return (
    <div>
      <ExpensesFilter
        selected={filter}
        onFilter={filterHandler}
      ></ExpensesFilter>
      <Card className="expenses">
        {props.items
          .filter((element) => element.date.getFullYear().toString() === filter)
          .map((element, i) => {
            return (
              <ExpenseItem
                key={element.id}
                title={element.title}
                amount={element.amount}
                date={element.date}
              ></ExpenseItem>
            );
          })}
      </Card>
    </div>
  );
};
