import DisplaySection from "@/components/home/DisplaySection";
import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col justify-start items-center">
      <Navbar />
      <HeroSection />
      <DisplaySection />
    </section>
  );
};

export default page;
