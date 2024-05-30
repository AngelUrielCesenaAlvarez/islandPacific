'use client';
import React from "react";
import { useCart } from "@/app/context/CartContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CartContent = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleIncrement = (product) => {
    updateQuantity(product, product.quantity + 1);
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      updateQuantity(product, product.quantity - 1);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.productPrice * product.quantity, 0);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header>
        <Navigation />
      </header>
      <main className="flex-grow p-5">
        <h1 className="text-3xl font-bold mb-5 text-gray-800">Carrito de compras</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">Tu carrito está vacío.</p>
        ) : (
          <div>
            {cart.map((product, index) => (
              <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-4">
                <div className="flex items-center space-x-4">
                  <img src={product.imgUrl} alt={product.productName} className="h-34 w-24 object-cover rounded-xl" />
                  <div>
                    <p className="text-lg font-semibold">{product.productName}</p>
                    <p className="text-sm text-gray-500">${product.productPrice.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => handleDecrement(product)}
                        className="text-lg p-2 bg-gray-300 rounded hover:bg-gray-400 mr-2"
                      >
                        -
                      </button>
                      <span className="text-lg">{product.quantity}</span>
                      <button
                        onClick={() => handleIncrement(product)}
                        className="text-lg p-2 bg-gray-300 rounded hover:bg-gray-400 ml-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(product)}
                  className="ml-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                >
                  Eliminar
                </button>
              </div>
            ))}
            <div className="text-right mt-4">
              <p className="text-xl font-bold">Total: ${calculateTotal().toFixed(2)}</p>
            </div>
          </div>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CartContent;
