// import { Geist, Geist_Mono } from "next/font/google";
import "./index.css";
import Providers from "@/store/providers";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Vape Hata",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body /*className={`${geistSans.variable} ${geistMono.variable}`}*/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
