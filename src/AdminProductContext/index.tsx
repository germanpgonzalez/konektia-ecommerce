import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { AdminProductType } from "../types/AdminProductType";
import toast from "react-hot-toast";

// Tipado del contexto
type AdminProductContextType = {
  products: AdminProductType[];
  fetchProducts: () => void;
  createProduct: (product: Omit<AdminProductType, "id" | "images">) => void;
  updateProduct: (product: AdminProductType) => void;
  deleteProduct: (id: string) => void;
  loading: boolean;
};

const AdminProductContext = createContext<AdminProductContextType | null>(null);

// URL base de la API mock
const API_URL = "https://684f2f66f0c9c9848d2a4f8e.mockapi.io/products/products"; 

// Función para adaptar los datos de MockAPI al tipo AdminProductType
const adaptProduct = (item: any): AdminProductType => ({
  id: String(item.id),
  title: item.title || "Sin nombre", 
  price: Number(item.price) || 0,
  description: item.description || "Sin descripción",
  brand: item.brand || "Genérica",
  category: item.category || "General",
  thumbnail: item.image || "https://via.placeholder.com/150",
  images: item.images || [],
});


export const AdminProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<AdminProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      const adaptedProducts = data.map(adaptProduct);
      setProducts(adaptedProducts);
    } catch (error) {
      console.error("Error al traer productos de MockAPI:", error);
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (product: Omit<AdminProductType, "id" | "images">) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...product,
      image: product.thumbnail, 
    }),
  });
  const created = await res.json();
  const adapted = adaptProduct(created);
  setProducts((prev) => [...prev, adapted]);
  toast.success("Producto creado con éxito ✅");
};

  const updateProduct = async (product: AdminProductType) => {
    const res = await fetch(`${API_URL}/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const updated = await res.json();
    const adapted = adaptProduct(updated);
    setProducts((prev) =>
      prev.map((p) => (p.id === adapted.id ? adapted : p))
    );
    toast.success("Producto modificado con éxito ✅");
  };

  const deleteProduct = async (id: string) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    setProducts((prev) => prev.filter((p) => p.id !== id));
     toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } bg-red-100 border border-red-400 text-red-800 px-4 py-2 rounded shadow-lg`}
      >
        ❌ Producto eliminado
      </div>
    ));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AdminProductContext.Provider
      value={{
        products,
        fetchProducts,
        createProduct,
        updateProduct,
        deleteProduct,
        loading,
      }}
    >
      {children}
    </AdminProductContext.Provider>
  );
};

export const useAdminProducts = () => {
  const context = useContext(AdminProductContext);
  if (!context)
    throw new Error("useAdminProducts debe usarse dentro de AdminProductProvider");
  return context;
};
