import { Route, Switch } from "react-router-dom";
import { useState } from "react";

import ContactForm from "../ContactForm/ContactForm";
import Main from "../Main/Main";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import KitchenCabinets from "../KitchenCabinets/KitchenCabinets";
import BathroomCabinets from "../VinylPlanking/VinylPlanking";
import VinylPlanking from "../VinylPlanking/VinylPlanking";
import About from "../About/About";
import ModalContactForm from "../ModalContactForm/ModalContactForm";

function App() {
  const [isContactFormModalOpen, setIsContactFormModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsContactFormModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactFormModalOpen(false);
  };

  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/services/kitchen-cabinets">
          <KitchenCabinets />
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
      {isContactFormModalOpen && (
        <ModalContactForm
          handleCloseModal={handleCloseModal}
          isOpen={isContactFormModalOpen}
        />
      )}
    </>
  );
}

export default App;
