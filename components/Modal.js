import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-4">Register Now!</h2>
        <p className="mb-4">Register yourself and join our waitlist to experience the immersive VR Art Gallery.</p>
        <Link
          to="/register"
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-400"
          onClick={onClose}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Modal;