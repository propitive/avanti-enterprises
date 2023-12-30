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

function App() {
  const [isContactFormModalOpen, setIsContactFormModalOpen] = useState(false);
  const [isEmailListModalOpen, setIsEmailListOpen] = useState(false);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleOpenModal = () => {
    setIsContactFormModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactFormModalOpen(false);
  };

  const handleEmailListModalOpen = () => {
    setIsEmailListOpen(true);
  };

  const handleCloseEmailListModal = () => {
    setIsEmailListOpen(false);
  };

  const handleCLoseItemModal = () => {
    setIsItemModalOpen(false);
  };

  const onCardClick = (card) => {
    setIsItemModalOpen(true);
    setSelectedCard(card);
  };

  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/services/kitchen-cabinets">
          <KitchenCabinets onCardClick={onCardClick} />
        </Route>
        <Route path="/services/bathroom-cabinets">
          <BathroomCabinets onCardClick={onCardClick} />
        </Route>
        <Route path="/services/vinyl-planking">
          <VinylPlanking onCardClick={onCardClick} />
        </Route>
        <Route path="/contact-form">
          <ContactForm handleOpenModal={handleOpenModal} />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer handleEmailListModalOpen={handleEmailListModalOpen} />
      {isContactFormModalOpen && (
        <ModalContactForm
          handleCloseModal={handleCloseModal}
          isOpen={isContactFormModalOpen}
        />
      )}
      {isEmailListModalOpen && (
        <ModalEmailList
          handleCloseModal={handleCloseEmailListModal}
          isOpen={isEmailListModalOpen}
        />
      )}
      {isItemModalOpen && (
        <ItemModal card={selectedCard} onClose={handleCLoseItemModal} />
      )}
    </>
  );
}

export default App;
