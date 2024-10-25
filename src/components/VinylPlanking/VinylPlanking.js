import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import vinylParallax from "../../images/servicesParallax/vinylPlankingParallax.jpg";
import vinylImage from "../../images/showcaseCards/vinylPlankingImage.jpg";
import { vinylPlankingData } from "../../utils/constants";
import ProductLayout from "../ProductLayout/ProductLayout";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";
import { Helmet } from "react-helmet-async";

function VinylPlanking({ handleOpenModal, onCardClick }) {
  return (
    <>
      <Helmet>
        <title>
          Custom Vinyl Planking in Dallas Fort Worth | Avanti Enterprises
        </title>
        <meta
          name="description"
          content="Upgrade your floor with luxury vinyl planking from Avanti Enterprises. We offer the best waterproof and wood-look options as well as expert installation."
        />
        <link rel="canonical" href="/services/vinyl-planking" />
      </Helmet>

      <div className="k-cabinets">
        <Parallax strength={400} bgImage={vinylParallax}>
          <div className="k-cabinets__parallax"></div>
        </Parallax>
        <div className="k-cabinets__first-section">
          <div className="k-cabinets__first-section__description">
            <h1 className="k-cabinets__first-section__header">
              Vinyl Planking
            </h1>
            <p className="k-cabinets__first-section__paragraph">
              Elevate your space with our premium vinyl planking, offering a
              perfect fusion of style and durability. Choose our vinyl planking
              for a stunning, low-maintenance flooring solution that brings both
              sophistication and resilience to your living spaces.
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
            src={vinylImage}
            alt="Custom vinyl plaking installed in a Dallas Fort Worth home"
          />
        </div>
        <div className="k-cabinets__color-section">
          <ProductLayout
            header="Available Vinyl Planking"
            onCardClick={onCardClick}
            productArray={vinylPlankingData}
          />
        </div>
      </div>
    </>
  );
}

export default VinylPlanking;
