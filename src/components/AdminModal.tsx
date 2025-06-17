import type { ReactNode } from "react";

type Props = {
  onClose: () => void;
  children: ReactNode;
};

export const AdminModal = ({ onClose, children }: Props) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        ✖
      </button>
      {children}
    </div>
  </div>
);
