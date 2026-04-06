export default function TransactionItem({ tx, onDelete, onEdit }) {
  return (
    <div className="flex justify-between items-center p-4 bg-[#0f172a] rounded-xl mb-3">
      
      <div>
        <h3 className="text-white font-semibold">{tx.title}</h3>
        <p className="text-gray-400 text-sm">
          {tx.category} • {tx.date}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span
          className={`px-2 py-1 rounded-lg text-sm ${
            tx.type === "income"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {tx.type}
        </span>

        <p className="text-white font-bold">₹{tx.amount}</p>

        <button onClick={() => onEdit(tx)}>✏️</button>
        <button onClick={() => onDelete(tx.id)}>🗑</button>
      </div>
    </div>
  );
}