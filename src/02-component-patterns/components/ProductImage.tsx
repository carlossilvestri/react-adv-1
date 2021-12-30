import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import { useContext } from "react";


export const ProductImage = ({ img = "" }) => {
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
      className={styles.productImg}
      src={imgToShow}
      alt="Product"
    />
  );
};