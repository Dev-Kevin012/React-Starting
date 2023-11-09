import React from "react";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ name, price, location, date }) => {
  return (
    <div className="expense-item">
      <ExpenseDetails price={price} location={location} name={name} />
      <ExpenseDate date={date} />
    </div>
  );
};

export default ExpenseItem;
