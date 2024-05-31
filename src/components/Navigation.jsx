import Link from "next/link";
import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Navigation = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="w-full">
        <img
          src="https://img.freepik.com/fotos-premium/marisco-mas-fresco-todos-gustos_181303-2861.jpg?w=900"
          alt="Seafood Header"
          className="w-full object-cover h-32 sm:h-48 md:h-64"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-10">
        <div className="flex flex-col sm:flex-row items-center">
          <img
            src="https://islandpacific.com.mx/wp-content/uploads/2023/09/cropped-logo4-768x335.png"
            alt="logo"
            className="h-8 md:h-12 w-auto mr-4"
          />
          <p className="text-sm sm:text-md md:text-lg">
            BUZOS Y PESCADORES DE LA BAJA CALIFORNIA
          </p>
        </div>
        <ul className="flex">
          <li className="mr-6">
            <a
              href="https://www.facebook.com/IslandPacific.Mx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoFacebook size={40} className="hover:text-blue-500" />
            </a>
          </li>
          <li className="mr-6">
            <a
              href="https://www.instagram.com/islandpacific.mx/?hl=es-la"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={40} className="hover:text-pink-600" />
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/place/Island+Pacific+-+Buzos+y+Pescadores+de+la+Baja+California,+S.C.L./@31.8557625,-116.5896675,17z/data=!3m1!4b1!4m6!3m5!1s0x80d88d7b3a3355e5:0x88b3e708cc695f0a!8m2!3d31.8557625!4d-116.5896675!16s%2Fg%2F1tj2c8ml?authuser=0&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdLocationPin size={40} className="hover:text-red-500" />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex overflow-x-auto py-3 bg-blue-900">
        <div className="flex space-x-6 min-w-max">
          <Link href="/" className="px-4 py-2">
            Inicio
          </Link>
          <Link href="/page/installations" className="px-4 py-2">
            Instalaciones
          </Link>
          <Link href="/page/request" className="px-4 py-2">
            Peticiones
          </Link>
          <Link href="/page/products" className="px-4 py-2">
            Productos
          </Link>
          <Link href="/page/cartContent" className="px-4 py-2">
            Carrito
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
