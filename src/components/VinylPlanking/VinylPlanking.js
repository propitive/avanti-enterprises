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
              Lorem ipsum dolor sit amet
            </h3>
            <p className="k-cabinets__first-section__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <BookOnlineButton
              className="k-cabinets__first-section__button"
              buttonText="GET A FREE QUOTE"
            />
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
