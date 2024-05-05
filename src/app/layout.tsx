import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-start justify-between `}>
        <div className="hidden lg:flex min-w-[300px]  border-r min-h-screen ">
          <Sidebar />
        </div>

        <main className="grid  h-full  ">
          <Header />
          <div className="p-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
