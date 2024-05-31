'use client';
import config from '@/app/config/mercadoLibre';
const LoginButton = () => {
  const handleLogin = () => {
    const authUrl =  `https://auth.mercadolibre.com/authorization?response_type=code&client_id=${config.clientId}&redirect_uri=${encodeURIComponent(config.redirectUri)}`;
    window.location.href = authUrl;
  };

  return (
    <button 
      onClick={handleLogin} 
      style={{ color: 'blue', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
    >
      Iniciar sesión con Mercado Libre
    </button>
  );
};

export default LoginButton;
