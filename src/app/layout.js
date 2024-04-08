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
  title: "Donna",
  description: "Tienda de abarrotes",
  icons:{
    icon:"/favicon.ico"
  }
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
