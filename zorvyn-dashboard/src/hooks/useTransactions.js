import { useState } from "react";

export default function useTransactions() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Restaurant Dinner",
      category: "Food",
      type: "expense",
      amount: 1850,
      date: "2026-03-30",
    },
    {
      id: 2,
      title: "Dividend Income",
      category: "Investment",
      type: "income",
      amount: 3200,
      date: "2026-03-25",
    },
    { id: 1, date: "2026-01-28", title: "Mobile Recharge", category: "Utilities", type: "expense", amount: 299 },
  { id: 2, date: "2026-01-27", title: "Coffee Shop", category: "Food", type: "expense", amount: 350 },
  { id: 3, date: "2026-01-26", title: "Bonus", category: "Salary", type: "income", amount: 20000 },
  { id: 4, date: "2026-01-25", title: "Rent", category: "Housing", type: "expense", amount: 25000 },
    

  ]);

  const addTransaction = (newTx) => {
    setTransactions([...transactions, { ...newTx, id: Date.now() }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };

  const updateTransaction = (updatedTx) => {
    setTransactions(
      transactions.map((tx) =>
        tx.id === updatedTx.id ? updatedTx : tx
      )
    );
  };

  return {
    transactions,
    addTransaction,
    deleteTransaction,
    updateTransaction,
  };
}