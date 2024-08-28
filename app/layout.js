import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/header";
import Footer from "./_components/Footer/footer";
import { NavigationProvider } from "./_context/navContext";

export const metadata = {
  title: "Rev Tigitu Moges",
  description: "Landing page for rev Tisistu Moges",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationProvider>
          <Header />
          {children}
        </NavigationProvider>
        <Footer />
      </body>
    </html>
  );
}
