import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function KitchenCabinets() {
  return (
    <>
      <Header />
      <div className="k-cabinets">
        <div className="k-cabinets__search">
          <h3 className="k-cabinets__trigger">Finish</h3>
          <div className="k-cabinets__menu-finish">
            <ul></ul>
          </div>
          <h3 className="k-cabinets__trigger">Design</h3>
          <h3 className="k-cabinets__trigger">Width</h3>
          <h3 className="k-cabinets__trigger">Height</h3>
          <h3 className="k-cabinets__trigger">Color</h3>
        </div>
        <div className="k-cabinets__products"></div>
      </div>
      <Footer />
    </>
  );
}

function DropdownItem(props) {
  return <li></li>;
}

export default KitchenCabinets;
