export default function Example() {
  return (
    <div className="relative pb-6 bg-white border-b-2 border-[#daba53]">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12  lg:px-8">
        <div className="px-6 pb-24 pt-10   sm:pb-32 lg:col-span-6 lg:px-0 lg:pb-40 lg:pt-4 xl:col-span-6">
          <div className="mx-auto max-w-2xl   py-10 lg:mx-0">
            <div className="hidden sm:mt-32 sm:flex  lg:mt-16">
              {/* <div className="relative rounded-full px-3 py-10  text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Anim aute id magna aliqua ad ad non deserunt sunt.{" "}
                <a
                  href="#"
                  className="whitespace-nowrap font-semibold text-indigo-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
            </div>
            <h1 className=" text-lg font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Transform Your Space: Painting & Decorating
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className=" lg:col-span-5 rounded-lg px-6 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] rounded-lg w-full bg-gray-50 object-cover  lg:inset-0 lg:aspect-auto lg:h-full"
            src="/images/painthero.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
