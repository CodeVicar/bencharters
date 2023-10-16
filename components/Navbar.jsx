"use client";
import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "./" },
  { name: "About us", href: "./#" },
  { name: "Services", href: "./#" },
  { name: "Our Work", href: "./#" },
  { name: "Contact", href: "./#" },

  // { name: "Digital Marketing", href: "./digital-marketing" },

  // { name: "Mobile", href: "mobile-app" },

  // { name: "Pricing", href: "./pricing" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // change nav background on scroll

  //

  return (
    // <header className="inset-x-0 top-0 z-50 bg-transparent sticky">
    <header className="sticky inset-x-0 top-0 z-20 bg-[#fff]  border-b-4 border-[#daba53] ">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 b"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="text-bold text-gray-900">
            {/* <span>Pixel Path</span> */}
            <img className="h-14 w-auto" src="./images/logo.jpeg" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#daba53]]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div className=" border-[#daba53]  text-center w-[100px] px-4 py-3  ring-1 ring-[#daba53]/80  hover:ring-[#daba53]/90">
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-bold leading-6 text-[#000] "
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <div className="hidden  lg:flex lg:flex-1 lg:justify-end items-center">
         
          <p
            href="#"
            className="text-sm  flex font-bold leading-6 py-3 px-4 rounded-md text-white bg-[#000]"
          >
             <span>
            <PhoneIcon class="h-6 w-6 text-white" />
          </span>
            +44 7859 820088{" "}
          </p>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-14 w-auto" src="./images/logo.jpeg" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[#daba53]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-100/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-[#000]"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="text-sm font-bold leading-6 py-3 px-4 rounded-md text-[#fff] bg-[#000]"
                >
                  <PhoneIcon class="h-6 w-6 text-blue-500" />
                  +44 7956 579463{" "}
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
