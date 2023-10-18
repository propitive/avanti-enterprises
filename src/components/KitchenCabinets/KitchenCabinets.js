import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Parallax } from "react-parallax";
import kitchenParallax from "../../images/servicesParallax/kitchenCabinets.jpg";
import kitchenImage from "../../images/showcaseCards/kitchenCabinets.jpg";
import { kitchenCabinetsTraditional } from "../../utils/constants";

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
          <h3 className="k-cabinets__color-section__header">
            Available Colors
          </h3>
          <p className="k-cabinets__color-section__divider">Traditional</p>
          <div className="k-cabinets__colors-section">
            <div className="k-cabinets__colors-section__cards">
              {kitchenCabinetsTraditional.map((cabinet) => {
                return (
                  <div className="k-cabinets__colors-section__card">
                    <img
                      className="k-cabinets__colors-section__card-image"
                      src={cabinet.image}
                    />
                    <h4 className="k-cabinets__colors-section__card-title">
                      {cabinet.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default KitchenCabinets;
