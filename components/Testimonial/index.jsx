"use client";
import React, { useState } from "react";
import SectionTitle from "../layout/SectionTitle";
import Slider from "react-slick";
import { testimonial } from "@/lib/testimonial";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Testimonial = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div {...props}>
      <FaAngleLeft />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div {...props}>
      <FaAngleRight />
    </div>
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    className: "center",
    dots: false,
    centerMode: true,
    // infinite: true,
    centerPadding: "5px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    initialSlide: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    /*   beforeChange: function (index) {
      
      setActiveIndex(index);
    }, */
    afterChange: function (index) {
      setCurrentIndex(index);
    },
    swipeToSlide: true,
  };

  const displayedSlides = settings.slidesToShow;
  const totalSlides = testimonial?.length ?? 0;

  return (
    <section className="relative bg-colorGrey pt-[2%] pb-[14%] sm:pb-[8%] 973:pb-[5%] ">
      <div className="customContainer ">
        <SectionTitle
          text={"What People are Saying"}
          className={"text-center mb-8"}
        />
        <Slider {...settings} className="sliderWrap">
          {testimonial?.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-white px-4 py-[9%] min-h-[250px] md:min-h-[222px] lg:min-h-[257px]  xl:min-h-[263px] flex flex-col justify-center rounded-2xl">
                <p className="desc">{item.text}</p>

                <p className="desc text-colorRedLight font-semibold mt-4">
                  {item.author}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        {/* <p className="slide-count">
          Displaying {displayedSlides} of {totalSlides} slides
        </p> */}
      </div>
    </section>
  );
};

export default Testimonial;
