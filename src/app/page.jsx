import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navigation />
      </header>
      <main className="flex-grow">
        <div className="flex flex-col items-center m-28 p-2 border-2">
          <p className="mb-4">Quienes somos</p>
          <p>
            La Cooperativa Buzos y Pescadores es una empresa originaria del
            Pacífico Norte Mexicano, con una planta de procesamiento pesquero
            llamada PEMIN en Isla Natividad, Baja California Sur. La cooperativa
            se enfoca en la comercialización de especies marinas de calidad
            internacional, bajo la marca registrada de Island Pacific.
          </p>
        </div>
        <div className="flex flex-col items-center m-28 p-2 border-2">
          <p className="mb-4">Nuestra Experiencia</p>
          <p>
            Desde principios de los años 1940's en las frías y limpias aguas que
            rodean Isla Natividad, en la parte centro-occidental de la península
            de Baja California, pescadores mexicanos agrupados en esta Sociedad
            Cooperativa Buzos y Pescadores de la Baja California, cuenta con
            permisos y concesiones de largo plazo para el aprovechamiento de los
            más valiosos recursos pesqueros de la región.
          </p>
        </div>
        <div className="flex flex-col items-center m-28 p-2 border-2">
          <p className="mb-4">Productos y servicios</p>
          <ol>
            <li>
              - Especies marinas de alta calidad, como pescado, mariscos y otros
              productos del mar.
            </li>
            <li> - Comercialización de productos frescos y procesados.</li>
            <li> - Exportación a mercados internacionales y nacionales.</li>
          </ol>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
