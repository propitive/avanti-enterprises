import processImage from "../../images/main/ourProcess.jpg";

import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function MainProcess() {
  return (
    <section className="main-process">
      <div className="main-process__textbox-container">
        <div className="main-process__textbox">
          <h2 className="main-process__textbox-title">OUR PROCESS</h2>
          <p className="main-process__textbox-paragraph">
            We prioritize transparency and collaboration, ensuring you're
            involved in every step of the process, from initial design to final
            installation. You can trust that your vision will be expertly
            crafted into a stunning, functional space tailored to your needs.
          </p>
          <BookOnlineButton
            className="main-process__button"
            buttonText="LEARN MORE"
          />
        </div>
      </div>
      <img
        className="main-process__image"
        src={processImage}
        alt="Picture of a beautifully renovated kitchen that looks modern and revolves around the brown color palette."
      />
    </section>
  );
}

export default MainProcess;
