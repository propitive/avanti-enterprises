import Benefits from "../Benefits/Benefits";
import ImageSlider from "../ImageSlider/ImageSlider";
import MainProcess from "../MainProcess/MainProcess";
import ShowcaseCards from "../ShowcaseCards/ShowcaseCards";
import MainTitle from "../MainTitle/MainTitle";
import MainReviews from "../MainReviews/MainReviews";

function Main() {
  return (
    <>
      <ImageSlider />
      <MainTitle />
      <MainProcess />
      <MainReviews />
      <ShowcaseCards />
      <Benefits />
    </>
  );
}

export default Main;
