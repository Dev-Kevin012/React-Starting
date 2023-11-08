import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/ExpenseItem";

function App() {
  const expenseItems = [
    {
      name: "Food",
      price: "Rs 10",
      LocationOfExpenditure: "Mc Donalds",
    },
    {
      name: "Petrol",
      price: "Rs 100",
      LocationOfExpenditure: "Bharat Petroleums",
    },
    {
      name: "Movies",
      price: "Rs 200",
      LocationOfExpenditure: "Hind Inox",
    },
  ];
  return (
    <section>
      {expenseItems.map((expense) => (
        <ExpenseItem
          name={expense.name}
          price={expense.price}
          LocationOfExpenditure={expense.LocationOfExpenditure}
        />
      ))}
    </section>
  );
}

export default App;
