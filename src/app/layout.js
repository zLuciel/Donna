import { Inter } from "next/font/google";
import "./globals.css";
import "./landing.css";
import Header from "@/components/header/Header";
import { Providers } from "@/mantine/provider";
import Footer from "@/components/footer/Footer";
import TopScroll from "@/components/TopScroll/TopScroll";
import { ProductProvider } from "./provider/ProviderContext";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Doona",
  description:"Nuestra empresa se erige como un pilar fundamental en la construccion de mundo mas justo y solidario, donde el acceso equitativo a productos esenciales de alta calidad es una realidad",
  keywords: "justicia, solidaridad, acceso equitativo, productos esenciales, alta calidad , abarrotes, doona",
  author: "Doona",
  category: 'abarrotes',
  charset: "UTF-8",
  colorScheme: "light",
  themeColor: "light",
  viewport: "width=device-width, initial-scale=1",
  canonical: "https://doona.com.pe",
  icons: {
    icon: "/favicon.ico",
  },
  og: {
    title: "Doona - Construyendo un Mundo Mejor",
    description: "Nuestra empresa se erige como un pilar fundamental en la construcción de mundo más justo y solidario, donde el acceso equitativo a productos esenciales de alta calidad es una realidad.",
    image: "/DonnaMovil.png",
    url: "https://doona.com.pe",
    type: "landing"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductProvider>
          <Providers>
            {/* <TopScroll/> */}
            {/* <Header /> */}
            {children}
            {/* <Footer/> */}
          </Providers>
        </ProductProvider>
      </body>
    </html>
  );
}
