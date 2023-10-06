function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__column">
          <h4 className="footer__column-title">Navigation</h4>
          <p className="footer__column-link">Kitchen Cabinets</p>
          <p className="footer__column-link">Bathroom Cabinets</p>
          <p className="footer__column-link">Vinyl Planking</p>
        </div>
        <div className="footer__column">
          <h4 className="footer__column-title">Our Company</h4>
          <p className="footer__column-link">About</p>
        </div>
      </div>
      <div className="footer__email-list"></div>
    </footer>
  );
}

export default Footer;
