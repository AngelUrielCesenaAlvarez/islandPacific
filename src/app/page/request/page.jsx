'use client'
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";

const Request = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navigation />
      </header>
      <main className="flex-grow flex flex-col justify-center items-center">
        <p>Pedidos de mayoreo</p>
        <Formulario/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Request;