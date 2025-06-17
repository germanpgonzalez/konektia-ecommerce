import { useAdminProducts } from "../AdminProductContext";
import type { AdminProductType } from "../types/AdminProductType";
import { SkeletonCard } from "./SkeletonCard";
import { AdminProductCard } from "./AdminProductCard";
import { useState } from "react";
import { ProductFormModal } from "./ProductFormModal";

export const AdminProductList = () => {
  const { products, loading } = useAdminProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { createProduct } = useAdminProducts();

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-5 px-4 py-2 bg-primario text-white rounded hover:bg-primario/80 flex mt-5"
      >
        Agregar Producto
      </button>

      <ProductFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={createProduct}
      />

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
