import { CartContext } from "../Context";
import { useContext } from "react"
import type { ProductType } from "./ProductList";
import { Link } from "react-router-dom";

type ProductCardProps = {
  product: ProductType;
  onViewDetails: (product: ProductType) => void;
};

export const ProductCard = ({product, onViewDetails }: ProductCardProps) => {

  const context = useContext(CartContext)

  if (!context) {
    return <p>Error: contexto del carrito no disponible</p>;
  }

  const addProductsToCart = (product: ProductType) => {
    context.setCartProducts([...context.cartProducts, product]);
    console.log('CARD: ', context.cartProducts)
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-3 text-center flex flex-col justify-center items-center max-w-sm mt-3">
      <img src={product.thumbnail} alt={product.title}/>
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-700 text-base">${product.price}</p>
      <p className="text-gray-500 text-xs mt-1 font-extralight">{product.brand}</p>
      <div className="flex gap-2 pt-4 justify-center items-center">
        <Link to={`/producto/${product.id}`}>
          <button className="text-primario border border-primario hover:bg-primario hover:text-white rounded-2xl py-2 px-4 cursor-pointer text-sm min-w-[100px] text-center transition-colors duration-200" onClick={() => onViewDetails(product)}>Detalles</button>
        </Link>
        <button className="text-white bg-primario hover:bg-primario/80 rounded-2xl py-2 px-4 cursor-pointer text-sm min-w-[100px] text-center transition-colors duration-200" onClick={() => addProductsToCart(product)}>Agregar</button>
      </div>
    </div>
  );
};
