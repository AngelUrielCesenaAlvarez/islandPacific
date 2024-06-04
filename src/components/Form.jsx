'use client';

import { useState } from 'react';

export default function RequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    quantity: '',
    message: '',
    useHotmail: false, // Añadido para seleccionar el servicio de correo
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Pedido enviado con éxito');
      setFormData({
        name: '',
        email: '',
        company: '',
        quantity: '',
        message: '',
        useHotmail: false,
      });
    } else {
      alert('Error al enviar el pedido');
    }
  };

  return (
    <div>
      <h1>Formulario de Pedido al Mayoreo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="company">Empresa:</label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="quantity">Cantidad:</label>
          <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="useHotmail">Usar Hotmail:</label>
          <input type="checkbox" id="useHotmail" name="useHotmail" checked={formData.useHotmail} onChange={handleChange} />
        </div>
        <button type="submit">Enviar Pedido</button>
      </form>
    </div>
  );
}
