"use client";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Carousel } from "@material-tailwind/react";

const service1 = [
  {
    name: "Wall Painting",
    description:
      "Painting interior walls in various colors and finishes to suit clients' preferences.",
  },
  {
    name: "Ceiling Painting",
    description:
      "Applying fresh paint to ceilings for a clean and updated look.",
  },
  {
    name: "Door Painting",
    description:
      "Painting doors to enhance their appearance and protect them from wear.",
  },
  {
    name: "Skirting Painting",
    description:
      "Painting or refinishing skirting boards to complement the room's décor.",
  },

  // Add more features as needed
  // Add more features as needed
];

const service2 = [
  {
    name: "Restoration",
    description:
      "Restoring old or damaged doors and windows to their original condition before repainting.",
  },
  {
    name: "Cupboard Painting",
    description:
      "Refinishing or repainting kitchen and bathroom cupboards for a modernized appearance.",
  },
  {
    name: "Wallpapering",
    description:
      "Expertly installing wallpaper with precision and attention to detail.",
  },
  {
    name: "Coving Installation",
    description:
      "Adding decorative coving or crown molding to create an elegant finish.",
  },
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
              Interior Painting and Decorating
            </h2>
            <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
              We offer a one-stop platform for all your interior design needs.
              From wall painting to ceiling updates, we bring your vision to
              life with precision and style.
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

                <Carousel
                  className="rounded-xl object-cover"
                  style={{ height: "500px" }}
                >
                  <img
                    src="images/paint/wall.jpeg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="images/paint/Ceiling.jpeg"
                    alt="image 2"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="images/paint/doorpainting.jpeg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                  />
                </Carousel>
              </div>

              {/* second slide */}
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-6/12">
                <div className="px-6  md:px-12">
                  <h2 className="mb-6 pb-2 text-4xl font-bold">
                    Why is it so great?
                  </h2>
                  <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                    We believe in the power of quality craftsmanship and
                    attention to detail, ensuring that every project we
                    undertake
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
                  <h2 className="mb-6 pb-2 text-4xl font-bold">
                    Unmatched Excellence{" "}
                  </h2>
                  <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                    Experience excellence like never before with our
                    comprehensive range of services. From restoration to
                    creative installations, we transform spaces with precision
                    and dedication."
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

                <Carousel
                  className="rounded-xl object-cover"
                  style={{ height: "500px" }}
                >
                  <img
                    src="images/paint/restoration.jpeg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="images/paint/cupboard.jpeg"
                    alt="image 2"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="images/wallpaper/wallpaperimg.jpeg"
                    alt="image 3"
                    className="h-full w-full object-cover"
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
