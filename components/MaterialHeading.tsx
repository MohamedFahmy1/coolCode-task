import Image from "next/image";
import React from "react";
import sort from "@/images/sort.svg";
import filter from "@/images/filter.svg";

const MaterialHeading: React.FC<{
  openFilterHandler: () => void;
  sortHandler: () => void;
  sortByPrice: boolean;
  sortByHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ openFilterHandler, sortHandler, sortByPrice, sortByHandler }) => {
  return (
    <div className="heading">
      <h2>
        Materials / <span>Premium Photos</span>
      </h2>
      <div className="sort">
        <Image
          src={filter}
          alt="filter icon"
          className="filter"
          onClick={openFilterHandler}
        />
        <div className="sortDetails">
          <Image src={sort} alt="sort" onClick={sortHandler} />
          <p>Sort By</p>
          <select
            name="sort"
            value={!sortByPrice ? "alpha" : "price"}
            onChange={sortByHandler}
          >
            <option value="price" defaultChecked>
              Price
            </option>
            <option value="alpha">Alphabetically</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MaterialHeading;
