import { SpotlightNew } from "@/components/Spotlight";
import React from "react";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <SpotlightNew />
      <div className="content">
        {children}
      </div>
    </main>
  );
}
