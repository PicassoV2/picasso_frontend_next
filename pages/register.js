import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', formData);
      console.log('User registered:', response.data);
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration error:', error.response ? error.response.data : error.message);
      alert('Registration failed.');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/paintbg.mp4" type="video/mp4" />
      </video>

      {/* Overlay (semi-transparent) */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="relative bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md z-10">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Register</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-300 mb-1">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 border border-gray-600 text-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 border border-gray-600 text-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-300 mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 border border-gray-600 text-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none"
        >
          Register
        </button>
        <div className="mt-4 text-center">
          <p className="text-gray-400">
            Already have an account?{' '}
            <a href="/login" className="text-indigo-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
