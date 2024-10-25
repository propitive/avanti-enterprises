import { Link } from "react-router-dom";
import starImg from "../../../images/icons/star.svg";
import ImageGallery from "../ImageGallery";
import BlogCta from "../../Blog/BlogCta/BlogCta";
import GalleryCta from "../GalleryCta";

function Galleries({
  handleOpenModal,
  imageGalleryImages,
  // projectImage,
  projectInfo,
  projectNumber,
  projectReviewInfo,
}) {
  return (
    <div className="galleries">
      <div className="galleries__container">
        <p className="galleries__project-path-text">
          <Link
            to="/gallery"
            style={{ textDecoration: "none", color: "black" }}
          >
            Project Gallery
          </Link>{" "}
          / {projectNumber}
        </p>
        <div className="galleries__project-info-container">
          {/* <div className="galleries__image-container">
            <img className="galleries__displayed-image" src={projectImage} />
          </div> */}
          <ImageGallery images={imageGalleryImages} />
          <div className="galleries__info">
            <h1 className="galleries__title">{projectNumber}</h1>
            {projectInfo.map((projectInfo) => {
              return (
                <div className="galleries__info-column">
                  <h3 className="galleries__info-title">{projectInfo.title}</h3>
                  <p className="galleries__info-description">
                    {projectInfo.description}
                  </p>
                </div>
              );
            })}
            <div className="galleries__review-container">
              <h3 className="galleries__review-title">Review</h3>
              <div className="galleries__review">
                <div className="galleries__review-stars">
                  <img
                    className="galleries__review-star"
                    src={starImg}
                    alt="Star for the excellent customer service Avanti Enterprises provides."
                  />
                  <img
                    className="galleries__review-star"
                    src={starImg}
                    alt="Star for the excellent customer service Avanti Enterprises provides."
                  />
                  <img
                    className="galleries__review-star"
                    src={starImg}
                    alt="Star for the excellent customer service Avanti Enterprises provides."
                  />
                  <img
                    className="galleries__review-star"
                    src={starImg}
                    alt="Star for the excellent customer service Avanti Enterprises provides."
                  />
                  <img
                    className="galleries__review-star"
                    src={starImg}
                    alt="Star for the excellent customer service Avanti Enterprises provides."
                  />
                </div>
                <p className="galleries__review-paragraph">
                  {projectReviewInfo.review}
                </p>
                <p className="galleries__review-customer">
                  {projectReviewInfo.customer}
                </p>
              </div>
            </div>
          </div>
          <div className="galleries__cta-mobile">
            <GalleryCta handleOpenModal={handleOpenModal} />
          </div>
        </div>
        <div className="galleries__cta-desktop">
          <GalleryCta handleOpenModal={handleOpenModal} />
        </div>
      </div>
    </div>
  );
}

export default Galleries;
