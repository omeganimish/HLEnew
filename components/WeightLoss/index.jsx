import React from "react";
import SectionTitle from "../layout/SectionTitle";
import Image from "next/image";
import CTAbutton from "../layout/CTAbutton";

const WeightLoss = () => {
  return (
    <section className="bg-[url('/assets/bg1.webp')] bg-no-repeat bg-cover relative overflow-hidden">
      <figure className="mb-0">
        <Image
          src={"/assets/wave1.png"}
          width={900}
          height={900}
          alt="health meal"
          className="w-full h-full"
        />
      </figure>

      <div className="customContainer md:!pr-0 relative">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col pb-[4%] md:pb-[2%] col-span-2">
            <div className="flex justify-between">
              <Image
                src={"/assets/Page2-Raspberry.png"}
                width={400}
                height={400}
                alt="health meal"
                className="hidden sm:block w-[25%] ml-[-10%] mt-[-13%] object-contain"
              />
              <SectionTitle
                text={"Our 7-Day Meal Plan for Weight Loss"}
                className={
                  "text-center lg:absolute mx-auto w-full py-6 pr-[8.33333%]"
                }
              />
            </div>

            <div className="flex-1 order-2 md:order-none mt-4 md:mt-0">
              <h4 className="text-[20px] 2xl:text-[22px] leading-relaxed font-semibold mb-4 text-colorRedLight">
                What&apos;s Included
              </h4>
              <p className="desc">
                Each day of the plan includes breakfast, snacks, lunch, dinner,
                and even dessert options. Enjoy a variety of nutrient-dense,
                flavorful meals to keep you on track!
              </p>

              <div className="flex justify-between gap-3">
                <div className="w-full md:w-[50%]">
                  <h4 className="text-[20px] 2xl:text-[22px] leading-relaxed font-semibold mb-4 text-colorRedLight mt-6">
                    Key Features
                  </h4>
                  <ul className="desc">
                    <li>- Balanced and Delicious Meals</li>
                    <li>- Simple and Practical Recipes</li>
                    <li>- Vegan Alternatives Included</li>
                    <li>- Easy-to-Follow Grocery Lists</li>
                  </ul>
                </div>

                <div className="w-full md:w-[50%]">
                  <h4 className="text-[20px] 2xl:text-[22px] leading-relaxed font-semibold mb-4 text-colorRedLight mt-6">
                    Reminder
                  </h4>
                  <p className="desc">
                    Remember to adjust portion sizes based on your specific
                    dietary needs. We understand everyone&apos;s journey is
                    unique, and this plan can be tailored to fit your individual
                    goals and preferences.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <CTAbutton
                  text={"Download Meal Plan"}
                  link={
                    "https://www.healthylifestyleedge.com/weightlossmealplan"
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <Image
              src={"/assets/Page3-Smoothy Bowl.png"}
              width={500}
              height={500}
              alt="health meal"
              className="hidden md:block w-full lg:w-[65%] ml-auto"
            />
          </div>
        </div>
      </div>

      {/* overlay images  */}
      <figure className="mb-0 absolute top-2 xl:top-0 left-10">
        {/* <Image
          src={"/assets/Page2-Raspberry.png"}
          width={400}
          height={400}
          alt="health meal"
          className="hidden sm:block w-[30%] md:w-[30%] xl:w-[50%] 2xl:w-[70%] mr-auto"
        /> */}
      </figure>
      {/* <figure className="mb-0 absolute top-10 right-[-4%]">
        <Image
          src={"/assets/Page3-Smoothy Bowl.png"}
          width={500}
          height={500}
          alt="health meal"
          className="hidden md:block w-[25%] md:w-[25%] lg:w-[45%] xl:w-[65%] 2xl:w-[70%] ml-auto"
        />
      </figure> */}

      {/* overlay images  */}

      <figure className="mb-0">
        <Image
          src={"/assets/wave2.png"}
          width={900}
          height={900}
          alt="health meal"
          className="w-full h-full"
        />
      </figure>
    </section>
  );
};

export default WeightLoss;
