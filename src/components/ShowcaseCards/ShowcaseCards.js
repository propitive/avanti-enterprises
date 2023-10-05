import { showcaseCards } from "../../utils/constants";

function ShowcaseCards() {
  return (
    <div className="showcase">
      {showcaseCards.map((card) => {
        return (
          <div key={card.id} className="showcase__card">
            <img className="showcase__image" src={card.src} />
            <h3 className="showcase__title">{card.title}</h3>
            {/* <p className="showcase__paragraph">{card.paragraph}</p> */}
          </div>
        );
      })}
    </div>
  );
}

export default ShowcaseCards;
