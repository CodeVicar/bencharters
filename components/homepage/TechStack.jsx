const links = [
  { name: "Traditional Bricklaying", href: "#" },
  { name: "Stone Restoration", href: "#" },
  { name: "Modern Constructions", href: "#" },
  { name: "Historic Renovations ", href: "#" },
];
const stats = [
  // { name: "Offices worlwide", value: "2" },
  { name: "Full-time Craftsmen: ", value: "10+" },
  { name: "Projected Completed", value: "200+" },
];

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900  sm:py-32">
      <img
        src="./images/dark.jpeg"
        alt=""
        className="absolute inset-0 -z-10 h-full object-fill w-full  object-right md:object-center"
      />
     
      <div className=" mx-auto max-w-7xl  items-center text-center justify-center px-6 lg:px-8 bg-black/40  py-6">
        <div className="flex flex-col mx-auto lg:mx-0 item-center justify-center ">
          <h3 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Our Building Techniques
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Our mastery spans across traditional bricklaying to modern
            construction methodologies. We also incorporate specialized
            techniques and materials to ensure the longevity, safety, and
            aesthetic appeal of your projects.
          </p>
        </div>
        <div className="mx-auto flex flex-col justify-center items-center  mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
