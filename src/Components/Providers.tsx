"use client";

import { ThemeProvider } from "next-themes";
import { CartProvider } from "./Cart/CartContext";
import Layout from "./Layout";

import '../App.css';
import '@fontsource/cinzel/400.css';
import '@fontsource/cinzel/500.css';
import '@fontsource/cinzel/600.css';
import '@fontsource/cinzel/700.css';
import '@fontsource/cinzel/800.css';
import '@fontsource/cinzel/900.css';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <CartProvider>
        <Layout>
          {children}
        </Layout>
      </CartProvider>
    </ThemeProvider>
  );
}

export default Providers;
