import localFont from "next/font/local";

import "./globals.css";

const myFont = localFont(
  {
    src: "../../public/fonts/FuturaPTLight.otf",
    display: "swap",
  },
  {
    src: "../../public/fonts/FuturaPTHevy.otf",
    display: "swap",
  },
);

export const metadata = {
  title: "Highend Visions",
  description:
    "Our boutique design agency excels in delivering personalized online experiences for high-end clients, ensuring elegance and functionality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        {children}
        </body>
    </html>
  );
}
