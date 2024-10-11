import localFont from "next/font/local";
import "./globals.css";

import { ViewTransitions } from "next-view-transitions";
import Logo from "@/components/Logo";

const apercuPro = localFont({
  src: "../public//assets/fonts/ApercuPro-Regular.otf",
  variable: "--apercu",
});
const spectral = localFont({
  src: "../public/assets/fonts/Spectral-Regular.ttf",
  variable: "--spectral",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${apercuPro.variable} ${spectral.variable} antialiased`}
        >
          <Logo />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
