import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import kitchenParallax from "../../images/servicesParallax/kitchenCabinetsParallax.jpg";
import kitchenImage from "../../images/showcaseCards/kitchenCabinetsNew2.jpg";
import {
  kitchenCabinetsShaker,
  kitchenCabinetsTraditional,
} from "../../utils/constants";
import ProductLayout from "../ProductLayout/ProductLayout";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function KitchenCabinets({ onCardClick }) {
  return (
    <>
      <div className="k-cabinets">
        <Parallax strength={400} bgImage={kitchenParallax}>
          <div className="k-cabinets__parallax"></div>
        </Parallax>
        <div className="k-cabinets__first-section">
          <div className="k-cabinets__first-section__description">
            <h3 className="k-cabinets__first-section__header">
              Kitchen Cabinets
            </h3>
            <p className="k-cabinets__first-section__paragraph">
              Our kitchen cabinets are meticulously crafted with a focus on both
              aesthetics and functionality. Choose our kitchen cabinets for a
              perfect blend of durability, style, and smart functionality that
              will elevate the heart of your home.
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
            src={kitchenImage}
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

export default KitchenCabinets;
