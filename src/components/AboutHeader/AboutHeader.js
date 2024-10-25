import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import aboutParallax from "../../images/about/aboutParallax.jpg";

function AboutHeader() {
  const [bgHeight, setBgHeight] = useState("500px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setBgHeight("550px"); // For small screens (e.g., mobile)
      } else if (window.innerWidth >= 1000 && window.innerWidth < 1250) {
        setBgHeight("650px"); // For medium screens (e.g., tablets)
      } else if (window.innerWidth >= 1250 && window.innerWidth < 1450) {
        setBgHeight("750px"); // For large screens (e.g., small desktops)
      } else {
        setBgHeight("850px"); // For extra-large screens (e.g., large desktops)
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the size on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="about-header">
      <Parallax
        bgImageStyle={{ height: bgHeight }}
        strength={400}
        bgImage={aboutParallax}
      >
        <div className="about-header__parallax-div"></div>
      </Parallax>
      <div className="about-header__text-container">
        <h1 className="about-header__header">
          WE SPECIALIZE IN CUSTOM, HIGH QUALITY REMODELING PROJECTS
        </h1>
        <p className="about-header__paragraph">
          Avanti Enterprises is a custom design and remodeling company.
          Specializing in kitchens, bathrooms, windows, and so much more- there
          is no limit to our expertise. I am an experienced, detail oriented,
          contractor and promise quality work, dedication to customer service,
          and honest estimates. At Avanti Enterprises, our mission is to make
          your vision come true and create a space for you and your loved ones
          to make everlasting memories. That’s what we do best, we make your
          house a home.
        </p>
      </div>
    </section>
  );
}

export default AboutHeader;
