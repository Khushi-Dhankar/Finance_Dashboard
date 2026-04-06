import Cards from "../components/dashboard/Cards";
import LineChartBox from "../components/dashboard/LineChartBox";
import PieChartsBox from "../components/dashboard/PieChartsBox";
import RecentActivity from "../components/dashboard/RecentActivity";
import UpcomingBills from "../components/dashboard/UpcomingBills";

const Overview = () => {
  return (
    <div>
      <Cards />

      {/* TOP CHARTS */}
      <div className="charts">
        <LineChartBox />
        <PieChartsBox />
      </div>

      {/* BELOW SECTIONS */}
      <div className="bottom-section">
        <RecentActivity />
        <UpcomingBills />
      </div>
    </div>
  );
};

export default Overview;