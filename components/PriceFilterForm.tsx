import React from "react";

const PriceFilterForm: React.FC<{
  priceHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ priceHandler }) => {
  return (
    <form className="PriceRange">
      <div className="box">
        <input
          type="radio"
          id="20"
          name="price"
          value="20"
          onChange={priceHandler}
        />
        <label htmlFor="20">Lower than $20</label>
      </div>
      <div className="box">
        <input
          type="radio"
          id="20-100"
          name="price"
          value="20-100"
          onChange={priceHandler}
        />
        <label htmlFor="20-100">$20 - $100</label>
      </div>
      <div className="box">
        <input
          type="radio"
          id="100-200"
          name="price"
          value="100-200"
          onChange={priceHandler}
        />
        <label htmlFor="100-200">$100 - $200</label>
      </div>
      <div className="box">
        <input
          type="radio"
          id="200"
          name="price"
          value="200"
          onChange={priceHandler}
        />
        <label htmlFor="200">More than $200</label>
      </div>
    </form>
  );
};

export default PriceFilterForm;
