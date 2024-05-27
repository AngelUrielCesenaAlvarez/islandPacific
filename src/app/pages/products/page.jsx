"use client";
import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ref, get } from "firebase/database";
import { db } from "@/app/config/realTime";

const Products = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const loadProducts = () => {
      const route = ref(db, "products");
      get(route)
        .then((snapshot) => {
          if (snapshot.exists) {
            const data = Object.entries(snapshot.val()).map(([key, value]) => ({
              key,
              ...value,
            }));

            setItem(data);
          }
        })
        .catch((error) => {
          console.error("Error al obtener los productos", error);
        });
    };
    loadProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navigation />
      </header>
      <main className="flex-grow flex flex-col justify-center items-center">
        {item.map((product) => (
          <div>
            <p> {product.productName}</p>
            <p>{product.productPrice}</p>
            <p>{product.productImage}</p>
          </div>
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Products;
