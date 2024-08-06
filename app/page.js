import Banner from "@/components/Banner";
import Blog from "@/components/Blogs";
import Footer from "@/components/Footer";
import FreeBook from "@/components/FreeBook";
import Header from "@/components/Header";
import KnowBody from "@/components/KnowBody";
import MealPlan from "@/components/MealPlan";
import Testimonial from "@/components/Testimonial";
import WeightLoss from "@/components/WeightLoss";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="relative">
        <span
          id="aboutUs"
          className="absolute w-full block top-[-12%] p-[3%]"
        ></span>
        <Banner />
      </div>

      <div className="relative">
        <span
          id="meal-plan"
          className="absolute w-full block top-[-12%] p-[3%]"
        ></span>
        <MealPlan />
      </div>

      <WeightLoss />

      <div className="relative">
        <span
          id="BMI"
          className="absolute w-full block top-[-10%] p-[3%]"
        ></span>
        <KnowBody />
      </div>

      <div className="relative">
        <span
          id="testimonial"
          className="absolute w-full block top-[-12%] p-[3%]"
        ></span>
        <Testimonial />
      </div>
      <FreeBook />
      <Blog />
      <Footer />
    </main>
  );
}
