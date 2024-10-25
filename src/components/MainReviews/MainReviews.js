import React, { useState } from "react";

import forwardArrow from "../../images/icons/arrowCarrotRight.svg";
import backArrow from "../../images/icons/arrowCarrotLeft.svg";
import quotationMarks from "../../images/main/quotationMarks.png";

function MainReviews({ reviews }) {
  const [isReview, setIsReview] = useState(1);

  const handleStepBackward = () => {
    setIsReview(isReview === 1 ? 3 : isReview - 1);
  };

  const handleStepForward = () => {
    setIsReview(isReview === 3 ? 1 : isReview + 1);
  };

  return (
    <section className="main-reviews">
      <div className="main-reviews__container">
        <img
          className="main-reviews__back-button"
          src={backArrow}
          alt="Back arrow to see high-rating reviews for home remodel."
          onClick={handleStepBackward}
        />

        <div className={`main-reviews__review`}>
          {reviews.map((review, index) => (
            <div
              className={`main-reviews__transition-container ${
                isReview === index + 1 ? "visible" : "hidden"
              }`}
              key={review.id}
              id={review.id}
            >
              <img
                className="main-reviews__image"
                src={quotationMarks}
                alt="Quotation marks for high-rating reviews for home remodel."
              />
              <p className="main-reviews__quote">{review.quote}</p>
              <p className="main-reviews__author">{review.author}</p>
            </div>
          ))}
        </div>
        <img
          className="main-reviews__forward-button"
          src={forwardArrow}
          alt="Forward arrow to see high-rating reviews for home remodel."
          onClick={handleStepForward}
        />
      </div>
    </section>
  );
}

export default MainReviews;
