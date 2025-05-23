import ReactDOM from 'react-dom';

type ProductModalProps = {
    children: React.ReactNode;
    onClose: () => void;
}


export const ProductModal = ({ children, onClose } : ProductModalProps) => {
  return ReactDOM.createPortal(
     <>
      <div
        className="fixed inset-0 bg-black/70 bg-opacity-50 z-40"
        onClick={onClose}
      />

      <div
        className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>,
    document.getElementById('modal') as HTMLElement);
};

