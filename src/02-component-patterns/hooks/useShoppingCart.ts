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
      const productInCart: ProductInCart = oldShoppingCart
        ? oldShoppingCart[product.id] || { ...product, count: 0 }
        : { ...product, count: 0 };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }
      // Borrar el producto.
      delete oldShoppingCart![product.id];
      return {
        ...oldShoppingCart,
      };
    });
  };
  return {
    shoppingCart,
    onProductCountChange
  }
};
