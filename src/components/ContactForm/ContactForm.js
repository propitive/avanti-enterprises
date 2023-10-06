import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_svf8kqt",
        "template_suuq3lm",
        form.current,
        "jGNwN29o5MpAtqpNz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Header />
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <h2 className="contact-form__header">Contact Us</h2>
        <div className="form__input-box">
          <input
            className="form__input"
            name="user-name"
            type="text"
            required
          />
          <span className="form__input-span">Full Name</span>
        </div>
        <div className="form__input-box">
          <input
            className="form__input"
            name="user-email"
            type="text"
            required
          />
          <span className="form__input-span">Email</span>
        </div>
        <div className="form__input-box">
          <input className="form__input" name="number" type="number" required />
          <span className="form__input-span">Number</span>
        </div>
        <BookOnlineButton className="contact-form__button" />
      </form>
      <Footer />
    </>
  );
}

export default ContactForm;
