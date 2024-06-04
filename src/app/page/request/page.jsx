"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Formulario from "@/components/formulario";

const Request = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navigation />
      </header>
      <main className="flex-grow flex flex-col justify-center items-center m-10">
        <p className="text-xl">Pedidos de mayoreo</p>
        <Formulario/>
      </main>
      <footer> 
        <Footer />
      </footer>
    </div>
  );
};

export default Request;
