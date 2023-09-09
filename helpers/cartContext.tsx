import { StaticImageData } from "next/image";
import React, { useState } from "react";

export interface Items {
  name: string;
  price: number;
  image: StaticImageData;
}
type cartContextObj = {
  items: Items[] | [];
  addItems: (itemName: Items) => void;
  removeAllItems: () => void;
};
interface Props {
  children: React.ReactNode;
}

export const CartContext = React.createContext<cartContextObj>({
  items: [],
  addItems: (items: Items) => {},
  removeAllItems: () => {},
});

const CartContextProvider: React.FC<Props> = (props) => {
  const [items, setItems] = useState<
    { name: string; price: number; image: StaticImageData }[] | []
  >([]);
  const addItems = (items: Items) => {
    setItems((prev) => [
      ...prev,
      {
        name: items.name,
        price: items.price,
        image: items.image,
      },
    ]);
  };
  const removeAllItems = () => {
    setItems([]);
  };
  const contextValue: cartContextObj = {
    addItems: addItems,
    removeAllItems: removeAllItems,
    items: items,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
