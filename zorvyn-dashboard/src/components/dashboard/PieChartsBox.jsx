import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Shopping", value: 300 },
  { name: "Food", value: 400 },
  { name: "Bills", value: 200 },
  { name: "Others", value: 150 },
];

const COLORS = ["#6366f1", "#22c55e", "#ef4444", "#f59e0b"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip small">
        <p style={{ color: payload[0].payload.fill }}>
          {payload[0].name}
        </p>
        <p>₹{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const PieChartsBox = () => {
  return (
    <div className="chartBox compact">
      <h3>Expenses</h3>

      <PieChart width={240} height={240}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          paddingAngle={5}   // 🔥 separation effect
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </div>
  );
};

export default PieChartsBox;