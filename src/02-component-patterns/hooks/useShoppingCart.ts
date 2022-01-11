import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/products.interface";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] =
    useState<{ [key: string]: ProductInCart }>();

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    console.log("onProductCountChange ", count, " ", product);
    setShoppingCart((oldShoppingCart) => {
      if (oldShoppingCart && count == 0) {
        // Borrar el producto.
        delete oldShoppingCart[product.id];
        return {
          ...oldShoppingCart,
        };
      }
      return {
          ...oldShoppingCart,
          [product.id]: { ...product, count }
      }
    });
  };
  return {
    shoppingCart,
    onProductCountChange,
  };
};
