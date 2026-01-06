"use client"

import Image from "next/image";

import Logo from '@/app/assets/logo2.png'

import ButtonPrimary from "./ButtonPrimary";

import Link from "next/link";
import { FooterCTA } from "./FooterCTA";
import { useState } from "react";
import Modal from "./Modal";
import { postEmail } from "../lib/api";

// type FooterCTAProps = {

// }

// function FooterCTA(props: FooterCTAProps) {
//   return (
//     <Input
//       placeholder="Enter your email"
//       className={`
//         input w-full px-[22px] text-[18px] font-semibold tracking-[-1px] transition-shadow
//         duration-500 bg-white focus:animate-[slideInCursor_0.4s_ease-out_forwards]
//       `}
//     />
//   )
// }

type FooterLinkProps = {
  value: string
}

function FooterLink(props: FooterLinkProps) {
  return (
    <div className="flex items-center group transition-transform gap-1">
      <h6 className="h6 text-white hover:text-primary">{props.value}</h6>
      <span className="transition-all duration-500 ease-out inline-block w-0 group-hover:w-[16px] h-[2px] bg-primary"></span>
    </div>
  )
}

export default function Footer() {
  const [showModal, setShowModal] = useState(false)
  const [shouldDisplay, setShouldDisplay] = useState(false)
  const [email, setEmail] = useState("")

  async function handleJoin() {
    try {
      await postEmail({ email })
  
      setShowModal(true)
      setShouldDisplay(true)
  
      console.log(email);
    }
    catch(error) {
      alert((error as any)?.message || "Something went wrong.")
    }
  }

  async function handleClose() {
    setShowModal(false)
    setTimeout(() => {
      setShouldDisplay(false)
    }, 1000)
  }

  return (
    <div>
      {shouldDisplay && <Modal onClose={() => handleClose()} shouldClose={!showModal} />}
      <div className="bg-secondary pb-[54px] px-[28px] pt-[40px] rounded-[32px] mx-2 z-[1] relative max-[500px]:px-[16px] footer">
        <div className={`
        flex gap-[176px]
        max-[760px]:flex-col max-[760px]:gap-[32px]
      `}>
          <div className={`
          max-w-[868px] w-full pr-[58px]
          max-[760px]:pr-[0px]
        `}>
            <div>
              <h4 className="h4 text-white">Stay updated with the latest updates</h4>
            </div>
            <div className={`
            flex gap-[10px] w-full pt-[31px]
            max-[760px]:flex-col unzoom-f
          `}>
              <FooterCTA className="!h-[52px] input-cta" setHigherValue={setEmail} />
              <div>
                <ButtonPrimary value="Subscribe" imageDivStyle="w-[23px] h-[23px]" onClick={() => handleJoin()} />
              </div>
            </div>
          </div>
          <div>
            <div className="border-l-1 border-[rgba(255,_255,_255,_20%)] pl-[13px] pr-[34px]">
              <div>
                <Link href={"/"}>
                  <FooterLink value="Home" />
                </Link>
              </div>
              <div className="pt-2">
                <Link href={"/features"}>
                  <FooterLink value="Features" />
                </Link>
              </div>
              <div className="pt-2">
                <Link href={"/pricing"}>
                  <FooterLink value="Pricing" />
                </Link>
              </div>
              <div className="pt-2">
                <Link href={"/privacy"}>
                  <FooterLink value="Privacy" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-[128px]">
            <Image src={Logo} alt="the college logo" width={1456} />
          </div>
          <div className={`
          flex gap-[5px] items-center pt-[35px] justify-end pr-[55px]
          max-[760px]:pr-[0px] max-[760px]:justify-center
          max-[380px]:flex-col max-[350px]:gap-[2px]
        `}>
            <div>
              <p className={`
                text-white body2 text-center
                max-[760px]:text-left
                max-[500px]:text-[12px]
              `}>© 2026 The College. All rights reserved.</p>
            </div>
            {/* <div>
              <span className={`
                text-white body4 text-center
                max-[760px]:text-left
                max-[500px]:text-[12px]
              `}>•</span>
            </div> */}
            {/* <div>
              <p className={`
                text-white body4 text-center
                max-[760px]:text-left
                max-[500px]:text-[12px]
              `}>Privacy Policy</p>
            </div> */}
          </div>
        </div>
      </div>

    </div>
  )
}