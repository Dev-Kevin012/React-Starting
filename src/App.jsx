import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/ExpenseItem";

function App() {
  const expenseItems = [
    {
      name: "Food",
      price: "Rs 10",
      location: "Mc Donalds",
      date: new Date(),
    },
    {
      name: "Petrol",
      price: "Rs 100",
      location: "Bharat Petroleums",
      date: new Date(),
    },
    {
      name: "Movies",
      price: "Rs 200",
      location: "Hind Inox",
      date: new Date(),
    },
  ];
  return (
    <section>
      {expenseItems.map((expense, i) => (
        <ExpenseItem
          key={i}
          name={expense.name}
          price={expense.price}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </section>
  );
}

export default App;
