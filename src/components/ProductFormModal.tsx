import { useState } from "react";
import type { AdminProductType } from "../types/AdminProductType";

type ProductFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (product: Omit<AdminProductType, "id" | "images">) => void;
};

export const ProductFormModal = ({ isOpen, onClose, onCreate }: ProductFormModalProps) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !price || !brand || !category) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    onCreate({
      title,
      price,
      description,
      brand,
      category,
      thumbnail: thumbnail || "https://via.placeholder.com/150",
    });

    // Limpiar campos y cerrar modal
    setTitle("");
    setPrice(0);
    setDescription("");
    setBrand("");
    setCategory("");
    setThumbnail("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Agregar Producto</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Título *"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Precio *"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="border rounded px-3 py-2"
            required
            min={0}
            step={0.01}
          />
          <input
            type="text"
            placeholder="Marca *"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Categoría *"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="URL Thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            className="border rounded px-3 py-2"
          />
          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded px-3 py-2 resize-none"
          />
          <div className="flex justify-end gap-2 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancelar</button>
            <button type="submit" className="px-4 py-2 rounded bg-primario text-white hover:bg-primario/80">Agregar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
