import localFont from "next/font/local";

import "./globals.css";

const myFont = localFont(
  {
    src: "../../public/fonts/_.10879-webfont.woff",
    display: "swap",
  },
  {
    src: "../../public/fonts/_.10884-webfont.woff",
    display: "swap",
  },
  {
    src: "../../public/fonts/_.15586-webfont.woff",
    display: "swap",
  },
  {
    src: "../../public/fonts/_.15587-webfont.woff",
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
