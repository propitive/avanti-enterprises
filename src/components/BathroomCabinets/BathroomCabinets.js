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
import { Helmet } from "react-helmet-async";

function BathroomCabinets({ handleOpenModal, onCardClick }) {
  return (
    <>
      <Helmet>
        <title>
          Custom Bathroom Cabinets in Dallas Fort Worth | Avanti Enterprises
        </title>
        <meta
          name="description"
          content="Upgrade your bathroom with custom vanities, wall-mounted storage, and single or double sinks. Avanti Enterprises offers tailored solutions for every space in DFW."
        />
        <link rel="canonical" href="/services/bathroom-cabinets" />
      </Helmet>

      <div className="k-cabinets">
        <Parallax strength={400} bgImage={bathroomParallax}>
          <div className="k-cabinets__parallax"></div>
        </Parallax>
        <div className="k-cabinets__first-section">
          <div className="k-cabinets__first-section__description">
            <h1 className="k-cabinets__first-section__header">
              Bathroom Cabinets
            </h1>
            <p className="k-cabinets__first-section__paragraph">
              Our bathroom transformations go beyond expectations — our work is
              where quality meets sophistication, and your satisfaction is our
              ultimate benchmark. Elevate your space, indulge in luxury, and
              make your daily routine a testament to Avanti Enterprise's
              quality.
            </p>
            <BookOnlineButton
              className="k-cabinets__first-section__button"
              buttonText="GET A FREE QUOTE"
              handleOpenModal={handleOpenModal}
              toggleSidebar={() => null}
            />
            {/* </Link> */}
          </div>
          <img
            className="k-cabinets__first-section__image"
            src={bathroomImage}
            alt="Custom white bathroom cabinets installed in a Dallas Fort Worth home"
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
