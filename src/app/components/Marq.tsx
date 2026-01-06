import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

import Build from "@/app/assets/build.png";
import Bharat from "@/app/assets/bharat.png";
import Command from "@/app/assets/command.png";

// font-size: 34px;
// line-height: 51px;
// letter-spacing: 0px;
// font-weight: 700;

export default function Marq() {
  return (
    <Marquee className="gap-[16px]">
      <div className="flex items-center gap-[24px] pr-[10px]">
        <div className="flex items-center gap-[24px]">
          <h4 className="text-[30px] leading-[51px] tracking-[0px] font-[700]">Selected by</h4>
          <Image src={Build} alt="build" className="ml-[-16px]" />
          <h4 className="text-[30px] leading-[51px] tracking-[0px] font-[700] ml-[-16px]">Build3 Impact Accelerator</h4>
          <Image src={Command} alt="command" className="w-[70px]" />
          <h4 className="text-[30px] leading-[51px] tracking-[0px] font-[700]">Built for</h4>
          <Image src={Bharat} alt="bharat" className="w-[150px] ml-[-16px]" />
          <Image src={Command} alt="command" className="pr-[1px] w-[70px]" />
        </div>
      </div>
      <div className="flex items-center gap-[24px] pr-[10px]">
        <div className="flex items-center gap-[24px]">
          <h4 className="text-[30px] leading-[51px] tracking-[0px] font-[700]">Selected by</h4>
          <Image src={Build} alt="build" className="ml-[-16px]" />
          <h4 className="text-[30px] leading-[51px] tracking-[0px] font-[700] ml-[-16px]">Build3 Impact Accelerator</h4>
          <Image src={Command} alt="command" className="w-[70px]" />
          <h4 className="text-[30px] leading-[51px] tracking-[0px] font-[700]">Built for</h4>
          <Image src={Bharat} alt="bharat" className="w-[150px] ml-[-16px]" />
          <Image src={Command} alt="command" className="pr-[1px] w-[70px]" />
        </div>
      </div>
      <div className="flex items-center gap-[24px] pr-[10px]">
        <div className="flex items-center gap-[24px]">
          <h4 className="text-[30px] leading-[51px] tracking-[0px] font-[700]">Selected by</h4>
          <Image src={Build} alt="build" className="ml-[-16px]" />
          <h4 className="text-[30px] leading-[51px] tracking-[0px] font-[700] ml-[-16px]">Build3 Impact Accelerator</h4>
          <Image src={Command} alt="command" className="w-[70px]" />
          <h4 className="text-[30px] leading-[51px] tracking-[0px] font-[700]">Built for</h4>
          <Image src={Bharat} alt="bharat" className="w-[150px] ml-[-16px]" />
          <Image src={Command} alt="command" className="pr-[1px] w-[70px]" />
        </div>
      </div>
    </Marquee>

  )
};