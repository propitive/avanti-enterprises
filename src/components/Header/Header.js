import { useState } from "react";
import { Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

// import avantiLogo from "../../images/icons/avantiLogo.png";
import avantiLogo from "../../images/icons/avantiLogoNewerBolder.png";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";
import Dropdown from "../Dropdown/Dropdown";
import SidebarDropdownItem from "../SidebarDropdownItem/SidebarDropdownItem";

import { dropdownSidebarContentMenu } from "../../utils/constants";

import { SidebarData } from "../../utils/constants";

function Header({ handleOpenModal }) {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
    setIsSidebarDropdownOpen(false);
  };
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) toggleSidebar();
  };
  const handleIsSidebarDropdownOpen = (operator) => {
    setIsSidebarDropdownOpen(operator);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" style={{ textDecoration: "none", color: "#f5f0f0" }}>
          <img className="header__logo" src={avantiLogo} alt="Avanti logo" />
        </Link>
        <ul className="header__navbar">
          <li
            className={
              isDropdown
                ? "header__list-item-menu-hovered"
                : "header__list-item-menu"
            }
            onMouseEnter={() => setIsDropdown(true)}
            onMouseLeave={() => setIsDropdown(false)}
          >
            Services
            {isDropdown && <Dropdown />}
          </li>
          {/* <HeaderLink to="/services/vinyl-planking" text="Vinyl Planking" /> */}
          <HeaderLink to="/about-us" text="About" />
          <HeaderLink to="/blog" text="Blog" />
          {/* <HeaderLink to="/gallery" text="Gallery" /> */}
        </ul>
        {/* <Link to="/contact-form" className="header__quote-link"> */}
        <BookOnlineButton
          buttonText="GET A FREE QUOTE"
          handleOpenModal={handleOpenModal}
          toggleSidebar={() => null}
        />
        {/* </Link> */}
      </div>

      <div className="menu__container">
        <div className="navbar">
          <Link to="/" style={{ textDecoration: "none", color: "#f5f0f0" }}>
            <img className="header__logo" src={avantiLogo} alt="Avanti logo" />
          </Link>
          <FaIcons.FaBars className="menu-bars" onClick={toggleSidebar} />
        </div>
        <nav className={`nav-menu ${sidebar ? "active" : ""}`}>
          <div
            className={`nav-menu__backdrop ${
              sidebar ? "nav-menu__backdrop__open" : ""
            }`}
            onClick={handleOverlayClick}
          />
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <AiIcons.AiOutlineClose
                className="menu-bars"
                onClick={toggleSidebar}
              />
            </li>
            <SidebarDropdownItem
              content={dropdownSidebarContentMenu}
              handleIsSidebarDropdownOpen={handleIsSidebarDropdownOpen}
              isSidebarDropdownOpen={isSidebarDropdownOpen}
              showSidebar={toggleSidebar}
            />
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName} onClick={toggleSidebar}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
            {/* <Link to="/contact-form" onClick={toggleSidebar}> */}
            <BookOnlineButton
              className="nav-menu__button"
              buttonText="GET A FREE QUOTE"
              handleOpenModal={handleOpenModal}
              toggleSidebar={toggleSidebar}
            />
            {/* </Link> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

const HeaderLink = ({ to, text }) => (
  <Link to={to} style={{ textDecoration: "none", color: "#f5f0f0" }}>
    <li className="header__list-item">{text}</li>
  </Link>
);

export default Header;
