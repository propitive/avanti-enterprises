function ProductLayout({ header, productArray }) {
  return (
    <>
      <h3 className="product-layout__color-section__header">{header}</h3>
      <div className="product-layout__colors-section">
        <div className="product-layout__colors-section__cards">
          {productArray.map((cabinet) => {
            return (
              <div className="product-layout__colors-section__card">
                <img
                  className="product-layout__colors-section__card-image"
                  src={cabinet.image}
                />
                <h4 className="product-layout__colors-section__card-title">
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
