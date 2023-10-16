import Link from "next/link";
import { useState } from 'react';

import { Carousel } from "@material-tailwind/react";
export default function About() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (imgSrc) => {
    setModalImage(imgSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const serviceList = [
    {
      title: "New Builds",
      description:
        "Trust HMB for constructing solid, durable, and aesthetically pleasing new structures.",
      imgSrc1: "images/newbuild/newbuild1.jpeg",
      imgSrc2: "images/newbuild/newbuild2.jpeg",
      imgSrc3: "images/newbuild/newbuild3.jpeg",

      list: [
        "Foundation Setting",
        "Wall Construction",
        "Roof Integration",
        "Interior Brick Design",
      ],
      bgColor: "bg-black/80",
      textColor: "text-white",
    },
    {
      title: "Extensions",
      description: "Expand your existing structures seamlessly.",
      imgSrc1: "images/extention/extention.jpeg",
      imgSrc2: "images/extention/extention1.jpeg",
      imgSrc3: "images/extention/extention3.jpeg",

      list: [
        "Single-story Extensions",
        "Multi-story Extensions",
        "Garage Extensions",
      ],
      textColor: "white-100",
    },
    {
      title: "Garden Walls",
      description:
        "Elevate your garden's aesthetics with our premium brickwork solutions.",
      imgSrc1: "images/gardenwall/gardenwall.jpeg",
      imgSrc2: "images/gardenwall/gardenwall1.jpeg",
      imgSrc3: "images/gardenwall/gardenwall2.jpeg",

      list: ["Boundary Walls", "Decorative Garden Walls", "Retaining Walls"],
      bgColor: "bg-yellow-100",
    },
    {
      title: "Loft Conversions",
      description:
        "Maximize your space by converting lofts with a touch of brick elegance.",
      imgSrc1: "images/loft/loft.jpeg",
      imgSrc2: "images/loft/loft1.jpeg",
      imgSrc3: "images/loft/loft2.jpeg",

      list: [
        "Dormer Conversions",
        "Hip-to-Gable Conversions",
        "Mansard Conversions",
      ],
      bgColor: "bg-indigo-100",
    },
    {
      title: "Brick and Stone Restoration",
      description:
        "Revitalize the look of your property with our thorough cleaning services.",
      imgSrc1: "images/brickcleaning/brickcleaning1.jpeg",
      imgSrc2: "images/brickcleaning/brickcleaning2.jpeg",
      imgSrc3: "images/brickcleaning/brickcleaning3.jpeg",

      list: [
        "Brick and Stone Cleaning",
        "Repointing",
        "Moss and Mold Removal",
        "Sealant Application",
      ],
      bgColor: "bg-purple-100",
    },

    {
      title: "Repointing",
      description:
        "Trust HMB for constructing solid, durable, and aesthetically pleasing new structures.",
      imgSrc1: "images/repointing/repointing1.jpeg",
      imgSrc2: "images/repointing/repointing.jpeg",
      imgSrc3: "images/repointing/repointing3.jpeg",

      list: [
        "Mortar Analysis",
        "Damage Assessment",
        "Mortar Removal & Replacement",
        "Weatherproofing",
      ],
      bgColor: "bg-black/80",
      textColor: "text-white",
    },

    {
      title: "Patios / Driveways",
      description:
        "Upgrade your outdoor spaces with bespoke brickwork designs.",
      imgSrc1: "images/patio/patio.jpeg",
      imgSrc2: "images/patio/patio1.jpeg",
      imgSrc3: "images/patio/patio2.jpeg",

      list: ["Brick Patios", "Cobblestone Driveways", "Paved Walkways"],
      bgColor: "bg-red-100",
    },

    {
      title: "House Renovations",
      description:
        "Revamp your space with renovations that stand the test of time.",
      imgSrc1: "images/renovation/reno.jpeg",
      imgSrc2: "images/renovation/reno1.jpeg",
      imgSrc3: "images/renovation/reno2.jpeg",

      list: [
        "Interior Remodeling",
        "Exterior Refurbishment",
        "Historic Building Restoration",
      ],
      bgColor: "bg-gray-200",
    },

    {
      title: "Bathroom Renovations",
      description:
        "Transform your bathroom with modern designs, premium fixtures, and elegant finishes. Let HMB make your bathroom a relaxing oasis.",
      imgSrc1: "images/bathroom/bathroom.jpeg",
      imgSrc2: "images/bathroom/bathroom1.jpeg",
      imgSrc3: "images/bathroom/bathroom2.jpeg",

      // list: [
      //   "Custom Bathroom Designs",
      //   "Tub to Shower Conversions",
      //   "Walk-In Tubs & Showers",
      //   "Tile & Grout Services",
      //   "Vanity & Countertop Installation",
      //   "Plumbing & Fixture Upgrades",
      //   "Lighting & Ventilation Solutions",
      // ],

      list: [
        "Custom Tile Installation: Floors & Walls",
        "Brick Accent Walls & Features",
        "Stone Countertop Installation & Restoration",
        "Tile Repair & Replacement",
        "Shower & Bath Stone/Tile Designs",
        "Grout Sealing & Recoloring",
        "Waterproofing for Tiled Areas",
        "Mosaic & Decorative Tile Features",
      ],
      bgColor: "bg-blue-100",
      textColor: "text-black",
    },

    {
      title: "Tiles",
      description:
        "Revamp your space with renovations that stand the test of time.",
      imgSrc1: "images/tiles/tile.jpeg",
      imgSrc2: "images/tiles/tile1.jpeg",
      imgSrc3: "images/tiles/tile2.jpeg",

      list: [
        "Tile Installation: Floors, Walls & Countertops",
        "Bathroom & Kitchen Tiling",
        "Tile Repair & Replacement",
        "Grout Sealing & Recoloring",
        "Custom Tile Design & Mosaics",
        "Waterproofing & Tile Backing",
      ],
      bgColor: "bg-gray-200",
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Wrap services in container for max-width */}
      <div className="px-4 sm:px-6 ">
        {serviceList.map((service, index) => (
          <div
            key={service.title}
            className={`flex flex-col-reverse md:flex-row ${
              index % 2 !== 0 && "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2">
              {/* Carousel */}
              <Carousel
                className="rounded-xl"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i
                            ? "w-8 bg-[#fe5b0e]"
                            : "w-4 bg-white"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                <img
                  src={service.imgSrc1}
                  alt={service.title}
                  className="h-[500px] w-full object-cover cursor-pointer"
                  onClick={() => handleImageClick(service.imgSrc1)}
                />

                <img
                  src={service.imgSrc2}
                  alt="image 2"
                  className="h-[500px] w-full object-cover cursor-pointer "
                  onClick={() => handleImageClick(service.imgSrc1)}
                />
                <img
                  src={service.imgSrc3}
                  alt="image 3"
                  className="h-[500px] w-full object-cover"
                  onClick={() => handleImageClick(service.imgSrc1)}
                />
              </Carousel>
            </div>

            {/* Content */}
            <div className="relative bg-white py-12 px-6 shadow md:ml-auto md:w-1/2 md:py-16 md:px-10 lg:px-16 xl:px-24">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-700">{service.description}</p>

              {/* Lists */}
              {service.list && (
                <ul className="mt-8 space-y-5 text-gray-700">
                  {service.list.map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <svg
                        className="h-6 w-6 flex-none text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
          <div className="relative">
            <img
              src={modalImage}
              alt="Enlarged Content"
              className="w-full max-h-screen object-contain"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 p-4 text-white bg-red-600 hover:bg-red-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
