import localFont from "next/font/local";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${apercuPro.variable} ${spectral.variable} antialiased max-w-[100vw] overflow-x-hidden max-h-screen overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
