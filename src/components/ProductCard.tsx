import type { ProductType } from "./ProductList";

type ProductCardProps = {
  product: Pick<ProductType, "id" | "title" | "price" | "thumbnail">;
};

export const ProductCard = ({product}: ProductCardProps) => {
  return (
    <div>
      <img src={product.thumbnail} alt="thumbnail" />
      <h2>{product.title}</h2>
      <h3>${product.price}</h3>
      <button>Ver Detalles</button>
      <button>Agregar al carrito</button>
    </div>
  );
};
