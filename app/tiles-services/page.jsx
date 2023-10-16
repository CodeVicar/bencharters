import Service from "@/components/painting/Service";
import Hero from "@/components/tiles/Hero";
import Services from "@/components/tiles/Services";

import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

const WebDesignPage = () => {
  return (
    <div className="bg-[#fff9f1]">
      <Hero />
      {/* interior section */}
      <Services />

      
    </div>
  );
};

export default WebDesignPage;
