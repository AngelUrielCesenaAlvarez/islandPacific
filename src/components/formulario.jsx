import emailjs from "@emailjs/browser";
import { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombreEmpresa: "",
    telefonoEmpresa: "",
    correoEmpresa: "",
    descripcionPedido: "",
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_smy3m1k",
        "template_3rsphws",
        e.target,
        "Y_WMN1gz6tTFNfugH"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("¡Mensaje enviado!");
        },
        (error) => {
          console.log(error.text);
          alert("Error al enviar el mensaje.");
        }
      );

    setFormData({
      nombreEmpresa: "",
      telefonoEmpresa: "",
      correoEmpresa: "",
      descripcionPedido: "",
    });
  };

  return (
    <form onSubmit={manejarEnvio} className="max-w-lg mx-auto mt-8">
      <div className="mb-4">
        <label
          htmlFor="nombreEmpresa"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nombre de la empresa:
        </label>
        <input
          type="text"
          name="nombreEmpresa"
          value={formData.nombreEmpresa}
          onChange={manejarCambio}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="telefonoEmpresa"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Teléfono:
        </label>
        <input
          type="text"
          name="telefonoEmpresa"
          value={formData.telefonoEmpresa}
          onChange={manejarCambio}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="correoEmpresa"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Correo:
        </label>
        <input
          type="email"
          name="correoEmpresa"
          value={formData.correoEmpresa}
          onChange={manejarCambio}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="descripcionPedido"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Pedido:
        </label>
        <textarea
          name="descripcionPedido"
          value={formData.descripcionPedido}
          onChange={manejarCambio}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
