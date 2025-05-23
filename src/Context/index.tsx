import { createContext, useState } from "react";
import type  { ProductType }   from "../Components/ProductList";

type CartContextProviderProps = {
  children: React.ReactNode;
};

type CartContextType = {
  cartProducts: ProductType[];
  setCartProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

export const CartContext = createContext<CartContextType | null>(null);;

export const CartContextProvider = ({ children }: CartContextProviderProps) => {

  //Estado del carrito
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
