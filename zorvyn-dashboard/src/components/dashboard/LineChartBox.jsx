import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", income: 4000, expense: 2400 },
  { name: "Feb", income: 3000, expense: 1398 },
  { name: "Mar", income: 5000, expense: 2800 },
  { name: "Apr", income: 4500, expense: 2000 },
  { name: "May", income: 6000, expense: 3200 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip small">
        <p style={{ color: "#22c55e" }}>
          Income: ₹{payload[0].value}
        </p>
        <p style={{ color: "#ef4444" }}>
          Expense: ₹{payload[1].value}
        </p>
      </div>
    );
  }
  return null;
};

const LineChartBox = () => {
  return (
    <div className="chartBox compact">
      <h3>Income vs Expense</h3>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="income"
            stroke="#22c55e"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ef4444"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartBox;