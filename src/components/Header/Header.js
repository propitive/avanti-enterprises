import { useState } from "react";
import { Link } from "react-router-dom";
import avantiLogo from "../../images/icons/avantiLogo.png";
import Dropdown from "../Dropdown/Dropdown";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function Header() {
  const [isDropdown, setIsDropdown] = useState(false);
  const liMenuClassName = isDropdown
    ? "header__list-item-menu-hovered"
    : "header__list-item-menu";

  return (
    <header className="header">
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
        {/* <Link
          to="/services/kitchen-cabinets"
          style={{ textDecoration: "none", color: "#f5f0f0" }}
        >
          <li className="header__list-item">Kitchen Cabinets</li>
        </Link>
        <Link
          to="/services/bathroom-cabinets"
          style={{ textDecoration: "none", color: "#f5f0f0" }}
        >
          <li className="header__list-item">Bathroom Cabinets</li>
        </Link> */}
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
        {/* <Link
          to="/contact-form"
          style={{ textDecoration: "none", color: "#f5f0f0" }}
        >
          <li className="header__list-item">Contact Us</li>
        </Link> */}
      </ul>
      <Link
        to="/contact-form"
        style={{ textDecoration: "none", color: "#f5f0f0" }}
      >
        <BookOnlineButton buttonText="GET A FREE QUOTE" />
      </Link>
    </header>
  );
}

export default Header;
