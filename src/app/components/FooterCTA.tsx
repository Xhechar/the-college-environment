"use client";

import { useState } from "react";
import Input from "./ui/Input";

type FooterCTAProps = {
  setHigherValue?: any
}

export function FooterCTA(
  props: FooterCTAProps & React.ComponentProps<"input">
) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full">
      {!value && (
        <span className="absolute text-[#D00416] top-[50%] translate-y-[-65%] left-[150px] input-cta-star">
          *
        </span>
      )}
      <Input
        placeholder="Enter your email"
        className={`
          ${value ? `caret-auto` : `caret-transparent`}
          input w-full px-[22px] text-[18px] py-[19px] font-semibold tracking-[-1px] bg-white transition-shadow duration-500 h-[54px]
          ${props.className}
        `}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => {
          setValue(e.target.value as string);
          if (props.setHigherValue) {
            props.setHigherValue(e.target.value as string);
          }
        }}
      />
      {/* Fake animated cursor */}
      <div
        className={`
          absolute left-[22px] top-1/2 -translate-y-1/2 w-[1px] h-[20px] bg-neutral-800 
          pointer-events-none duration-400 ease-out 
          ${
            isFocused && !value
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-[22px]"
          }`}
      />
    </div>
  );
}