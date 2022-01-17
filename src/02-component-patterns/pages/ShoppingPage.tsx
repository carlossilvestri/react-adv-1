import { ProductImage, ProductTitle, ProductButtons } from "../components";
import { ProductCard } from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";
import { useContext } from 'react';
import { ProductContext } from '../components/ProductCard';

const product = products[0];

export const ShoppingPage = () => {
  // TODO - maxCount
  const { increaseBy, counter, maxCount } = useContext(ProductContext);
  // TODO - isMaxReached = useCakkback, dependencies [ count, maxCount]
  // TRUE si el count === maxCount
  // FALSE si no lo es.
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div>
        <ProductCard
          product={product}
          className="bg-dark text-white"
          key={product.id}
          initialValues={{
            count: 6,
            maxCount: 11,
          }}
        >
          {(args) => (
            <>
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
              />
              <ProductTitle
                className="text-white text-bold"
                title={"Cafe personalizado"}
              />
              <ProductButtons className="custom-buttons" />
              {/* <button onClick={reset}>Reset</button> */}
              <button onClick={args.reset}>Reset</button>
              <button onClick={() => args.increaseBy(-2)}>-2</button>
              {
                ( !args.isMaxCountReached && <button onClick={() => args.increaseBy(2)}>+2</button> )
              }
              <span>{ args.count } - maxCount</span>
              { JSON.stringify(args, null, 3) }
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
