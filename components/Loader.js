import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="loader-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <FaSpinner className="spinner" style={{ fontSize: '80px', color: '#4fa94d', animation: 'spin 2s linear infinite' }} />
    </div>
  );
};

export default Loader;
