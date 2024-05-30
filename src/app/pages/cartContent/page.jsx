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
    <div className="flex flex-col min-h-screen">
      <header>
        <Navigation />
      </header>
      <main className="flex-grow p-5">
        <h1 className="text-2xl mb-5">Carrito de compras</h1>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <div>
            {cart.map((product, index) => (
              <div key={index} className="flex items-center justify-between border-b py-2">
                <div>
                  <p>{product.productName}</p>
                  <p>{product.productPrice}</p>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDecrement(product)}
                      className="bg-gray-300 text-black px-2 py-1"
                    >
                      -
                    </button>
                    <span className="px-4">{product.quantity}</span>
                    <button
                      onClick={() => handleIncrement(product)}
                      className="bg-gray-300 text-black px-2 py-1"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(product)}
                  className="bg-red-500 text-white px-4 py-2"
                >
                  Eliminar
                </button>
              </div>
            ))}
            <div className="mt-4 text-right">
              <p className="text-xl font-semibold">Total: ${calculateTotal().toFixed(2)}</p>
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
