import { useState } from "react";
import { filterTransactions } from "../../utils/filterTransactions";
import EditTransactionModal from "./EditTransactionModal";
import { FiEdit2, FiTrash2, FiFilter } from "react-icons/fi";

export default function TransactionList({ transactions, setTransactions }) {

  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    category: "all",
    fromDate: "",
    toDate: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTx, setSelectedTx] = useState(null);
  const [message, setMessage] = useState("");

  const filteredData = filterTransactions(transactions, filters);

  // ✅ ADD
  const addTransaction = (tx) => {
    setTransactions([...transactions, { ...tx, id: Date.now() }]);
    setMessage("Transaction Added ✅");
    setTimeout(() => setMessage(""), 2000);
  };

  // ✅ DELETE
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // ✅ UPDATE
  const updateTransaction = (updatedTx) => {
    setTransactions(
      transactions.map((t) =>
        t.id === updatedTx.id ? updatedTx : t
      )
    );
    setMessage("Transaction Updated ✅");
    setTimeout(() => setMessage(""), 2000);
  };

  // ✅ EXPORT CSV
  const exportCSV = () => {
    const rows = filteredData.map(
      (t) => `${t.date},${t.title},${t.category},${t.type},${t.amount}`
    );
    const blob = new Blob([rows.join("\n")], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "transactions.csv";
    a.click();
  };

  return (
    <div className="transactions-page">
      
      {/* HEADER */}
      <div className="transactions-header">
        <h2>Transactions</h2>
        <button onClick={exportCSV} className="export-btn">
          Export CSV
        </button>
      </div>

      {/* MESSAGE */}
      {message && <div className="success-msg">{message}</div>}

      {/* CONTROLS */}
      <div className="transactions-controls">
        
        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search transactions..."
          value={filters.search}
          onChange={(e) =>
            setFilters({ ...filters, search: e.target.value })
          }
          className="search-input"
        />

        {/* FILTER BUTTON */}
        <button className="filter-btn">
          <FiFilter /> Filter
        </button>

        {/* ADD BUTTON */}
        <button
          onClick={() => {
            setSelectedTx(null);
            setIsModalOpen(true);
          }}
          className="add-btn"
        >
          + Add
        </button>
      </div>

      {/* FILTER ROW */}
      <div className="filter-row">
        <select onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
          <option value="all">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
          <option value="all">All Categories</option>
          <option>Food</option>
          <option>Shopping</option>
          <option>Travel</option>
        </select>

        <input
          type="date"
          onChange={(e) =>
            setFilters({ ...filters, fromDate: e.target.value })
          }
        />

        <input
          type="date"
          onChange={(e) =>
            setFilters({ ...filters, toDate: e.target.value })
          }
        />
      </div>

      {/* TABLE */}
      <div className="table-container">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>{t.title}</td>
                <td>
                  <span className="badge">{t.category}</span>
                </td>
                <td>
                  <span className={t.type === "income" ? "income" : "expense"}>
                    {t.type}
                  </span>
                </td>
                <td className={t.type === "income" ? "amount-green" : "amount-red"}>
                  ₹{t.amount}
                </td>

                <td className="actions">
                  <button
                    onClick={() => {
                      setSelectedTx(t);
                      setIsModalOpen(true);
                    }}
                    className="edit-btn"
                  >
                    <FiEdit2 /> Edit
                  </button>

                  <button
                    onClick={() => deleteTransaction(t.id)}
                    className="delete-btn"
                  >
                    <FiTrash2 /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      <EditTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        transaction={selectedTx}
        onUpdate={updateTransaction}
        onAdd={addTransaction}
      />
    </div>
  );
}b 