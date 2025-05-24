import { useParams, useNavigate } from "react-router-dom";
import { ProductModal } from "./ProductModal";
import { useContext } from "react";
import { CartContext } from "../Context";
import { ProductList } from "./ProductList";
import Layout from "./Layout";

export const ProductModalRoute = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const context = useContext(CartContext);

  if (!context) return null;

  const product = context.products.find((p) => p.id === Number(id));
  if (!product) return null;

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <ProductList />
      <ProductModal onClose={closeModal}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full max-w-xs rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              <p className="text-lg font-semibold text-green-600">
                ${product.price}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Marca: {product.brand}
              </p>
            </div>

            <button
              onClick={closeModal}
              className="mt-6 self-start text-white bg-primario hover:bg-primario/80 rounded-2xl py-2 px-4 cursor-pointer text-sm min-w-[100px] text-center transition-colors duration-200"
            >
              Cerrar
            </button>
          </div>
        </div>
      </ProductModal>
    </Layout>
  );
};
