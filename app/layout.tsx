
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from './providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KumariKadial | Business Development",
  description: "I am a person who is Guided by solutions, powered by results, and always elevating through learning and new challenging opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body>
      <Provider>{children}</Provider>
      </body> */}
     
      <body className={inter.className}>{children}</body>
    </html>
  );
}
