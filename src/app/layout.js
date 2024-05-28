// import { Futura } from "next/font/google";
import "./globals.css";

// const futura = Futura({ subsets: ["latin"] });

export const metadata = {
  title: "Highend Vision",
  description: "Our boutique design agency excels in delivering personalized online experiences for high-end clients, ensuring elegance and functionality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
