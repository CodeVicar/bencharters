import Service from "@/components/painting/Service";
import Hero from "@/components/painting/Hero";
import Interior from "@/components/painting/Interior";
import Interior1 from "@/components/painting/Interior1";

import Exterior from "@/components/painting/Exterior";

import React from "react";
import { ChevronRightIcon, PhoneIcon} from "@heroicons/react/20/solid";

import Link from "next/link";
import Image from "next/image";

const WebDesignPage = () => {
  return (
    <div className="bg-[#fff]">
      <Hero />
      {/* interior section */}
      <Interior />
      <Exterior />

      {/* cta section */}
      <section className="relative bg-[#fff]">
        <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="images/cta1.jpeg"
            alt=""
          />
          <svg
            viewBox="0 0 926 676"
            aria-hidden="true"
            className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
          >
            <path
              fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
              fillOpacity=".4"
              d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            />
            <defs>
              <linearGradient
                id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                x1="926.392"
                x2="-109.635"
                y1=".176"
                y2="321.024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Ready to Transform Your Space?{" "}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us for a Free Quote Today
            </p>

            <div className="mt-10 flex items-center gap-x-6 lg:mt-10 lg:flex-shrink-0">
              <button className=" border-solid border-2 border-gray-100 text-[#fff] px-4 py-3 rounded-md">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-gray-900"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a className="text-gray-900" href="tel:+447859820088">
                      +447859820088{" "}
                    </a>
                  </dd>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesignPage;
