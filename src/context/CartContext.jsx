import { useContext, createContext, useState } from "react";

//creamos el contexto
const CartContext = createContext();

//Creamos el proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Funcion para agregar al carrito
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  //Funcion para remover del carrito
  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item !== product.key));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
