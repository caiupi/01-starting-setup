import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.amount);
  const clickHandler = () => {
    const newTitle = prompt("Set the new Title");
    setTitle(newTitle);
    console.log(newTitle);
  };

  const applyDiscount = () => {
    const newPrice = prompt("Set the discount", "0");

    setPrice(price- newPrice);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">$ {price}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={applyDiscount}>Apply Discount</button>
    </Card>
  );
};

export default ExpenseItem;
