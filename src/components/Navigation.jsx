import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faGooglePlus } from "@fortawesome/free-brands-svg-icons";

const Navigation = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="w-full">
        <img src="https://img.freepik.com/fotos-premium/marisco-mas-fresco-todos-gustos_181303-2861.jpg?w=900" alt="Seafood Header" className="w-full h-64 object-cover" />
      </div>
      <div className="flex justify-between items-center py-4 px-10">
        <div className="flex items-center">
          <img src="https://islandpacific.com.mx/wp-content/uploads/2023/09/cropped-logo4-768x335.png" alt="logo" className="h-12 w-auto mr-4"/>
          <p>Buzos y pescadores de la Baja California</p>
        </div>
        <ul className="flex items-center">
          <li className="mr-6">
            <FontAwesomeIcon icon={faFacebookF} size="lg" className="hover:text-blue-500" />
          </li>
          <li className="mr-6">
            <FontAwesomeIcon icon={faInstagram} size="lg" className="hover:text-purple-500" />
          </li>
          <li>
            <FontAwesomeIcon icon={faGooglePlus} size="lg" className="hover:text-red-500" />
          </li>
        </ul>
      </div>
      <div className="flex justify-center space-x-6 py-3 bg-blue-900">
        <Link href="/">Home</Link>
        <Link href="/page/products">Productos</Link>
        <Link href="/page/installations">Instalaciones</Link>
        <Link href="/page/request">Request</Link>
        <Link href="/page/cartContent">Cart</Link>
      </div>
    </div>
  );
};

export default Navigation;
