import { StaticImageData } from "next/image";
import p1 from "@/images/p1.png";
import p2 from "@/images/p2.png";
import p3 from "@/images/p3.png";
import p4 from "@/images/p4.png";
import p5 from "@/images/p5.png";
import p6 from "@/images/p6.png";

export interface ProductsType {
  name: string;
  category: string;
  price: number;
  currency: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  bestseller: boolean;
  featured: boolean;
  details: null | { weight: number; thickness: number; description: null };
}
export const products: ProductsType[] = [
  {
    name: "Reinforced",
    category: "Glass",
    price: 33.78,
    currency: "USD",
    image: {
      src: p1,
      alt: "Glass",
    },
    bestseller: true,
    featured: false,
    details: null,
  },
  {
    name: "Shape",
    category: "Steel",
    price: 93.89,
    currency: "USD",
    image: {
      src: p2,
      alt: "Steel",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    name: "Wave",
    category: "Steel",
    price: 120.21,
    currency: "USD",
    image: {
      src: p3,
      alt: "Steel",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    name: "Colored",
    category: "Glass",
    price: 100,
    currency: "USD",
    image: {
      src: p4,
      alt: "Glass",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    name: "Red",
    category: "Brick",
    price: 101,
    currency: "USD",
    image: {
      src: p5,
      alt: "Brick",
    },
    bestseller: false,
    featured: true,
    details: {
      weight: 2340,
      thickness: 2,
      description: null,
    },
  },
  {
    name: "Pastel",
    category: "Brick",
    price: 33.78,
    currency: "USD",
    image: {
      src: p6,
      alt: "Brick",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
];
