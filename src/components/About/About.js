import { imageSliderReviews } from "../../utils/constants";
import { Helmet } from "react-helmet-async";

import AboutHeader from "../AboutHeader/AboutHeader";
import AboutOwners from "../AboutOwners/AboutOwners";
import AboutProcess from "../AboutProcess/AboutProcess";
import MainReviews from "../MainReviews/MainReviews";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Avanti Enterprises</title>
        <meta
          name="description"
          content="Discover Avanti Enterprises, your trusted experts in kitchen and bathroom cabinet remodeling in Dallas-Fort Worth. we are committed to customer satisfaction."
        />
        <link rel="canonical" href="/services/about-us" />
      </Helmet>

      <div className="about">
        <AboutHeader />
        {/* <AboutOwners /> */}
        <AboutProcess />
        <MainReviews reviews={imageSliderReviews} />
      </div>
    </>
  );
}

export default About;
