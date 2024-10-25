import { Route, Switch } from "react-router-dom";
import { useState } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ContactForm from "../ContactForm/ContactForm";
import Main from "../Main/Main";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import KitchenCabinets from "../KitchenCabinets/KitchenCabinets";
import BathroomCabinets from "../BathroomCabinets/BathroomCabinets";
import VinylPlanking from "../VinylPlanking/VinylPlanking";
import About from "../About/About";
import ModalContactForm from "../ModalContactForm/ModalContactForm";
import ModalEmailList from "../ModalEmailList/ModalEmailList";
import ItemModal from "../ItemModal/ItemModal";
import GeneralBlog from "../Blog/GeneralBlog/GeneralBlog";
import ModalGetAQuote from "../ModalGetAQuote/ModalGetAQuote";
import GeneralGallery from "../Gallery/GeneralGallery";
import UnlockTheSecretsToAClutterFreeKitchenOrganizeYourCabinetsLikeAPro from "../Blog/Blogs/202409/UnlockTheSecretsToAClutterFreeKitchenOrganizeYourCabinetsLikeAPro";
import Project1 from "../Gallery/Galleries/Projects/Project1";

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
