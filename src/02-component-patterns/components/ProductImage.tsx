import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import { useContext } from "react";

export interface Props{
  className?: string
  img?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img = "", className = "" } : Props ) => {
    const { product } = useContext(ProductContext);
    let imgToShow = '';
    if(img){
        imgToShow = img;
    } else if (product.img){
        imgToShow = product.img;
    }else{
        imgToShow = noImage;
    }
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Product"
    />
  );
};