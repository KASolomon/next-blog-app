import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | KASolomon Next Blog",
    default: "Home | KASolomon Next Blog",
  },
  description: "Creative ideas home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div
          className={
            "flex flex-col space-between min-h-screen mx-auto my-4 justify-between w-5/6"
          }
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
