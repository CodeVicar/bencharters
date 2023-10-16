import Hero from "@/components/woodwork/Hero";
import Services from "@/components/woodwork/Services";
import Exterior from "@/components/woodwork/Exterior";
import Carasol from "@/components/woodwork/Carasol";
import About from "@/components/woodwork/About";

import Why from "@/components/woodwork/Why";

import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

const WebDesignPage = () => {
  return (
    <div className="bg-[#fff]">
      <Hero />
      {/* interior section */}
      <About />
      <Services />
      <Why />
      <Exterior />

    </div>
  );
};

export default WebDesignPage;
