import avantiLogo from "../../images/avantiLogo.jpg";
import iconInstagram from "../../images/icons/instagram.svg";
import iconFacebook from "../../images/icons/facebook.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__image" src={avantiLogo} />
      <ul className="header__navbar">
        <li className="header__list-item">Kitchen Cabinets</li>
        <li className="header__list-item">Bathroom Cabinets</li>
        <li className="header__list-item">Vinyl Planking</li>
        <li className="header__list-item">About Us</li>
      </ul>
      <div className="header__icons">
        <img className="header__icon" src={iconInstagram} />
        <img className="header__icon" src={iconFacebook} />
      </div>
    </header>
  );
}

export default Header;
