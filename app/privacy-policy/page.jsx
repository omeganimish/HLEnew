import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/layout/SectionTitle";
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div className="customContainer my-[2%] ">
        <SectionTitle
          text={"Our Privacy Policy"}
          className={"text-center text-colorRed mb-3"}
        />

        <div className="detailDesWrap">
          <p className="">
            {` This privacy notice for healthy life style edge ("we," "us," or
            "our"), describes how and why we might collect, store, use, and/or
            share ("process") your information when you use our services
            ("Services"), such as when you:`}
          </p>
          <p className="">
            Visit our website at{" "}
            <Link
              href={"https://www.healthylifestyleedge.com/"}
              className="underline"
            >
              https://www.healthylifestyleedge.com/
            </Link>{" "}
            , or any website of ours that links to this privacy notice.
          </p>

          <p className="">
            Engage with us in other related ways, including any sales,
            marketing, or events.
          </p>
          <p className="">
            Questions or concerns? Reading this privacy notice will help you
            understand your privacy rights and choices. If you do not agree with
            our policies and practices, please do not use our Services. If you
            still have any questions or concerns, please contact us at{" "}
            <Link href={"https://www.info@healthylifestyleedge.com"}>
              info@healthylifestyleedge.com
            </Link>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
