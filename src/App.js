import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      title: "Car Insurance1",
      amount: 123.23,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Car Insurance2",
      amount: 223.23,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Car Insurance3",
      amount: 323.23,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Car Insurance4",
      amount: 423.23,
      date: new Date(2021, 2, 28),
    },
  ];
  const addExpenseHandler = (expenses) => {
    console.log("In Expenses");
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
