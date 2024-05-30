import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";


const Footer = () => {
  return (
    <div className="bg-[#03045E] text-white">
      <div className="flex justify-around m-2 p-2 border-b-2">
        <div className="w-1/3 flex flex-col">
          <div className="mt-9 text-base">
            Somos honrados con numerosos reconocimientos, que demuestra nuestro
            compromiso con la excelencia y calidad en nuestros productos. Además,
            contamos con certificaciones que respaldan nuestro compromiso con los
            más altos estándares de calidad y sostenibilidad.
          </div>
        </div>
        <div className="mt-9 text-base">
  <ol className="list-none">
    <li className="flex items-center "style={{fontSize: 20}}>
      <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2"/>
      Cultura
    </li>
    <li className="flex items-center">
      <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
      Cuidado ambiental
    </li>
    <li className="flex items-center"style={{fontSize: 20}}>
      <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
      Respeto
    </li>
  </ol>
</div>
      </div>

      <div className="flex justify-between p-2 ">
        <div>
          <img src="https://islandpacific.com.mx/wp-content/uploads/2023/09/logo_transparente120.png" alt="logo" className="h-20 w-50 m-4 ml-20"/>
        </div>
        <ul className="flex flex-row mt-5">
            <li className="mr-6"><a href="https://www.facebook.com/IslandPacific.Mx" target="_blank" rel="noopener noreferrer">
                  <IoLogoFacebook size={60} />
            </a></li>
            <li className="mr-6"><a href="https://www.instagram.com/islandpacific.mx/?hl=es-la" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={60}/>
            </a></li>
            <li className="mr-6"><a href="https://www.google.com/maps/place/Island+Pacific+-+Buzos+y+Pescadores+de+la+Baja+California,+S.C.L./@31.8557625,-116.5896675,17z/data=!3m1!4b1!4m6!3m5!1s0x80d88d7b3a3355e5:0x88b3e708cc695f0a!8m2!3d31.8557625!4d-116.5896675!16s%2Fg%2F1tj2c8ml?authuser=0&entry=ttu" target="_blank" rel="noopener noreferrer">
                  <MdLocationPin size={60} />
            </a></li>
        </ul>
        <div className="mt-9 mr-20 text-base">Derechos reservados © 2024 IslandPacific</div>
      </div>
    </div>
  );
};

export default Footer;
