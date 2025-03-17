"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { ProfilePic } from "@/components/ProfilePic";

export function SpotlightNew() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center --black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full md:pt-0 text-center">
        <ProfilePic />
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-900 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 pt-4 pb-4">
          Hey, I'm Shlok! <br />
          Welcome to my corner of the internet!
        </h1>
        <p className="mt-3 font-normal text-base text-neutral-800 dark:text-neutral-300 max-w-lg text-center mx-auto border-t border-l border-r border-b border-neutral-300 dark:border-neutral-600">
          I’m Currently learning Next.js and working to strengthen my skills as
          a beginner web developer. I’m passionate about creating websites that
          offer seamless, user-friendly experiences while also focusing on
          visually appealing designs.
        </p>
      </div>
    </div>
  );
}
