'use client';
import React from "react";
import { useCart } from "@/app/context/CartContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navigation />
      </header>
      <main className="flex-grow p-5">
        <h1 className="text-2xl mb-5">Carrito de Compras</h1>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <div>
            {cart.map((product, index) => (
              <div key={index} className="flex items-center justify-between border-b py-2">
                <div>
                  <p>{product.productName}</p>
                  <p>{product.productPrice}</p>
                </div>
                <button
                  onClick={() => handleRemove(product)}
                  className="bg-red-500 text-white px-4 py-2"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Cart;
