import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Team from './components/Team/Team';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CartModal from './components/Cart/CartModal';
import CartProvider from './contexts/CartContext';
import './index.css';
import CategoriesSection from './components/CategoriesSection/CategoriesSection';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        <Header />
        <main>
          <Hero />
          <CategoriesSection />
          <Products />
          <Team />
                    
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <CartModal />
      </div>
    </CartProvider>
  );
}

export default App;