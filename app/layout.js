import "./globals.css";
import "./animation.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Montserrat } from "next/font/google";
import GtagScript from "@/components/GtagScript";

export const metadata = {
  title: "Healthy Lifestyle Edge",
  description: "Healthy Lifestyle Edge",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        {children}
        <GtagScript />
      </body>
    </html>
  );
}
