import { createContext, useEffect, useState } from "react";
import type  { ProductType }   from "../Components/ProductList";

type CartContextProviderProps = {
  children: React.ReactNode;
};

type CartContextType = {
  cartProducts: ProductType[];
  setCartProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  loading: boolean;
  handleCleanCart: () => void;
  removeProductFromCart: (productId: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  fetch("https://dummyjson.com/products/category/smartphones")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data.products);
      setLoading(false);
    });
}, []);

  //Estado del carrito
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);
  //Estado global de los productos
  const [products, setProducts] = useState<ProductType[]>([]);

  const handleCleanCart = () => {
    setCartProducts([]);
  }

  const removeProductFromCart = (productId: number) => {
    setCartProducts((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  }


  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        products,
        setProducts,
        loading,
        handleCleanCart,
        removeProductFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
