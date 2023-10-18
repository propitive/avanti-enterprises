function ProductLayout({ header, productArray }) {
  return (
    <>
      <h3 className="k-cabinets__color-section__header">{header}</h3>
      <div className="k-cabinets__colors-section">
        <div className="k-cabinets__colors-section__cards">
          {productArray.map((cabinet) => {
            return (
              <div className="k-cabinets__colors-section__card">
                <img
                  className="k-cabinets__colors-section__card-image"
                  src={cabinet.image}
                />
                <h4 className="k-cabinets__colors-section__card-title">
                  {cabinet.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductLayout;
