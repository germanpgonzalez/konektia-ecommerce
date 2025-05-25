import { useContext } from "react";
import { CartContext } from "../Context";
import type { ProductType } from "./ProductList";
import { TiDelete } from "react-icons/ti";

type CartItemProps = {
  product: ProductType;
};

const CartItem = ({product}: CartItemProps) => {

  const context = useContext(CartContext);

  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
            <figure className="w-20 h-20">
                <img className="w-full h-full rounded-lg object-cover" src={product.thumbnail} alt={product.title} />
            </figure>
            <p className="text-sm font-light">{product.title}</p>
        </div>
        <div className="flex items-center gap-2">
            <p className="text-lg font-medium">${product.price}</p>
            <TiDelete className="text-red-700 cursor-pointer h-6 w-6" onClick={() => context?.removeProductFromCart(product.id)}/>
        </div>
    </div>
  )
}

export default CartItem;
