import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Painting Auction</h3>
            <p className="mt-2">
              Discover and bid on exclusive artwork from talented artists around the world.
            </p>
            <p className="mt-1 text-sm">&copy; {new Date().getFullYear()} Painting Auction. All rights reserved.</p>
             {/* Social Media */}
          <div className="flex mt-4 md:mt-0 pt-5">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-gray-100 pr-3">
              <FaFacebookF size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-100 pr-3">
              <FaTwitter size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-100 pr-3">
              <FaInstagram size={24} />
            </a>
          </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/auctions" className="hover:underline">Current Auctions</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p className="mt-2">Email: <a href="mailto:info@paintingauction.com" className="hover:underline">info@paintingauction.com</a></p>
            <p className="mt-2">Phone: <a href="tel:+123456789" className="hover:underline">+1 234 567 89</a></p>
            <p className="mt-2">Address: 123 Art Street, New York, NY</p>
          </div>

         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
