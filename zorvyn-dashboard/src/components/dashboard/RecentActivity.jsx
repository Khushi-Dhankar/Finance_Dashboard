const activities = [
  {
    name: "Mobile App Purchase",
    date: "Wed 10:29 AM",
    amount: "+$25,500",
    status: "Success",
  },
  {
    name: "Software License",
    date: "Wed 10:29 AM",
    amount: "+$25,500",
    status: "Success",
  },
];

const RecentActivity = () => {
  return (
    <div className="box">
      <div className="table-header">
        <h3>Recent Transactions</h3>
        <button className="filter-btn">Filter</button>
      </div>

      <table className="activity-table">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Date</th>
            <th>Total Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {activities.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
              <td>
                <span className="success">{item.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivity;