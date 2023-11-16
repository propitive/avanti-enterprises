import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import facebook from "../../images/icons/facebook.svg";
import waveBackground from "../../images/about/waveBackground.svg";

function About() {
  return (
    <>
      <Header />
      <div className="about">
        <div className="about__header">
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
          <div className="about__what-card">
            <img className="about__what-card__icon" img={facebook} />
            <p className="about__what-card__paragraph">
              Each project is approached with an exacting eye, ensuring
              measurements are precise, materials are of the highest quality,
              and every element is seamlessly integrated. Our passion for
              perfection drives us to exceed industry standards, setting a new
              benchmark for precision and detail that distinguishes our work as
              true masterpieces in both form and function.
            </p>
          </div>
          <div className="about__what-card">
            <img className="about__what-card__icon" img={facebook} />
            <p className="about__what-card__paragraph">
              Each project is approached with an exacting eye, ensuring
              measurements are precise, materials are of the highest quality,
              and every element is seamlessly integrated. Our passion for
              perfection drives us to exceed industry standards, setting a new
              benchmark for precision and detail that distinguishes our work as
              true masterpieces in both form and function.
            </p>
          </div>
          <div className="about__what-card">
            <img className="about__what-card__icon" img={facebook} />
            <p className="about__what-card__paragraph">
              Each project is approached with an exacting eye, ensuring
              measurements are precise, materials are of the highest quality,
              and every element is seamlessly integrated. Our passion for
              perfection drives us to exceed industry standards, setting a new
              benchmark for precision and detail that distinguishes our work as
              true masterpieces in both form and function.
            </p>
          </div>
          <div className="about__what-card">
            <img className="about__what-card__icon" img={facebook} />
            <p className="about__what-card__paragraph">
              Each project is approached with an exacting eye, ensuring
              measurements are precise, materials are of the highest quality,
              and every element is seamlessly integrated. Our passion for
              perfection drives us to exceed industry standards, setting a new
              benchmark for precision and detail that distinguishes our work as
              true masterpieces in both form and function.
            </p>
          </div>
          <div className="about__what-card">
            <img className="about__what-card__icon" img={facebook} />
            <p className="about__what-card__paragraph">
              Each project is approached with an exacting eye, ensuring
              measurements are precise, materials are of the highest quality,
              and every element is seamlessly integrated. Our passion for
              perfection drives us to exceed industry standards, setting a new
              benchmark for precision and detail that distinguishes our work as
              true masterpieces in both form and function.
            </p>
          </div>
          <div className="about__what-card">
            <img className="about__what-card__icon" img={facebook} />
            <p className="about__what-card__paragraph">
              Each project is approached with an exacting eye, ensuring
              measurements are precise, materials are of the highest quality,
              and every element is seamlessly integrated. Our passion for
              perfection drives us to exceed industry standards, setting a new
              benchmark for precision and detail that distinguishes our work as
              true masterpieces in both form and function.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
