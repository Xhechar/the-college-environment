"use client"

import Image from "next/image"
import Tag, { TagBig } from "../components/Tag"

import Tick from "@/app/assets/tick.png"
import Hand from "@/app/assets/hand.png"
import Acc from "@/app/assets/acc.png";

import InputCTA from "../components/InputCTA"
import ButtonPrimary from "../components/ButtonPrimary"

import Lightning from "@/app/assets/lightning.png"
import Under2 from "@/app/assets/under2.png"

import Conversation from "@/app/assets/conversation.png";
import Marq from "../components/Marq"

import Arrow1 from "@/app/assets/arrowb1.png";
import Arrow2 from "@/app/assets/arrowb2.png";
import { JoinProps } from "../page";
import Modal from "../components/Modal";
import { useState } from "react";
import { postEmail } from "../lib/api";

import { AreaTag, parseTextWithBold } from "../utils/text.parser"

type PriceItemProps = {
  value: string
}

type PriceCardProps = {
  tagValue: string;
  header: string;
  items: Array<string>;
};

function PriceItem(props: PriceItemProps) {
  return (
    <div className="flex items-start gap-[14px]">
      <div className="flex-shrink-0 mt-[4px]">
        <Image src={Tick} alt="tick" className="w-[32px] h-[32px]" />
      </div>
      <div className="flex-1">
        <p className="body0 text-[#7E8BA1] text-[22px] leading-[1.6] max-[900px]:text-[18px] max-[500px]:text-[17px]">
          {parseTextWithBold(props.value, AreaTag.CardList)}
        </p>
      </div>
    </div>
  );
}

function PriceCard(props: PriceCardProps) {
  return (
    <div className="w-full bg-primary-100 p-[20px] rounded-[22px] h-full">
      <div
        className={`
          bg-neutral-100 rounded-[22px] p-[32px]
          transition-shadow duration-500 pricing h-full flex flex-col
          max-[900px]:p-[28px]
        `}
      >
        <div className="border-b-2 border-dotted border-secondary-600 pb-[15px] flex flex-col items-center">
          <div>
            <TagBig value={props.tagValue} />
          </div>
          <div className="pt-[16px]">
            <h3 className="h3 text-[32px] max-[900px]:text-[26px] max-[500px]:text-[24px]">
              {props.header}
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-[26px] pt-[42px] pb-[10px] max-[900px]:gap-[24px] max-[900px]:pt-[38px] flex-1">
          {props.items.map((item, index) => (
            <div key={index}>
              <PriceItem value={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FirstSection() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto pt-[80px] px-[32px] max-[900px]:px-[24px] max-[500px]:px-[16px]">
        <div className="max-w-[1100px]">
          <div>
            <h1 className="text-[54px] leading-[1.2] max-[1200px]:text-[44px] max-[900px]:text-[36px] max-[500px]:text-[30px]">
              <span className="relative inline-block">
                Simple{" "}
                <Image
                  src={Acc}
                  alt="acc"
                  className="absolute left-[-35px] top-[-35px] w-[70px] max-[900px]:w-[55px] max-[900px]:left-[-25px] max-[900px]:top-[-25px] max-[500px]:w-[45px] max-[500px]:left-[-20px] max-[500px]:top-[-20px]"
                />{" "}
              </span>{" "}
              and transparent pricing
            </h1>
          </div>
          <div>
            <p className="body0 pt-[20px] text-[20px] max-[900px]:text-[17px] max-[600px]:text-[15px]">
              Start free. Pay{" "}
              <strong className="font-bold text-neutral-1000">
                2%
              </strong>{" "}
              only while you grow. Switch to{" "}
              <strong className="font-bold text-neutral-1000">
                ₹2,999
              </strong>
              /month once you scale - no fees after that.
            </p>
          </div>
        </div>
        <div
          className={`
            flex justify-center pt-[70px] gap-[80px]
            max-[1400px]:gap-[50px]
            max-[1100px]:gap-[35px]
            max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-[60px] max-[900px]:pt-[50px]
          `}
        >
          <div className="relative w-full max-w-[500px] max-[1100px]:max-w-[420px] max-[900px]:max-w-[520px]">
            <div
              className={`
                w-full transition-transform duration-800 hover:translate-y-[-8%] h-full
                max-[900px]:rotate-[0deg]
              `}
            >
              <PriceCard
                tagValue="Always Free"
                header="Free Community"
                items={[
                  "Create up to $5 free$ communities",
                  "$All$ features",
                  "$Unlimited$ courses",
                  "$Unlimited$ members",
                  "Custom URL",
                  "Analytics",
                ]}
              />
            </div>
          </div>
          <div className="relative w-full max-w-[500px] max-[1100px]:max-w-[420px] max-[900px]:max-w-[520px]">
            <div
              className={`
                w-full transition-transform duration-800 hover:translate-y-[-8%] h-full
                max-[900px]:rotate-[0deg]
              `}
            >
              <PriceCard
                tagValue="$2% Fee Per Paying Member$"
                header="Paid Community"
                items={[
                  "Create up to $10 paid$ communities",
                  'Everything from $"Always Free"$ plan',
                  "$2%$ platform fee",
                  "Fee capped at $₹4,000/month$",
                ]}
              />
            </div>
          </div>
          <div className="relative w-full max-w-[500px] max-[1100px]:max-w-[420px] max-[900px]:max-w-[520px]">
            <div
              className={`
                w-full transition-transform duration-800 hover:translate-y-[-8%] h-full
                max-[900px]:rotate-[0deg]
              `}
            >
              <PriceCard
                tagValue="$₹2,999$/month"
                header="Scale Unlimited"
                items={[
                  "Create up to $10 paid$ communities",
                  'Everything from $"Always Free"$ plan',
                  "$0%$ platform fee",
                ]}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="relative pt-[130px] pb-[120px] max-[900px]:pt-[90px] max-[900px]:pb-[80px] max-[500px]:pt-[70px] max-[500px]:pb-[60px]">
            <h2 className="h2 text-center text-secondary-1000 px-4 mx-auto max-w-[1100px] text-[42px] leading-[1.4] max-[1200px]:text-[38px] max-[900px]:text-[30px] max-[500px]:text-[24px]">
              We earn, only when you earn. We grow, only
              <span className="relative inline-block px-[8px]">
                {" "}
                when you grow.{" "}
                <Image
                  src={Under2}
                  alt="underline"
                  className={`
                    absolute w-full right-[0px] bottom-[-14px] z-[-1]
                    max-[900px]:bottom-[-10px]
                    max-[500px]:bottom-[-8px]
                  `}
                />{" "}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function CTASection(props: JoinProps) {
  return (
    <div>
      <div className="px-[16px]">
        <div className="flex justify-center">
          <Tag value="Join the waitlist" />
        </div>
        <div className="pt-4">
          <div className="flex justify-center items-center">
            <h2 className="h2 text-center pr-[10px]">If this feels fair, </h2>
            <Image src={Hand} alt="hand writing with pc infront" />
          </div>
          <div className="flex justify-center">
            <h2 className="h2 text-center">come build with us.</h2>
          </div>
        </div>
        <div className={`
          flex justify-center pt-[37px] gap-[10px]
          max-[760px]:flex-col max-[760px]:items-center unzoom
        `}>
          <div>
            <div className={`
                w-[397px] mx-auto
                max-[1300px]:w-[300px]
                max-[760px]:w-full
              `}>
              <InputCTA className="!h-[52px] input-cta" setHigherValue={props.setEmail} />
            </div>
          </div>
          <ButtonPrimary value="Join the waitlist" onClick={props.onJoin} />
        </div>
        <div className={`
          flex justify-center items-center pt-[39px] gap-[8px]
          max-[760px]:flex-col max-[760px]:items-center
        `}>
          <div className="flex items-center">
            <Image
              src={Conversation}
              alt="message bubble"
            />
            <p className="text-secondary-700 body1 pl-3">Questions?</p>
          </div>
          <div className="">
            <a
              href="mailto:ask@thecollege.co.in"
              className="text-secondary h6 pb-1 border-b-4 border-secondary hover:text-primary hover:border-primary transition-colors duration-500">
              ask@thecollege.co.in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Pricing() {
  const [showModal, setShowModal] = useState(false)
  const [shouldDisplay, setShouldDisplay] = useState(false)
  const [email, setEmail] = useState("")

  async function handleJoin() {
    try {
      await postEmail({ email })
  
      setShowModal(true)
      setShouldDisplay(true)
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
      <section className={`
        max-w-[1560px] mx-auto
        max-[1560px]:max-w-[90%]
      `}>
        <FirstSection />
      </section>
      <section className="bg-[#F5F5F5] py-[100px]">
        <div className="max-w-[1560px] mx-auto">
          <CTASection onJoin={() => handleJoin()} setEmail={setEmail} />
        </div>
        <div className="pt-[90px]">
          <Marq />
        </div>
      </section>
    </div>
  )
}