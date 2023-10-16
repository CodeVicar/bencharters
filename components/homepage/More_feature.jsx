import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "New Builds",
    description:
      "Trust HMB for constructing solid, durable, and aesthetically pleasing new structures.",
  },
  {
    name: "Extensions",
    description:
      "Expand your living or commercial space seamlessly with our bespoke extension services.",
  },
  {
    name: "Garden Walls",
    description:
      "Offering protection and aesthetic charm, our garden walls redefine landscaping.",
  },
  {
    name: "Loft Conversions",
    description:
      "Maximize space and value by turning dormant areas into functional rooms.",
  },
  {
    name: "Brick and Stone Restoration",
    description:
      "From cleaning to restoration and paint removal, we bring back the glory of your brick and stone structures.",
  },
  {
    name: "Repointing",
    description:
      "Ensuring the durability and weather-resistance of your walls with our expert repointing.",
  },
  {
    name: "Patios / Driveways",
    description:
      "Designed to elevate the beauty and functionality of your outdoor spaces.",
  },
  {
    name: "House Renovations",
    description:
      "Reimagine and revitalize your living spaces with our comprehensive renovations.",
  },

  {
    name: "Bathroom Renovation",
    description:
      "Transform your bathroom with modern designs, premium fixtures, and elegant finishes.",
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Building Your Dreams
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#000] sm:text-4xl">
              COMPREHENSIVE BRICKWORK & BUILDING SERVICES{" "}
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              At HMB BRICKWORK, we combine quality craftsmanship with a passion
              for construction. Explore our wide range of services and let's lay
              the foundation for your dream project.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative pl-9 rounded overflow-hidden shadow-lg bg-white/20 p-6 ring-1 ring-inset ring-[#fe5b0e]/20"
              >
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    className="absolute left-0 top-1 h-5 w-5 text-[#fe5b0e]"
                    aria-hidden="true"
                  />
                  {/* <img
                    // className="h-10"
                    src="./images/bd.png"
                    alt="Your Company"
                    className="absolute left-0 top-1 h-5 w-5 text-indigo-500"

                  /> */}
                  {feature.name}
                </dt>
                <dd className="mt-2 text-black">{feature.description}</dd>
                {/* <div className="flex gap-5 mt-8">
                  <a
                    href="mailto:HMBbrickwork@gmail.com"
                    className="inline-flex rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    onClick={() =>
                      (window.location = "mailto:HMBbrickwork@gmail.com")
                    }
                  >
                    Read More
                  </a>
                </div> */}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
