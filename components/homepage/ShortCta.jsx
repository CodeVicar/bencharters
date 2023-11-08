import { PhoneIcon } from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <div className="bg-[#000]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
          Ready to dive in?
          <br />
          Start your free Quotes today.
        </h2>
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
                <a className="text-gray-900" href="tel:+1 (555) 234-5678">
                +447859820088                </a>
              </dd>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
