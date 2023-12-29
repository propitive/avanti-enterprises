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

function App() {
  const [isContactFormModalOpen, setIsContactFormModalOpen] = useState(false);
  const [isEmailListModalOpen, setIsEmailListOpen] = useState(false);

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

  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/services/kitchen-cabinets">
          <KitchenCabinets />
        </Route>
        <Route path="/services/bathroom-cabinets">
          <BathroomCabinets />
        </Route>
        <Route path="/services/vinyl-planking">
          <VinylPlanking />
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
    </>
  );
}

export default App;
