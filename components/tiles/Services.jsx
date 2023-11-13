"use client";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Carousel } from "@material-tailwind/react";

const service1 = [
  {
    name: "Bathroom Floor Tiling",
    description: "Durable and water-resistant tiles for bathrooms.",
  },
  {
    name: "Grout Cleaning and Sealing",
    description:
      "Clean and seal grout lines to prevent stains and moisture penetration.",
  },
  {
    name: "Shower Enclosure Installation",
    description: "Install glass enclosures to enhance shower spaces.",
  },
  {
    name: "Kitchen Floor Tiling",
    description: "Durable and aesthetic kitchen floor tiles.",
  },
  // Add more features as needed
];

const service2 = [
  {
    name: "Island Tiling",
    description:
      "Tiles to make kitchen islands stand out and provide workspace.",
  },
  {
    name: "Patio Tiling",
    description: "Weather-resistant tiles for elegant outdoor patios.",
  },
  {
    name: "Garden Tiling",
    description: "Design garden paths and decorative areas with tiles.",
  },
  {
    name: "Porch Tiling",
    description: "Durable and aesthetic tiles for a welcoming porch entrance.",
  },
  {
    name: "Entryway Tiling",
    description: "Create a stunning tiled entryway.",
  },
  // Add more features as needed
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden">
        {/* <img
          src="images/im.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        /> */}

        {/* 1st interior  */}
        <section className="my-20 ">
          <div className="flex  px-6 max-w-8 flex-col justify-center items-center">
            <h2 className="mb-6 pb-2 text-4xl font-bold">
              Tile Installation Services
            </h2>
            <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
              Transform your spaces with our expert tile installation services.
              From bathroom floor tiling to kitchen floor tiling, we bring
              durability and aesthetics to your home.
            </p>
          </div>
          <div className="block px-6 rounded-lg ">
            <div className="flex flex-wrap py-6">
              {/* first slide  */}
              <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-6/12">
                {/* <img
                src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/012.jpg"
                alt="Trendy Pants and Shoes"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              /> */}

                <Carousel className="rounded-xl" style={{ height: "300px" }}>
                  <img
                    src="images/tiles/bathroompic.jpeg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="images/tiles/kitchentiles.jpeg"
                    alt="image 2"
                    className="h-full w-full object-cover"
                  />
                  {/* <img
                    src="images/tiles/bathroompic.jpeg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                  /> */}
                </Carousel>
              </div>

              {/* second slide */}
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-6/12">
                <div className="px-6  md:px-12">
                  <h2 className="mb-6 pb-2 text-4xl font-bold">
                    Why Choose Our Tile Services?
                  </h2>
                  <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                    We believe in the power of quality craftsmanship and
                    attention to detail, ensuring that every tile installation
                    project we undertake transforms your space with precision
                    and dedication.
                  </p>

                  <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    {service1.map((feature, index) => (
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

        {/* Second interiour */}

        <section className="my-20 mx-120">
          <div className="block px-6">
            <div className="flex flex-wrap items-center">
              {/* first slide  */}

              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-6/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                    Unmatched Excellence in Tile Installation
                  </h2>
                  <p className="mt-4 text-xl text-gray-600">
                    Experience excellence like never before with our
                    comprehensive range of tile installation services. From
                    restoration to creative installations, we transform spaces
                    with precision and dedication, ensuring your vision comes to
                    life with stunning tile work.
                  </p>

                  <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    {service2.map((feature, index) => (
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

              {/* second slide  */}
              <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-6/12">
                {/* <img
                src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/012.jpg"
                alt="Trendy Pants and Shoes"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              /> */}
                <Carousel className="rounded-xl" style={{ height: "300px" }}>
                  <img
                    src="images/tiles/patio.jpeg"
                    alt="image 1"
                    className=" h-full w-full  object-cover"
                  />
                  <img
                    src="images/tiles/kitchentiles.jpeg"
                    alt="image 2"
                    className=" h-ful w-full object-cover"
                  />
                  <img
                    src="images/tiles/gardentiles.jpeg"
                    alt="image 3"
                    className=" h-full w-full  object-cover"
                  />
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
