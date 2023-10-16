export default function Example() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden">
        <img
          src="images/kitchen/kitchenz.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="relative ">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div className="px-6 pb-4 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6 ">
              <div className="mx-auto max-w-2xl lg:mx-0 px-6">
                <div className="mt-24 text-4xl font-bold tracking-tight text-white sm:mt-10 sm:text-6xl">
                  Elevate Your Kitchen with Style
                </div>
                <p className="mt-6 text-lg leading-8 text-white">
                  Transform your kitchen space into a masterpiece with our
                  Kitchen Renovation services. We bring your dream kitchen to
                  life at an affordable cost.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/contact"
                    className="rounded-md bg-white py-5 px-4 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Book An Appointment{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
