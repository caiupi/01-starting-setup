import ExpenseItem from "./components/ExpenseItem";
import ExerciseComponent from "./components/ExerciseComponent ";
import Product from "./components/Product";

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
  const products = [
    {
      title: "Product 1",
      amount: 123.23,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Product 2",
      amount: 223.23,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Product 3",
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

      <p>My Demo Shop</p>
      <Product
        title={products[0].title}
        amount={products[0].amount}
        date={products[0].date}
      ></Product>
      <Product
        title={products[1].title}
        amount={products[1].amount}
        date={products[1].date}
      ></Product>
      <Product
        title={products[2].title}
        amount={products[2].amount}
        date={products[2].date}
      ></Product>
    </div>
  );
}

export default App;
