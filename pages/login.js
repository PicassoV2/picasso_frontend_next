import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://paintingauctionbackend-production.up.railway.app/api/login/', formData);
      if (response && response.data) {
        localStorage.setItem('token', response.data.access); // Save the access token
        console.log('Login successful:', response.data);
        // alert('Login successful!');
        router.push('/painter-dashboard');
      }
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      alert('Login failed.');
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

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="relative bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md z-10">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
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
          Login
        </button>
        <div className="mt-4 text-center">
          <p className="text-gray-400">
            Don't have an account?{' '}
            <a href="/register" className="text-indigo-500 hover:underline">
              Register now
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
