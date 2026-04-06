import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useMemo } from "react";

export default function MonthlyChart({ transactions }) {
  const data = useMemo(() => {
    let febIncome = 0,
      febExpense = 0,
      marIncome = 0,
      marExpense = 0;

    transactions.forEach((t) => {
      const month = new Date(t.date).getMonth();

      if (month === 1) {
        if (t.type === "income") febIncome += t.amount;
        else febExpense += t.amount;
      }

      if (month === 2) {
        if (t.type === "income") marIncome += t.amount;
        else marExpense += t.amount;
      }
    });

    return [
      {
        name: "Feb",
        Income: febIncome,
        Expense: febExpense,
      },
      {
        name: "Mar",
        Income: marIncome,
        Expense: marExpense,
      },
    ];
  }, [transactions]);

  return (
    <div className="chart-container">
      <h3>📊 Monthly Overview</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "none",
            }}
          />
          <Legend />

          <Bar
            dataKey="Income"
            fill="#22c55e"
            radius={[6, 6, 0, 0]}
            animationDuration={800}
          />
          <Bar
            dataKey="Expense"
            fill="#ef4444"
            radius={[6, 6, 0, 0]}
            animationDuration={800}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}