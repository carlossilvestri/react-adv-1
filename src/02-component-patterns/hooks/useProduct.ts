import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/products.interface";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ product, onChange, value = 0 } : useProductArgs) => {

  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product}); // If onChange exists, call it.
  };

  useEffect(() => {
    setCounter(value);
  }, [value])

  return {
      counter,
      increaseBy
  }
};
