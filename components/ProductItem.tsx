import Image from "next/image";
import React, { useContext } from "react";
import { ProductsType } from "@/helpers/data";
import { CartContext } from "@/helpers/cartContext";
const ProductItem: React.FC<ProductsType> = ({
  name,
  category,
  bestseller,
  featured,
  image,
  price,
}) => {
  const ctx = useContext(CartContext);
  const addToCartHandler = () => {
    ctx.addItems({ name: name, price: price, image: image.src });
  };
  return (
    <div className="card" style={{ order: featured ? -4 : undefined }}>
      <div className="image">
        <Image src={image.src} alt={image.alt} />
        {bestseller && <p>Best Seller</p>}
        {featured && <p>Featured</p>}
        <button onClick={addToCartHandler}>ADD TO CART</button>
      </div>
      <p className="type">{category}</p>
      <h3>{name}</h3>
      <span>${price.toFixed(2)}</span>
    </div>
  );
};

export default ProductItem;
