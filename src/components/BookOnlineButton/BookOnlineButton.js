function BookOnlineButton({ className, buttonText }) {
  return (
    <button className={"book-online__button " + className} type="submit">
      <span className="book-online__button-shadow"></span>
      <span className="book-online__button-edge"></span>
      <span className="book-online__button-text">{buttonText}</span>
    </button>
  );
}

export default BookOnlineButton;
