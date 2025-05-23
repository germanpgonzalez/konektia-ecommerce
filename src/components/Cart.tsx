import { CartContext } from "../Context";
import type  { ProductType }   from "../Components/ProductList";
import { useContext } from "react";
import CartItem from "./CartItem";

type CartProps = {
    isOpen: boolean;
    onClose: () => void;
}


export const Cart = ({isOpen, onClose} : CartProps) => {
  const context = useContext(CartContext)

  return (
      <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen ? "opacity-65" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />


      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Carrito de Compras</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-red-500">
            ✕
          </button>
        </div>

        <div className="p-4">
          {context && context.cartProducts.length > 0 ? (
            context.cartProducts.map((product: ProductType) => (
              <div className="mb-4" key={product.id}>
                <CartItem product={product} />
              </div>
            ))
          ) : (
            <p>El carrito está vacío.</p>
          )}
        </div>
      </div>
    </>
  );
}


