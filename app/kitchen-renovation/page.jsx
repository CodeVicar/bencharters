"use client"
import Service from "@/components/painting/Service";
import Hero from "@/components/kitchen/Hero";
import Services from "@/components/kitchen/Services";

import React from "react";

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
