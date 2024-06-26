import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Whatsapp from "@/components/Whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AH Fabrics",
  description: "Cloths",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        {children}
        <Whatsapp/>
        </body>
    </html>
  );
}
