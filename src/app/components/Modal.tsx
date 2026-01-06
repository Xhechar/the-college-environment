import Image from "next/image";

import MCircle from "@/app/assets/mcircle.png";
import Smile from "@/app/assets/smile.png";

import FBook from "@/app/assets/facebook.png";
import Threads from "@/app/assets/threads.png";
import Insta from "@/app/assets/insta.png";
import Linked from "@/app/assets/linked.png";
import X from "@/app/assets/x.png";
import Whats from "@/app/assets/whats.png";
import Clip from "@/app/assets/clip.png";
import OArrow1 from "@/app/assets/oarrow1.png";
import OArrow2 from "@/app/assets/oarrow2.png";
import Link from "next/link";

// const message = "🚀 Join me on The College - First 100 get a Founding Creator badge!";
const message = `
🚀 Excited to join TheCollege! One platform to build communities, teach, and earn - all in one tab.
https://www.thecollege.co.in/
#Creators #Community #TheCollege`;
const url = "https://www.thecollege.co.in/";

// https://www.linkedin.com/sharing/share-offsite/?text=Finally+a+community+for+creatives...%0Ahttps%3A%2F%2Fon.contra.com%2FH6Kkr8

const shareLinks = {
  facebook: `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(message)}`,
  threads: `https://www.threads.net/intent/post?text=${encodeURIComponent(message)}`,
  instagram: `https://www.instagram.com/thecollege.co.in?igsh=c2d0MXdrcmt2MHVq`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?text=${encodeURIComponent(message)}`,
  x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`,
  whatsapp: `https://wa.me/?text=${encodeURIComponent(message)}`,
};

function Wrapped(props: { href: string, children: any }) {
  return (
    <Link href={props.href}>
      {props.children}
    </Link>
  )
}

type ModalProps = {
  onClose: any,
  shouldClose: boolean
}

export default function Modal(props: ModalProps) {

  function handleCopy(platform: keyof typeof shareLinks) {
    const textToCopy = shareLinks[platform];

    navigator.clipboard.writeText(textToCopy).then(() => {
      // alert(`${platform} link copied!`);
      window.open(textToCopy, "_blank");
    });
  }

  function handleMainCopy() {
    navigator.clipboard.writeText("https://www.thecollege.co.in/").then(() => {
      alert(`link copied!`);
    });
  }

  return (
    <div
      className={`
        w-full h-full bg-[rgba(105,119,145,70%)] top-[0px] fixed z-50 pt-[5%] animate-fade-in-fast zoom
        ${props.shouldClose ? `!animate-fade-out-fast` : ``}
      `}
      onClick={() => props.onClose()}
    >
      <div
        className={`
          max-w-[1200px] mx-auto rounded-[24px] bg-[#D4D8E0] p-[20px] z-10 relative animate-slide-up-bounce
          ${props.shouldClose ? `!animate-slide-down` : ``}
          max-[500px]:p-[10px]
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* <Image src={Thumb} alt="thumb" className={`
            absolute right-[0px] top-[0px] translate-x-[40%] translate-y-[-30%]
            max-[900px]:w-[100px] max-[900px]:translate-x-[0]
          `} /> */}
        </div>
        <div
          className={`
          bg-white rounded-[16px] py-[55px] px-[32px]
          max-[500px]:py-[32px] max-[500px]:px-[16px] max-[500px]:overflow-scroll
        `}
        >
          <div className="pt-4">
            <div className="flex justify-center items-center">
              <h2 className="h2 text-center">
                Awesome,{" "}
                <span className="relative z-[1]">
                  You're in!
                  <Image
                    src={MCircle}
                    alt="circle"
                    className={`
                  absolute top-[-20px] left-[-20px] w-[120%] max-w-[none] z-[-1]
                  max-[1040px]:top-[-20px]
                `}
                  />
                </span>
              </h2>
            </div>
          </div>
          <div className="pt-4">
            <p className="body0 text-center text-sub max-[400px]:text-[18px]">
              Shh. Here's the secret...
            </p>
          </div>
          <div className="pt-4">
            <h3
              className={`
              text-center text-[30px] font-[700] leading-[40px] relative
              max-[1040px]:text-[26px] max-[1040px]:leading-[28px] z-[2]
              max-[500px]:text-[24px]
              max-[400px]:text-[20px]
            `}
            >
              First 100 get '
              <span className="text-primary">Founding Creator</span>' badge{" "}
              <span className="text-primary">+</span> 0% fees for 1 year{" "}
              <span className="text-primary">+</span> early access. No ads. No
              monthly fees. No hidden charges. No algorithmic games.
              <br /> We earn{" "}
              <strong className="font-semibold text-neutral-900">
                2%
              </strong>{" "}
              only, when you earn.
              <Image
                src={Smile}
                alt="smile"
                className={`
                  absolute bottom-[-80px] w-[10%] z-[-1]
                  max-[500px]:w-[20%] max-[500px]:bottom-[-40px]
                `}
              />
            </h3>
          </div>
          <div className="">
            <p className="body0 text-center text-sub pt-[39px] max-[400px]:pt-[20px]">
              <span className="border-t-2 border-[#BEC5D0] pt-[25px] inline-block max-[400px]:text-[18px] max-[400px]:pt-[20px]">
                Good secrets don't stay hidden. Pass it on carefully
              </span>
            </p>
          </div>
          <div className="relative max-w-[700px] mx-auto z-[1]">
            <div
              className={`
              absolute right-[16px] top-[40%] z-[-1]
              max-[760px]:right-[0px] max-[760px]:hidden
            `}
            >
              <Image src={OArrow1} alt="arrow" />
            </div>
            <div
              className={`
              flex justify-center items-center pt-[22px] gap-[32px] relative
              max-[450px]:gap-[12px]
            `}
            >
              <Wrapped href={shareLinks.whatsapp}>
                <div
                  className={`hover:translate-y-[-6px] duration-700 cursor-pointer relative group`}
                  onClick={() => handleCopy("whatsapp")}
                >
                  <Image src={Whats} alt="whatsapp" />
                  <div
                    className={`
                  w-[42px] h-[4px] bg-[#FFBF9E] bottom-[-12px] blur-[6px] absolute left-[50%] translate-x-[-50%] translate-y-[20px] transition-transform,opacity duration-500 opacity-0
                  group-hover:translate-y-[50%] group-hover:opacity-[100%]
                `}
                  ></div>
                </div>
              </Wrapped>
              <Wrapped href={shareLinks.instagram}>
                <div
                  className={`hover:translate-y-[-6px] duration-700 cursor-pointer relative group`}
                  onClick={() => handleCopy("instagram")}
                >
                  <Image src={Insta} alt="instagram" />
                  <div
                    className={`
                  w-[42px] h-[4px] bg-[#FFBF9E] bottom-[-12px] blur-[6px] absolute left-[50%] translate-x-[-50%] translate-y-[20px] transition-transform,opacity duration-500 opacity-0
                  group-hover:translate-y-[50%] group-hover:opacity-[100%]
                `}
                  ></div>
                </div>
              </Wrapped>
              <Wrapped href={shareLinks.x}>
                <div
                  className={`hover:translate-y-[-6px] duration-700 cursor-pointer relative group`}
                  onClick={() => handleCopy("x")}
                >
                  <Image src={X} alt="x" />
                  <div
                    className={`
                  w-[42px] h-[4px] bg-[#FFBF9E] bottom-[-12px] blur-[6px] absolute left-[50%] translate-x-[-50%] translate-y-[20px] transition-transform,opacity duration-500 opacity-0
                  group-hover:translate-y-[50%] group-hover:opacity-[100%]
                  `}
                  ></div>
                </div>
              </Wrapped>
              <Wrapped href={shareLinks.linkedin}>
                <div
                  className={`hover:translate-y-[-6px] duration-700 cursor-pointer relative group`}
                  onClick={() => handleCopy("linkedin")}
                >
                  <Image src={Linked} alt="linkedin" />
                  <div
                    className={`
                    w-[42px] h-[4px] bg-[#FFBF9E] bottom-[-12px] blur-[6px] absolute left-[50%] translate-x-[-50%] translate-y-[20px] transition-transform,opacity duration-500 opacity-0
                    group-hover:translate-y-[50%] group-hover:opacity-[100%]
                  `}
                  ></div>
                </div>
              </Wrapped>
              <Wrapped href={shareLinks.facebook}>
                <div
                  className={`hover:translate-y-[-6px] duration-700 cursor-pointer relative group`}
                  onClick={() => handleCopy("facebook")}
                >
                  <Image src={FBook} alt="facebook" />
                  <div
                    className={`
                  w-[42px] h-[4px] bg-[#FFBF9E] bottom-[-12px] blur-[6px] absolute left-[50%] translate-x-[-50%] translate-y-[20px] transition-transform,opacity duration-500 opacity-0
                  group-hover:translate-y-[0px] group-hover:opacity-[100%]
                `}
                  ></div>
                </div>
              </Wrapped>
              <Wrapped href={shareLinks.threads}>
                <div
                  className={`hover:translate-y-[-6px] duration-700 cursor-pointer relative group`}
                  onClick={() => handleCopy("threads")}
                >
                  <Image src={Threads} alt="threads" />
                  <div
                    className={`
                  w-[42px] h-[4px] bg-[#FFBF9E] bottom-[-12px] blur-[6px] absolute left-[50%] translate-x-[-50%] translate-y-[20px] transition-transform,opacity duration-500 opacity-0
                  group-hover:translate-y-[50%] group-hover:opacity-[100%]
                `}
                  ></div>
                </div>
              </Wrapped>
            </div>
          </div>
          <div
            className={`
              pt-[39px]
              max-[760px]:flex-col max-[760px]:items-center
              max-[400px]:pt-[20px]
            `}
          >
            <div className={`relative w-full h-full flex justify-center`}>
              <div
                className={`
                clipboard w-[462px] px-[22px] text-[18px] font-semibold tracking-[-1px] bg-white transition-shadow duration-500 h-[72px] border-1 border-primary-600 relative
                flex justify-center items-center z-[1]
                max-[500px]:w-full
              `}
              >
                <div
                  className={`
                  absolute right-[-22%] top-[0px] z-[-1]
                  max-[760px]:hidden
                `}
                >
                  <Image src={OArrow2} alt="arrow" />
                </div>
                <span
                  className={`
                  text-[#282D4D] text-[24px] leading-[24px] tracking-[-1px] font-[500]
                  max-[540px]:text-[18px]
                  `}
                  onClick={() => handleMainCopy()}
                >
                  https://www.thecollege.co.in/
                </span>
                {/* <div
                  className={`
                    absolute right-[12px] top-[50%] translate-y-[-50%] hover:translate-y-[-70%] duration-700 cursor-pointer group
                    max-[760px]:hidden
                    max-[500px]:right-[0px]
                    max-[350px]:right-[4px]

                  `}
                  onClick={() => handleMainCopy()}
                >
                  <Image src={Clip} alt="clip" className={`
                    max-[400px]:w-[100%]
                  `} />
                  <div className={`
                    w-[42px] h-[4px] bg-[#FFBF9E] bottom-[-12px] blur-[6px] absolute left-[50%] translate-x-[-50%] translate-y-[20px] transition-transform,opacity duration-500 opacity-0
                    group-hover:translate-y-[0px] group-hover:opacity-[100%]
                  `}></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// Whats
// insta
// X
// link
// face
// thras