import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";

export const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((element, i) => {
        return (
          <ExpenseItem
            title={element.title}
            amount={element.amount}
            date={element.date}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
};
