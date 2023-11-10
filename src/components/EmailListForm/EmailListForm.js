import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function EmailListForm() {
  return (
    <div className="email-list">
      <h3 className="email-list__header">JOIN OUR MAILING LIST</h3>
      <form className="email-list__form">
        <input
          className="email-list__input"
          name="user-email"
          type="text"
          placeholder="Email Address"
          required
        />
        <BookOnlineButton
          buttonText="SUBSCRIBE"
          className="email-list__button"
        />
      </form>
    </div>
  );
}

export default EmailListForm;
