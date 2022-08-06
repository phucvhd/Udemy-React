import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

function App() {
  const expense = [
    { id: "e1", title: "Car", amount: "94.12", date: new Date(2020, 7, 4) },
    { id: "e2", title: "TV", amount: "294.12", date: new Date(2020, 3, 2) },
    { id: "e3", title: "Apple", amount: "394.12", date: new Date(2020, 5, 1) },
    { id: "e4", title: "Phone", amount: "494.12", date: new Date(2020, 6, 2) },
  ];
  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={expense}></Expenses>
    </div>
  );
}

export default App;
