import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/layout/SectionTitle";
import Link from "next/link";
import React from "react";
import "../blogs/style.css";

const TermsConditions = () => {
  return (
    <div>
      <Header />
      <div className="customContainer my-[2%] ">
        <SectionTitle
          text={"Our Terms and Conditions"}
          className={"text-center text-colorRed mb-3"}
        />

        <h6 className="desc font-semibold mt-4">
          Welcome to{" "}
          <Link href={"https://www.healthylifestyleedge.com/"}>
            healthylifestyleedge.com/!
          </Link>
        </h6>

        <div className="detailDesWrap">
          <p className="">
            These terms and conditions outline the rules and regulations for the
            use of healthy life style edge&apos;s Website, located at{" "}
            <Link
              href={"https://www.healthylifestyleedge.com/"}
              className="underline"
            >
              healthylifestyleedge.com/!
            </Link>
            .
          </p>

          <p>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use{" "}
            <Link
              href={"https://www.healthylifestyleedge.com/"}
              className="underline"
            >
              healthylifestyleedge.com/{" "}
            </Link>
            if you do not agree to take all of the terms and conditions stated
            on this page.
          </p>
          <p>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to
            you, the person log on this website and compliant to the
            Company&apos;s terms and conditions. &quot;The Company&quot;,
            &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and
            &quot;Us&quot;, refers to our Company. &quot;Party&quot;,
            &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client
            and ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client&apos;s needs in respect of
            provision of the Company&apos;s stated services, in accordance with
            and subject to, prevailing law of as. Any use of the above
            terminology or other words in the singular, plural, capitalization
            and/or he/she or they, are taken as interchangeable and therefore as
            referring to same.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
