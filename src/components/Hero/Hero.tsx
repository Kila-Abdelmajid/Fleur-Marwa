import React from 'react';
import { FaArrowRight, FaShippingFast } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden section-padding">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Des <span className="text-primary-600">fleurs</span> qui parlent
              <br />
              à votre <span className="text-secondary-500">cœur</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl">
              Découvrez notre collection exclusive de bouquets artisanaux, créés avec amour 
              et passion par nos fleuristes experts pour toutes vos occasions spéciales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="products"
                smooth={true}
                duration={700}
                className="btn-primary inline-flex items-center justify-center space-x-2 group"
              >
                <span>Explorer la boutique</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
             
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">1000+</div>
                <div className="text-gray-600">Bouquets créés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24h</div>
                <div className="text-gray-600">Livraison express</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.pinimg.com/1200x/6a/9e/29/6a9e293ced3d6158b924ca1aaabc903e.jpg"
                alt="Bouquet de fleurs Fleur Marwa"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            

           
          </div>
          {/* Floating Cards */}
            <div className="absolute -bottom-6 -right-0 bg-white p-4 rounded-2xl shadow-xl animate-float z-10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaShippingFast className="text-primary-600" />
                </div>
                <div>
                  <div className="font-bold">Livraison Rapide</div>
                  <div className="text-sm text-gray-500">24h/48h</div>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-gray-500 text-sm">Défiler</div>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;