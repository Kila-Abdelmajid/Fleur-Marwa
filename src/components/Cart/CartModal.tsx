import React from 'react';
import { FaTimes, FaShoppingCart, FaTrash, FaPlus, FaMinus, FaCreditCard, FaTruck } from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';

const CartModal = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getSubtotal,
    getShipping,
    getTotal,
    getTotalItems,
    isCartOpen,
    closeCart
  } = useCart();

  const handleCheckout = () => {
    alert('Redirection vers la page de paiement...');
    // Ici, tu intégreras le vrai processus de paiement
    closeCart();
  };

  const subtotal = getSubtotal();
  const shipping = getShipping();
  const total = getTotal();
  const totalItems = getTotalItems();

  // Si le panier est fermé, ne rien afficher
  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 ">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 "
        onClick={closeCart}
      />

      {/* Cart Content */}
      <div className="absolute right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl overflow-y-scroll">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <FaShoppingCart className="text-2xl" />
              <h2 className="text-2xl font-bold">Mon Panier</h2>
            </div>
            <button
              onClick={closeCart}
              className="text-white hover:text-gray-200"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
          
          {/* Cart Summary */}
          <div className="flex items-center justify-between text-sm">
            <span>{totalItems} {totalItems === 1 ? 'article' : 'articles'}</span>
            <span>{total.toFixed(2)} DH</span>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <FaShoppingCart className="text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">Votre panier est vide</h3>
              <p className="text-gray-500 mb-6">Ajoutez des produits pour continuer</p>
              <button
                onClick={closeCart}
                className="btn-primary"
              >
                Continuer mes achats
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  {/* Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-bold text-gray-900 line-clamp-1">{item.name}</h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <FaTrash />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <FaMinus className="text-xs" />
                        </button>
                        <span className="font-bold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <FaPlus className="text-xs" />
                        </button>
                      </div>
                      
                      <div className="font-bold text-primary-600">
                        {(item.price * item.quantity).toFixed(2)} DH
                      </div>
                    </div>
                    
                    <div className="mt-2 text-xs text-gray-500">
                      {item.category} • {item.price.toFixed(2)} DH l'unité
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
         
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-200 p-6">
            {/* Summary */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Sous-total</span>
                <span className="font-bold">{subtotal.toFixed(2)} DH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Livraison</span>
                <span className={shipping === 0 ? "text-green-600 font-bold" : "font-bold"}>
                  {shipping === 0 ? 'GRATUIT' : `${shipping.toFixed(2)} DH`}
                </span>
              </div>
              
              <div className="flex justify-between text-lg font-bold pt-3 border-t">
                <span>Total</span>
                <span className="text-primary-600">{total.toFixed(2)} DH</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleCheckout}
                className="w-full btn-primary flex items-center justify-center gap-2 py-4"
              >
                <FaCreditCard />
                Passer la commande
              </button>
              
              <button
                onClick={clearCart}
                className="w-full btn-outline py-3"
              >
                Vider le panier
              </button>
              
              <button
                onClick={closeCart}
                className="w-full text-gray-600 hover:text-gray-900 text-center py-2"
              >
                Continuer mes achats
              </button>
            </div>

            {/* Guarantees */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaTruck className="text-primary-500" />
                  <span>Livraison 24h</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaCreditCard className="text-primary-500" />
                  <span>Paiement sécurisé</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;