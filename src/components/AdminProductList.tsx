import { useAdminProducts } from "../AdminProductContext";
import type { AdminProductType } from "../types/AdminProductType";
import { SkeletonCard } from "./SkeletonCard";
import { AdminProductCard } from "./AdminProductCard";

export const AdminProductList = () => {
  const { products, loading } = useAdminProducts();

  return (
    <>
      {!loading && products.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No hay productos cargados aún.
        </p>
      )}
      {loading ? (
        <ul className="grid grid-cols-4 gap-6 top-3">
          {[...Array(10)].map((_, index) => (
            <li key={index}>
              <SkeletonCard />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="grid grid-cols-4 gap-6 top-3">
          {products.map((product: AdminProductType) => (
            <li key={product.id}>
              <AdminProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
