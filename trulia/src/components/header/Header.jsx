import "./header.css";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="navbar-container">
      <div className="nav-container">
        <div className="leftnav-container">
          <img src="./assets/logo.svg" alt="logo" />
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "20px",
            }}
          >
            <li className="nav-items">Buy</li>
            <li className="nav-items">Rent</li>
            <li className="nav-items">Mortgage</li>
          </ul>
        </div>
        <div className="rightnav-container">
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "20px",
            }}
          >
            <li className="nav-items">Saved Homes</li>
            <li className="nav-items">Saved Searches</li>
            <li className="nav-items-login">Sign up or Log in</li>
            <li className="nav-items-menubar">
              <MenuOutlined />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
