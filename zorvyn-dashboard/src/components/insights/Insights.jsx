import {
  FiTrendingUp,
  FiDollarSign,
  FiCreditCard,
  FiPieChart,
} from "react-icons/fi";

export default function Insights({ transactions }) {
  // 🔥 CALCULATIONS FROM REAL DATA
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const savingsRate = income ? ((income - expense) / income) * 100 : 0;

  // 🔥 HEATMAP (REAL STRUCTURE)
  const generateHeatmap = () => {
    const start = new Date(2026, 0, 1);
    const days = [];

    for (let i = 0; i < 90; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);

      let value = 0;
      if (date.getMonth() === 2) value = 4; // March high
      else if (date.getMonth() === 1) value = 3; // Feb medium
      else value = 2; // Jan normal

      if (date.getDay() === 0 || date.getDay() === 6) value -= 1;

      days.push({ date, value: Math.max(0, value) });
    }

    return days;
  };

  const heatmapData = generateHeatmap();

  // 🔥 MONTHLY COMPARISON (mock but clean)
  const comparison = [
    { month: "Jan", income: 20000, expense: 8000 },
    { month: "Feb", income: 22000, expense: 9000 },
    { month: "Mar", income: 25000, expense: 12000 },
  ];

  return (
    <div className="insights-page">
      <h2>Insights</h2>
      <p className="subtitle">
        Understand your spending patterns and financial trends
      </p>

      {/* 🔥 CARDS */}
      <div className="insight-grid">
        <div className="insight-card">
          <FiTrendingUp />
          <div>
            <p>Total Income</p>
            <h3>₹{income}</h3>
          </div>
        </div>

        <div className="insight-card">
          <FiPieChart />
          <div>
            <p>Total Expense</p>
            <h3>₹{expense}</h3>
          </div>
        </div>

        <div className="insight-card">
          <FiDollarSign />
          <div>
            <p>Savings Rate</p>
            <h3>{savingsRate.toFixed(1)}%</h3>
          </div>
        </div>

        <div className="insight-card">
          <FiCreditCard />
          <div>
            <p>Net Balance</p>
            <h3>₹{income - expense}</h3>
          </div>
        </div>
      </div>

      {/* 🔥 HEATMAP */}
      <div className="heatmap-box">
        <h3>Spending Heatmap</h3>

        <div className="calendar">
          {Array.from({
            length: Math.ceil(heatmapData.length / 7),
          }).map((_, weekIndex) => (
            <div key={weekIndex} className="week">
              {heatmapData
                .slice(weekIndex * 7, weekIndex * 7 + 7)
                .map((d, i) => (
                  <div
                    key={i}
                    className={`day level-${d.value}`}
                    title={d.date.toDateString()}
                  />
                ))}
            </div>
          ))}
        </div>

        <div className="legend">
          <span>Less</span>
          <div className="day level-0"></div>
          <div className="day level-1"></div>
          <div className="day level-2"></div>
          <div className="day level-3"></div>
          <div className="day level-4"></div>
          <span>More</span>
        </div>
      </div>

      {/* 🔥 COMPARISON */}
      <div className="compare-box">
        <h3>Monthly Comparison</h3>

        <div className="bars">
          {comparison.map((m, i) => (
            <div key={i} className="bar-group">
              <div
                className="bar income"
                style={{ height: m.income / 150 + "px" }}
              />
              <div
                className="bar expense"
                style={{ height: m.expense / 150 + "px" }}
              />
              <span>{m.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}