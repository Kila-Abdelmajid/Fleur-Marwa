import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types pour les produits et articles du panier
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  tags: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
  getShipping: () => number;
  getTotal: () => number;
  isCartOpen: boolean;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

// Création du contexte avec une valeur par défaut
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart doit être utilisé à l\'intérieur d\'un CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  // État du panier avec initialisation depuis localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem('fleur-marwa-cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Erreur lors de la lecture du panier depuis localStorage:', error);
      return [];
    }
  });

  // État pour l'ouverture/fermeture du modal du panier
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sauvegarder le panier dans localStorage à chaque changement
  useEffect(() => {
    try {
      localStorage.setItem('fleur-marwa-cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du panier dans localStorage:', error);
    }
  }, [cart]);

  // Ajouter un produit au panier
  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      // Vérifier si le produit existe déjà dans le panier
      const existingItemIndex = prevCart.findIndex(item => item.id === product.id);
      
      if (existingItemIndex !== -1) {
        // Produit existe déjà, mettre à jour la quantité
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity
        };
        return updatedCart;
      } else {
        // Produit n'existe pas, l'ajouter au panier
        const newItem: CartItem = {
          ...product,
          quantity
        };
        return [...prevCart, newItem];
      }
    });
  };

  // Retirer un produit du panier
  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Mettre à jour la quantité d'un produit
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Vider complètement le panier
  const clearCart = () => {
    setCart([]);
  };

  // Calculer le nombre total d'articles
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculer le sous-total (prix total des articles sans frais de livraison)
  const getSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Calculer les frais de livraison (gratuit au-dessus de 500 DH)
  const getShipping = () => {
    const subtotal = getSubtotal();
    return subtotal > 500 ? 50 : 0;
  };

  // Calculer le total (sous-total + frais de livraison)
  const getTotal = () => {
    return getSubtotal() + getShipping();
  };

  // Ouvrir/fermer le modal du panier
  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Valeur du contexte
  const contextValue: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getSubtotal,
    getShipping,
    getTotal,
    isCartOpen,
    toggleCart,
    openCart,
    closeCart
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;