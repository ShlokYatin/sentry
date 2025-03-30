import { SpotlightNew } from "@/components/Spotlight";
import { TextHoverEffect } from "@/components/TextHoverEffect";
import BentoGrid from "@/components/bento-grid";
import React from "react";

export default function Home() {
  return (
    <main>
      <SpotlightNew />
      <div className="content">
        <TextHoverEffect />
        <BentoGrid />
      </div>
    </main>
  );
}
