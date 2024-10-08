import React from "react";
import { AnimatedPill } from "@/components/shared/AnimatedPill";
import { cn } from "@/lib/utils";
import { montserrat } from "@/lib/fonts";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <main className="container main flex flex-col items-center justify-center text-center py-24 gap-2 px-5">
      <AnimatedPill label="Welcome to Banter!" className="h-8" />
      <h2
        className={cn(
          "text-5xl font-semibold text-neutral-700",
          montserrat.className
        )}
      >
        Connect, Share, and <span className="text-peel font-bold">Chat</span>{" "}
        Freely
      </h2>
      <p className="text-lg text-gray-600">
        Join the conversation and make every chat count!
      </p>
      <Button className="px-10 mt-5 bg-neutral-800">Join Us</Button>
    </main>
  );
};

export default HeroSection;
