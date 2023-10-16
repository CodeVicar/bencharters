"use client";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Carousel } from "@material-tailwind/react";

const kitchenServices = [
  {
    name: "Kitchen Design",
    description:
      "Collaborating with clients to create a customized kitchen layout and design that suits their needs and style preferences.",
  },
  {
    name: "Cabinet Refacing",
    description:
      "Refinishing or replacing kitchen cabinets to give them a fresh and updated appearance.",
  },
  {
    name: "Countertop Installation",
    description:
      "Installing new countertops made from materials like granite, quartz, marble, or solid surface.",
  },
  {
    name: "Flooring Installation",
    description:
      "Installing durable and visually appealing flooring options for the kitchen, such as hardwood, tile, or vinyl.",
  },
  {
    name: "Custom Cabinetry",
    description:
      "Crafting and installing custom cabinets to maximize storage and match the kitchen's unique design.",
  },
  {
    name: "Kitchen Pantry Design",
    description:
      "Creating organized pantry spaces with custom shelving and storage solutions.",
  },
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
      <div className="relative overflow-hidden">
        <section className="my-20 ">
          <div className="flex  px-6 max-w-8 flex-col justify-center items-center">
            <h2 className="mb-6 pb-2 text-4xl font-bold">
              Elevate Your Kitchen with Style
            </h2>
            <p className="mb-6 px-8 text-center pb-2 text-neutral-500 dark:text-neutral-300">
              We offer a cost-effective and reliable kitchen renovation service
              that will transform your home. We specialize in modernizing
              kitchens, so you can be sure to get high-quality workmanship at an
              affordable price!
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

                <Carousel className="rounded-xl" style={{ height: "500px" }}>
                  <img
                    src="images/kitchen/kitchen1.jpeg"
                    alt="image 1"
                    className="h-full w-full object-fill"
                  />
                  <img
                    src="images/kitchen/kitchen2.jpeg"
                    alt="image 2"
                    className="h-full w-full object-fill"
                  />
                  <img
                    src="images/kitchen/kitchen3.jpeg"
                    alt="image 3"
                    className="h-full w-full object-fill"
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
                    {kitchenServices.map((feature, index) => (
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
      </div>
    </div>
  );
}
