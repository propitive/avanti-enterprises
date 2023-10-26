import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import waveBackground from "../../images/about/waveBackground.svg";

function About() {
  return (
    <>
      <Header />
      <div className="about">
        <div className="about__header">
          {/* <h2 className="about__header__header">Installation Experts</h2> */}
          <p className="about__header__subtitle">
            Disrupting the overpriced home improvement industry with{" "}
            <a className="about__header__subtitle__emphasis">radically fair</a>{" "}
            prices and{" "}
            <a className="about__header__subtitle__emphasis">quality</a>{" "}
            craftsmanship.
          </p>
        </div>
        <div className="about__showcase">
          <h2 className="about__showcase-header">
            <a className="about__header__subtitle__emphasis">Simplifying</a> The
            Installation Process
          </h2>
          <div className="about__showcase-items">
            <div className="about__showcase-item">
              <h3 className="about__showcase-item__title">28</h3>
              <p className="about__showcase-item__subtitle">Clients</p>
            </div>
            <div className="about__showcase-item">
              <h3 className="about__showcase-item__title">24</h3>
              <p className="about__showcase-item__subtitle">
                Years of Experience
              </p>
            </div>
            <div className="about__showcase-item">
              <h3 className="about__showcase-item__title">20</h3>
              <p className="about__showcase-item__subtitle">
                Kitchens Installed
              </p>
            </div>
            <div className="about__showcase-item">
              <h3 className="about__showcase-item__title">4</h3>
              <p className="about__showcase-item__subtitle">Vinyl Projects</p>
            </div>
          </div>
        </div>
        <div className="about__what">
          <div className="about__what-text">
            <h2 className="about__what-text__header">What We Do</h2>
            <p className="about__what-text__title">
              Honestly, no one does what we do
            </p>
            <p className="about__what-text__subtitle">
              Client-satisfying, datail-oriented home improvement experts.
            </p>
            <p className="about__what-text__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="about__what-text__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="about__what-text__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="about__what-icons"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
