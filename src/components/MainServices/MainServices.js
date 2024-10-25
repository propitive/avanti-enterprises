import { showcaseCards } from "../../utils/constants";
import { Link } from "react-router-dom";

function MainServices() {
  return (
    <section className="main-services">
      <div className="main-services__container">
        {showcaseCards.map((card) => {
          return (
            <Link to={card.link} className="main-services__link">
              <div key={card.id} className="main-services__card">
                <img
                  className="main-services__image"
                  src={card.src}
                  alt={card.alt}
                />
                <h3 className="main-services__title">{card.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default MainServices;
