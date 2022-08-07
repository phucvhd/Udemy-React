import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((element, i) => {
        return (
          <ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
          ></ExpenseItem>
        );
      })}
    </ul>
  );
};
