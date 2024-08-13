import "./globals.css";
import "./animation.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Montserrat } from "next/font/google";
import GtagScript from "@/components/GtagScript";

export const metadata = {
  title:
    "Your Source for Healthy Living Essentials: Nutrition, Fitness, and Wellness",
  description:
    "Discover HLE, your ultimate destination for healthy living essentials. Explore tips on nutrition, fitness, weight loss, and wellness to fuel a balanced lifestyle. Shop top-rated supplements, enjoy nutritious recipes, and embrace a healthier you today.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <meta
          name="google-site-verification"
          content="kHpG6pSuURnAiXVrsSWn-SdxRmwfNrczdE1PqjiGDgk"
        />
      </head>
      <body>
        {children}
        <GtagScript />
      </body>
    </html>
  );
}
