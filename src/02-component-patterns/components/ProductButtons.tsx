import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";
import { useContext } from "react";

export interface Props{
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { increaseBy, counter } = useContext(ProductContext);
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={`${styles.buttonMinus} ${className}`} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={`${styles.countLabel} ${className}`}>{counter}</div>
      <button className={`${styles.buttonAdd} ${className}`} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};