import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ name, price, LocationOfExpenditure }) => {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__location">{LocationOfExpenditure}</div>
        <div className="expense-item__price">{price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
