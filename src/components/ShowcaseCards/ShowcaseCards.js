import { showcaseCards } from "../../utils/constants";
import { Link } from "react-router-dom";

function ShowcaseCards() {
  return (
    <div className="showcase">
      {showcaseCards.map((card) => {
        return (
          <Link to={card.link} style={{ textDecoration: "none" }}>
            <div key={card.id} className="showcase__card">
              <img className="showcase__image" src={card.src} />
              <h3 className="showcase__title">{card.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ShowcaseCards;
