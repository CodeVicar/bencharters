import {
    LifebuoyIcon,
    NewspaperIcon,
    PhoneIcon,
  } from "@heroicons/react/20/solid";
  
  const cards = [
    {
      name: "BROCHURE WEB DESIGN",
      description:
        "Looking for an affordable way to establish your online presence as a small business? Our brochure web design service can assist you in creating a polished website that highlights your offerings and draws in potential customers.",
      icon: PhoneIcon,
    },
    {
      name: "E-COMMERCE WEB DESIGN",
      description:
        "You’ve come to the right place if you’re seeking skilled e-commerce developers. Kenya Web Design can provide professional assistance with your next online shop; whether you’re using Woocommerce or Shopify, we got you covered",
      icon: LifebuoyIcon,
    },
    {
      name: "BESPOKE WEBSITE DESIGN",
      description:
        "E-commerce websites that are not only visually stunning but also functionally effective. We will work with you to design a custom website that showcases your products and maximizes your online sales ",
      icon: NewspaperIcon,
    },
  ];
  
  export default function Service() {
    return (
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl">
              Low-cost website design solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-black">
              From affordable brochure websites to bespoke e-commerce solutions,
              we have the skills and experience to create a website that truly
              reflects your brand and meets your unique needs. Explore our
              services and let us help you take your business to the next level.”
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {cards.map((card) => (
              <div
                key={card.name}
                className="flex gap-x-4 rounded-xl bg-[#fff9f1] p-6 ring-1 ring-inset ring-white/10"
              >
                <card.icon
                  className="h-7 w-5 flex-none text-indigo-400"
                  aria-hidden="true"
                />
                <div className="text-base leading-7">
                  <h3 className="font-semibold text-[#000000]">{card.name}</h3>
                  <p className="mt-2 text-[#000000]">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  