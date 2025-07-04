import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { SkeletonCard } from "./SkeletonCard";
import { ProductModal } from "./ProductModal";
import { useProducts } from "../Hooks/useProducts";


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

export const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );

  const [searchTerm, setSearchTerm] = useState("");

  const { products, loading } = useProducts();

  const handleOpenModal = (product: ProductType) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-3 inline-block border-primario pb-1">
        Nuestros productos
      </h2>
      <div className="flex flex-col md:flex-row mt-3 mb-6 items-center gap-2">
        <input
          type="text"
          placeholder="Buscar modelo o marca..."
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primario transition duration-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {loading ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(10)].map((_, index) => (
            <li key={index}>
              <SkeletonCard />
            </li>
          ))}
        </ul>
      ) : filteredProducts.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} onViewDetails={handleOpenModal} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-6">
          No se encontraron productos con ese nombre o marca.
        </p>
      )}

      {selectedProduct && (
        <ProductModal onClose={handleCloseModal}>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={selectedProduct.thumbnail}
                alt={selectedProduct.title}
                className="w-full max-w-xs h-auto object-contain rounded-lg"
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
