import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

const Cards = () => {
  return (
    <div className="cards">

      <div className="card card1">
        <h2>₹2,50,000</h2>
        <p className="label">TOTAL BALANCE</p>
        <span className="trend positive">
          <FiArrowUpRight /> +12%
        </span>
      </div>

      <div className="card card2">
        <h2>₹3,25,000</h2>
        <p className="label">INCOME</p>
        <span className="trend positive">
          <FiArrowUpRight /> +8%
        </span>
      </div>

      <div className="card card3">
        <h2>₹66,000</h2>
        <p className="label">EXPENSES</p>
        <span className="trend negative">
          <FiArrowDownRight /> -5%
        </span>
      </div>

      <div className="card card4">
        <h2>₹1,84,000</h2>
        <p className="label">SAVINGS</p>
        <span className="trend positive">
          <FiArrowUpRight /> +3%
        </span>
      </div>

    </div>
  );
};

export default Cards;