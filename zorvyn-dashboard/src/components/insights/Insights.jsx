import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ================= HEATMAP DATA =================
const generateData = () => {
  const start = new Date();
  start.setFullYear(start.getFullYear() - 1);
  start.setDate(start.getDate() - start.getDay());

  const data = [];
  const totalDays = 371;

  for (let i = 0; i < totalDays; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);

    let rand = Math.random();
    let value;

    if (rand < 0.6) value = 0;
    else if (rand < 0.8) value = 1;
    else if (rand < 0.9) value = 2;
    else if (rand < 0.97) value = 3;
    else value = 4;

    data.push({ date: d, value });
  }

  return data;
};

// ================= CHART DATA =================
const chartData = [
  { name: "Income", feb: 110000, mar: 130000 },
  { name: "Expense", feb: 20000, mar: 35000 },
];

const Insights = () => {
  const data = generateData();

  // ===== GROUP INTO WEEKS =====
  const weeks = [];
  let week = new Array(7).fill(null);

  data.forEach((d) => {
    const day = d.date.getDay();
    week[day] = d;

    if (day === 6) {
      weeks.push(week);
      week = new Array(7).fill(null);
    }
  });

  if (week.some((d) => d !== null)) {
    weeks.push(week);
  }

  // ===== MONTH LABELS =====
  const months = [];
  let lastMonth = "";

  weeks.forEach((w) => {
    const firstValid = w.find((d) => d !== null);

    if (!firstValid) {
      months.push("");
      return;
    }

    const m = firstValid.date.toLocaleString("default", {
      month: "short",
    });

    if (m !== lastMonth) {
      months.push(m);
      lastMonth = m;
    } else {
      months.push("");
    }
  });

  const getColorClass = (value) => `level-${value}`;

  return (
    <div className="insights-container">

      
<div className="insights-header">
  <div className="divider"></div>

  <h1>INSIGHTS</h1>

  <p className="subtitle">
    Understand your spending patterns and financial trends
  </p>
</div>

      {/* ===== TOP CARDS ===== */}
      <div className="cards">
        <div className="card">
          <p>Total Income</p>
          <h2>₹50000</h2>
        </div>
        <div className="card">
          <p>Total Expense</p>
          <h2>₹1850</h2>
        </div>
        <div className="card">
          <p>Savings Rate</p>
          <h2>96.3%</h2>
        </div>
        <div className="card">
          <p>Net Balance</p>
          <h2>₹48150</h2>
        </div>
      </div>

      {/* ===== HEATMAP ===== */}
      <div className="heatmap-container">
        <h3>Spending Heatmap</h3>
        <p className="subtitle">Daily expense intensity over the past year</p>

        <div className="months">
          {months.map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>

        <div className="heatmap-body">
          <div className="days">
            <span>Tue</span>
            <span>Thu</span>
            <span>Sat</span>
          </div>

          <div className="grid">
            {weeks.map((w, i) => (
              <div key={i} className="week">
                {w.map((d, j) => (
                  <div
                    key={j}
                    className={`day ${
                      d ? getColorClass(d.value) : "level-0"
                    }`}
                    title={d ? d.date.toDateString() : ""}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="legend">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((lvl) => (
            <div key={lvl} className={`day level-${lvl}`}></div>
          ))}
          <span>More</span>
        </div>
      </div>

      {/* ===== MONTHLY CHART ===== */}
      <div className="chart-container">
        <h3>Monthly Comparison</h3>
        <p className="subtitle">February 2026 vs March 2026</p>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />

            <Bar
              dataKey="feb"
              fill="#4f46e5"
              radius={[6, 6, 0, 0]}
              animationDuration={800}
            />

            <Bar
              dataKey="mar"
              fill="#8b5cf6"
              radius={[6, 6, 0, 0]}
              animationDuration={800}
            />
          </BarChart>
        </ResponsiveContainer>

        <div className="chart-legend">
          <span className="dot feb"></span> February 2026
          <span className="dot mar"></span> March 2026
        </div>
      </div>

      {/* ===== NEW 6 OBSERVATION CARDS ===== */}
      <div className="observations">
        <h2>Key Observations</h2>

        <div className="obs-grid">

         <div className="obs-card">
  <p className="obs-title">TOP CATEGORY</p>
  <h3 className="highlight neutral">Housing</h3>
  <p className="obs-desc">42% of expenses</p>
</div>

<div className="obs-card">
  <p className="obs-title">EXPENSE CHANGE</p>
  <h3 className="highlight negative">-33.6%</h3>
  <p className="obs-desc">Lower than last month</p>
</div>

<div className="obs-card">
  <p className="obs-title">SAVINGS RATE</p>
  <h3 className="highlight positive">73.6%</h3>
  <p className="obs-desc">Above average</p>
</div>

<div className="obs-card">
  <p className="obs-title">LARGEST EXPENSE</p>
  <h3 className="highlight neutral">₹4,800</h3>
  <p className="obs-desc">Highest transaction</p>
</div>

<div className="obs-card">
  <p className="obs-title">FREQUENT CATEGORY</p>
  <h3 className="highlight neutral">Food & Dining</h3>
  <p className="obs-desc">Most transactions</p>
</div>

<div className="obs-card">
  <p className="obs-title">TOTAL SAVINGS</p>
  <h3 className="highlight positive">₹23,177</h3>
  <p className="obs-desc">Saved this month</p>
</div>
        </div>
      </div>

    </div>
  );
};

export default Insights;