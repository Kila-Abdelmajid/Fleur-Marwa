import React, { useRef, useState, useEffect } from 'react';
import { CategorySection } from '../../types';
import { Link } from 'react-router-dom';

const CategoriesSection: React.FC = () => {
  const categories: CategorySection[] = [
    {
      id: 1,
      title: 'Roses',
      image: 'https://www.post-a-rose.com/prod_cat/images/18-Select-Red-Roses__________wi850he850moletterboxbgwhite.jpg',
      category: 'roses'
    },
    {
      id: 2,
      title: 'Dolls',
      image: 'https://images.stockx.com/images/Pop-Mart-Labubu-The-Monsters-Tasty-Macarons-Toffee-Vinyl-Plush-Pendant-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1754416898',
      category: 'dolls'
    },
    {
      id: 3,
      title: 'Perfume',
      image: 'https://citymall-para.ma/wp-content/uploads/2022/09/1-2.webp',
      category: 'perfume'
    },
    {
      id: 4,
      title: 'Bouquets',
      image: 'https://www.flowerchimp.com/cdn/shop/files/2a_de484b42-f4aa-4a72-844e-72a6d0b6fa60_2000x.jpg?v=1695607852',
      category: 'bouquets'
    },
    {
      id: 5,
      title: 'Roses',
      image: 'https://www.post-a-rose.com/prod_cat/images/18-Select-Red-Roses__________wi850he850moletterboxbgwhite.jpg',
      category: 'roses'
    },
    {
      id: 6,
      title: 'Dolls',
      image: 'https://images.stockx.com/images/Pop-Mart-Labubu-The-Monsters-Tasty-Macarons-Toffee-Vinyl-Plush-Pendant-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1754416898',
      category: 'dolls'
    },
    {
      id: 7,
      title: 'Perfume',
      image: 'https://citymall-para.ma/wp-content/uploads/2022/09/1-2.webp',
      category: 'perfume'
    },
    {
      id: 8,
      title: 'Bouquets',
      image: 'https://www.flowerchimp.com/cdn/shop/files/2a_de484b42-f4aa-4a72-844e-72a6d0b6fa60_2000x.jpg?v=1695607852',
      category: 'bouquets'
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const scrollSpeed = 2.5;

  // Auto-scroll effect
  useEffect(() => {
    if (isManualScroll) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const animateScroll = () => {
      if (!container) return;

      container.scrollLeft += scrollSpeed;

      // Si on arrive à la fin, on revient au début
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(animateScroll);
    };

    // Annuler l'animation précédente
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    animationRef.current = requestAnimationFrame(animateScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isManualScroll]);

  // Détection du scroll manuel
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let timeoutId: NodeJS.Timeout;
    let isDragging = false;

    // Détecter le drag avec la souris
    const handleMouseDown = () => {
      isDragging = true;
      setIsManualScroll(true);
      container.style.cursor = 'grabbing';
    };

    const handleMouseMove = () => {
      if (isDragging) {
        setIsManualScroll(true);
        clearTimeout(timeoutId);
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
      container.style.cursor = 'grab';
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsManualScroll(false);
      }, 1000);
    };

    // Détecter la molette de souris
    const handleWheel = () => {
      setIsManualScroll(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsManualScroll(false);
      }, 1000);
    };

    // Détecter le touch sur mobile
    const handleTouchStart = () => {
      setIsManualScroll(true);
      clearTimeout(timeoutId);
    };

    const handleTouchMove = () => {
      setIsManualScroll(true);
      clearTimeout(timeoutId);
    };

    const handleTouchEnd = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsManualScroll(false);
      }, 1000);
    };

    // Événements pour le drag
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Événements pour la molette
    container.addEventListener('wheel', handleWheel);
    
    // Événements pour le touch
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      clearTimeout(timeoutId);
    };
  }, []);

  // Dupliquer les catégories pour effet infini
  const duplicatedCategories = [...categories, ...categories, ...categories];

  return (
    <section className="py-8 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Our Categories
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto">
            Explore our collection for every special occasion
          </p>
        </div>
        
        <div className="relative">
          {/* Conteneur de défilement */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-4 pb-4 pt-2 px-2 scroll-smooth cursor-grab active:cursor-grabbing"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {duplicatedCategories.map((category, index) => (
              <div
                key={`${category.id}-${index}`}
                className="flex-shrink-0 w-40 group cursor-pointer"
              >
                <Link to={`/products?category=${category.category}`}>
                  {/* Conteneur d'image circulaire */}
                  <div className="relative mb-3">
                    {/* Effet de lueur */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    
                    {/* Image circulaire */}
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-full"></div>
                      
                      {/* Anneau intérieur */}
                      <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-all duration-300"></div>
                    </div>
                    
                    {/* Icône flottante */}
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Titre de la catégorie */}
                  <div className="text-center">
                    <h3 className="text-base font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View →
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Indicateur de défilement */}
        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1.5 h-1.5 rounded-full bg-pink-600 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span className="text-xs text-gray-500">
              {isManualScroll ? 'Manual scroll' : 'Auto-scroll'}
            </span>
          </div>
        </div>
      </div>

      {/* Style inline pour cacher la scrollbar */}
      <style>{`
        .scroll-smooth::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CategoriesSection;