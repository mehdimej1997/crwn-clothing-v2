import { useContext } from "react";
import { ShopContext } from "../../context/shop.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.style.scss";

function Shop() {
  const { products } = useContext(ShopContext);

  return (
    <div className="products-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
    </div>
  );
}

export default Shop;
