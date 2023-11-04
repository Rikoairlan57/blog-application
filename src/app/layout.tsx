import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Synapsis Blog Aplication",
  description: "This is a Assesment Synapsis Front End Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto max-w-screen-lg">
          <Navbar />
          <div className="px-2 pt-4 pb-8">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
