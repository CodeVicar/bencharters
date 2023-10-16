"use client";
import Image from "next/image";
import Hero2 from "@/components/homepage/Hero2";
import Hero from "@/components/homepage/Hero";

import Feature from "@//components/homepage/Feature";
import Services from "@/components/homepage/Services";
import About from "@/components/homepage/About";

import CtaHome from "@//components/homepage/CtaHome";
import TechStack from "@//components/homepage/TechStack";
// import More_feature from "@//components/homepage/More_feature";
import Faq from "@/components/homepage/Faq";
import Gallery from "@//components/homepage/Gallery";
import ShortCta from "@//components/homepage/ShortCta";


export default function Home() {
  return (
    <main className="">
      <Hero2 />
      {/* <Hero /> */}

      <About />
      <ShortCta />
      {/* <More_feature /> */}
      <Services />
      <CtaHome />
      {/* <TechStack /> */}
      {/* <Gallery /> */}

      <Faq />
    </main>
  );
}
