import React from "react";
import SectionTitle from "../layout/SectionTitle";
import Image from "next/image";

const KnowBody = () => {
  return (
    <section className="relative">
      <div className="customContainer lg:!pl-0 pt-[2%] md:pt-0 pb-[2%] md:pb-0">
        <SectionTitle
          text={"Know Your Body"}
          className={"text-center lg:absolute w-full top-[5%]"}
        />
        <div className="flex">
          <div className="hidden lg:block w-[45%] lg:w-[50%] xl:w-[55%]">
            <Image
              src={"/assets/revise/Knowyourbody.webp"}
              width={900}
              height={500}
              alt="health meal"
              className="w-full h-full object-fill"
            />
          </div>

          <div className="w-[100%] lg:w-[65%] 2xl:w-[68%] pb-[2%] pt-[2%] md:pt-[10%] 2xl:pt-[9%]">
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <div>
                  <h4 className="text-[20px] 2xl:text-[22px] leading-relaxed font-semibold mb-4 text-colorRedLight">
                    Healthy Weight Ranges for Men:
                  </h4>
                  <div className="desc flex flex-col gap-2">
                    <div>
                      <p>Age Group: 18-40 years</p>
                      <ul className="list-disc pl-8">
                        <li>Ideal Weight Range: 145-185 lbs (65-84 kg)</li>
                      </ul>
                    </div>
                    <div>
                      <p>Age Group: 41-60 years</p>
                      <ul className="list-disc pl-8">
                        <li>Ideal Weight Range: 150-190 lbs (68-86 kg)</li>
                      </ul>
                    </div>
                    <div>
                      <p>Age Group: 61 years and older</p>
                      <ul className="list-disc pl-8">
                        <li>Ideal Weight Range: 155-195 lbs (70-88 kg)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-9 flex justify-end">
                  <div>
                    <h4 className="text-[20px] 2xl:text-[22px] leading-relaxed font-semibold mb-4 text-colorRedLight">
                      Healthy Weight Ranges for Women:
                    </h4>
                    <div className="desc flex flex-col gap-2">
                      <div>
                        <p>Age Group: 18-40 years</p>
                        <ul className="list-disc pl-8">
                          <li>Ideal Weight Range: 110-145 lbs (50-66 kg)</li>
                        </ul>
                      </div>
                      <div>
                        <p>Age Group: 41-60 years</p>
                        <ul className="list-disc pl-8">
                          <li>Ideal Weight Range: 115-155 lbs (52-70 kg)</li>
                        </ul>
                      </div>
                      <div>
                        <p>Age Group: 61 years and older</p>
                        <ul className="list-disc pl-8">
                          <li>Ideal Weight Range: 120-160 lbs (54-73 kg)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ml-[2%]">
                <Image
                  src={"/assets/revise/14.png"}
                  width={250}
                  height={250}
                  alt="health meal"
                  className=""
                />
                <Image
                  src={"/assets/revise/4.webp"}
                  width={250}
                  height={250}
                  alt="health meal"
                  className=""
                />
              </div>
            </div>

            <p className="desc italic text-center mt-12 font-semibold">
              This Body Mass Index (BMI) is a commonly used tool to assess
              weight in relation to height, but it has limitations, especially
              for individuals with high muscle mass.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowBody;
