import { useState, useEffect } from "react";

export default function EditTransactionModal({
  isOpen,
  onClose,
  transaction,
  onUpdate,
  onAdd,
}) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    type: "expense",
  });

  useEffect(() => {
    if (transaction) {
      setForm(transaction);
    } else {
      setForm({
        title: "",
        amount: "",
        date: "",
        category: "",
        type: "expense",
      });
    }
  }, [transaction]);

  if (!isOpen) return null;
  const handleSubmit = () => {
  if (!form.title || !form.amount) {
    alert("Please fill all fields");
    return;
  }

  if (transaction) {
    onUpdate(form);
    alert("Transaction Updated ✅");
  } else {
    onAdd({ ...form, id: Date.now() });
    alert("Transaction Added ✅");
  }

  onClose();
};

  
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ background: "white", padding: 20, color: "black" }}>
        <h3>{transaction ? "Edit" : "Add"} Transaction</h3>

        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <br />
        <br />

        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
