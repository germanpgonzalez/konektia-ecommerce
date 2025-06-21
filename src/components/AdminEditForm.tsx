import { useState } from "react";
import type { AdminProductType } from "../types/AdminProductType";

type Props = {
  product: AdminProductType;
  onSave: (updatedProduct: AdminProductType) => void;
};

export const AdminEditForm = ({ product, onSave }: Props) => {
  const [formData, setFormData] = useState(product);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold mb-2">Editar producto</h2>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-primario transition duration-200"
        placeholder="Título"
      />
      <input
        type="text"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-primario transition duration-200"
        placeholder="Marca"
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-primario transition duration-200"
        placeholder="Precio"
      />
      <input
        type="text"
        name="thumbnail"
        value={formData.thumbnail}
        onChange={handleChange}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-primario transition duration-200"
        placeholder="URL de imagen"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-primario transition duration-200"
        placeholder="Descripción"
      />
      <button type="submit" className="bg-primario text-white py-2 px-4 rounded hover:bg-primario/80">
        Guardar cambios
      </button>
    </form>
  );
};