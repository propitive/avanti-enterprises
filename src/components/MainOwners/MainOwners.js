import { Link } from "react-router-dom/cjs/react-router-dom.min";

import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function MainOwners() {
  return (
    <section className="main-owners">
      <div className="main-owners__container">
        <div className="main-owners__image"></div>
        <div className="main-owners__text-container">
          <h3 className="main-owners__subtitle">
            NOT YOUR TYPICAL GENERAL CONTRACTOR
          </h3>
          <h2 className="main-owners__title">MEET JOSE "CHEMA" MALDONADO</h2>
          <p className="main-owners__paragraph">
            Home remodeling is my passion. With over 20 years of commercial and
            residential construction and project management experience, Avanti
            Enterprises is here to serve you. I have home remodeling experiences
            from all over North Texas, but nothing makes me happier than sharing
            my design ideas and creating custom spaces for homeowners in Dallas
            and the surrounding counties. I am involved in every step of the
            project, from the moment a customer calls until they stand in front
            of the finished project with a smile on their face.
          </p>
          <Link to="/about-us">
            <BookOnlineButton
              className="main-owners__button"
              buttonText="LEARN MORE"
              handleOpenModal={() => null}
              toggleSidebar={() => null}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainOwners;
