'use client';
import React from 'react';
import config from '@/app/config/mercadoLibre';

const LoginButton = () => {
  const handleLogin = () => {
    const authUrl = `https://auth.mercadolibre.com/authorization?response_type=code&client_id=${config.clientId}&redirect_uri=${encodeURIComponent(config.redirectUri)}`;
    window.location.href = authUrl;
  };

  return (
    <button onClick={handleLogin}>
      Iniciar sesión con Mercado Libre
    </button>
  );
};

export default LoginButton;
