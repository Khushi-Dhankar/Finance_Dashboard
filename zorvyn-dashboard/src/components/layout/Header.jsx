const Header = ({ role, setRole, toggleTheme }) => {
  return (
    <div className="header">
      <div>
        <h2 className="title">Welcome back, Khushi 👋</h2>
        <p className="subtitle">Here’s your financial overview</p>
      </div>

      <div className="header-right">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="role-select"
        >
          <option value="admin">Admin</option>
          <option value="viewer">Viewer</option>
        </select>

        {/* 🌙 Dark/Light Toggle */}
        <button onClick={toggleTheme} className="theme-btn">
          🌙
        </button>
      </div>
    </div>
  );
};

export default Header;

