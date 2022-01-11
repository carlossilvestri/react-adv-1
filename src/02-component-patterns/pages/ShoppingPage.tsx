import { ProductImage, ProductTitle, ProductButtons } from "../components";
import { ProductCard } from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";


export const ShoppingPage = () => {
  const {shoppingCart, onProductCountChange  } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* <ProductCard product={product} >
          <ProductCard.Image/>
          <ProductCard.Title title={'Cafe'}/>
          <ProductCard.Buttons />
        </ProductCard> */}
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            key={product.id}
            onChange={(evento) => onProductCountChange(evento)}
            value={ shoppingCart && shoppingCart[product.id]?.count || 0 }
          >
            <ProductImage className="custom-image" />
            <ProductTitle
              className="text-white text-bold"
              title={"Cafe personalizado"}
            />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {shoppingCart &&
          Object.entries(shoppingCart).map( ([key, product]) => (
            <ProductCard
            product={product}
            className="bg-dark text-white"
            key={key}
            style={{ width: "100px" }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
          ))
        }
      </div>
      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
        <hr />
        <code>{ shoppingCart && JSON.stringify(Object.entries(shoppingCart), null, 5)}</code>
      </div>
    </div>
  );
};
