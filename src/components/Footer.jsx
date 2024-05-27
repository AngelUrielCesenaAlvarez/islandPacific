import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#03045E] text-white">
      <div className="flex justify-around m-8 p-2 border-b-2">
        <div className="w-1/3">
          Somos honrados con numerosos reconocimientos, que demuestra nuestro
          compromiso con la excelencia y calidad en nuestros productos. Además,
          contamos con certificaciones que respaldan nuestro compromiso con los
          más altos estándares de calidad y sostenibilidad.
        </div>
        <div>
          <ol>
            <li>Cultura</li>
            <li>Cuidado ambientas</li>
            <li>Respeto</li>
          </ol>
        </div>
      </div>
      <div className="flex justify-between  p-2">
        <div>Logo</div>
        <div>Redes sociales</div>
        <div>Derechos reservados</div>
      </div>
    </div>
  );
};

export default Footer;
