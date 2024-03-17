import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: { template: "%s | M-Daraja-Kit Docs", default: "M-Daraja-Kit Docs" },
  description:
    "M-Daraja-Kit is a library created to simplify interactions with the Safaricom Daraja API (STK push requests). It is suitable for both Nodejs and React applications, allowing you to easily integrate MPesa payments into your app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} h-screen flex flex-col bg-myBgColor`}
      >
        <Navbar />
        <div className="flex h-[92%] w-full">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
