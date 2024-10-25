import { aboutProcess } from "../../utils/constants";

function AboutProcess() {
  return (
    <section className="about-process">
      <div className="about-process__container">
        <h2 className="about-process__title">OUR PROCESS</h2>
        <div className="about-process__card-container">
          {aboutProcess.map((step) => {
            return (
              <div className="about-process__card" id={step.id}>
                <img className="about-process__card-image" src={step.image} />
                <h3 className="about-process__card-title">{step.title}</h3>
                <p className="about-process__card-paragraph">
                  {step.paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutProcess;
