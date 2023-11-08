import React from "react";
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

const cards = [
  {
    name: "Preparation",
    description: "We have a  step-by-step process to keep disruption to the absolute minimum."
  },
  {
    name: "Application",
    description: "Our procedures and equipment are all designed to deliver the perfect finish." },
  {
    name: "Finishing",
    description: "A single room, kitchen or entire house, our attention to detail is second to none."
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
              About Us{" "}
            </p>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-[#29256a] sm:text-4xl">
              Our Passion for Excellence
            </h3>
            <div className="mt-10  max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-900 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  At Bencharters, we are your dedicated team of painting and
                  decorating experts, bringing life and beauty to your living
                  spaces. With a rich legacy of creativity and precision, we've
                  been transforming homes and businesses for ages.
                </p>
                <p className="mt-8">
                  Our passion for excellence is the cornerstone of our work. We
                  believe that every stroke of paint and every detail of design
                  should reflect our commitment to perfection. From intricate
                  wallpapering to hardwood flooring, we handle every project
                  with care and craftsmanship.
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
