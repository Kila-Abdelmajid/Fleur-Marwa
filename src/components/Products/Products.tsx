import React, { useState } from 'react';
import { FaFilter, FaStar, FaHeart, FaShoppingCart, FaEye, FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';
import { products } from '../../constants/products';
import { useCart } from '../../contexts/CartContext';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [sortOrder, setSortOrder] = useState<string>('default');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', name: 'Tous les produits', count: products.length },
    { id: 'roses', name: 'Roses', count: products.filter(p => p.category === 'roses').length },
    { id: 'dolls', name: 'Poupées', count: products.filter(p => p.category === 'dolls').length },
    { id: 'perfume', name: 'Parfums', count: products.filter(p => p.category === 'perfume').length },
    { id: 'bouquets', name: 'Bouquets', count: products.filter(p => p.category === 'bouquets').length },
  ];

  // Fonction de filtrage et tri
  let filteredProducts = selectedCategory === 'all' 
    ? [...products] 
    : products.filter(product => product.category === selectedCategory);

  // Appliquer le tri
  if (sortOrder === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === 'name-asc') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Limiter aux produits visibles
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < filteredProducts.length;

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id) 
        : [...prev, id]
    );
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product, 1);
  };

  const loadMoreProducts = () => {
    setVisibleCount(prev => Math.min(prev + 8, filteredProducts.length));
  };

  const showLessProducts = () => {
    setVisibleCount(8);
  };

  return (
    <section id="products" className="section-padding bg-gradient-to-b from-white to-primary-50/30">
      <div className="container-custom">
        
        {/* En-tête avec titre et stats */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre <span className="text-primary-600">Collection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez nos créations uniques, soigneusement sélectionnées pour chaque occasion
          </p>
          
          {/* Stats rapides */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-primary-600">{products.length}</div>
              <div className="text-gray-600 text-sm">Produits</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-green-600">4.8</div>
              <div className="text-gray-600 text-sm">Note moyenne</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600">24h</div>
              <div className="text-gray-600 text-sm">Livraison</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-purple-600">98%</div>
              <div className="text-gray-600 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Barre de filtres */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            {/* Catégories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setVisibleCount(8);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-white/20'
                      : 'bg-gray-100'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Filtres et tri */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <FaFilter />
                <span>Filtres</span>
                {showFilters ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="default">Trier par</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="name-asc">Nom A-Z</option>
              </select>
            </div>
          </div>

          {/* Filtres avancés */}
          {showFilters && (
            <div className="bg-white p-6 rounded-2xl shadow-md mb-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Prix</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>0 DH</span>
                      <span>1000 DH</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Disponibilité</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>En stock</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Promotions</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Recherche</h4>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Rechercher un produit..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <FaSearch className="absolute right-4 top-3 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Grille de produits - Design uniforme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image - Hauteur fixe */}
              <div className="relative overflow-hidden h-56">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Badge promotion */}
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{product.discount}%
                  </div>
                )}
                
                {/* Bouton favori */}
                <button 
                  onClick={() => toggleFavorite(product.id)}
                  className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    favorites.includes(product.id)
                      ? 'bg-red-500 text-white scale-110'
                      : 'bg-white/90 text-gray-600 hover:bg-white hover:scale-110'
                  }`}
                >
                  <FaHeart className="text-sm" />
                </button>
              </div>

              {/* Contenu - Hauteur fixe avec flex pour pousser les boutons */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Catégorie et rating */}
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-500 text-sm" />
                    <span className="font-bold text-sm">{product.rating}</span>
                    <span className="text-gray-500 text-xs">({product.reviews})</span>
                  </div>
                </div>

                {/* Titre et description - Hauteur fixe */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-1">
                  {product.name}
                </h3>
                
                {/* Description avec hauteur fixe */}
                <div className="mb-4 flex-grow">
                  <p className="text-gray-600 text-sm line-clamp-2 min-h-[2.5rem]">
                    {product.description}
                  </p>
                </div>

                {/* Prix et stock - Toujours au même endroit */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl font-bold text-primary-600">
                      {product.price.toFixed(2)} DH
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice.toFixed(2)} DH
                      </span>
                    )}
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.inStock 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.inStock ? '✓ En stock' : 'Épuisé'}
                  </span>
                </div>

                {/* Boutons - Toujours alignés en bas */}
                <div className="flex space-x-2 mt-auto">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className={`flex-1 py-2.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      product.inStock
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <FaShoppingCart />
                    {product.inStock ? 'Ajouter' : 'Indisponible'}
                  </button>
                  <button className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <FaEye />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination / Bouton Voir plus */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12 space-y-4">
            {hasMoreProducts ? (
              <button
                onClick={loadMoreProducts}
                className="px-8 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2 mx-auto"
              >
                Voir plus de produits
                <FaChevronDown />
              </button>
            ) : visibleCount > 8 && (
              <div className="space-y-4">
                <p className="text-gray-600">
                  Vous avez vu tous les {filteredProducts.length} produits
                </p>
                <button
                  onClick={showLessProducts}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Réduire l'affichage
                </button>
              </div>
            )}
            
            {/* Indicateur de pagination */}
            <div className="text-gray-500 text-sm">
              Affichage de {Math.min(visibleCount, filteredProducts.length)} sur {filteredProducts.length} produits
            </div>
          </div>
        )}

        {/* Message si aucun produit */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🌿</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Aucun produit trouvé
            </h3>
            <p className="text-gray-600 mb-6">
              Essayez de modifier vos filtres de recherche
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setShowFilters(false);
              }}
              className="px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>

      
    </section>
  );
};

export default Products;