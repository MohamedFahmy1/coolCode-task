import Image from "next/image";
import React, { useContext, useState } from "react";
import shoppingCart from "@/images/shopping-cart.svg";
import featured from "@/images/featured.avif";
import lay1 from "@/images/lay1.avif";
import lay2 from "@/images/lay2.avif";
import lay3 from "@/images/lay3.avif";
import close from "@/images/close.svg";
import { CartContext } from "@/helpers/cartContext";
import CartItem from "./CartItem";

const Landing = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const ctx = useContext(CartContext);
  const openCartHandler = () => {
    setOpenCart((prev) => !prev);
  };
  const removeItemsHandler = () => {
    ctx.removeAllItems();
    setOpenCart(false);
  };
  return (
    <section className="landing">
      <div className="container">
        <header>
          <div className="headerContent">
            <div className="logo">LOGO</div>
            <button className="icon">
              <Image
                src={shoppingCart}
                alt="shopping cart icon"
                onClick={openCartHandler}
              />
              {ctx.items.length > 0 && <p>{ctx.items.length}</p>}
              {openCart && (
                <div className="cart">
                  <button className="close" onClick={openCartHandler}>
                    <Image src={close} alt="close" />
                  </button>
                  {ctx.items.map((item) => (
                    <CartItem
                      key={item.name}
                      name={item.name}
                      image={item.image}
                      price={item.price}
                    />
                  ))}
                  <button className="clear" onClick={removeItemsHandler}>
                    CLEAR
                  </button>
                </div>
              )}
            </button>
          </div>
        </header>
        <div className="landingContent">
          <div className="heading">
            <p>Recycled Plastic</p>
            <button className="addToCart">ADD TO CART</button>
          </div>
          <div className="image">
            <Image src={featured} alt="rainbox colored" />
          </div>
          <button className="mobileCart">ADD TO CART</button>
        </div>
        <div className="landingDetails">
          <div className="left">
            <h2>Materials people also use</h2>
            <div className="materialContainer">
              <Image src={lay1} alt="glass" />
              <Image src={lay2} alt="wood" />
              <Image src={lay3} alt="brick" />
            </div>
            <h3>Details</h3>
            <p>Weight: 2340g/m2</p>
            <p>Thickness: 3cm</p>
          </div>
          <div className="right">
            <h2>About the Recycled Plastic</h2>
            <h3>Plastic</h3>
            <p>
              Plastic recycling is the reprocessing of plastic waste into new
              and useful products. When performed correctly, this can reduce
              dependence on landfill, conserve resources and protect the
              environment from plastic pollution and greenhouse gas emissions.
              Although recycling rates are increasing, they lag behind those of
              other recoverable materials, such as aluminum, glass and paper.
              The global recycling rate in 2015 was 19.5%, while 25.5% was
              incinerated and the remaining 55% disposed of to landfill. Since
              the beginning of plastic production in the 20th century, until
              2015, the world has produced some 6.3 billion tonnes of plastic
              waste, only 9% of which has been recycled, and only ~1% has been
              recycled more than once.[6]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
