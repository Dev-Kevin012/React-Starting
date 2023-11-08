import React from "react";

const Expense = () => {
  const expenseItems = [
    {
      name: "Food",
      price: "Rs 10",
    },
    {
      name: "Petrol",
      price: "Rs 100",
    },
    {
      name: "Movies",
      price: "Rs 200",
    },
  ];
  return (
    <section>
      <div className="text-center">Expense Items</div>
      {expenseItems.map((item, index) => (
        <div key={index} className="center">
          {item.name} : {item.price}
        </div>
      ))}
    </section>
  );
};

export default Expense;
