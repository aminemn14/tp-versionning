import { motion } from "framer-motion";
import { useEffect } from "react";
import PropTypes from "prop-types";

const ModalManage = ({
  isOpen,
  onClose,
  children,
  showButtons = false,
  onConfirm,
  onCancel,
}) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        {children}

        {/* Conditional buttons for confirmation */}
        {showButtons && (
          <div className="flex justify-end mt-4 space-x-4">
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400"
            >
              Annuler
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
            >
              Confirmer
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
ModalManage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  showButtons: PropTypes.bool,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

export default ModalManage;
