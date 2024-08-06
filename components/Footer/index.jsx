import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="border-t-2 border-t-colorGreen">
      <div className="customContainer">
        <div className="sectionPadding">
          <Image
            src={"/assets/Footer-HLE-Logo.png"}
            width={400}
            height={400}
            alt="healthy Lifestyle footer"
            className="m-auto"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-16 2xl:gap-32 mt-10">
            <p className="desc font-semibold">
              Stay connected for a healthier and happier you! Follow us for
              daily tips, guides, and inspiration on your wellness journey.
              Together, let&apos;s make every day a step towards a vibrant and
              fulfilling life.{" "}
            </p>

            <div>
              <h6 className="text-xl font-semibold mb-2">Additional links:</h6>
              <ul className="desc underline">
                <li>
                  <Link href={"/#aboutUs"}>About us</Link>
                </li>
                <li>
                  <Link href={"/terms-and-conditions"}>
                    Terms and conditions
                  </Link>
                </li>
                <li>
                  <Link href={"/privacy-policy"}>Privacy policy</Link>
                </li>
                {/* <li>
                  <Link href={"#"}>Contact us</Link>
                </li> */}
              </ul>
            </div>

            <div className="flex justify-center flex-col">
              <h6 className="text-xl font-semibold mb-4">Follow Us:</h6>
              <ul className="flex gap-4">
                <li>
                  <Link
                    href={"https://www.instagram.com/healthylifestyleedge/"}
                    target="_blank"
                    rel="noopener"
                  >
                    <Image
                      src={"/assets/Footer-Ig-logo.png"}
                      width={35}
                      height={35}
                      alt="healthy Lifestyle social"
                      className=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.facebook.com/share/SMKoxmQXMn1r1gZt/?mibextid=LQQJ4d"
                    }
                    target="_blank"
                    rel="noopener"
                  >
                    <Image
                      src={"/assets/Footer-fb-logo.png"}
                      width={35}
                      height={35}
                      alt="healthy Lifestyle social"
                      className=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.tiktok.com/@healthylifestyledge?_t=8lT1tBSX3Ye&_r=1"
                    }
                    target="_blank"
                    rel="noopener"
                  >
                    <Image
                      src={"/assets/Footer-tiktok-logo.png"}
                      width={35}
                      height={35}
                      alt="healthy Lifestyle social"
                      className=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://www.youtube.com/@HealthyLifestyleEdge"}
                    target="_blank"
                    rel="noopener"
                  >
                    <Image
                      src={"/assets/Footer-shorts-logo.png"}
                      width={35}
                      height={35}
                      alt="healthy Lifestyle social"
                      className=""
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
