import { Link } from "react-router-dom";
import iconInstagram from "../../images/icons/instagram.svg";
import iconFacebook from "../../images/icons/facebook.svg";

import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function Header() {
  return (
    <header className="header">
      <div className="header__icons">
        <img
          className="header__icon"
          src={iconInstagram}
          alt="Instagram logo"
        />
        <img className="header__icon" src={iconFacebook} alt="Facebook logo" />
      </div>
      <ul className="header__navbar">
        <Link
          to="/services/kitchen-cabinets"
          style={{ textDecoration: "none", color: "#f5f0f0" }}
        >
          <li className="header__list-item">Kitchen Cabinets</li>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "#f5f0f0" }}>
          <li className="header__list-item">Bathroom Cabinets</li>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "#f5f0f0" }}>
          <li className="header__list-item">Vinyl Planking</li>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "#f5f0f0" }}>
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
