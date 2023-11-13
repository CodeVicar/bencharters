"use client";
import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Carousel } from "@material-tailwind/react";

const features = [
  {
    name: "Engineered Flooring",
    description:
      "Installation of engineered hardwood flooring for a durable and elegant look.",
  },
  {
    name: "Wood Flooring",
    description:
      "Installation of traditional hardwood flooring for timeless appeal.",
  },
  {
    name: "Cabinet Building",
    description:
      "Custom design and construction of kitchen and bathroom cabinets to maximize space and functionality.",
  },
  {
    name: "Sanding & Varnishing ",
    description:
      "Professional wood sanding services to prepare surfaces for finishing.",
  },
  // {
  //   name: "Varnishing",
  //   description:
  //     "Application of high-quality varnish to protect and enhance the natural beauty of wood.",
  // },
  {
    name: "Wood Restoration",
    description:
      "Restoring old or damaged wooden and fixtures to their original condition.",
  },
  {
    name: "New Door Installation",
    description:
      "Expert installation of new doors, including interior and exterior doors, for improved security and aesthetics.",
  },
  {
    name: "Window Replacement",
    description:
      "Removal of old windows and installation of new, energy-efficient windows to enhance comfort and curb appeal.",
  },
  // {
  //   name: "Skirting Board Installation",
  //   description:
  //     "Precision installation of skirting boards to enhance the aesthetics of interior spaces.",
  // },
  {
    name: "Wall Paneling",
    description:
      "Installation of wooden wall paneling to create a warm and inviting atmosphere.",
  },
  // Add more features as needed
];

export default function Services() {
  return (
    <section className="my-20 mx-120">
      <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="flex flex-wrap items-center">
          <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-6/12">
            {/* <img
                src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/012.jpg"
                alt="Trendy Pants and Shoes"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              /> */}

            <Carousel
              className="rounded-xl object-cover"
              style={{ height: "500px" }}
            >
              <img
                src="images/wood/wood.jpeg"
                alt="image 1"
                className="h-full w-full object-fill"
              />
          
              <img
                src="images/wood/Varnishing.jpeg"
                alt="image 3"
                className="h-full w-full object-fill"
              />
              <img
                src="images/wood/flatfloor.jpeg"
                alt="image 3"
                className="h-full w-full object-fill"
              />
              <img
                src="images/wood/window.jpeg"
                alt="image 3"
                className="h-full w-full object-fill"
              />
            </Carousel>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-6/12">
            <div className="px-6 py-12 md:px-12">
              <h2 className="mb-6 pb-2 text-4xl font-bold">
                Why is it so great?
              </h2>
              <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                neque iaculis malesuada. Aenean gravida magna orci, non
                efficitur est porta id. Donec magna diam.
              </p>

              <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {features.map((feature, index) => (
                  <div className="mb-6" key={index}>
                    <div className="flex items-center mb-2">
                      <CheckIcon className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100" />
                      <p className="font-bold text-neutral-900 dark:text-neutral-100">
                        {feature.name}
                      </p>
                    </div>
                    {/* <p className="text-neutral-500 dark:text-neutral-300">
                      {feature.description}
                    </p> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
