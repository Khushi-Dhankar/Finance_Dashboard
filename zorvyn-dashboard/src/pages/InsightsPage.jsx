import Insights from "../components/insights/Insights";

export default function InsightsPage({ transactions }) {
  return (
    <div className="page">
      <Insights transactions={transactions} />
    </div>
  );
}
