import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Parallax } from "react-parallax";
import kitchenParallax from "../../images/servicesParallax/kitchenCabinets.jpg";
import kitchenImage from "../../images/showcaseCards/kitchenCabinets.jpg";
import {
  kitchenCabinetsShaker,
  kitchenCabinetsTraditional,
} from "../../utils/constants";
import ProductLayout from "../ProductLayout/ProductLayout";

function KitchenCabinets() {
  return (
    <>
      <Header />
      <div className="k-cabinets">
        <Parallax strength={400} bgImage={kitchenParallax}>
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
            productArray={kitchenCabinetsTraditional}
          />
          <ProductLayout
            header="Available Shakers"
            productArray={kitchenCabinetsShaker}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default KitchenCabinets;
