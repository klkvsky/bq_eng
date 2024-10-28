import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ViewTransitions } from "next-view-transitions";

const apercuPro = localFont({
  src: "../public//assets/fonts/ApercuPro-Regular.otf",
  variable: "--apercu",
});
const spectral = localFont({
  src: "../public/assets/fonts/Spectral-Regular.ttf",
  variable: "--spectral",
});

export const metadata: Metadata = {
  title: "BQ",
  description:
    "BQ - A studio that specializes in architectural design, urban development consulting, and educational projects for architects, urbanists, and developers.",
};

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
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
