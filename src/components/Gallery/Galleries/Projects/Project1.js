import { Helmet } from "react-helmet-async";
import Galleries from "../Galleries";

import image from "../../../../images/about/menInstalling.jpg";
import {
  projectOneImages,
  projectOneInfo,
  projectOneReview,
} from "../../../../utils/gallery/galleries/project1";

function Project1({ handleOpenModal }) {
  return (
    <>
      <Helmet>
        <title>Project #1 | Avanti Enterprises</title>
        <meta name="description" content="Remodeled kitchen cabinets" />
        <link rel="canonical" href="/gallery/project1" />
      </Helmet>

      <Galleries
        handleOpenModal={handleOpenModal}
        imageGalleryImages={projectOneImages}
        // projectImage={image}
        projectInfo={projectOneInfo}
        projectNumber="Project #1"
        projectReviewInfo={projectOneReview}
      />
    </>
  );
}

export default Project1;
