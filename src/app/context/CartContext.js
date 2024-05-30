'use client';
import { createContext, useState, useContext } from "react";

// Creamos el contexto
const CartContext = createContext();

// Creamos el proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar al carrito
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.key === product.key);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.key === product.key ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  // Función para remover del carrito
  const removeFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.key !== product.key)
    );
  };

  // Función para actualizar la cantidad
  const updateQuantity = (product, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.key === product.key ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
