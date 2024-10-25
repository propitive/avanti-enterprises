import { useEffect } from "react";
import React from "react";

function ItemModal({ card, onClose }) {
  const handleCloseOnOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="item-modal__preview" onClick={handleCloseOnOverlayClick}>
      <div className="item-modal__container">
        <button
          type="button"
          className="item-modal__close-button"
          onClick={onClose}
        ></button>
        <img
          className="item-modal__preview-image"
          alt={card.title}
          src={card.image}
        />
        <div className="item-modal__content">
          <h2 className="item-modal__title">{card.title}</h2>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
