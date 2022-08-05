import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    { id: "e1", title: "Car", amount: "94.12", date: new Date(2020, 7, 4) },
    { id: "e2", title: "TV", amount: "294.12", date: new Date(2020, 3, 2) },
    { id: "e3", title: "Apple", amount: "394.12", date: new Date(2020, 5, 1) },
    { id: "e4", title: "Phone", amount: "494.12", date: new Date(2020, 6, 2) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
