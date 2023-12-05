"use client";
import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Carousel } from "@material-tailwind/react";

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
    name: "Restoration",
    description:
      "Restoring weathered or damaged exterior surfaces before painting.",
  },
  {
    name: "Window and Door Restoration",
    description:
      "Restoring old or damaged exterior doors and windows to their former glory.",
  },
];

export default function Services() {
  return (
    <section className="my-20 mx- bg-white shadow-lg">
      <div className="block px-6">
      <div className="flex  px-6 max-w-8 flex-col justify-center items-center">
          <h2 className="mb-6 pb-2 text-4xl font-bold">
            Exterior Painting and Decorating
          </h2>
          <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
            Transform your property's exterior with our expert painting and
            decorating services. From exterior wall painting to window
            refinishing, we enhance and protect your surfaces.
          </p>
        </div>
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
                src="images/paint/windowpainting.jpeg"
                alt="image 2"
                className="h-full w-full object-fill"
                />
              <img
                src="images/paint/exteriorwall.jpeg"
                alt="image 3"
                className="h-full w-full object-cover"
              />
           
            </Carousel>
          </div>
          <div className="w-full shrink-0  grow-0 basis-auto lg:w-6/12 xl:w-6/12">
            <div className="px-6 py-12  md:px-12">
              <h2 className="mb-6 pb-2 text-4xl font-bold">
                Why is it so great?
              </h2>
              <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                We believe in the power of quality craftsmanship and attention
                to detail, ensuring that every project we undertake
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
                    <p className="text-neutral-500 dark:text-neutral-300">
                      {feature.description}
                    </p>
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
