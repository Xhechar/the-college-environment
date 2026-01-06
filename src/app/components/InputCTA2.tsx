"use client"

import { useState } from "react";
import Input from "./ui/Input";

type InputCTA2Props = {
  label: string,
  for?: string,
  required?: boolean,
  setHigherValue?: any
}

export default function InputCTA2(props: InputCTA2Props & React.ComponentProps<"input">) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col">
      <label className="text-secondary body2  wait-label">{props.label} {props.required ? <span className="text-[#D00416]">*</span> : ''}</label>
      <div className="pt-3">
        {/* <Input
          className={`
            input w-full px-[22px] text-[18px] font-semibold tracking-[-1px] transition-shadow duration-500 h-[52px]
          `}
        /> */}
        <div className="relative">
          <Input
            className={`
            ${value ? `caret-auto` : `caret-transparent`}
            input w-full px-[22px] text-[18px] font-semibold tracking-[-1px] bg-white transition-shadow duration-500 h-[52px]
            ${props.className}
          `}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => {
              setValue(e.target.value as string)
              props.setHigherValue(e.target.value as string)
            }}
          />
          {/* Fake animated cursor */}
          <div
            className={`
            absolute left-[22px] top-1/2 -translate-y-1/2 w-[1px] h-[20px] bg-neutral-800 
            pointer-events-none duration-400 ease-out 
            ${isFocused && !value ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[22px]'}`}
          />
        </div>
      </div>
    </div>
  )
}