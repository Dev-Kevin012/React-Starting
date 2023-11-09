import React from "react";

const ExpenseDetails = ({ name, location, price }) => {
  return (
    <div className="expense-item__description">
      <h2>{name}</h2>
      <div className="expense-item__location">{location}</div>
      <div className="expense-item__price">{price}</div>
    </div>
  );
};

export default ExpenseDetails;
