const bills = [
  {
    name: "Netflix Subscription",
    date: "June 28, 2026",
    amount: "$15.99",
    status: "Scheduled",
  },
  {
    name: "Spotify Premium",
    date: "June 30, 2025",
    amount: "$9.99",
    status: "Scheduled",
  },
  {
    name: "Adobe Creative Cloud",
    date: "July 4, 2025",
    amount: "$52.99",
    status: "Scheduled",
  },
];

const UpcomingBills = () => {
  return (
    <div className="box bills">
      <div className="bill-header">
        <h3>Upcoming Bills & Payments</h3>
        <button className="add-btn">+</button>
      </div>

      {bills.map((bill, index) => (
        <div key={index} className="bill-card">
          <div className="bill-left">
            <div className="logo">{bill.name[0]}</div>

            <div>
              <p className="bill-name">{bill.name}</p>
              <span>{bill.date}</span>
            </div>
          </div>

          <div className="bill-right">
            <p>{bill.amount}</p>
            <span className="status">{bill.status}</span>
          </div>
        </div>
      ))}

      <button className="view-btn">View All</button>
    </div>
  );
};

export default UpcomingBills;