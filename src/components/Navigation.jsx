import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faGooglePlus } from "@fortawesome/free-brands-svg-icons";


const Navigation = () => {
  return (
    <div>
      <div className="h-250px w-full">
        <img src="https://img.freepik.com/fotos-premium/marisco-mas-fresco-todos-gustos_181303-2861.jpg?w=900" alt="logo" style={{ height: "250px" }} className="w-full object-cover" />
      </div>
      <div className="flex justify-center items-center p-10 w-full">
  <div className="flex flex-col items-center justify-center">
    <img src="https://islandpacific.com.mx/wp-content/uploads/2023/09/cropped-logo4-768x335.png" alt="logo" className="h-20 w-auto"/>
    <p className="mt-2">Buzos y pescadores de la Baja California</p>
  </div>
  <ul className="flex flex-row ml-10">
    <li className="mr-4"><FontAwesomeIcon icon={faFacebookF} className="text-2xl text-blue-600" /></li>
    <li className="mr-4"><FontAwesomeIcon icon={faInstagram} className="text-2xl text-purple-600" /></li>
    <li><FontAwesomeIcon icon={faGooglePlus} className="text-2xl text-red-600" /></li>
  </ul>
</div>

      <div className="flex justify-center space-x-10 p-6 bg-[#03045E] text-[#fff] ">
        <Link href="/">Home</Link>
        <Link href="/pages/products">Productos</Link>
        <Link href="/pages/installations">Instalaciones</Link>
        <Link href="/pages/request">Request</Link>
        <Link href="/pages/cartContent">Cart</Link>

      </div>
    </div>
  );
};

export default Navigation;
