import React, { useState } from 'react';
import {  FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { getTotalItems, openCart } = useCart();
  const { scrollToSection } = useSmoothScroll();

  const navItems = [
    { name: 'Accueil', to: 'home' },
    { name: 'Boutique', to: 'products' },
    { name: 'Notre Équipe', to: 'team' },
    { name: 'Avis Clients', to: 'reviews' },
    { name: 'Contact', to: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
              <img src="https://i.pinimg.com/736x/fd/15/62/fd1562df6c4e65901c877998fabc94f1.jpg" alt="Logo" className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-700">Fleur Marwa</h1>
              <p className="text-sm text-gray-500">L'élégance florale</p>
            </div>
          </button>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.to)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaSearch className="text-gray-600" />
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-12 w-72 bg-white rounded-lg shadow-lg p-4 animate-slide-up">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Rechercher des fleurs..."
                      className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <button className="btn-primary p-2">
                      <FaSearch />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User */}
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FaUser className="text-gray-600" />
            </button>

            {/* Cart */}
            <button 
              onClick={openCart}
              className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaShoppingCart className="text-gray-600" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.to)}
                  className="text-gray-700 hover:text-primary-600 font-medium py-2 text-left transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;