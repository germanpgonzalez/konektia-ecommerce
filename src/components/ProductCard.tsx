import { CartContext } from "../Context";
import { useContext } from "react";
import type { ProductType } from "./ProductList";


type ProductCardProps = {
  product: ProductType;
  onViewDetails: (product: ProductType) => void;
};

export const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const context = useContext(CartContext);

  if (!context) {
    return <p>Error: contexto del carrito no disponible</p>;
  }

  const addProductsToCart = (product: ProductType) => {
    context.setCartProducts([...context.cartProducts, product]);
    console.log("CARD: ", context.cartProducts);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-3 text-center flex flex-col justify-center items-center w-full sm:max-w-sm mt-3">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-contain rounded"/>
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-700 text-base">${product.price}</p>
      <p className="text-gray-500 text-xs mt-1 font-extralight">
        {product.brand}
      </p>
      <div className="flex flex-col sm:flex-row gap-2 pt-4 justify-center items-center w-full">
        <button
          className="text-primario border border-primario hover:bg-primario hover:text-white rounded-2xl py-2 px-4 cursor-pointer text-sm min-w-[100px] w-full sm:w-auto text-center transition-colors duration-200"
          onClick={() => onViewDetails(product)}
        >
          Detalles
        </button>

        <button
          className="text-white bg-primario hover:bg-primario/80 rounded-2xl py-2 px-4 cursor-pointer text-sm min-w-[100px] w-full sm:w-auto text-center transition-colors duration-200 "
          onClick={() => addProductsToCart(product)}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};
