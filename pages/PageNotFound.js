import React from 'react';
import Link from 'next/link'; // Changed to Next.js Link component

const PageNotFound = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col justify-center items-center text-gray-100">
      <h1 className="text-9xl font-extrabold animate-bounce">404</h1>
      <h2 className="text-3xl mt-4 animate-pulse">Oops! Page Not Found</h2>
      <p className="mt-4 text-lg text-gray-400 text-center max-w-md">
        The page you are looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link
        href="/"
        className="mt-6 bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Go Back Home
      </Link>
      <div className="absolute top-20 w-72 h-72 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-spin-slow"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-ping"></div>
    </div>
  );
};

export default PageNotFound;
