import React from "react";
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

const cards = [
  {
    name: "Sales",
    description:
      "A really skilled, honest and professional team who deliver superb results on time and in budget.",
  },
  {
    name: "Technical Support",
    description:
      "Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.",
  },
  {
    name: "Media Inquiries",
    description:
      "Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.",
  },
];

const About = () => {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden">
        <img
          src="images/im.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        {/* about intro */}
        <div className="bg-white  py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
             
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-[#29256a] sm:text-4xl">
                Our Passion for Excellence
              </h3>
              <div className="mt-10  max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-900 lg:max-w-none lg:grid-cols-2">
                <div>
                  <p>
                    At Bencharters, we are your dedicated team of painting and
                    decorating experts, bringing life and beauty to your living
                    spaces. With a rich legacy of creativity and precision,
                    we've been transforming homes and businesses for ages.
                  </p>
                  <p className="mt-8">
                    Our passion for excellence is the cornerstone of our work.
                    We believe that every stroke of paint and every detail of
                    design should reflect our commitment to perfection. From
                    intricate wallpapering to hardwood flooring, we handle every
                    project with care and craftsmanship.
                  </p>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
