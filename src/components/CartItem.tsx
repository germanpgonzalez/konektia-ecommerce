import type { ProductType } from "./ProductList";
import { IoCloseSharp } from "react-icons/io5";

type CartItemProps = {
  product: ProductType;
};

const CartItem = ({product}: CartItemProps) => {
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
            <IoCloseSharp className="text-black cursor-pointer h-6 w-6"/>
        </div>
    </div>
  )
}

export default CartItem;
