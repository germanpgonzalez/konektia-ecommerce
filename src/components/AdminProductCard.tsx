import { useState } from "react"; 
import { useAdminProducts } from "../AdminProductContext";
import type { AdminProductType } from "../types/AdminProductType";
import { AdminModal } from "./AdminModal";
import { AdminEditForm } from "./AdminEditForm"; 

type ProductCardProps = {
  product: AdminProductType;
};

export const AdminProductCard = ({ product }: ProductCardProps) => {
  const { deleteProduct, updateProduct } = useAdminProducts();
  const [showEditModal, setShowEditModal] = useState(false); 

  const handleSave = (updatedProduct: AdminProductType) => {
    updateProduct(updatedProduct);
    setShowEditModal(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-3 text-center flex flex-col justify-center items-center max-w-sm mt-3">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-contain rounded"/>
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-700 text-base">${product.price}</p>
      <p className="text-gray-500 text-xs mt-1 font-extralight">{product.brand}</p>
      <div className="flex gap-2 pt-4 justify-center items-center">
        <button
          className="text-primario border border-primario hover:bg-primario hover:text-white rounded-2xl py-2 px-4 cursor-pointer text-sm min-w-[100px] text-center transition-colors duration-200"
          onClick={() => setShowEditModal(true)}
        >
          Editar
        </button>
        <button
          className="text-white bg-primario hover:bg-primario/80 rounded-2xl py-2 px-4 cursor-pointer text-sm min-w-[100px] text-center transition-colors duration-200"
          onClick={() => deleteProduct(product.id)}
        >
          Eliminar
        </button>
      </div>

      {showEditModal && (
        <AdminModal onClose={() => setShowEditModal(false)}>
          <AdminEditForm product={product} onSave={handleSave} />
        </AdminModal>
      )}
    </div>
  );
};
