"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What services does Benchaters offer?",
    answer:
      "Benchaters specializes in a wide range of painting and decorating services, including interior and exterior painting, wallpaper installation, wood flooring, floor renovation, kitchen renovation, and expert tiling. We transform spaces into works of art."
  },
  {
    question: "How can I request a quote for my project?",
    answer:
      "Requesting a quote is easy. Simply visit our 'Contact Us' page and fill out the form with details about your project. We'll get back to you promptly with a customized quote."
  },
  {
    question: "What areas does you serve?",
    answer:
      "Benchaters proudly serves clients in [Your Service Areas]. We're dedicated to beautifying homes and businesses in these regions."
  },
  {
    question: "How experienced is Benchaters in the painting and decorating industry?",
    answer:
      "With years of experience in the industry, Benchaters has a proven track record of delivering high-quality painting and decorating services. Our team of skilled professionals is committed to excellence."
  },
  {
    question: "Can you handle both residential and commercial projects?",
    answer:
      "Absolutely! Benchaters caters to both residential and commercial clients. Whether it's a home makeover or a business renovation, we have the expertise to meet your needs."
  },
  {
    question: "Are you insured and licensed?",
    answer:
      "Yes, Benchaters is fully insured and licensed to provide painting and decorating services. You can trust us to deliver top-notch work with peace of mind."
  },
  {
    question: "What sets Benchaters apart from other painting and decorating services?",
    answer:
      "Benchaters stands out for its unwavering commitment to artistry and precision. We pay attention to every detail and strive for excellence in every project, making us your trusted partner for transforming spaces."
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
