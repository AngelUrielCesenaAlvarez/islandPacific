import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navigation />
      </header>
      <main className="flex-row items-center">
      <div className="flex flex-row items-center">
        <div className="flex flex-col items-center ml-28 mr-28 mt-20 mb-10 p-2 border-2 rounded-lg border-sky-900 w-1/3 h-100">
          <p className="mb-4 text-xl font-semibold">Quienes somos</p>
          <p className="text-lg font-normal">
            La Cooperativa Buzos y Pescadores es una empresa originaria del
            Pacífico Norte Mexicano, con una planta de procesamiento pesquero
            llamada PEMIN en Isla Natividad, Baja California Sur. La cooperativa
            se enfoca en la comercialización de especies marinas de calidad
            internacional, bajo la marca registrada de Island Pacific.
          </p>
        </div>
        <img src="https://islandpacific.com.mx/wp-content/uploads/2023/09/logo_transparente120.png" alt="logo" className=" w-1/3"/>
      </div>

      <div className="flex flex-row items-center w-full"> 
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5mlpsneej5Nz_eXP6hiDhZwEk75W6oP1U9X2ZgEu90jreeksHWfuqPvLxrXwaGaNQ-9vZCFai7CMR_du6CVbsyI6jV3l6vKsoZhT842YzZnWa1ekVHVjC8R6V8ji9a7yiXCIEWoD7KXY/s1600/natividad+island.jpg" alt="logo" className=" mt-5 ml-28 mr-40 w-1/3"/>
        <div className="flex flex-col  items-center  p-2 border-2  rounded-lg border-sky-900 w-1/3 h-100">
          <p className="mb-4 text-xl font-semibold">Nuestra Experiencia</p>
          <p className="text-lg font-normal mb-5">
            Desde principios de los años 1940's en las frías y limpias aguas que
            rodean Isla Natividad, en la parte centro-occidental de la península
            de Baja California, pescadores mexicanos agrupados en esta Sociedad
            Cooperativa Buzos y Pescadores de la Baja California, cuenta con
            permisos y concesiones de largo plazo para el aprovechamiento de los
            más valiosos recursos pesqueros de la región.
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center w-full"> 
        <div className="flex flex-col items-center mt-10 ml-28 mr-28 mb-10 p-2 border-2 rounded-lg border-sky-900 w-1/3 h-100">
          <p className="mb-4 text-xl font-semibold">Productos y servicios</p>
          <ol className="text-lg font-normal list-disc pl-6">
            <li>
              Especies marinas de alta calidad, como pescado, mariscos y otros
              productos del mar.
            </li>
            <li>Comercialización de productos frescos y procesados.</li>
            <li>Exportación a mercados internacionales y nacionales.</li>
          </ol>
          
        </div>
        <img src="https://ipescado.com/wp-content/uploads/2021/08/Copia-de-jurel-picado-en-cubo.png" alt="logo" className=" ml-5 mt-10 mb-10 w-1/3"/>
      </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};




export default HomePage;