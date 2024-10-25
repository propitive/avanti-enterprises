import React, { useRef, useState, useEffect } from "react";
// import Select from "react-select";
// import makeAnimated from "react-select/animated";
import emailjs from "@emailjs/browser";
import { InputMask } from "primereact/inputmask";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

// import { serviceOptions } from "../../utils/constants";

// const animatedComponents = makeAnimated();

function ModalGetAQuote({ handleCloseModal, handleOpenSubmit, isOpen }) {
  // const name = useRef();
  // const email = useRef();
  // const number = useRef();
  // const service = useRef();
  // const message = useRef();
  // const company = useRef();
  const form = useRef();

  const [numberValue, setNumberValue] = useState(null);

  // const handleInputClear = () => {
  //   name.current.clearValue();
  //   email.current.clearValue();
  //   number.current.clearValue();
  //   service.current.clearValue();
  //   message.current.clearValue();
  //   company.current.clearValue();
  // };

  const handleCloseOnOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_svf8kqt",
        "template_v5yhpim",
        form.current,
        "jGNwN29o5MpAtqpNz"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("successful");
          // handleInputClear();
          handleCloseModal();
          handleOpenSubmit();
        },
        (error) => {
          console.log(error.text);
          console.log("unsuccessful");
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div
      className={`modal ${isOpen ? "modal__open" : ""}`}
      onClick={handleCloseOnOverlayClick}
    >
      <form
        className="modal__form"
        // name="inquiryForm"
        ref={form}
        onSubmit={sendEmail}
      >
        <h2 className="modal__title">Contact Us</h2>
        <div className="form__input-container">
          <div className="form__input-box form__input-name">
            <input
              className="form__input"
              name="user-name"
              type="text"
              required
            />
            <span className="form__input-span">Full Name</span>
          </div>
          <div className="form__input-box form__input-number">
            <InputMask
              value={numberValue}
              onChange={(e) => {
                setNumberValue(e.value);
              }}
              mask="(999) 999-9999"
              className="form__input"
              name="user-number"
              type="text"
              required
            />
            <span className="form__input-span">Number</span>
          </div>
        </div>
        <div className="form__input-container">
          <div className="form__input-box form__input-email">
            <input
              className="form__email-input"
              name="user-email"
              type="text"
              required
            />
            <span className="form__input-span">Email</span>
          </div>
        </div>
        <div className="form__input-box form__input-message">
          <textarea
            className="form__input form__input-message-container"
            name="user-message"
            type="text"
            required
          />
          <span className="form__input-span">Message</span>
        </div>
        {/* <button
          className="modal__button form__input-button"
          type="submit"
        >
          <p className="modal__button-text">Submit</p>
        </button> */}
        <BookOnlineButton
          buttonText="SUBMIT"
          handleOpenModal={() => null}
          toggleSidebar={() => null}
        />
        <button
          className="modal__button-close"
          type="button"
          onClick={() => handleCloseModal()}
        ></button>
      </form>
    </div>
  );
}

export default ModalGetAQuote;
