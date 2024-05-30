import { CartProvider } from "../context/CartContext";
import '../styles/globals.css'; // Importa tus estilos globales aquí

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
