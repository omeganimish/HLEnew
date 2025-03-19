import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CTAbutton from "@/components/layout/CTAbutton";
import Link from "next/link";
import { FaRegFaceSadCry } from "react-icons/fa6";

export default function NotFound() {
  return (
    <main>
      <Header />
      <div className="customContainer">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center py-4">
          <div className="mb-6">
            <FaRegFaceSadCry size={100} color="#bc2d52" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Sorry, the page you&apos;re looking for doesn&apos;t exist.
          </p>

          <CTAbutton text={"  Return Home"} link={"/"} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
