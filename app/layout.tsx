import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Figma to NextJS",
  description: "Convert Figma portfolio website to nextjs masterpeice!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`bg-[#CFA6A61C] w-full`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
