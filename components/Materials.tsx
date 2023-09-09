import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { ProductsType, products } from "@/helpers/data";
import MaterialHeading from "./MaterialHeading";
import MaterialFilterForm from "./MaterialFilterForm";
import PriceFilterForm from "./PriceFilterForm";
import NumberOfPages from "./NumberOfPages";

const Materials = () => {
  // Control Pages in mobile screen
  const [windowSize, setWindowSize] = useState<number>(1920);
  const [pageNumber, setPageNumber] = useState<number>(1);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const pageNumber1Handler = () => {
    setPageNumber(1);
  };
  const pageNumber2Handler = () => {
    setPageNumber(2);
  };
  // Control data of the products
  const [data, setData] = useState<ProductsType[]>(products);
  const [filterCategory, setFilterCategory] = useState<string[]>([
    "Brick",
    "Glass",
    "Steel",
  ]);
  const [filterPrice, setFilterPrice] = useState<string | null>(null);
  const [ascending, setAscending] = useState<boolean>(true);
  const [sortByPrice, setSortByPrice] = useState<boolean>(true);
  const categoriesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked && filterCategory.includes(e.target.value)) {
      setFilterCategory((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    } else if (e.target.checked && !filterCategory.includes(e.target.value)) {
      setFilterCategory((prev) => [...prev, e.target.value]);
    }
  };

  const priceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === filterPrice) {
      return;
    } else if (value !== filterPrice) {
      setFilterPrice(value);
    }
  };
  const sortByHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "alpha") {
      setSortByPrice(false);
    } else {
      setSortByPrice(true);
    }
  };
  const sortHandler = () => {
    setAscending((prev) => !prev);
  };
  useEffect(() => {
    if (ascending && !sortByPrice) {
      setData((prev) => prev.sort((a, b) => (a.name[0] > b.name[0] ? 1 : -1)));
    } else if (!ascending && !sortByPrice) {
      setData((prev) =>
        prev.sort((a, b) => (a.name[0] > b.name[0] ? 1 : -1)).reverse()
      );
    } else if (ascending && sortByPrice) {
      setData((prev) => prev.sort((a, b) => (a.price > b.price ? 1 : -1)));
    } else if (!ascending && sortByPrice) {
      setData((prev) =>
        prev.sort((a, b) => (a.price > b.price ? 1 : -1)).reverse()
      );
    }
  }, [ascending, sortByPrice, filterCategory, filterPrice]);
  useEffect(() => {
    let counter = setTimeout(() => {
      setData((prev) => [...prev]);
    }, 200);
    return () => {
      clearTimeout(counter);
    };
  }, [data]);
  // control show filter window on mobile
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const closeFilterHandler = () => {
    setShowFilter(false);
  };
  const openFilterHandler = () => {
    setShowFilter(true);
  };
  const finalData = data
    .filter((item) => filterCategory.includes(item.category))
    .filter((item) => {
      if (filterPrice) {
        switch (filterPrice) {
          case "20":
            return item.price < 20;
          case "20-100":
            return item.price >= 20 && item.price <= 100;
          case "100-200":
            return item.price > 100 && item.price <= 200;
          case "200":
            return item.price > 200;
          default:
            break;
        }
      } else {
        return item.price !== 1000;
      }
    })
    .map((item) => (
      <ProductItem
        key={item.name}
        bestseller={item.bestseller}
        category={item.category}
        currency={item.currency}
        details={item.details}
        featured={item.featured}
        image={item.image}
        name={item.name}
        price={item.price}
      />
    ));

  return (
    <section className="materials">
      <div className="container">
        <MaterialHeading
          openFilterHandler={openFilterHandler}
          sortByHandler={sortByHandler}
          sortByPrice={sortByPrice}
          sortHandler={sortHandler}
        />
        <div className="materialsContent">
          <div className={showFilter ? "left active" : "left"}>
            <div className="text">
              <h3>Materials</h3>
              <p onClick={closeFilterHandler}>X</p>
            </div>
            <MaterialFilterForm categoriesHandler={categoriesHandler} />
            <h3>Price range</h3>
            <PriceFilterForm priceHandler={priceHandler} />
            <div className="buttons">
              <button className="clear">CLEAR</button>
              <button className="save" onClick={closeFilterHandler}>
                SAVE
              </button>
            </div>
          </div>
          <div className="right">
            {windowSize <= 768 && finalData.length > 4
              ? pageNumber === 1
                ? finalData.splice(0, 4)
                : finalData.splice(4)
              : finalData}
          </div>
        </div>
        <NumberOfPages
          pageNumber={pageNumber}
          pageNumber1Handler={pageNumber1Handler}
          pageNumber2Handler={pageNumber2Handler}
          windowSize={windowSize}
        />
      </div>
    </section>
  );
};
export default Materials;
