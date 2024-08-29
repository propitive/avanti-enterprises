import React, { useRef, useState, useEffect } from "react";

import { imageSliderReviews } from "../../utils/constants";

function MainReviews() {
  const [isReview, setIsReview] = useState(1);

  const handleStepBackward = () => {
    if (isReview === 1) return setIsReview(3);
    return setIsReview(isReview - 1);
  };

  const handleStepForward = () => {
    if (isReview === 3) return setIsReview(1);
    return setIsReview(isReview + 1);
  };

  return (
    <section className="main-reviews">
      <div className="main-reviews__container">
        <button
          className="main-reviews__back-button"
          type="button"
          onClick={handleStepBackward}
        />
        {isReview === 1 ? (
          <div
            className="main-reviews__review"
            id={imageSliderReviews.at(0).id}
          >
            <p className="main-reviews__quote">
              {imageSliderReviews.at(0).quote}
            </p>
            <p className="main-reviews__author">
              {imageSliderReviews.at(0).author}
            </p>
          </div>
        ) : undefined}
        {isReview === 2 ? (
          <div
            className="main-reviews__review"
            id={imageSliderReviews.at(1).id}
          >
            <p className="main-reviews__quote">
              {imageSliderReviews.at(1).quote}
            </p>
            <p className="main-reviews__author">
              {imageSliderReviews.at(1).author}
            </p>
          </div>
        ) : undefined}
        {isReview === 3 ? (
          <div
            className="main-reviews__review"
            id={imageSliderReviews.at(2).id}
          >
            <p className="main-reviews__quote">
              {imageSliderReviews.at(2).quote}
            </p>
            <p className="main-reviews__author">
              {imageSliderReviews.at(2).author}
            </p>
          </div>
        ) : undefined}
        <button
          className="main-reviews__forward-button"
          type="button"
          onClick={handleStepForward}
        />
      </div>
    </section>
  );
}

export default MainReviews;
