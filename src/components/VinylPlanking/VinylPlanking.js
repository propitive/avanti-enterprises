import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Parallax } from "react-parallax";
import vinylParallax from "../../images/servicesParallax/vinylPlanking.jpg";
import vinylImage from "../../images/showcaseCards/vinylPlanking.jpg";
import { vinylPlankingData } from "../../utils/constants";
import ProductLayout from "../ProductLayout/ProductLayout";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function VinylPlanking() {
  return (
    <>
      <Header />
      <div className="k-cabinets">
        <Parallax strength={400} bgImage={vinylParallax}>
          <div className="k-cabinets__parallax"></div>
        </Parallax>
        <div className="k-cabinets__first-section">
          <div className="k-cabinets__first-section__description">
            <h3 className="k-cabinets__first-section__header">
              Vinyl Planking
            </h3>
            <p className="k-cabinets__first-section__paragraph">
              Elevate your space with our premium vinyl planking, offering a
              perfect fusion of style and durability. Choose our vinyl planking
              for a stunning, low-maintenance flooring solution that brings both
              sophistication and resilience to your living spaces.
            </p>
            <Link
              to="/contact-form"
              style={{ textDecoration: "none", color: "#f5f0f0" }}
            >
              <BookOnlineButton
                className="k-cabinets__first-section__button"
                buttonText="GET A FREE QUOTE"
              />
            </Link>
          </div>
          <img
            className="k-cabinets__first-section__image"
            src={vinylImage}
            alt="Kitchen cabinets"
          />
        </div>
        <div className="k-cabinets__color-section">
          <ProductLayout
            header="Available Vinyl Planking"
            productArray={vinylPlankingData}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VinylPlanking;
