import Footer from "@/components/Footer";
import LoginButton from "@/components/LoginButton";
import Navigation from "@/components/Navigation";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-md">
        <Navigation />
      </header>
      <main className="flex-grow container mx-auto p-4">
        <div className="flex justify-end mb-4">
          <LoginButton />
        </div>
        <div className="flex flex-col md:flex-row items-center mb-10 bg-white p-6 rounded-lg shadow-lg">
          <div className="md:w-1/2 p-4">
            <p className="mb-4 text-2xl font-bold text-gray-800">Quienes somos</p>
            <p className="text-lg text-gray-600">
              La Cooperativa Buzos y Pescadores es una empresa originaria del Pacífico Norte Mexicano, con una planta de procesamiento pesquero llamada PEMIN en Isla Natividad, Baja California Sur. La cooperativa se enfoca en la comercialización de especies marinas de calidad internacional, bajo la marca registrada de Island Pacific.
            </p>
          </div>
          <img src="https://islandpacific.com.mx/wp-content/uploads/2023/09/logo_transparente120.png" alt="logo" className="md:w-1/2 mt-4 md:mt-0" />
        </div>

        <div className="flex flex-col md:flex-row items-center mb-10 bg-white p-6 rounded-lg shadow-lg">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5mlpsneej5Nz_eXP6hiDhZwEk75W6oP1U9X2ZgEu90jreeksHWfuqPvLxrXwaGaNQ-9vZCFai7CMR_du6CVbsyI6jV3l6vKsoZhT842YzZnWa1ekVHVjC8R6V8ji9a7yiXCIEWoD7KXY/s1600/natividad+island.jpg" alt="island" className="md:w-1/2 mt-4 md:mt-0" />
          <div className="md:w-1/2 p-4">
            <p className="mb-4 text-2xl font-bold text-gray-800">Nuestra Experiencia</p>
            <p className="text-lg text-gray-600">
              Desde principios de los años 1940's en las frías y limpias aguas que rodean Isla Natividad, en la parte centro-occidental de la península de Baja California, pescadores mexicanos agrupados en esta Sociedad Cooperativa Buzos y Pescadores de la Baja California, cuenta con permisos y concesiones de largo plazo para el aprovechamiento de los más valiosos recursos pesqueros de la región.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-10 bg-white p-6 rounded-lg shadow-lg">
          <div className="md:w-1/2 p-4">
            <p className="mb-4 text-2xl font-bold text-gray-800">Productos y servicios</p>
            <ol className="text-lg text-gray-600 list-disc pl-6">
              <li>Especies marinas de alta calidad, como pescado, mariscos y otros productos del mar.</li>
              <li>Comercialización de productos frescos y procesados.</li>
              <li>Exportación a mercados internacionales y nacionales.</li>
            </ol>
          </div>
          <img src="https://ipescado.com/wp-content/uploads/2021/08/Copia-de-jurel-picado-en-cubo.png" alt="products" className="md:w-1/2 mt-4 md:mt-0" />
        </div>
      </main>
      <footer className="bg-white shadow-md">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
