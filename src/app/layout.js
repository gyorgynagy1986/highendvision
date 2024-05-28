import localFont from "next/font/local";

import "./globals.css";

const myFont = localFont(
  {
    src: "../../public/fonts/FuturaCyrillicMedium.ttf",
    display: "swap",
  },
  {
    src: "../../public/fonts/FuturaCyrillicBold.ttf",
    display: "swap",
  },
  {
    src: "../../public/fonts/FuturaCyrillicBook.ttf",
    display: "swap",
  },
  {
    src: "../../public/fonts/FuturaCyrillicDemi.ttf",
    display: "swap",
  },
  {
    src: "../../public/fonts/FuturaCyrillicExtraBold.ttf",
    display: "swap",
  },
  {
    src: "../../public/fonts/FuturaCyrillicHeavy.ttf",
    display: "swap",
  },
  {
    src: "../../public/fonts/FuturaCyrillicLight.ttf",
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
      <body>{children}</body>
    </html>
  );
}
