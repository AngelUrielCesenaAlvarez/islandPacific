"use client";
import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ref, get } from "firebase/database";
import { db } from "@/app/config/realTime";
import Post from "@/components/Post";

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
      <main className="grid grid-cols-2">
        {item.map((product) => (
          <div key={product.key} >
            <Post product={product} />
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
