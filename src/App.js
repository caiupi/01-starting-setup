import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/newExpense";

const App = () => {
  return (
    <div>
      <NewExpense />
      <Expenses />
    </div>
  );
};

export default App;
