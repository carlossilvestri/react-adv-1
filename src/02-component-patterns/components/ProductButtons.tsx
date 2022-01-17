import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";
import { useCallback, useContext } from "react";

export interface Props{
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);
  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount],
  )
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={`${styles.buttonMinus} ${className}`} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={`${styles.countLabel} ${className}`}>{counter}</div>
      <button className={`${styles.buttonAdd} ${className} ${ isMaxReached() && styles.disabled}`} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};