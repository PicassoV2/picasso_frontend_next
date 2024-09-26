import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Subscribe to Our Newsletter</h2>
        <p className="text-center mb-8">Stay updated with our latest artworks and VR experiences</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-r-full hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSubscription;