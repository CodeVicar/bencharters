"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <div className="bg-[#29256a]">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-4 lg:w-full lg:max-w-2xl">
            {/* <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg> */}

            <div className="relative px-6 py-2 sm:py-40 lg:px-8 lg:py-20 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className=" sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-[#f7be00] ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <p>Be Creative , Be Diffrent</p>
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                  Transform Your Space{" "}
                  <span className="text-[#f7be00]">with Benchaters</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-100">
                  We specialize in painting and decorating to
                  bring your vision to life. Our services include interior and
                  exterior painting, wallpaper installation, wood flooring,
                  floor renovation, kitchen renovation, and expert tiling. With
                  a keen eye for detail and a commitment to quality, we turn
                  your space into a work of art.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-[#29256a] border-2 px-3.5 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-100"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="images/kitchen.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
