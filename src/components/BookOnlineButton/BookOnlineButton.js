function BookOnlineButton({ className }) {
  return (
    <button className={"book-online__button " + className}>
      <span className="book-online__button-shadow"></span>
      <span className="book-online__button-edge"></span>
      <span className="book-online__button-text">GET A QUOTE</span>
    </button>
  );
}

export default BookOnlineButton;
