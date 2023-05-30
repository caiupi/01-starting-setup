import ExpenseItem from "./components/ExpenseItem";

function App() {
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
  ];
  return (
    <div>
      <p>Practicing React ...</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
