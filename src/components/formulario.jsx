import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    mensaje: ''
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r8wwt8z', 'template_f4hmh0h', e.target, '8FTULWrw_ktpfhFJP')
      .then((result) => {
        console.log(result.text);
        alert('¡Mensaje enviado!');
      }, (error) => {
        console.log(error.text);
        alert('Error al enviar el mensaje.'); 
      });

    setFormData({
      nombre: '',
      telefono: '',
      correo: '',
      mensaje: ''
    });
  };

  return (
    <form onSubmit={manejarEnvio} className="max-w-lg mx-auto">
  <div className="mb-4">
    <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre / Empresa:</label>
    <input
      type="text"
      name="nombre"
      value={formData.nombre}
      onChange={manejarCambio}
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required
    />
  </div>
  <div className="mb-4">
    <label htmlFor="telefono" className="block text-gray-700 text-sm font-bold mb-2">Contacto:</label>
    <input
      type="text"
      name="telefono"
      value={formData.telefono}
      onChange={manejarCambio}
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required
    />
  </div>
  <div className="mb-4">
    <label htmlFor="correo" className="block text-gray-700 text-sm font-bold mb-2">Correo:</label>
    <input
      type="email"
      name="correo"
      value={formData.correo}
      onChange={manejarCambio}
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required
    />
  </div>
  <div className="mb-6">
    <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2">Asunto:</label>
    <textarea
      name="mensaje"
      value={formData.mensaje}
      onChange={manejarCambio}
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required
    />
  </div>
  <div className="flex justify-center">
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Enviar
    </button>
  </div>
</form>

  );
};

export default Formulario;
