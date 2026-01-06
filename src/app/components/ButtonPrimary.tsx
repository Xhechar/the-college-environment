"use client"

import Image from "next/image";
// import LogoSmall from "@/app/assets/logo-white-small.png";
import LogoSmall from "@/app/assets/logo-face-white.svg";

type ButtonPrimaryProps = {
  value: string;
  hoverText?: string;
  hoverTextStyle?: string;
  imageDivStyle?: string;
} & React.ComponentProps<"button">

export default function ButtonPrimary(props: ButtonPrimaryProps) {
  const hoverText = props.hoverText || props.value;

  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled || false}
      className={`
      relative overflow-hidden flex bg-primary px-[22px] py-[12px] text-primary-100 outline-none
      items-center gap-[8px] rounded-[8px] cursor-pointer hover:shadow-[0_0_8px_0_#FF7C2B]
      text-[24px] leading-[36px] tracking-[-1px] box-border h-[52px] transition-shadow duration-500
      group shrink-0 input-cta input-btn
      `}
    >
      {/* Default content */}
      <div className="flex items-center gap-[8px] transition-transform duration-500 group-hover:translate-x-0 -translate-x-[130%]">
        <div>
          <p>{props.value}</p>
        </div>
        <div className={props.imageDivStyle}>
          <Image
            src={LogoSmall}
            className="w-[22px]"
            alt="the college logo small white"
          />
        </div>
      </div>

      {/* Hover content */}
      <div className="absolute inset-0 flex items-center gap-[8px] px-[22px] transition-transform duration-500 translate-x-0 group-hover:translate-x-[130%]">
        <div>
          <p>{hoverText}</p>
        </div>
        <div className={props.imageDivStyle}>
          <Image
            src={LogoSmall}
            className="w-[22px]"
            alt="the college logo small white"
          />
        </div>
      </div>
    </button>
  )
}