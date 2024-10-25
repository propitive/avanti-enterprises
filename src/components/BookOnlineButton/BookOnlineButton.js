function BookOnlineButton({
  className,
  buttonText,
  handleOpenModal,
  toggleSidebar,
}) {
  const handleClick = () => {
    toggleSidebar();
    handleOpenModal();
  };

  return (
    <button
      className={"book-online__button " + className}
      type="submit"
      onClick={handleClick}
    >
      <span className="book-online__button-shadow"></span>
      <span className="book-online__button-edge"></span>
      <span className="book-online__button-text">{buttonText}</span>
    </button>
  );
}

export default BookOnlineButton;
