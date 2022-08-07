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
        {props.items.map((element, i) => {
          if (element.date.getFullYear() === filter.toString())
            return (
              <ExpenseItem
                title={element.title}
                amount={element.amount}
                date={element.date}
              ></ExpenseItem>
            );
          else {
            return;
          }
        })}
      </Card>
    </div>
  );
};
