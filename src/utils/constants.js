import { useEffect } from "react";

//// IMAGE SLIDER PHOTOS ////
import kitchenOne from "../images/imageSlider/kitchenOneJPG.jpeg";
import kitchenTwo from "../images/imageSlider/kitchenTwoJPG.jpg";
import kitchenThree from "../images/imageSlider/kitchenThreePNG.jpg";
import kitchenFour from "../images/imageSlider/kitchenFourJPG.jpg";

//// SHOWCASE CARDS ////
import bathroomCabinetsNew from "../images/showcaseCards/bathroomCabinetsNew.png";
import bathroomCabinetsNewCard from "../images/showcaseCards/bathroomCabinetsNewCard.png";
import kitchenCabinetsNew from "../images/showcaseCards/kitchenCabinetsNew.jpg";
import kitchenCabinetsNewCard from "../images/showcaseCards/kitchenCabinetsNewCard.jpg";
import vinylPlanking from "../images/showcaseCards/vinylPlanking.jpg";
import vinylPlankingCard from "../images/showcaseCards/vinylPlankingCard.jpg";

//// PRODUCTS KITCHEN CABINETS ////

import charcoalBlack from "../images/products/kitchenCabinets/charcoalBlack.jpg";
import chocolateGlazed from "../images/products/kitchenCabinets/chocolateGlazed.jpg";
import cremeGlazed from "../images/products/kitchenCabinets/cremeGlazed.jpg";
import dove from "../images/products/kitchenCabinets/dove.png";
import espresso from "../images/products/kitchenCabinets/espresso.png";
import greige from "../images/products/kitchenCabinets/greige.png";
import hazel from "../images/products/kitchenCabinets/hazel.png";
import hillcrestWhite from "../images/products/kitchenCabinets/hillcrestWhite.jpg";
import lancasterWhite from "../images/products/kitchenCabinets/lancasterWhite.jpg";
import mahogany from "../images/products/kitchenCabinets/mahogany.png";
import mochaGlazed from "../images/products/kitchenCabinets/mochaGlazed.png";
import naval from "../images/products/kitchenCabinets/naval.jpg";
import pearlGlazed from "../images/products/kitchenCabinets/pearlGlazed.jpg";
import pebble from "../images/products/kitchenCabinets/pebble.jpg";
import pure from "../images/products/kitchenCabinets/pure.jpg";
import sage from "../images/products/kitchenCabinets/sage.jpg";
import shakerBlue from "../images/products/kitchenCabinets/shakerBlue.jpeg";
import shakerCastleGrey from "../images/products/kitchenCabinets/shakerCastleGrey.jpg";
import shakerEspresso from "../images/products/kitchenCabinets/shakerEspresso.jpg";
import shakerGrey from "../images/products/kitchenCabinets/shakerGrey.jpg";
import shakerHoney from "../images/products/kitchenCabinets/shakerHoney.jpg";
import shakerWhite from "../images/products/kitchenCabinets/shakerWhite.jpg";

//// PRODUCTS VINYL PLANKING ////

import atlantis16121 from "../images/products/vinylPlanking/vertAtlantis1612-1.PNG";
import atlantis16122 from "../images/products/vinylPlanking/vertAtlantis1612-2.PNG";
import atlantis16123 from "../images/products/vinylPlanking/vertAtlantis1612-3.PNG";
import atlantis16124 from "../images/products/vinylPlanking/vertAtlantis1612-4.PNG";
import blueLagoon16141 from "../images/products/vinylPlanking/vertBlueLagoon1614-1.PNG";
import blueLagoon16142 from "../images/products/vinylPlanking/vertBlueLagoon1614-2.PNG";
import blueLagoon16143 from "../images/products/vinylPlanking/vertBlueLagoon1614-3.PNG";
import blueLagoon16144 from "../images/products/vinylPlanking/vertBlueLagoon1614-4.PNG";
import casaCoral16161 from "../images/products/vinylPlanking/vertCasaCoral1616-1.PNG";
import casaCoral16162 from "../images/products/vinylPlanking/vertCasaCoral1616-2.PNG";
import casaCoral16163 from "../images/products/vinylPlanking/vertCasaCoral1616-3.PNG";
import casaCoral16164 from "../images/products/vinylPlanking/vertCasaCoral1616-4.PNG";
import casaCoral16165 from "../images/products/vinylPlanking/vertCasaCoral1616-5.PNG";
import casaCoral16166 from "../images/products/vinylPlanking/vertCasaCoral1616-6.PNG";

//// ABOUT INFO CARDS ////

import aboutChecklist from "../images/icons/about/aboutChecklist.png";
import aboutHandshake from "../images/icons/about/aboutHandshake.png";
import aboutHourglass from "../images/icons/about/aboutHourglass.png";
import aboutMagnifier from "../images/icons/about/aboutMagnifier.png";
import aboutMedal from "../images/icons/about/aboutBusinessman.png";
import aboutPiggyBank from "../images/icons/about/aboutEye.png";

//// ABOUT PROCESS ////

import processConstruction from "../images/about/processConstruction.jpg";
import processConsultation from "../images/about/processConsultation.jpg";
import processDesign from "../images/about/processDesign.jpg";
import processScope from "../images/about/processScope.jpg";

export const dropdownSidebarContentMenu = {
  id: 1,
  title: "Services",
  content: [
    {
      link: "/services/kitchen-cabinets",
      title: "Kitchen Cabinets",
    },
    {
      link: "/services/bathroom-cabinets",
      title: "Bathroom Cabinets",
    },
    {
      link: "/services/vinyl-planking",
      title: "Vinyl Planking",
    },
  ],
};

export const imageSliderPhotos = [
  {
    id: 1,
    src: kitchenTwo,
    alt: "Custom white kitchen cabinets installed in a Dallas Fort Worth home.",
  },
  {
    id: 2,
    src: kitchenThree,
    alt: "Custom brown kitchen cabinets installed in a Dallas Fort Worth home.",
  },
  {
    id: 3,
    src: kitchenOne,
    alt: "Custom blue kitchen cabinets installed in a Dallas Fort Worth home.",
  },
  {
    id: 4,
    src: kitchenFour,
    alt: "Custom gray bathroom cabinets installed in a Dallas Fort Worth home.",
  },
];

export const imageSliderReviews = [
  {
    id: 1,
    author: "Michael Torres",
    quote: `We couldn't be happier with our newly renovated kitchen! The team was professional, punctual, and truly listened to our needs, ensuring every detail was perfect. They transformed our outdated space into a modern, functional kitchen that we now love to spend time in.`,
  },
  {
    id: 2,
    author: "Erick Rodriguez",
    quote: `Our bathroom renovation was an absolute success thanks to this fantastic team. From the initial consultation to the final touches, they demonstrated expertise and a genuine commitment to making our vision a reality. They tailored every aspect of the design to suit our preferences and lifestyle, and the results are simply stunning.`,
  },
  {
    id: 3,
    author: "Alma Martinez",
    quote: `We are thrilled with the beautiful cabinets installed in our new kitchen and bathrooms. The craftsmanship is top-notch, and the team was incredibly attentive to our needs throughout the process. They offered creative solutions that we hadn’t even thought of, and the final product is both functional and stylish.`,
  },
];

export const showcaseCards = [
  {
    id: 1,
    src: bathroomCabinetsNewCard,
    alt: "Custom white bathroom cabinets installed in a Dallas Fort Worth home",
    title: "Bathroom Cabinets",
    paragraph:
      "Lorem ipsum dolor sit amet. 33 laudantium quia non odit alias ex natus sint et minima ipsam sit possimus vero rem minima omnis. Eum animi explicabo aut praesentium aliquam ab dolorem!",
    link: "/services/bathroom-cabinets",
  },
  {
    id: 2,
    src: kitchenCabinetsNewCard,
    alt: "Custom white kitchen cabinets installed in a Dallas Fort Worth home",
    title: "Kitchen Cabinets",
    paragraph:
      "Lorem ipsum dolor sit amet. 33 laudantium quia non odit alias ex natus sint et minima ipsam sit possimus vero rem minima omnis. Eum animi explicabo aut praesentium aliquam ab dolorem!",
    link: "/services/kitchen-cabinets",
  },
  {
    id: 3,
    src: vinylPlankingCard,
    alt: "Custom vinyl planking installed in a Dallas Fort Worth home",
    title: "Vinyl Planking",
    paragraph:
      "Lorem ipsum dolor sit amet. 33 laudantium quia non odit alias ex natus sint et minima ipsam sit possimus vero rem minima omnis. Eum animi explicabo aut praesentium aliquam ab dolorem!",
    link: "/services/vinyl-planking",
  },
];

export const aboutProcess = [
  {
    id: 1,
    image: processConsultation,
    title: "Consultation",
    paragraph:
      "Upon contacting us we schedule an onsite consultation where we listen to your objectives and goals for the remodel. It’s here we will discuss the possibilities within the project(s) while attaining a better understanding of the your timeline, budget and any addition parameters and specific needs in order to provide an accurate proposal.",
  },
  {
    id: 2,
    image: processScope,
    title: "Scope of Work & Detailed Estimate",
    paragraph:
      "After the initial consultation we deliver and review a scope of work to you, along with a detailed, honest estimate. Each phase of the project will be broken down to provide a transparent understanding of our services and our timeline.",
  },
  {
    id: 3,
    image: processDesign,
    title: "Design & Selections",
    paragraph:
      "We offer professional design services that can not only create a space with tailored choices but make your build-out a seamless experience. Once under contract, the design and finish selections of the project begins. After sitting with you to learn the desired look and feel for the project, we carefully present design options that meet your needs and improve the day-to-day lives of our clients.",
  },
  {
    id: 4,
    image: processConstruction,
    title: "Construction",
    paragraph:
      "From the moment the we pull onto the site, we treat your home like ours. From floor coverings and isolating the construction zone, we clean and organize daily. Regular updates will keep you informed of progress and ensure you are satisfied every step of the way.",
  },
];

export const kitchenCabinetsTraditional = [
  {
    id: 2,
    image: chocolateGlazed,
    title: "Chocolate Glazed",
  },
  {
    id: 3,
    image: cremeGlazed,
    title: "Creme Glazed",
  },
  {
    id: 4,
    image: dove,
    title: "Dove",
  },
  {
    id: 5,
    image: espresso,
    title: "Espresso",
  },
  {
    id: 6,
    image: greige,
    title: "Greige",
  },
  {
    id: 7,
    image: hazel,
    title: "Hazel",
  },
  {
    id: 8,
    image: hillcrestWhite,
    title: "Hillcrest White",
  },
  {
    id: 9,
    image: lancasterWhite,
    title: "Lancaster White",
  },
  {
    id: 10,
    image: mahogany,
    title: "Mahogany",
  },
  {
    id: 11,
    image: mochaGlazed,
    title: "Mocha Glazed",
  },
  {
    id: 12,
    image: naval,
    title: "Naval",
  },
  {
    id: 13,
    image: pearlGlazed,
    title: "Pearl Glazed",
  },
  {
    id: 14,
    image: pebble,
    title: "Pebble",
  },
  {
    id: 15,
    image: pure,
    title: "Pure",
  },
  {
    id: 16,
    image: sage,
    title: "Sage",
  },
];

export const kitchenCabinetsShaker = [
  {
    id: 1,
    image: shakerBlue,
    title: "Blue",
  },
  {
    id: 2,
    image: shakerCastleGrey,
    title: "Castle Grey",
  },
  {
    id: 7,
    image: charcoalBlack,
    title: "Charcoal Black",
  },
  {
    id: 3,
    image: shakerEspresso,
    title: "Espresso",
  },
  {
    id: 4,
    image: shakerGrey,
    title: "Grey",
  },
  {
    id: 5,
    image: shakerHoney,
    title: "Honey",
  },
  {
    id: 6,
    image: shakerWhite,
    title: "White",
  },
];

export const vinylPlankingData = [
  {
    id: 1,
    image: atlantis16121,
    title: "Atlantis 1612-1",
  },
  {
    id: 2,
    image: atlantis16122,
    title: "Atlantis 1612-2",
  },
  {
    id: 3,
    image: atlantis16123,
    title: "Atlantis 1612-3",
  },
  {
    id: 4,
    image: atlantis16124,
    title: "Atlantis 1612-4",
  },
  {
    id: 5,
    image: blueLagoon16141,
    title: "Blue Lagoon 1614-1",
  },
  {
    id: 6,
    image: blueLagoon16142,
    title: "Blue Lagoon 1614-2",
  },
  {
    id: 7,
    image: blueLagoon16143,
    title: "Blue Lagoon 1614-3",
  },
  {
    id: 8,
    image: blueLagoon16144,
    title: "Blue Lagoon 1614-4",
  },
  {
    id: 9,
    image: casaCoral16161,
    title: "Casa Coral 1616-1",
  },
  {
    id: 10,
    image: casaCoral16162,
    title: "Casa Coral 1616-2",
  },
  {
    id: 11,
    image: casaCoral16163,
    title: "Casa Coral 1616-3",
  },
  {
    id: 12,
    image: casaCoral16164,
    title: "Casa Coral 1616-4",
  },
  {
    id: 13,
    image: casaCoral16165,
    title: "Casa Coral 1616-5",
  },
  {
    id: 14,
    image: casaCoral16166,
    title: "Casa Coral 1616-6",
  },
];

export const menuNavItems = [
  {
    id: 1,
    title: "Bathroom Cabinets",
    path: "/services/bathroom-cabinets",
    className: "nav-item",
  },
  {
    id: 2,
    title: "Kitchen Cabinets",
    path: "/services/kitchen-cabinets",
    className: "nav-item",
  },
  {
    id: 3,
    title: "Vinyl Planking",
    path: "/services/vinyl-planking",
    className: "nav-item",
  },
];

export const SidebarData = [
  // {
  //   title: "Bathroom Cabinets",
  //   path: "/services/bathroom-cabinets",
  //   cName: "nav-text",
  // },
  // {
  //   title: "Kitchen Cabinets",
  //   path: "/services/kitchen-cabinets",
  //   cName: "nav-text",
  // },
  // {
  //   title: "Vinyl Planking",
  //   path: "/services/vinyl-planking",
  //   cName: "nav-text",
  // },
  {
    title: "About",
    path: "/about-us",
    cName: "nav-text",
  },
  {
    title: "Blog",
    path: "/blog",
    cName: "nav-text",
  },
  // {
  //   title: "Gallery",
  //   path: "/gallery",
  //   cName: "nav-text",
  // },
];

export const aboutInfoCards = [
  {
    icon: aboutChecklist,
    paragraph:
      "Each project is approached with an exacting eye, ensuring measurements are precise, materials are of the highest quality, and every element is seamlessly integrated.",
  },
  {
    icon: aboutHandshake,
    paragraph:
      "Our commitment to exceptional customer service begins with transparent and open communication throughout every phase of the process. From the initial consultation to the final installation, we prioritize your vision, actively listening to your needs and preferences.",
  },
  {
    icon: aboutMagnifier,
    paragraph:
      "We offer not only top-notch installation but also expert design assistance, guiding you through a journey of tailored choices in styles, materials, and layouts. ",
  },
  {
    icon: aboutHourglass,
    paragraph:
      "From the initial consultation to the final installation, we adhere to strict timelines, providing you with a seamless and efficient experience; ensuring punctual project delivery without compromising the precision and excellence that define us.",
  },
  {
    icon: aboutPiggyBank,
    paragraph:
      "Our transparent pricing model ensures that you are well-informed at every stage of the process. By meticulously managing costs without compromising quality, we guarantee not only affordability but also unparalleled value for money. ",
  },
  {
    icon: aboutMedal,
    paragraph:
      "With several years of invaluable experience in the industry, our seasoned team brings a wealth of knowledge to every project, ensuring precision and excellence in every detail. We take pride in upholding the highest standards of professionalism.",
  },
];
