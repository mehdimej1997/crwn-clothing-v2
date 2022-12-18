import { createContext, useEffect, useState } from "react";
import SHOP_STORE from "../shop-data.json";

export const ShopContext = createContext({ products: [] });

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const value = { products };
  useEffect(() => {
    setProducts(SHOP_STORE);
  }, []);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
