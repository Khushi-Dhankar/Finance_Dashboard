import { useState } from "react";
import {
  FiHome,
  FiList,
  FiBarChart2,
} from "react-icons/fi";
import "../../styles/global.css";

export default function Sidebar({ setPage }) {
  const [active, setActive] = useState("overview");

  const handleClick = (page) => {
    setActive(page);
    setPage(page);
  };

  return (
    <div className="sidebar">

      {/* LOGO */}
      <h2 className="sidebar-logo">Zorvyn</h2>

      {/* MENU */}
      <ul className="sidebar-menu">

        <li
          className={active === "overview" ? "active" : ""}
          onClick={() => handleClick("overview")}
        >
          <FiHome /> <span>Dashboard</span>
        </li>

        <li
          className={active === "transactions" ? "active" : ""}
          onClick={() => handleClick("transactions")}
        >
          <FiList /> <span>Transactions</span>
        </li>

        <li
          className={active === "insights" ? "active" : ""}
          onClick={() => handleClick("insights")}
        >
          <FiBarChart2 /> <span>Insights</span>
        </li>

      </ul>
    </div>
  );
}