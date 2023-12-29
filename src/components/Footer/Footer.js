import EmailListForm from "../EmailListForm/EmailListForm";
import { Link } from "react-router-dom";

function Footer({ handleEmailListModalOpen }) {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__column">
          <h4 className="footer__column-title">Navigation</h4>
          <Link
            to="/services/kitchen-cabinets"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__column-link">Kitchen Cabinets</p>
          </Link>
          <Link
            to="/services/bathroom-cabinets"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__column-link">Bathroom Cabinets</p>
          </Link>
          <Link
            to="/services/vinyl-planking"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__column-link">Vinyl Planking</p>
          </Link>
        </div>
        <div className="footer__column">
          <h4 className="footer__column-title">Our Company</h4>
          <Link
            to="/about-us"
            style={{ textDecoration: "none", color: "#f5f0f0" }}
          >
            <p className="footer__column-link">About</p>
          </Link>
        </div>
      </div>
      <EmailListForm handleEmailListModalOpen={handleEmailListModalOpen} />
    </footer>
  );
}

export default Footer;
