"use client";

import DisplaySection from "@/components/home/DisplaySection";
import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/shared/Navbar";
import { useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const { data } = useSession();
  return (
    <section className="flex flex-col justify-start items-center">
      <Navbar session={data} />
      <HeroSection />
      <DisplaySection />
    </section>
  );
};

export default page;
