import React from "react";
import Image from "next/image";
import SectionTitle from "../layout/SectionTitle";
import CTAbutton from "../layout/CTAbutton";

const FreeBook = () => {
  return (
    <section className="bg-[url('/assets/bg1.webp')]">
      <figure className="mb-0">
        <Image
          src={"/assets/wave3.png"}
          width={900}
          height={900}
          alt="health meal"
          className="w-full h-full"
        />
      </figure>
      <div className="customContainer">
        <div className="sectionPadding flex flex-wrap items-center justify-around gap-4 md:gap-8 xl:gap-16">
          <div className="w-full md:w-[47%] xl:w-[40%]">
            <Image
              src={"/assets/Page6-Cook-book.png"}
              width={500}
              height={500}
              alt="health meal"
              className="ml-auto mr-auto md:mr-0"
            />
          </div>
          <div className="w-full md:w-[47%] xl:w-[40%] bg-white p-8 text-center shadow-[-3px_4px_7px_0px_rgb(189,223,227)] rounded-md">
            <SectionTitle text={"Get Our FREE Cook Book"} />
            <p className="desc mt-4 lg:mt-10">
              Let&apos;s take the first step together. Download your 7 Day Meal
              Plan for Weight Loss and begin your journey towards a more
              vibrant, energized, and confident version of yourself. Your
              wellness adventure awaits. Let&apos;s make it happen!
            </p>

            <div className="mt-10 flex justify-center">
              <CTAbutton
                text={"Download Meal Plan"}
                link={"https://www.healthylifestyleedge.com/weightlossmealplan"}
              />
            </div>
          </div>
        </div>
      </div>

      <figure className="mb-0">
        <Image
          src={"/assets/wave4.png"}
          width={900}
          height={900}
          alt="health meal"
          className="w-full h-full"
        />
      </figure>
    </section>
  );
};

export default FreeBook;
