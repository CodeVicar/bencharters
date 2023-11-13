import React from "react";
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

const cards = [
  {
    name: "Preparation",
    description:
      "We have a  step-by-step process to keep disruption to the absolute minimum.",
  },
  {
    name: "Application",
    description:
      "Our procedures and equipment are all designed to deliver the perfect finish.",
  },
  {
    name: "Finishing",
    description:
      "A single room, kitchen or entire house, our attention to detail is second to none.",
  },
];

const About = () => {
  return (
    <div>
      {/* about intro */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-[#29256a]">
              Welcome to Bencharters
            </p>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-[#29256a] sm:text-4xl">
              Your Premier Painting and Decorating Experts in London
            </h3>
            <div className="mt-10  max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-900 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  At Bencharters, we've been your dedicated team of painting and
                  decorating experts, serving both residential and commercial
                  clients for over 30 years. Our comprehensive services cover
                  interior and exterior painting, woodwork services, kitchen
                  renovations, and expert tiling. We pride ourselves on
                  delivering top-notch craftsmanship in a professional,
                  courteous, and friendly manner.
                </p>
                <p className="mt-8">
                  Our commitment to excellence is evident in every stroke of
                  paint and every design detail we handle. Whether it's
                  intricate wallpapering, hardwood flooring, or revitalizing
                  your spaces with precision, we're here to make your vision a
                  reality. Our affordable pricing and a strong legacy of
                  creativity set us apart. If you have any questions or need a
                  free quote for our London-based services, feel free to reach
                  out to us. Your trust in our painting and decorating expertise
                  is our greatest satisfaction.
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                {cards.map((card) => (
                  <div
                    key={card.name}
                    className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-insetring-1 ring-[#daba53]/50  hover:ring-[#daba53]/90"
                  >
                    <div className="text-base leading-7">
                      <h3 className="font-semibold text-[#29256a]">
                        {card.name}
                      </h3>
                      <p className="mt-2 text-gray-900">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
