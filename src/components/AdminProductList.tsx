import { useContext, useState } from "react";
import { CartContext } from "../Context";
import { SkeletonCard } from "./SkeletonCard";
import { ProductModal } from "./ProductModal";
import { AdminProductCard } from "./AdminProductCard";

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};


export const AdminProductList = () => {

  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );

  const context = useContext(CartContext);



  const handleOpenModal = (product: ProductType) => {
    setSelectedProduct(product);
  };
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      {context?.loading ? (
        <ul className="grid grid-cols-4 gap-6 top-3">
          {[...Array(10)].map((_, index) => (
            <li key={index}>
              <SkeletonCard />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="grid grid-cols-4 gap-6 top-3">
          {context?.products.map((product) => (
            <li key={product.id}>
              <AdminProductCard product={product} onViewDetails={handleOpenModal} />
            </li>
          ))}
        </ul>
      )}

      {selectedProduct && (
        <ProductModal onClose={handleCloseModal}>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={selectedProduct.thumbnail}
                alt={selectedProduct.title}
                className="w-full max-w-xs rounded-lg"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {selectedProduct.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {selectedProduct.description}
                </p>
                <p className="text-lg font-semibold text-green-600">
                  ${selectedProduct.price}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Marca: {selectedProduct.brand}
                </p>
              </div>

              <button
                onClick={handleCloseModal}
                className="mt-6 self-start text-white bg-primario hover:bg-primario/80 rounded-2xl py-2 px-4 cursor-pointer text-sm min-w-[100px] text-center transition-colors duration-200"
              >
                Cerrar
              </button>
            </div>
          </div>
        </ProductModal>
      )}
    </>
  );
};
