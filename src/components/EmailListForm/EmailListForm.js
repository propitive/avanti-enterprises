import React, { useRef } from "react";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function EmailListForm() {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_svf8kqt",
  //       "template_v5yhpim",
  //       form.current,
  //       "jGNwN29o5MpAtqpNz"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();
  // };

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
