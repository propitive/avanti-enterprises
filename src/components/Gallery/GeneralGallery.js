import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Helmet } from "react-helmet-async";

import { generalGalleries } from "../../utils/gallery/gallery";

function GeneralGallery() {
  return (
    <>
      <Helmet>
        <title>Project Gallery | Avanti Enterprises</title>
        <meta
          name="description"
          content="Explore our gallery and read client testimonials to see how Avanti Enterprises transforms kitchens and bathrooms with custom cabinets and expert remodeling services."
        />
        <link rel="canonical" href="/gallery" />
      </Helmet>

      <div className="general-gallery">
        <div className="general-gallery__header">
          <h1 className="general-gallery__header-title">Gallery</h1>
          <h2 className="general-gallery__header-subtitle">
            We help homeowners take pride in every part of their home.
            <br /> Don't take our word for it... take theirs.
          </h2>
        </div>
      </div>
      <div className="general-gallery__container">
        {generalGalleries.map((testimony) => {
          return (
            <div className="general-gallery__card">
              <Link
                to={testimony.link}
                style={{
                  textDecoration: "none",
                }}
              >
                <div className="general-gallery__image-container">
                  <img
                    className="general-gallery__image"
                    src={testimony.image}
                    alt={testimony.alt}
                  />
                </div>
              </Link>
              <Link
                to={testimony.link}
                style={{
                  textDecoration: "none",
                  color: "black",
                  width: "fit-content",
                }}
              >
                <h2 className="general-gallery__title">{testimony.title}</h2>
              </Link>

              <Link
                to={testimony.link}
                style={{
                  textDecoration: "none",
                  color: "#606060",
                  width: "fit-content",
                }}
              >
                <h3 className="general-gallery__subtitle">
                  {testimony.location}
                </h3>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GeneralGallery;
