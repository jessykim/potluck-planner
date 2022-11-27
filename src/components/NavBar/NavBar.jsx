import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="App-header">
      <img
        src='/images/logo.gif'
        style={{ width: "100px", height: "100px" }}
        className="App-logo"
        alt="logo"
      />
      <Link to="/potlucks">Potluck List</Link>
    </header>
  );
};

export default NavBar;