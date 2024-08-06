import React from "react";
import SectionTitle from "../layout/SectionTitle";
import { blogData } from "@/lib/blogData";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const Blog = ({ pageBlog }) => {
  return (
    <section className="bg-colorGrey">
      <div className="customContainer sectionPadding">
        <SectionTitle text={"Our Blogs"} className={"text-center"} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          {pageBlog
            ? blogData?.map((item, index) => (
                <Link
                  href={`/blogs/${item.url}`}
                  key={index}
                  className="transition ease-in-out group bg-white p-4 hover:shadow-md"
                >
                  <figure>
                    <Image
                      src={item.featureImage}
                      width={500}
                      height={500}
                      alt="healthy Lifestyle Blog"
                      className="w-full h-full object-cover"
                    />
                  </figure>

                  <div className="mt-4">
                    <h3 className="desc text-black group-hover:text-colorRedLight font-semibold">
                      {item.title}
                    </h3>
                    <p className="desc my-2">{item.SubDescription}...</p>
                    <span className="transition ease-in-out text-end flex items-center gap-2 text-lg text-black group-hover:text-colorRedLight font-semibold group-hover:underline w-fit ml-auto">
                      Continue Reading <FaAngleRight />
                    </span>
                  </div>
                </Link>
              ))
            : blogData?.slice(0, 3)?.map((item, index) => (
                <Link
                  href={`/blogs/${item.url}`}
                  key={index}
                  className="transition ease-in-out bg-white p-4 group hover:shadow-md"
                >
                  <figure>
                    <Image
                      src={item.featureImage}
                      width={500}
                      height={500}
                      alt="healthy Lifestyle Blog"
                      className="w-full h-full object-cover"
                    />
                  </figure>

                  <div className="mt-4">
                    <h3 className="desc text-black group-hover:text-colorRedLight font-semibold">
                      {item.title}
                    </h3>
                    <p className="desc my-2">{item.SubDescription}...</p>
                    <span className="transition ease-in-out text-end flex items-center gap-2 text-lg text-black group-hover:text-colorRedLight font-semibold group-hover:underline w-fit ml-auto">
                      Continue Reading <FaAngleRight />
                    </span>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
