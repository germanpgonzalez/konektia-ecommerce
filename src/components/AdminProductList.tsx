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
      <div className="flex justify-center sm:justify-start mb-5 mt-5">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-primario text-white rounded hover:bg-primario/80"
        >
          Agregar Producto
        </button>
      </div>

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

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-3">
        {loading
          ? [...Array(10)].map((_, index) => (
              <li key={index}>
                <SkeletonCard />
              </li>
            ))
          : products.map((product: AdminProductType) => (
              <li key={product.id}>
                <AdminProductCard product={product} />
              </li>
            ))}
      </ul>
    </>
  );
};
