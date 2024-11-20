import { Route, Switch } from "react-router-dom";
import { useState } from "react";

import About from "../About/About";
import BathroomCabinets from "../BathroomCabinets/BathroomCabinets";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import GeneralBlog from "../Blog/GeneralBlog/GeneralBlog";
import GeneralGallery from "../Gallery/GeneralGallery";
import Header from "../Header/Header";
import ItemModal from "../ItemModal/ItemModal";
import KitchenCabinets from "../KitchenCabinets/KitchenCabinets";
import Main from "../Main/Main";
import ModalContactForm from "../ModalContactForm/ModalContactForm";
import ModalEmailList from "../ModalEmailList/ModalEmailList";
import ModalGetAQuote from "../ModalGetAQuote/ModalGetAQuote";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import VinylPlanking from "../VinylPlanking/VinylPlanking";

import Project1 from "../Gallery/Galleries/Projects/Project1";

import CabinetMaintenanceTipsEveryHomeownerShouldKnow from "../Blog/Blogs/202411/CabinetMaintenanceTipsEveryHomeownerShouldKnow";
import ExpertTipsForOrganizingYourBathroomCabinetForMaximumEfficiency from "../Blog/Blogs/202410/ExpertTipsForOrganizingYourBathroomCabinetForMaximumEfficiency";
import HowToCleanKitchenCabinetsExpertTipsForLongLastingBeauty from "../Blog/Blogs/202410/HowToCleanKitchenCabinetsExpertTipsForLongLastingBeauty";
import KitchenCabinetDesignIdeasForYourDreamSpace from "../Blog/Blogs/202411/KitchenCabinetDesignIdeasForYourDreamSpace";
import UnlockTheSecretsToAClutterFreeKitchenOrganizeYourCabinetsLikeAPro from "../Blog/Blogs/202409/UnlockTheSecretsToAClutterFreeKitchenOrganizeYourCabinetsLikeAPro";
import MakingTheMostOutOfCornerCabinets from "../Blog/Blogs/202411/MakingTheMostOutOfCornerCabinets";

function App() {
  const [modals, setModals] = useState({
    contactForm: false,
    emailList: false,
    getAQuote: false,
    item: false,
  });
  const [selectedCard, setSelectedCard] = useState({});

  const toggleModal = (modalType, isOpen) => {
    setModals((prevState) => ({ ...prevState, [modalType]: isOpen }));
  };

  const onCardClick = (card) => {
    setSelectedCard(card);
    toggleModal("item", true);
  };

  return (
    <>
      <ScrollToTop />
      <Header handleOpenModal={() => toggleModal("getAQuote", true)} />
      <Switch>
        <Route path="/services/kitchen-cabinets">
          <KitchenCabinets
            handleOpenModal={() => toggleModal("getAQuote", true)}
            onCardClick={onCardClick}
          />
        </Route>
        <Route path="/services/bathroom-cabinets">
          <BathroomCabinets
            handleOpenModal={() => toggleModal("getAQuote", true)}
            onCardClick={onCardClick}
          />
        </Route>
        <Route path="/services/vinyl-planking">
          <VinylPlanking
            handleOpenModal={() => toggleModal("getAQuote", true)}
            onCardClick={onCardClick}
          />
        </Route>
        <Route
          exact
          path="/blog/cabinet-maintenance-tips-every-homeowner-should-know"
        >
          <CabinetMaintenanceTipsEveryHomeownerShouldKnow
            handleOpenModal={() => toggleModal("emailList", true)}
          />
        </Route>
        <Route
          exact
          path="/blog/expert-tips-for-organizing-your-bathroom-cabinet-for-maximum-efficiency"
        >
          <ExpertTipsForOrganizingYourBathroomCabinetForMaximumEfficiency
            handleOpenModal={() => toggleModal("emailList", true)}
          />
        </Route>
        <Route
          exact
          path="/blog/how-to-clean-kitchen-cabinets-expert-tips-for-long-lasting-beauty"
        >
          <HowToCleanKitchenCabinetsExpertTipsForLongLastingBeauty
            handleOpenModal={() => toggleModal("emailList", true)}
          />
        </Route>
        <Route exact path="/blog/making-the-most-out-of-corner-cabinets">
          <MakingTheMostOutOfCornerCabinets
            handleOpenModal={() => toggleModal("emailList", true)}
          />
        </Route>
        <Route
          exact
          path="/blog/kitchen-cabinet-design-ideas-for-your-dream-space"
        >
          <KitchenCabinetDesignIdeasForYourDreamSpace
            handleOpenModal={() => toggleModal("emailList", true)}
          />
        </Route>
        <Route
          exact
          path="/blog/unlock-the-secrets-to-a-clutter-free-kitchen-organize-your-cabinets-like-a-pro"
        >
          <UnlockTheSecretsToAClutterFreeKitchenOrganizeYourCabinetsLikeAPro
            handleOpenModal={() => toggleModal("emailList", true)}
          />
        </Route>
        <Route path="/blog">
          <GeneralBlog />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/gallery/project1">
          <Project1 handleOpenModal={() => toggleModal("getAQuote", true)} />
        </Route>
        <Route path="/gallery">
          <GeneralGallery />
        </Route>
        <Route path="/">
          <Main handleOpenModal={() => toggleModal("getAQuote", true)} />
        </Route>
      </Switch>
      <Footer handleEmailListModalOpen={() => toggleModal("emailList", true)} />
      {modals.contactForm && (
        <ModalContactForm
          handleCloseModal={() => toggleModal("contactForm", false)}
          isOpen={modals.contactForm}
        />
      )}
      {modals.emailList && (
        <ModalEmailList
          handleCloseModal={() => toggleModal("emailList", false)}
          isOpen={modals.emailList}
        />
      )}
      {modals.getAQuote && (
        <>
          {console.log("Modal get a quote is open!")}
          <ModalGetAQuote
            handleCloseModal={() => toggleModal("getAQuote", false)}
            handleOpenSubmit={() => toggleModal("contactForm", true)}
            isOpen={modals.getAQuote}
          />
        </>
      )}
      {modals.item && (
        <ItemModal
          card={selectedCard}
          onClose={() => toggleModal("item", false)}
        />
      )}
    </>
  );
}

export default App;
