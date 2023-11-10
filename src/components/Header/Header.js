import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import avantiLogo from "../../images/icons/avantiLogo.png";
import Dropdown from "../Dropdown/Dropdown";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";
import { SidebarData } from "../../utils/constants";

function Header() {
  const [isDropdown, setIsDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const liMenuClassName = isDropdown
    ? "header__list-item-menu-hovered"
    : "header__list-item-menu";
  const showSidebar = () => setSidebar(!sidebar);

  const handleCloseOnOverlayClick = (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
    if (event.target === event.currentTarget) {
      showSidebar();
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" style={{ textDecoration: "none", color: "#f5f0f0" }}>
          <img className="header__logo" src={avantiLogo} alt="Avanti logo" />
        </Link>
        <ul className="header__navbar">
          <li
            className={liMenuClassName}
            onMouseEnter={() => setIsDropdown(true)}
            onMouseLeave={() => setIsDropdown(false)}
          >
            Cabinets
            {isDropdown && <Dropdown />}
          </li>
          <Link
            to="/services/vinyl-planking"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <li className="header__list-item">Vinyl Planking</li>
          </Link>
          <Link
            to="/about-us"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <li className="header__list-item">About</li>
          </Link>
        </ul>
        <Link
          to="/contact-form"
          style={{ textDecoration: "none", color: "#f5f0f0" }}
        >
          <BookOnlineButton buttonText="GET A FREE QUOTE" />
        </Link>
      </div>
      <div className="menu__container">
        <div className="navbar">
          <Link to="/" style={{ textDecoration: "none", alignSelf: "center" }}>
            <img className="header__logo" src={avantiLogo} />
          </Link>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars
              style={{
                color: "white",
              }}
              onClick={showSidebar}
            />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div
            className={`nav-menu__backdrop ${
              sidebar ? "nav-menu__backdrop__open" : ""
            }`}
            onClick={handleCloseOnOverlayClick}
          ></div>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" onClick={showSidebar}>
                <AiIcons.AiOutlineClose
                  style={{
                    color: "white",
                  }}
                />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <BookOnlineButton
              className="nav-menu__button"
              buttonText="GET A FREE QUOTE"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
