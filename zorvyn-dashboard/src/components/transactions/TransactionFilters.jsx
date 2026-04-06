import { useState } from "react";

export default function TransactionFilters({ setFilters }) {
  const [localFilters, setLocalFilters] = useState({
    type: "all",
    category: "all",
    fromDate: "",
    toDate: "",
  });

  const handleChange = (e) => {
    const updated = {
      ...localFilters,
      [e.target.name]: e.target.value,
    };
    setLocalFilters(updated);
    setFilters(updated);
  };

  return (
    <div className="bg-[#0f172a] p-4 rounded-xl mt-4 flex flex-wrap gap-4">
      
      {/* TYPE */}
      <select
        name="type"
        onChange={handleChange}
        className="bg-[#1e293b] p-2 rounded-lg text-white"
      >
        <option value="all">All Types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* CATEGORY */}
      <select
        name="category"
        onChange={handleChange}
        className="bg-[#1e293b] p-2 rounded-lg text-white"
      >
        <option value="all">All Categories</option>
        <option value="Food">Food</option>
        <option value="Shopping">Shopping</option>
        <option value="Travel">Travel</option>
        <option value="Education">Education</option>
        <option value="Health">Health</option>
      </select>

      {/* DATE */}
      <input
        type="date"
        name="fromDate"
        onChange={handleChange}
        className="bg-[#1e293b] p-2 rounded-lg text-white"
      />

      <input
        type="date"
        name="toDate"
        onChange={handleChange}
        className="bg-[#1e293b] p-2 rounded-lg text-white"
      />
    </div>
  );
}