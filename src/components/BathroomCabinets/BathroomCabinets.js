import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import bathroomParallax from "../../images/servicesParallax/bathroomCabinetsParallax.jpg";
import bathroomImage from "../../images/showcaseCards/bathroomCabinetsNew2.jpg";
import {
  kitchenCabinetsShaker,
  kitchenCabinetsTraditional,
} from "../../utils/constants";
import ProductLayout from "../ProductLayout/ProductLayout";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function BathroomCabinets({ onCardClick }) {
  return (
    <>
      <div className="k-cabinets">
        <Parallax strength={400} bgImage={bathroomParallax}>
          <div className="k-cabinets__parallax"></div>
        </Parallax>
        <div className="k-cabinets__first-section">
          <div className="k-cabinets__first-section__description">
            <h3 className="k-cabinets__first-section__header">
              Bathroom Cabinets
            </h3>
            <p className="k-cabinets__first-section__paragraph">
              Our bathroom transformations go beyond expectations — our work is
              where quality meets sophistication, and your satisfaction is our
              ultimate benchmark. Elevate your space, indulge in luxury, and
              make your daily routine a testament to Avanti Enterprise's
              quality.
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
            src={bathroomImage}
            alt="Kitchen cabinets"
          />
        </div>
        <div className="k-cabinets__color-section">
          <ProductLayout
            header="Available Traditional"
            onCardClick={onCardClick}
            productArray={kitchenCabinetsTraditional}
          />
        </div>
        <div className="k-cabinets__color-section">
          <ProductLayout
            header="Available Shakers"
            onCardClick={onCardClick}
            productArray={kitchenCabinetsShaker}
          />
        </div>
      </div>
    </>
  );
}

export default BathroomCabinets;
