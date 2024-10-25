import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function GalleryCta({ handleOpenModal }) {
  return (
    <div className="gallery-cta">
      <div className="gallery-cta__container">
        <div className="gallery-cta__text-container">
          <h3 className="gallery-cta__title">
            Get your all-incusive renovation estimate!
          </h3>
          <p className="gallery-cta__paragraph">
            Start with an estimate for your project and see how we can bring
            your vision to life!
          </p>
        </div>
        <BookOnlineButton
          className="gallery-cta__button"
          buttonText="GET A FREE QUOTE"
          handleOpenModal={handleOpenModal}
          toggleSidebar={() => null}
        />
      </div>
    </div>
  );
}

export default GalleryCta;
