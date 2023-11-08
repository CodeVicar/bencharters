import Link from "next/link";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <div className="relative bg-[#000]">
      <div className="relative h-80 overflow-hidden bg-gray-900 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <Image
          className="h-full w-full object-cover"
          src="/images/cta.jpeg"
          alt=""
          height={500}
          width={500}
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
              <stop stopColor="#4f0064" />
              <stop offset={1} stopColor="#4f0064" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base font-semibold leading-7 text-[#fff]">
            Transforming Your Spaces with Precision and Artistry
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#fff] sm:text-4xl">
            Ready to elevate the beauty of your home or business?
          </p>
          <p className="mt-6 text-base leading-7 text-[#fff]">
            Whether you're looking for expert painting services, intricate
            wallpapering, stunning wood flooring, floor renovation, captivating
            kitchen makeovers, or exquisite tiling, Bencharters is your trusted
            partner. Let's bring your vision to life through the art of painting
            and decorating.
          </p>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-10 lg:flex-shrink-0">
            <button className="bg-[#fff] text-[#fff] px-4 py-4 rounded-md">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-900"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="text-gray-900" href="tel:+1 (555) 234-5678">
                  +447859820088                  </a>
                </dd>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
