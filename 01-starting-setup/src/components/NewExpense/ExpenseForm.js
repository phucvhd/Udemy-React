import React, { useState } from "react";
import "./ExpenseForm.css";

// Loi the cua State so voi Properties (global var) la co the ap dung 2-ways binding
//2-ways binding cho phep gan gia tri nguoc ve field input
export const ExpenseForm = (props) => {
  //Using multiple state
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [toggle, setToggle] = useState("off");

  //Using single state (Recommended)
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //Get latest state and change the target value
    // setUserInput({...userInput,enteredTitle : event.target.value})

    //Safer way for get latest state snapshot
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // const addNewHandler = (event) => {
  //   event.preventDefault();

  //   setToggle("on");
  // };

  // const cancelHandler = (event) => {
  //   event.preventDefault();

  //   setToggle("off");
  // };
  // if (toggle === "off") {
  //   return (
  //     <form onSubmit={submitHandler}>
  //       <button onClick={addNewHandler}>Add New Expense</button>
  //     </form>
  //   );
  // }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          // onClick={cancelHandler}
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
