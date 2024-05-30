'use client';
import { createContext, useState, useContext } from "react";

// Creamos el contexto
const CartContext = createContext();

// Creamos el proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar al carrito
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Función para remover del carrito
  const removeFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.key !== product.key)
    );
  };

  console.log("CartProvider renderizado", { cart, addToCart, removeFromCart }); // Verificación

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
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
  console.log("useCart hook", context); // Verificación
  return context;
};
