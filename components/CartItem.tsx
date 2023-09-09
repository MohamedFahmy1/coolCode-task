import { Items } from "@/helpers/cartContext";
import Image from "next/image";
import React from "react";

const CartItem: React.FC<Items> = ({ name, price, image }) => {
  return (
    <div className="card">
      <div className="text">
        <h4>{name}</h4>
        <p>${price.toFixed(2)}</p>
      </div>
      <Image src={image.src} alt="item" width={168} height={92} />
    </div>
  );
};

export default CartItem;
