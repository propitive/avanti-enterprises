import { imageSliderReviews } from "../../utils/constants";
import { imageSliderPhotos } from "../../utils/constants";
import { Helmet } from "react-helmet-async";

import ImageSlider from "../ImageSlider/ImageSlider";
import MainProcess from "../MainProcess/MainProcess";
import MainTitle from "../MainTitle/MainTitle";
import MainReviews from "../MainReviews/MainReviews";
import MainServices from "../MainServices/MainServices";
import MainSubtitle from "../MainSubtitle/MainSubtitle";
import MainOwners from "../MainOwners/MainOwners";
import MainCta from "../MainCta/MainCta";

function Main({ handleOpenModal }) {
  return (
    <>
      <Helmet>
        <title>
          Interior Home Remodeling in Dallas Fort Worth | Avanti Enterprises
        </title>
        <meta
          name="description"
          content="
Avanti Enterprises, top contractor in Dallas, TX, specializes in custom kitchen and bathroom remodeling. Offering design, build, and service for residential properties."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <ImageSlider photos={imageSliderPhotos} />
      <MainTitle />
      <MainProcess />
      <MainReviews reviews={imageSliderReviews} />
      <MainServices />
      <MainSubtitle />
      {/* <MainOwners /> */}
      <MainCta handleOpenModal={handleOpenModal} />
    </>
  );
}

export default Main;
