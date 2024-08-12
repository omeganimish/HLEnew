import React from "react";
import SectionTitle from "../layout/SectionTitle";
import Image from "next/image";
import CTAbutton from "../layout/CTAbutton";

const MealPlan = () => {
  return (
    <section className="py-[6%] md:py-2 relative ">
      <div className="">
        <SectionTitle
          text={"Taste the Healthy Meals"}
          className={"text-center"}
        />

        <div className="flex">
          <div className="w-full md:w-[20%] hidden md:block">
            <Image
              src={"/assets/revise/mealPlan.png"}
              width={1024}
              height={900}
              alt="health meal"
              className=" w-full h-full"
            />
          </div>

          <div className="w-full md:w-[80%]  pl-[3.33333%] pr-[3.33333%] md:pl-8 md:pr-[8.33333%]">
            <div className="flex gap-4 items-center">
              <div className="desc col-span-2">
                Welcome to Healthy Lifestyle, your ultimate destination for
                embracing a healthier way of living. At Healthy Lifestyle, we
                believe that true wellness encompasses not just physical health,
                but also mental and emotional well-being.
              </div>

              <div className="lg:mt-[-5%]">
                <Image
                  src={"/assets/revise/kowyourbody2.webp"}
                  width={400}
                  height={400}
                  alt="health meal"
                  className="m-auto md:m-0 w-full md:w-auto"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 ">
              <div className="w-fit">
                <Image
                  src={"/assets/revise/mealPlan2.png"}
                  width={400}
                  height={400}
                  alt="health meal"
                  className="m-auto w-full md:w-auto"
                />
              </div>

              <div className="desc">
                Our mission is to provide you with the tools, resources, and
                inspiration you need to embark on a journey toward a happier,
                healthier you. By choosing nutritious foods and making mindful
                decisions about your health, you fuel your body with the
                essential nutrients it needs to function at its best.
              </div>
            </div>

            <p className="desc mt-4">
              Download our customized meal plan today and start your journey to
              better health!
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <CTAbutton
          text={"Download Meal Plan"}
          link={"https://mbekundep.systeme.io/weightlossmealplan"}
        />
      </div>

      {/* <figure className="mb-0 absolute top-0 left-0 lg:left-[2%] ">
        <Image
          src={"/assets/Page2-Blueberry.png"}
          width={350}
          height={350}
          alt="health meal"
          className="hidden sm:block w-[30%] md:w-[50%] lg:w-[85%]"
        />
      </figure> */}
      {/* 
      <figure className="mb-0 absolute bottom-0 right-0 lg:right-10 ">
        <Image
          src={"/assets/Page2-Raspberry.png"}
          width={400}
          height={400}
          alt="health meal"
          className="hidden sm:block w-[30%] md:w-[50%] ml-auto"
        />
      </figure> */}
    </section>
  );
};

export default MealPlan;
