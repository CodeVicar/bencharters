import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "37" },
  { label: "Countries", value: "12" },
  { label: "Raised", value: "$25M" },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="images/review.jpeg"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
              <div
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              ></div>
              <figure className="relative isolate">
                {/* <img
                  src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
                  alt=""
                  className="h-12 w-auto"
                /> */}
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                  <p>
                    "the quality of their work went beyond what we expected.
                    Friendly and reliable service. "
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                  <strong className="font-semibold text-white">
                    Judith Rogers,
                  </strong>{" "}
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                About Benchaters{" "}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                On a mission to empower remote teams
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  BENCHATERS is a family run home improvement enterprise. We
                  pride ourselves in delivering honest, high end services and
                  are committed to ensuring that customer satisfaction is at the
                  centre of our core. No matter how big or small your project we
                  are here to offer you the best services.
                </p>
                <p className="mt-8">
                  We specialise in painting and decorating with exceptional
                  finishing and have a designated team of specialists to cover
                  other works such as plastering, flooring, tiling and general
                  handyman services.
                </p>
              </div>
            </div>

            <div className="mt-10 flex">
              <div className="flex gap-x-4">
                <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                  <button className="bg-[#fff] text-[#fff] px-4 py-4 rounded-md">
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Telephone</span>
                        <PhoneIcon
                          className="h-7 w-6 text-gray-900"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>
                        <a
                          className="text-gray-900"
                          href="tel:+1 (555) 234-5678"
                        >
                          +447859820088{" "}
                        </a>
                      </dd>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
