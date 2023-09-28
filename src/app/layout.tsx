import Navbar from "@/components/navigation/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/redux/providers";
import Footer from "@/components/footer/Footer";
import Toast from "@/components/toasts/Toast";

export const metadata: Metadata = {
  title: "Shelby Bolden Photography",
  description: "Professional Photography in Warner Robins, Georgia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;900&family=Unna&display=swap"
          rel="stylesheet"
        />
      </head>

      <body data-theme="sbp" className={`min-h-full bg-secondary`}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Toast />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
