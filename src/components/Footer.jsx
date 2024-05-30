import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#03045E] text-white">
      <div className="flex justify-around items-center p-4 border-b border-gray-700">
        <div className="w-1/3">
          <p className="text-base">
            Somos honrados con numerosos reconocimientos, que demuestra nuestro
            compromiso con la excelencia y calidad en nuestros productos. Además,
            contamos con certificaciones que respaldan nuestro compromiso con los
            más altos estándares de calidad y sostenibilidad.
          </p>
        </div>
        <ol className="list-none space-y-2">
          <li className="flex items-center text-lg">
            <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2"/>
            Cultura
          </li>
          <li className="flex items-center text-lg">
            <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
            Cuidado ambiental
          </li>
          <li className="flex items-center text-lg">
            <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
            Respeto
          </li>
        </ol>
      </div>
      <div className="flex justify-between items-center p-4">
        <img src="https://islandpacific.com.mx/wp-content/uploads/2023/09/logo_transparente120.png" alt="logo" className="h-20"/>
        <ul className="flex">
          <li className="mr-6"><a href="https://www.facebook.com/IslandPacific.Mx" target="_blank" rel="noopener noreferrer">
                <IoLogoFacebook size={40} className="hover:text-blue-500" />
          </a></li>
          <li className="mr-6"><a href="https://www.instagram.com/islandpacific.mx/?hl=es-la" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={40} className="hover:text-pink-600"/>
          </a></li>
          <li><a href="https://www.google.com/maps/place/Island+Pacific+-+Buzos+y+Pescadores+de+la+Baja+California,+S.C.L./@31.8557625,-116.5896675,17z/data=!3m1!4b1!4m6!3m5!1s0x80d88d7b3a3355e5:0x88b3e708cc695f0a!8m2!3d31.8557625!4d-116.5896675!16s%2Fg%2F1tj2c8ml?authuser=0&entry=ttu" target="_blank" rel="noopener noreferrer">
                <MdLocationPin size={40} className="hover:text-red-500" />
          </a></li>
        </ul>
        <p className="text-base">Derechos reservados © 2024 IslandPacific</p>
      </div>
    </div>
  );
};

export default Footer;
