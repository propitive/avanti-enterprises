import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function MainCta({ handleOpenModal }) {
  return (
    <section className="main-cta">
      <h2 className="main-cta__text">READY TO REMODEL?</h2>
      <BookOnlineButton
        className="main-cta__button"
        buttonText="GET IN TOUCH"
        handleOpenModal={handleOpenModal}
        toggleSidebar={() => null}
      />
    </section>
  );
}

export default MainCta;
