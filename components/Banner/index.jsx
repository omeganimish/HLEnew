"use client";
import React, { useEffect, useState } from "react";
import CTAbutton from "../layout/CTAbutton";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Banner = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <section ref={ref} className="bg-white relative">
      <div className="bg-[url('/assets/bg1.webp')] bg-no-repeat bg-cover">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div
              className={`py-[8%] pl-[3.33333%] pr-[3.33333%] md:pr-0 md:pl-[16.33333%]`}
            >
              <h1 className="text-[22px] lg:text-[29px] xl:text-[40px] 2xl:text-[52px] leading-[32px] lg:leading-[38px] xl:leading-[50px] 2xl:leading-[62px] text-black font-bold">
                Healthy Lifestyle: Your Path to Wellness
              </h1>

              <p className="text-[16px] 2xl:text-[20px] pt-4 2xl:pt-8 leading-[25px] 2xl:leading-[28px] font-medium">
                Join us on this journey and discover how supplements can
                transform your health, effectively.{" "}
              </p>

              <div className="mt-9">
                <CTAbutton
                  text={"Check Official Website"}
                  link={"http://bit.ly/LeanbiomeWeightloss"}
                />
              </div>
            </div>

            <div className="flex justify-end items-center pb-4 md:pb-0">
              <Image
                src={"/assets/revise/15.webp"}
                width={500}
                height={500}
                alt="health meal"
                className={`w-[50%] mx-auto block md:hidden`}
              />
              <Image
                src={"/assets/revise/ban.webp"}
                width={500}
                height={500}
                alt="health meal"
                className="w-[45%] md:w-[75%] 2xl:w-[80%] h-full ml-auto md:ml-[5%] hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[-9%] hidden md:block py-5">
        <Image
          src={"/assets/Page1-red-dumbell.webp"}
          width={500}
          height={500}
          alt="health meal"
          className={` w-[40%] md:w-[20%] ml-auto mr-[30%]`}
        />
      </div>

      {/* <figure className="mb-0">
        <Image
          src={"/assets/Page1-strawberry.png"}
          width={250}
          height={250}
          alt="health meal"
          className="absolute top-0 right-0 w-[21%] "
        />
      </figure> */}
    </section>
  );
};

export default Banner;
