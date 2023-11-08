import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden">
        <img
          src="images/paint/paintz.jpeg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="relative ">
          <div className="relative bg-gray-900 opacity-70">
            <div className="absolute inset-x-0 bottom-0">
              <svg
                viewBox="0 0 224 12"
                fill="currentColor"
                className="w-full -mb-1 text-white"
                preserveAspectRatio="none"
              >
                <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
              </svg>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex  flex-col  items-center justify-center relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Expert Painting & Decorating{" "}
                  <br className="hidden md:block" />
                  Across London{" "}
                </h2>
                <p className="mb-6 text-base font-bold tracking-wide text-white md:text-lg">
                  Our painting and decorating services are more than just a
                  fresh coat of paint. We are artists of transformation, turning
                  your spaces into beautiful works of art.
                </p>

                <p className="max-w-md mb-10 text-xs font-bold tracking-wide text-white sm:text-sm sm:mx-auto md:mb-16">
                  Let us turn your space into a canvas of creativity and beauty
                </p>

                <div className="">
                  <button className=" border-solid border-2 border-gray-100 text-[#fff] px-4 py-3 rounded-md">
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Telephone</span>
                        <PhoneIcon
                          className="h-7 w-6 text-gray-100"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>
                        <a className="text-gray-100" href="tel:+447859820088">
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
