import React, { useState, useEffect } from "react";
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
import { Helmet } from "react-helmet-async";

function KitchenCabinets({ handleOpenModal, onCardClick }) {
  const [bgHeight, setBgHeight] = useState("500px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setBgHeight("550px"); // For small screens (e.g., mobile)
      } else if (window.innerWidth >= 1000 && window.innerWidth < 1250) {
        setBgHeight("650px"); // For medium screens (e.g., tablets)
      } else if (window.innerWidth >= 1250 && window.innerWidth < 1450) {
        setBgHeight("750px"); // For large screens (e.g., small desktops)
      } else {
        setBgHeight("850px"); // For extra-large screens (e.g., large desktops)
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the size on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Custom Kitchen Cabinets in Dallas Fort Worth | Avanti Enterprises
        </title>
        <meta
          name="description"
          content="Transform your kitchen with custom cabinets from Avanti Enterprises in Dallas-Fort Worth. Choose from white, oak, or other designs for the perfect style and color match."
        />
        <link rel="canonical" href="/services/kitchen-cabinets" />
      </Helmet>

      <div className="k-cabinets">
        <Parallax
          bgImageStyle={{ height: bgHeight }}
          strength={400}
          bgImage={kitchenParallax}
        >
          <div className="k-cabinets__parallax"></div>
        </Parallax>
        <div className="k-cabinets__first-section">
          <div className="k-cabinets__first-section__description">
            <h1 className="k-cabinets__first-section__header">
              Kitchen Cabinets
            </h1>
            <p className="k-cabinets__first-section__paragraph">
              Our kitchen cabinets are meticulously crafted with a focus on both
              aesthetics and functionality. Choose our kitchen cabinets for a
              perfect blend of durability, style, and smart functionality that
              will elevate the heart of your home.
            </p>
            {/* <Link
              to="/contact-form"
              style={{ textDecoration: "none", color: "#f5f0f0" }}
            > */}
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
            src={kitchenImage}
            alt="Custom white kitchen cabinets installed in a Dallas Fort Worth home"
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
