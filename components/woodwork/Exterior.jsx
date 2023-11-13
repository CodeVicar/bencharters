"use client";
import { CheckIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const benefits = [
  "Over 20 years of experience in woodwork",
  "Specialists in Engineered and Wood Flooring",
  "Expert Cabinet Building tailored to your needs",
  "Precise Sanding for a smooth finish",
  "Exceptional Varnishing to enhance wood's natural beauty",
  "Wood Restoration to bring life back to worn-out wood",
  "Skilled in New Door Installation and Window Replacement",
  "Professional Skirting Board Installation",
  "Artistic Wooden Wall Paneling for unique interiors",
  "Committed to the highest industry standards",
];

const features = [
  {
    name: "Exterior Wall Painting",
    description:
      "Painting the exterior walls of homes, buildings, and other structures.",
  },
  {
    name: "Window Painting",
    description:
      "Refinishing and painting window frames to protect and enhance their appearance.",
  },
  {
    name: "Surface Preparation",
    description:
      "Properly preparing exterior surfaces, including cleaning and priming.",
  },
  {
    name: "Exterior Surface Restoration",
    description:
      "Restoring weathered or damaged exterior surfaces before painting.",
  },
  {
    name: "Window and Door Restoration",
    description:
      "Restoring old or damaged exterior doors and windows to their former glory.",
  },
];

export default function Example() {
  return (
    <div className="bg-gray-100">
      <div className="relative isolate overflow-hidden">
        {/* <img
          src="images/im.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        /> */}
        <div class="container  my-24 opacity-90 mx-auto md:px-6">
          <section class="mb-32 mt-32 bg-white opacity-70">
            <div className="bg-gray-900 py-24 sm:py-32">
              <div className="relative isolate">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                    <img
                      className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                      src="images/woody.jpeg"

                      alt=""
                    />
                    <div className="w-full flex-auto">
                      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Why Chooce Us{" "}
                      </h2>
                      <p className="mt-6 text-lg leading-8 text-gray-300">
                        we're dedicated to delivering top-notch woodwork
                        services. Here's why you should choose us:
                      </p>
                      <ul
                        role="list"
                        className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                      >
                        {benefits.map((benefit) => (
                          <li key={benefit} className="flex gap-x-3">
                            <CheckCircleIcon
                              className="h-7 w-5 flex-none"
                              aria-hidden="true"
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-10 flex">
                        <a
                          href="#"
                          className="text-sm font-bold leading-6 text-white "
                        >
                          +44 7859 820088 <span aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                  aria-hidden="true"
                >
                  <div
                    className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                    style={{
                      clipPath:
                        "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
