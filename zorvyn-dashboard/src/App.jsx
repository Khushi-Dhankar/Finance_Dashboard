import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Overview from "./pages/Overview";
import TransactionsPage from "./pages/TransactionsPage";
import InsightsPage from "./pages/InsightsPage";
import "./styles/global.css";

function App() {
  const [page, setPage] = useState("overview");

  // ✅ GLOBAL TRANSACTIONS STATE
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
      title: "Salary",
      category: "Income",
      type: "income",
      amount: 50000,
      date: "2026-03-25",
    },
  ]);

  return (
    <div className="layout">
      <Sidebar setPage={setPage} />

      <div className="main">
        <Header />

        {page === "overview" && <Overview transactions={transactions} />}

        {page === "transactions" && (
          <TransactionsPage
            transactions={transactions}
            setTransactions={setTransactions}
          />
        )}

        {page === "insights" && (
          <InsightsPage transactions={transactions} />
        )}
      </div>
    </div>
  );
}

export default App;