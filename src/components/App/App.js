import { Route, Switch } from "react-router-dom";

import ContactForm from "../ContactForm/ContactForm";
import Main from "../Main/Main";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import KitchenCabinets from "../KitchenCabinets/KitchenCabinets";

function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/services/kitchen-cabinets">
          <KitchenCabinets />
        </Route>
        <Route path="/contact-form">
          <ContactForm />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </>
  );
}

export default App;
