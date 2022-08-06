import React from "react";
import ExpenseItem from "./ExpenseItem";

export const Expenses = (props) => {
  return props.items.map((element, i) => {
    return (
      <ExpenseItem
        title={element.title}
        amount={element.amount}
        date={element.date}
      ></ExpenseItem>
    );
  });
};
