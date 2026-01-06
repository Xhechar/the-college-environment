"use client"

import Image, { StaticImageData } from "next/image";
import InputCTA from "./components/InputCTA";
import ButtonPrimary from "./components/ButtonPrimary";
import Tag from "./components/Tag";

import Avatar1 from "@/app/assets/avatar1.png";
import Avatar2 from "@/app/assets/avatar2.png";
import Avatar3 from "@/app/assets/avatar3.png";
import Avatar4 from "@/app/assets/avatar4.png";

import Hero1 from "@/app/assets/hero1.png";
import Hero2 from "@/app/assets/hero2.png";
import Hero3 from "@/app/assets/hero3.png";

import Conf1 from "@/app/assets/conf1.png"
import Conf2 from "@/app/assets/conf2.png"
import Conf3 from "@/app/assets/conf3.png"

import Circ from "@/app/assets/circ.png"
import Swirl from "@/app/assets/swirl.png"
import Under1 from "@/app/assets/under1.png"
import FSwirl from "@/app/assets/fswirl.png"
import Face from "@/app/assets/face.png"
import Thumb from "@/app/assets/thumb.svg"
import Under2 from "@/app/assets/under2.png"
import Under3 from "@/app/assets/under3.png"

import Ap from "@/app/assets/ap.png"

import Man from "@/app/assets/wait.png";

import Conversation from "@/app/assets/conversation.png";

import Arrow1 from "@/app/assets/arrow1.png";
import Arrow2 from "@/app/assets/arrow2.png";
import Arrow3 from "@/app/assets/arrow3.png";
import Arrow4 from "@/app/assets/arrow4.png";
import Arrow5 from "@/app/assets/arrow5.png";
import Arrow6 from "@/app/assets/arrow6.png";

import Love from "@/app/assets/love.png";
import RCircle from "@/app/assets/rcircle.png";
import Smile from "@/app/assets/smile.png";
import MLove from "@/app/assets/mlove.png";


import { useEffect, useRef, useState } from "react";
import ButtonNoIcon from "./components/ButtonNoIcon";
import InputCTA2 from "./components/InputCTA2";
import Marq from "./components/Marq";
import Total from "./components/Total";
import Modal from "./components/Modal";
import { getTotal, postEmail } from "./lib/api";

type postEmailResponse = {
  status: boolean,
  count: number,
}

function toHundreds(num: number): number {
  if (num < 10) return num; // No rounding needed for single digits

  // Determine the highest place (10, 100, 1000, etc.)
  const digits = Math.floor(Math.log10(num));
  const place = Math.pow(10, digits);

  return Math.floor(num / place) * place;
}

const avatars = [
  {
    image: Avatar1
  },
  {
    image: Avatar2
  },
  {
    image: Avatar3
  },
  {
    image: Avatar4
  },
]

type AvatarSpreadProps = {
  images: Array<{ image: StaticImageData }>,
  total?: number
}

function AvatarSpread(props: AvatarSpreadProps) {
  return (
    <div className={`
      flex items-center relative left-[32px]
      max-[550px]:scale-[80%] max-[550px]:left-[24px]
      // max-[760px]:pt-[20px]
    `}>
      {
        props.images.map((o, i) => (
          <div key={i}
            style={{
              position: "relative",
              transform: `translateX(${-i * 16 + `px`})`
            }}
          >
            <Image src={o.image} alt="image" />
          </div>
        ))
      }
      <div className="relative" style={{ transform: `translateX(${-props.images.length * 16 + `px`})` }}>
        <Total total={props.total || 0} />
      </div>
    </div>
  )
}

type HeroCardProps = {
  image: StaticImageData,
  sub: string,
  sub2: string,
  sub3: string,
  topClass?: string
}

function HeroCard(props: HeroCardProps & React.ComponentProps<"div">) {
  return (
    <div className="relative rounded-[32px] grow">
      <div
        // className={`min-[1600px]:w-[500px] min-[1600px]:h-[700px] w-[300px] h-[500px] relative ${props.className} hover:scale-120 transition-transform duration-600`}
        className={`relative ${props.className} hover:scale-100 transition-transform duration-500 scale-90`}
      >
        <Image
          src={props.image}
          alt="hero card"
          className="object-cover w-full h-full rounded-[16px]"
        />
      </div>
      <div className={`${props.topClass} pointer-events-none`}>
        <div
          className={`
            absolute !top-1/2 !left-1/2 translate-x-[-50%] translate-y-[-50%] z-2 flex flex-col justify-center w-full
          `}>
          <div>
            <h5 className="text-center body0 text-white">For</h5>
          </div>
          <div className={`
            pt-4 px-5
            max-[800px]:pt-2 max-[800px]:px-2
          `}>
            <h2 className={`
              text-center text-white text-[48px] leading-[52px] font-[650] tracking-[0px]
              max-[1040px]:!text-[28px] max-[1040px]:leading-[32px]
              max-[800px]:!text-[20px] max-[800px]:leading-[22px]
              max-[400px]:!text-[16px] max-[400px]:leading-[16px]
            `}>
              {props.sub}
            </h2>
            <h2 className={`
              text-center text-white text-[48px] leading-[52px] font-[650] tracking-[0px]
              max-[1040px]:!text-[28px] max-[1040px]:leading-[32px]
              max-[800px]:!text-[20px] max-[800px]:leading-[22px]
              max-[400px]:!text-[16px] max-[400px]:leading-[16px]
            `}>
              {props.sub2}
            </h2>
            <h2 className={`
              text-center text-white text-[48px] leading-[52px] font-[650] tracking-[0px]
              max-[1040px]:!text-[28px] max-[1040px]:leading-[32px]
              max-[800px]:!text-[20px] max-[800px]:leading-[22px]
              max-[400px]:!text-[16px] max-[400px]:leading-[16px]
            `}>
              {props.sub3}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export type JoinProps = {
  onJoin: any,
  setEmail: any
}

type HeroSectionProps = {
  total: number
}

function HeroSection(props: JoinProps & HeroSectionProps) {
  return (
    <div className="scale-[0.9] origin-top">
      <div className="mx-[16px]">
        <div
          className={`
          pt-[100px] relative
          max-[1540px]:pt-[50px] max-[1540px]:max-w-[1190px] max-[1540px]:mx-auto
          hero-first zoom
        `}
        >
          <h1 className="text-center relative z-[1]">
            Creators: Stop juggling Facebook groups, Telegram & WhatsApp{" "}
            <span className="relative">
              channels
              <Image
                src={Circ}
                alt="circle"
                className={`
                absolute right-[-20px] top-[10px] max-w-[none] w-[110%] z-[-1]
              `}
              />
            </span>
          </h1>
          <div
            className={`
            absolute right-0 top-[60px]
            max-[1281px]:right-[-50px]
            max-[1205px]:right-[0px]
            max-[1105px]:top-[0px]
            max-[760px]:top-[-20px]
          `}
          >
            <Image
              src={Conf3}
              alt="confetti"
              className={`
              max-[1040px]:w-[70%] z-[-1] max-[1040px]:ml-auto
              max-[760px]:w-[40%]
            `}
            />
          </div>
        </div>
        <div className="relative zoom">
          <p className="body0 text-[26px] leading-[36px] text-center pt-[49px] max-w-[1100px] mx-auto text-sub z-[1] relative max-[550px]:pt-[30px] tracking-[-0.5px]">
            Host your free or paid communities, courses, conversations and
            payments all in one place. No ads, no algorithms, no monthly fees.
            You fully own and control everything.
          </p>
          <div
            className={`
            absolute left-[60px] top-[70px]
            max-[1040px]:left-[30px]
            max-[760px]:top-[0px]
          `}
          >
            <Image
              src={Conf2}
              alt="confetti"
              className={`
              max-[1040px]:w-[70%] z-[-2]
              max-[760px]:w-[40%]
            `}
            />
          </div>
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
        <div className="flex justify-center pt-[33px] max-[760px]:pt-[20px] zoom">
          <Tag value={`Join ${props.total}+ Collegers`} />
        </div>
        <div className="flex justify-center pt-[33px] max-[760px]:pt-[20px] max-[550px]:pt-[0px] zoom">
          <AvatarSpread images={avatars} total={props.total} />
        </div>
      </div>
      <div
        className={`
        pt-[100px]
        max-[1700px]:max-w-[90%] max-[1700px]:mx-auto
        max-[1500px]:pt-[50px]
        max-[950px]:pt-[20px]
        card-first zoom
      `}
      >
        <div className="flex justify-center relative">
          <HeroCard
            image={Hero1}
            className={`rotate-[-8deg] top-[24px] ml-[0] left-[50px] max-[740px]:left-[25px] max-[500px]:left-[10px]`}
            topClass={`rotate-[-8deg] top-[24px] h-full w-full absolute left-[50px] max-[740px]:left-[25px] max-[500px]:left-[10px]`}
            sub="Teachers"
            sub2="&"
            sub3="Coaches"
          />
          <HeroCard
            image={Hero2}
            className="z-1"
            sub="Mentors"
            sub2="&"
            sub3="Trainers"
          />
          <HeroCard
            image={Hero3}
            className={`rotate-[7deg] top-[24px] mr-[0] left-[-50px] max-[740px]:left-[-25px] max-[500px]:left-[-10px]`}
            topClass={`rotate-[7deg] top-[24px] h-full w-full absolute left-[-50px] max-[740px]:left-[-25px] max-[500px]:left-[-10px]`}
            sub="Experts"
            sub2="&"
            sub3="Professionals"
          />
          <div
            className={`
            absolute left-1/2 top-[-140px] translate-x-[-50%] w-full
            max-[1000px]:top-[-50px]
            max-[550px]:top-[-30px]
            max-[350px]:top-[-20px]
          `}
          >
            <Image src={Swirl} alt="confetti" />
          </div>
          <div
            className={`
            absolute bottom-[-100px] w-full left-[-100px]
            max-[1560px]:left-[0px]
          `}
          >
            <Image
              src={Conf1}
              alt="confetti"
              className={`
              max-[1040px]:w-[10%] z-[-1]
            `}
            />
          </div>
        </div>
      </div>
      <div>
        <div
          className={`
          pt-[50px] pb-[78px] relative flex justify-center
          max-[540px]:max-w-[320px] max-[540px]:mx-auto zoom
        `}
        >
          <h1 className="text-center inline relative">
            and for{" "}
            <span className="relative">
              everyone!{" "}
              <Image
                src={Ap}
                alt="hmm"
                className={`
              absolute right-[-56px] top-[-32px]
              max-[540px]:w-[20%] max-[540px]:right-[-36px] max-[540px]:top-[-20px]
            `}
              />
            </span>
            {/* <div className="absolute right-[-48px] top-[-40px]">
              <Image src={Ap} alt="hmm" />
            </div> */}
            <div className="absolute left-1/2 bottom-[-24px] translate-x-[-50%] w-full">
              <Image
                src={Under1}
                alt="underline"
                className={`
                mx-auto w-full
                max-[540px]:w-[90%]
              `}
              />
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}

type ShouldDisplayProps = {
  shouldDisplay: boolean,
  children: any
}

function ShouldDisplay(props: ShouldDisplayProps) {
  return (
    <div className={`${props.shouldDisplay ? `animate-fade-in` : `hidden`} transition-opacity duration-500 top-0 pb-[100px]  w-full`}>
      {props.children}
    </div>
  )
}

type TabProps = {
  shouldDisplay: boolean
}

function TabOne(props: TabProps) {
  return (
    <div className="relative scale-[0.9] origin-top">
      <ShouldDisplay shouldDisplay={props.shouldDisplay}>
        <div className="flex justify-center w-full">
          <Tag value="About Us" />
        </div>
        <div
          className={`
          pt-[22px] max-w-[1500px] mx-auto relative px-[32px]
        `}
        >
          <div
            className={`
            absolute left-[-60px] bottom-[-60px]
            max-[1600px]:left-[0px]
          `}
          >
            <Image
              src={Face}
              alt="face"
              className={`
              z-[-1] relative
              max-[1040px]:w-[95%]
            `}
            />
          </div>
          <h2 className="h2 text-center text-secondary-1000 text-[40px]">
            A platform to create and grow free or paid communities. It lets
            anyone bring people together, share knowledge, engage, and earn
            without limits -
            <br />
            <span className="relative">
              {" "}
              all in one place.{" "}
              <Image
                src={Under2}
                alt="underline 2"
                className="absolute left-[0px] bottom-[-12px] z-[-1]"
              />{" "}
            </span>
          </h2>
        </div>
      </ShouldDisplay>
    </div>
  );
}

function TabTwo(props: TabProps) {
  return (
    <div>
      <ShouldDisplay shouldDisplay={props.shouldDisplay}>
        <div className="flex justify-center">
          <Tag value="Our Users" />
        </div>
        <div className="pt-[22px] max-w-[1270px] mx-auto px-4 relative">
          <h2 className="h2 text-center text-secondary-1000 z-[10] relative text-[40px]">
            Anyone who loves to <span className="relative">teach, share skills <Image src={Under3} alt="underline 2" className="absolute left-[0px] bottom-[-13px] w-full z-[-1]" /></span> and earn by building private communities,
            without using 10 different tools. Especially for coaches, mentors, teachers, experts, professionals & trainers.
          </h2>
          <div className={`
            absolute right-[-30px] top-[-30px]
            max-[1350px]:right-[0px]
            max-[1040px]:top-[-10px]
          `}>
            <Image src={Love} alt="love" className={`
              max-[1040px]:w-[50%] max-[1040px]:ml-auto
            `} />
          </div>
        </div>
      </ShouldDisplay>
    </div>
  )
}

function TabThree(props: TabProps) {
  return (
    <div>
      <ShouldDisplay shouldDisplay={props.shouldDisplay}>
        <div className="flex justify-center">
          <Tag value="The Problem" />
        </div>
        <div className="pt-[22px] max-w-[1350px] mx-auto px-4">
          <h2 className="h2 text-center text-secondary-1000 relative text-[40px]">
            <span className="relative">Creators <Image src={RCircle} alt="circle" className={`
              absolute top-[-22px] left-[-20px] w-[120%] max-w-[none] z-[-1] unzoom
              max-[1040px]:left-[-10px] max-[1040px]:top-[-22px]
            `} /></span> waste hours fixing tech and juggling apps (Facebook groups, Telegram, WhatsApp, Google Docs, Notion, payment apps)
            instead of actually teaching or building.
            <div className={`
              absolute right-[-20px] top-[50px]
              max-[] z-[-1] unzoom
            `}>
              <Image src={MLove} alt="love" className={`
                max-[1040px]:w-[50%] max-[1040px]:ml-auto
              `} />
            </div>
          </h2>
        </div>
        <div className="flex justify-center pt-[50px]">
          <Tag value="Solution" />
        </div>
        <div className="pt-[22px] px-4">
          <h2 className="h2 text-center text-secondary-1000 text-[40px]">
            TheCollege. All these tools in one tab. One login, one home.
          </h2>
        </div>
      </ShouldDisplay>
    </div>
  )
}

function TabFour(props: TabProps) {
  return (
    <div className="flex justify-center">
      <ShouldDisplay shouldDisplay={props.shouldDisplay}>
        <div className="flex justify-center">
          <Tag value="It is Simple" />
        </div>
        <div className="pt-[22px] px-4">
          <Image src={Smile} alt="smile" className={`
            absolute right-[50%] translate-x-[420%] top-[30px]
            max-[1120px]:w-[10%]
            max-[500px]:w-[15%] max-[500px]:translate-x-[300%]
            
          `} />
          <h2 className="h2 text-center text-secondary-1000 text-[40px]">
            <span className="relative">
              1. Create → Start a free or paid community
              <Image src={Arrow1} alt="arrow" className={`
                absolute top-[20px] left-[0px] translate-x-[-125%]
                max-[1040px]:w-[40px] max-[761px]:left-[20px] max-[761px]:top-[20px]
              `} />
            </span>
            <br />
            <span className="relative inline-block max-[761px]:pt-[16px]">
              2. Share → Add courses, posts, or events
              <Image src={Arrow2} alt="arrow" className={`
                absolute top-[20px] left-[0px] translate-x-[-125%]
                max-[1040px]:w-[40px] max-[761px]:left-[20px] max-[761px]:top-[20px]
              `} />
            </span>
            <br />
            <span className="relative inline-block max-[761px]:pt-[16px]">
              3. Invite → Bring in members who join easily
              <Image src={Arrow3} alt="arrow" className={`
                absolute top-[0px] left-[0px] translate-x-[-125%]
                max-[1040px]:w-[40px] max-[761px]:left-[20px] max-[761px]:top-[20px]
              `} />
            </span>
            <br />
            <span className="relative inline-block max-[761px]:pt-[16px]">
              4. Earn → Get paid directly from your members
              <Image src={Arrow4} alt="arrow" className={`
                absolute top-[0px] left-[0px] translate-x-[-125%]
                max-[1040px]:w-[40px] max-[761px]:left-[20px] max-[761px]:top-[20px]
              `} />
            </span>
            <br />
            <span className="relative inline-block max-[761px]:pt-[16px]">
              5. Grow → Engage, teach, and scale without limits
              <Image src={Arrow5} alt="arrow" className={`
                absolute top-[0px] left-[0px] translate-x-[-125%]
                max-[1040px]:w-[40px] max-[761px]:left-[20px] max-[761px]:top-[20px]
              `} />
            </span>
            <br />
            <span className="relative inline-block max-[761px]:pt-[16px]">
              6. Own → Your data, content & members. Fully yours.
              <Image src={Arrow6} alt="arrow" className={`
                absolute top-[0px] left-[0px] translate-x-[-125%]
                max-[1040px]:w-[40px] max-[761px]:left-[20px] max-[761px]:top-[20px]
              `} />
            </span>
            <br />
          </h2>
        </div>
      </ShouldDisplay>
    </div>
  )
}

function TabSection() {
  const [selectedTab, setSelectedTab] = useState(0);
  const divRef = useRef<HTMLDivElement | null>(null)


  function handleButtonSelect(tab: number) {
    setSelectedTab(tab);

    // if(divRef.current) {
    //   divRef.current.classList.remove('animate-fade-in')
    //   divRef.current.classList.add('animate-fade-in')
    // }
  }

  return (
    <div className={`bg-[#F5F5F5] pb-[100px] px-4`} ref={divRef}>
      <div className="flex max-[1040px]:flex-col max-[1040px]:items-center justify-center gap-[44px] pt-[100px]">
        <ButtonNoIcon
          active={selectedTab == 0}
          onClick={() => handleButtonSelect(0)}
          value="What is 'thecollege'?"
          isPrimary={selectedTab == 0}
        />
        <ButtonNoIcon
          active={selectedTab == 1}
          onClick={() => handleButtonSelect(1)}
          value="Who is it for?"
          isPrimary={selectedTab == 1}
        />
        <ButtonNoIcon
          active={selectedTab == 2}
          onClick={() => handleButtonSelect(2)}
          value="Why use 'thecollege'?"
          isPrimary={selectedTab == 2}
        />
        <ButtonNoIcon
          active={selectedTab == 3}
          onClick={() => handleButtonSelect(3)}
          value="How it works?"
          isPrimary={selectedTab == 3}
        />
      </div>
      <div className="relative top-[100px]">
        <TabOne shouldDisplay={selectedTab == 0} />
        <TabTwo shouldDisplay={selectedTab == 1} />
        <TabThree shouldDisplay={selectedTab == 2} />
        <TabFour shouldDisplay={selectedTab == 3} />
      </div>
    </div>
  )
}

function Waitlist(props: JoinProps) {
  return (
    <div className="max-w-[600px] mx-auto rounded-[24px] z-10 relative border-[16px] border-neutral-200">
      <div>
        <Image src={Thumb} alt="thumb" className={`
          absolute w-[130px] right-[-16px] top-[-20px] translate-x-[40%] translate-y-[-30%] z-[1]
          max-[900px]:w-[100px] max-[900px]:translate-x-[0]
        `} />
      </div>
      <div className="bg-[#FFFFFFCC] backdrop-blur-xs rounded-[16px] py-[55px] px-[16px]">
        <div className="flex justify-center zoom">
          <Tag value="Join the waitlist" />
        </div>
        <div className="pt-4 zoom">
          <div className="flex justify-center items-center">
            <h2 className="h2 text-center pr-[8px]">If this is you, </h2>
            <Image src={Man} alt="Man" />
          </div>
          <div className="flex justify-center">
            <h2 className="h2 text-center">join the waitlist now.</h2>
          </div>
        </div>
        <div className="pt-4 zoom">
          <p className="body1 text-center text-sub font-[600]">Psst... we've got a secret for those who join.</p>
        </div>
        <div className="max-w-[500px] mx-auto pt-[24px] unzoom max-[761px]:pt-[16px]">
          <InputCTA2 label="Email Address" required={true} setHigherValue={props.setEmail} className="input-cta" />
        </div>
        <div className="flex justify-center pt-[24px] unzoom max-[761px]:pt-[16px]">
          <ButtonPrimary value="Join the waitlist" onClick={props.onJoin} />
        </div>
        <div className={`
            flex justify-center items-center pt-[39px] gap-[8px]
            max-[760px]:flex-col max-[760px]:items-center zoom
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

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [shouldDisplay, setShouldDisplay] = useState(false)
  const [email, setEmail] = useState("")
  const [total, setTotal] = useState(0)

  async function handleJoin() {
    try {
      let result = await postEmail({ email }) as postEmailResponse;

      if(result.status) {
        setTotal(result.count);
        setShowModal(true);
        setShouldDisplay(true);
      }

    }
    catch (error) {
      alert((error as any)?.message || "Something went wrong.")
    }
  }

  async function handleGetTotal() {
    try {
      const data = await getTotal();

      setTotal(data.count)
    }
    catch (error) {
      alert("Error getting total users.")
    }
  }

  useEffect(() => {
    handleGetTotal()
  }, [])

  async function handleClose() {
    setShowModal(false)
    setTimeout(() => {
      setShouldDisplay(false)
    }, 1000)
  }

  return (
    <div>
      {shouldDisplay && <Modal onClose={() => handleClose()} shouldClose={!showModal} />}
      <section className="max-w-[1560px] mx-auto">
        <HeroSection onJoin={() => handleJoin()} setEmail={setEmail} total={total} />
      </section>
      <section className="stick-sect zoom">
        <TabSection />
      </section>
      <section className="relative overflow-hidden">
        <Image src={FSwirl} alt="swirl" className="absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] w-[70%] zoom" />
        <div className="absolute top-1/2 translate-y-[-50%] zoom">
          <Marq />
        </div>
        <div className="max-w-[1560px] mx-auto relative overflow-hidden pt-[100px]">
          <div className="pb-[112px] mx-[16px]">
            <Waitlist onJoin={() => handleJoin()} setEmail={setEmail} />
          </div>
        </div>
      </section>
    </div>
  );
}
