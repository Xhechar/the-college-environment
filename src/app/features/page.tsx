"use client"

import Image from "next/image"
import Tag, { TagBig } from "../components/Tag"
import InputCTA from "../components/InputCTA"
import ButtonPrimary from "../components/ButtonPrimary"

import Conversation from "@/app/assets/conversation.png";
import Marq from "../components/Marq"

import Pc from "@/app/assets/pc.png"

import Conf1 from "@/app/assets/conf1.png"
import Conf2 from "@/app/assets/conf2.png"
import Conf3 from "@/app/assets/conf3.png"
import Conf4 from "@/app/assets/conf4.png"

import FCircle from "@/app/assets/fcircle.png"

import C1 from "@/app/assets/c1.png"
import C2 from "@/app/assets/c2.png"
import C3 from "@/app/assets/c3.png"
import C4 from "@/app/assets/c4.png"
import C5 from "@/app/assets/c5.png"
import C6 from "@/app/assets/c6.png"
import { JoinProps } from "../page";
import Modal from "../components/Modal";
import { useState } from "react";
import { postEmail } from "../lib/api"

function FirstSection(props: JoinProps) {
  return (
    <div className="scale-[0.9] origin-top">
      <div className="mx-[16px]">
        <div className="pt-[100px] relative">
          <h1 className="text-center">
            {/* <span className="relative">Stop juggling<Image src={FCircle} alt="circle" className={`
              absolute left-[-30px] top-[-26px] max-w-[none] w-[110%] z-[-1]
              max-[760px]:top-[-12px]
              max-[336px]:top-[20px] max-[336px]:left-[-20px] max-[336px]:w-[150%]
            `} /></span> ten different tools</h1> */}
            <span className="relative">
              One Platform.
              <Image
                src={FCircle}
                alt="circle"
                className={`
              absolute left-[-10px] top-[-26px] max-w-[none] w-[110%] z-[-1]
              max-[760px]:top-[-12px]
              max-[336px]:top-[20px] max-[336px]:left-[-20px] max-[336px]:w-[150%]
            `}
              />
            </span>{" "}
            Zero chaos.
          </h1>
          <div
            className={`absolute right-[180px] top-[60px] z-[-1]
            max-[1040px]:right-[0px]
            max-[396px]:top-[30px]
          `}
          >
            <Image
              src={Conf3}
              alt="confetti"
              className={`
              max-[1040px]:w-[90%]
            `}
            />
          </div>
        </div>
        <div className="relative">
          <p className="font-bold text-[24px] leading-[28px] text-center pt-[28px] max-w-[950px] mx-auto text-sub max-[800px]:text-[16px] max-[800px]:leading-[20px]">
            {/* Everything you need - now in one place, with one login */}
            Manage your community, courses, engagement and payments like never
            before
          </p>
          <div
            className={`
            absolute left-[60px] top-[0px] z-[-1]
            max-[1040px]:left-[10px]
            max-[396px]:top-[-20px] max-[396px]:left-[0px]
          `}
          >
            <Image
              src={Conf4}
              alt="confetti"
              className={`
              max-[1040px]:w-[90%]
            `}
            />
          </div>
        </div>
        <div className="flex justify-center pt-[50px] max-[800px]:pt-[29px]">
          <TagBig value="Be the first to experience it" />
        </div>
        <div className="flex justify-center pt-[33px]">
          <div
            className={`
            flex gap-[10px]
            max-[760px]:flex-col max-[760px]:items-center max-[760px]:grow
          `}
          >
            <div
              className={`
              w-[397px] mx-auto
              max-[1300px]:w-[300px]
              max-[760px]:w-full unzoom
            `}
            >
              <InputCTA
                className="!h-[52px] input-cta"
                setHigherValue={props.setEmail}
              />
            </div>
            <div className="max-[760px]:pt-[8px] unzoom">
              <ButtonPrimary value="Join the waitlist" onClick={props.onJoin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type FeatureCardProps = {
  image: any,
  header: string,
  sub: string,
}

function FeatureCard(props: FeatureCardProps) {
  return (
    <div className="bg-primary-alpha-10 p-[12px] rounded-[24px]">
      <div className="bg-white rounded-[24px] px-[22px] py-[30px] border-1 border-[#E8EBED] transition-shadow duration-700 feature">
        <div>
          <div>
            <Image src={props.image} alt="card image" className="w-full h-full" />
          </div>
          <div className="pt-[39px]">
            <div>
              <h2 className="h2">{props.header}</h2>
            </div>
            <div className="pt-[15px]">
              <p className="body2 text-secondary-700">{props.sub}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CTASection(props: JoinProps) {
  return (
    <div>
      <div className="px-[16px]">
        <div className="flex justify-center">
          <Tag value="Your feedback, our features" />
        </div>
        <div className="pt-4">
          <div className="flex justify-center items-center">
            <Image src={Pc} alt="pc" />
            <h2 className="h2 text-center pl-[10px]">Next feature:</h2>
          </div>
          <div className="flex justify-center">
            <h2 className="h2 text-center">only what you need.</h2>
          </div>
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

const features = [
  {
    image: C1,
    header: "Community",
    sub: `
      Group discussion happens here. Posts, comments, topics, likes, mentions, photos, videos, GIFs, polls, real-time interactions, and notifications. 
      All of these increase your engagement.
    `
  },
  {
    image: C2,
    header: "Classroom",
    sub: `
      Put your courses in the same place as your community. Courses, modules, videos, resources, searchable transcripts, and progress tracking. Increasing your completion rate.
    `
  },
  {
    image: C3,
    header: "Search",
    sub: `
      Search posts, comments, course content, and members - with a single search box. Like Robot? Find all group discussions, course content, and members who mentioned “Robot”.
    `
  },
  {
    image: C4,
    header: "Notifications & Profile",
    sub: `
      Follow interesting posts, get notifications in-app and via email, tune your preferences, and get email digests of popular posts. Use 1-profile for all the groups you're in.
    `
  },
  {
    image: C5,
    header: "Email Broadcast",
    sub: `
      Email broadcast to all members with 1- click. Write a post, click a button, and the post sends to all your members via email. No segmenting lists, tags, or formatting - it just works.
    `
  },
  {
    image: C6,
    header: "Metrics",
    sub: `
      Monitor the health of your community with single dashboard and a few key metrics. Track growth, engagement, and progress at the group or member level. See how engaging thecollege is!
    `
  },
]

export default function Features() {

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
      <section>
        <div className="max-w-[1560px] mx-auto">
          <FirstSection onJoin={() => handleJoin()} setEmail={setEmail} />
        </div>
      </section>
      <section>
        <div className={`
          mx-auto grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-[22px] gap-y-[53px] pt-[90px] pb-[100px]
          max-w-[1454px]
          max-[1540px]:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]
          max-[800px]:grid-cols-[repeat(auto-fit,100%)]
        `}>
          {
            features.map((f, i) => (
              <div key={i}>
                <FeatureCard {...f} />
              </div>
            ))
          }
        </div>
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