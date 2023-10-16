import {
  DevicePhoneMobileIcon,
  ShareIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const features = [
  {
    name: "WEB DESIGN AND DEVELOPMENT",
    description:
      "We leverage the latest technologies and best practices to deliver scalable, secure, and high-performing websites. Whether it's front-end development, back-end solutions, or API integrations",

    href: "./web-design",
    icon: ComputerDesktopIcon,
  },
  {
    name: "DIGITAL MARKETING",
    description:
      " From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and content creation, we develop data-driven strategies tailored to your business goals.",
    href: "./digital-marketing",
    icon: ShareIcon,
  },
  {
    name: "MOBILE APP DEVELOPMENT",
    description:
      "In today’s mobile-first world, having a mobile app can give you a competitive edge. We specialize in developing custom mobile apps that are designed to meet your specific needs and help you stand out in a crowded market.",
    href: "./mobile-app",
    icon: DevicePhoneMobileIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Services Offered by Pixel Path
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Pixel Path's range of services covers every aspect of digital
            transformation, ensuring that they can cater to the diverse needs of
            businesses. Here are the key services offered by Pixel Path:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4f0064]">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-[#4f0064]"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
