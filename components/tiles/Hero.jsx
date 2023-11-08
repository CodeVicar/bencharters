import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden">
        <img
          src="images/tiles/tilez.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="relative ">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div className="px-6 pb-4 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6 ">
              <div className="mx-auto max-w-2xl lg:mx-0 px-6">
                {/* <img
                    className="h-11"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  /> */}
                <div className="hidden sm:mt-32 sm:flex lg:mt-16"></div>
                <h1 className="mt-24 text-4xl font-bold tracking-tight text-white sm:mt-10 sm:text-6xl">
                  Tiling Services for Interiors & Exteriors{" "}
                </h1>
                <p className="mt-6 text-lg leading-8 text-white">
                  Tiles can transform the look and feel of any space, and our
                  expert tiling services are ready to make that transformation
                  happen. Whether it's interior floors, bathroom walls, or
                  outdoor patios, we provide precision tiling solutions that
                  combine style and durability.
                </p>
                <div className="mt-10 flex items-center gap-x-6 lg:mt-10 lg:flex-shrink-0">
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
            {/* <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                <img
                  className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                  src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
                  alt=""
                />
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
