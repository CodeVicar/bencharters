import React from "react";
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    name: "Painting And Decorating",
    imageUrl: "/images/paint.webp",
    description:
      "Enhance the beauty of your spaces with our expert painting and decorating services. Our skilled team delivers top-notch quality and precision, ensuring that every project is a testament to our commitment to excellence.",
    buttonText: "Learn More",
    icon: PhoneIcon,
  },
  {
    name: "Wood Work",
    imageUrl: "/images/woodflooring.jpeg",
    description:
      "Revitalize your interiors with our wood flooring services. Our experts are dedicated to preserving the beauty and integrity of your spaces, from cleaning to repointing, trust us to rejuvenate your floors.",
    buttonText: "Get Started",
    icon: NewspaperIcon,
  },

  {
    name: "Kitchen Renovation",
    imageUrl: "/images/kitchenrenovation.webp",
    description:
      "Transform your kitchen into the heart of your home. Whether you're looking for modern upgrades or restoring historic charm, our team has the expertise to bring your dream kitchen to life.",
    buttonText: "Discover",
    icon: LifebuoyIcon,
  },
  {
    name: "Tiles",
    imageUrl: "/images/tiling.webp",
    description:
      "Preserve the beauty and integrity of your spaces with our tiling services. From cleaning to repointing, trust our experts to rejuvenate your building's exterior and interiors.",
    buttonText: "Get Started",
    icon: NewspaperIcon,
  },
];


export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      {/* <Image
        src="/images/wall.webp"
        alt="Brickwork Background"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        height={500}
        width={500}
      /> */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  lg:mx-0">
          <h2 className="text-4xl text-center font-bold tracking-tight text-[#000] sm:text-6xl">
            Our Services
          </h2>
       
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="rounded overflow-hidden shadow-lg bg-white p-6 ring-1 ring-inset  ring-[#daba53]/50 mb-24 hover:ring-[#daba53]/90"
            >
              <Image
                src={card.imageUrl}
                alt={card.name}
                className="h-[200px] w-full object-cover"
                height={500}
                width={500}
              />
              <div className="p-4">
                <h3 className="font-bold text-[#000] mb-2">
                  {card.name}
                </h3>
                <p className="text-gray-900 mb-4">{card.description}</p>
                <button className="bg-[#000] text-[#fff] px-4 py-2 rounded-md">
                  <Link href={`/`}>
                    <p className=" text-[#fff] px-4 py-2 rounded-md">
                      {card.buttonText}
                    </p>
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
