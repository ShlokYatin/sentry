import React from "react";
import { TextHoverEffectUI } from "@/components/ui/text-hover-effect";
 
export function TextHoverEffect() {
  return (
    <div className="h-[40rem] flex items-center justify-center">
      <TextHoverEffectUI text="sentry" />
    </div>
  );
}