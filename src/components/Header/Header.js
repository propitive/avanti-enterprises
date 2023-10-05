import iconInstagram from "../../images/icons/instagram.svg";
import iconFacebook from "../../images/icons/facebook.svg";

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
        <li className="header__list-item">Kitchen Cabinets</li>
        <li className="header__list-item">Bathroom Cabinets</li>
        <li className="header__list-item">Vinyl Planking</li>
        <li className="header__list-item">About Us</li>
      </ul>
      <button className="header__button">
        <span className="header__button-shadow"></span>
        <span className="header__button-edge"></span>
        <span className="header__button-text">GET A QUOTE</span>
      </button>
    </header>
  );
}

export default Header;
