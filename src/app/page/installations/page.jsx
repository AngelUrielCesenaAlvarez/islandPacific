import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


const Intallations = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navigation />
      </header>
      <main className="flex-grow flex flex-col justify-center items-center">
        <p>Pagina para las instalaciones</p>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Intallations;
