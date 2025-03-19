"use client";
import { blogData } from "@/lib/blogData";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ShareContainer from "./shareContainer";
import FAQSection from "@/components/faqSection";

const BlogDetail = ({ url }) => {
  const [data, setData] = useState();
  const [relatedBlog, setRelatedBlog] = useState();

  useEffect(() => {
    const fetchData = () => {
      const result = blogData?.filter(checkBlogs);

      //   setData(result[0]);

      function checkBlogs(list) {
        return list?.url === url ? setData(list) : "";
      }
    };

    fetchData();
  }, [url]);

  return (
    <section className="bg-colorGrey pt-[2%] pb-[1%]">
      <div className="customContainer">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 2xl:gap-16">
          <div className="flex-[1.5] flex flex-col  gap-2">
            <figure className="h-[25vh] md:h-[75vh]">
              <Image
                src={data?.featureImage}
                width={1024}
                height={700}
                alt="feature image "
                className="w-full h-full object-cover object-center"
              />
            </figure>

            <div className="">
              <h1
                className={
                  "text-[26px] 2xl:text-[36px] leading-[36px] 2xl:leading-[40px] text-colorRedLight font-bold"
                }
              >
                {data?.title}
              </h1>

              <div className="mt-2 md:mt-8 detailDesWrap">
                {data?.description}
              </div>
            </div>

            {data?.faq && <FAQSection data={data?.faq} />}

            <ShareContainer data={data} />
          </div>

          <div className="flex-[0.5] flex flex-col gap-9 md:sticky  xl-top-0 bottom-1 h-full mb-8 md:mb-0">
            {blogData?.map(
              (item, index) =>
                item.url != url && (
                  <Link
                    href={`/blogs/${item?.url}`}
                    key={index}
                    className="bg-white p-4 rounded-xl"
                  >
                    <figure className="">
                      <Image
                        src={item?.featureImage}
                        width={500}
                        height={500}
                        alt="feature image"
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <div className="mt-4">
                      <h3 className="desc text-colorRedLight font-semibold">
                        {item?.title}
                      </h3>
                      <p className="desc my-2">{item?.SubDescription}</p>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
