import React from "react";

const MaterialFilterForm: React.FC<{
  categoriesHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ categoriesHandler }) => {
  return (
    <form className="material">
      <div className="box">
        <input
          type="checkbox"
          id="Wood"
          name="Wood"
          value="Wood"
          onChange={categoriesHandler}
        />
        <label htmlFor="Wood">Wood</label>
      </div>
      <div className="box">
        <input
          type="checkbox"
          id="Concrete"
          name="Concrete"
          value="Concrete"
          onChange={categoriesHandler}
        />
        <label htmlFor="Concrete">Concrete</label>
      </div>
      <div className="box">
        <input
          type="checkbox"
          id="Brick"
          name="Brick"
          value="Brick"
          onChange={categoriesHandler}
          defaultChecked
        />
        <label htmlFor="Brick">Brick</label>
      </div>
      <div className="box">
        <input
          type="checkbox"
          id="Glass"
          name="Glass"
          value="Glass"
          onChange={categoriesHandler}
          defaultChecked
        />
        <label htmlFor="Glass">Glass</label>
      </div>
      <div className="box">
        <input
          type="checkbox"
          id="Steel"
          name="Steel"
          value="Steel"
          onChange={categoriesHandler}
          defaultChecked
        />
        <label htmlFor="Steel">Steel</label>
      </div>
      <div className="box">
        <input
          type="checkbox"
          id="Carbon Fiber"
          name="Carbon Fiber"
          value="Carbon Fiber"
          onChange={categoriesHandler}
        />
        <label htmlFor="Carbon Fiber">Carbon Fiber</label>
      </div>
      <div className="box">
        <input
          type="checkbox"
          id="Copper"
          name="Copper"
          value="Copper"
          onChange={categoriesHandler}
        />
        <label htmlFor="Copper">Copper</label>
      </div>
    </form>
  );
};

export default MaterialFilterForm;
