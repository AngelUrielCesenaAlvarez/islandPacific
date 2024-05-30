import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buzos y pescadores",
  description: "Proyecto final de topicos avanzados de programacion",
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="es">
        <body className={inter.className}>{children}</body>
      </html>
    </CartProvider>
  );
}
