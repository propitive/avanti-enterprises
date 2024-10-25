import React, { useState } from "react";

function ImageGallery({ images }) {
  // State to track the currently displayed image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Handler to change the displayed image when a thumbnail is clicked
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="image-gallery">
      {/* Displayed Image */}
      <div className="image-gallery__displayed-image-container">
        <img
          className="image-gallery__displayed-image"
          src={currentImage}
          alt="Displayed"
        />
      </div>

      {/* Thumbnails */}
      <div className="image-gallery__thumbnails">
        {images.map((image, index) => (
          <img
            className="image-gallery__thumbnail"
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => handleImageClick(image)}
            style={{
              outline:
                currentImage === image
                  ? "2px solid hsl(345deg 100% 47%)"
                  : "none",
            }}
            // style={{
            //   outline: currentImage === image ? "2px solid #00294b" : "none",
            // }}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
