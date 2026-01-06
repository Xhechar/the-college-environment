import Image from "next/image";

import LogoSmall from "@/app/assets/logo-white-small.png";

type ButtonNoIconProps = {
  value: string,
  isPrimary?: boolean,
  onClick?: any,
  hoverText?: string;
  hoverTextStyle?: string;
  active?: boolean;
}

// ${props.isPrimary ? `bg-primary text-primary-100 border-transparent border-1` : `bg-transparent text-[#FF914D] border-[#FF914D] border-1 hover:bg-primary`}

// FF914D


export default function ButtonNoIcon(props: ButtonNoIconProps) {
  const hoverText = props.hoverText || props.value;

  return (
    <button
      onClick={props.onClick}
      className={`
        ${props.isPrimary ? `bg-primary text-primary-100 border-1 border-transparent` : `bg-transparent text-[#FF914D] border-[#FF914D] border-1 hover:bg-primary hover:text-primary-100`}
        ${props.active && `shadow-[0_0_8px_0_#FF7C2B]`}
        relative overflow-hidden flex px-[22px] py-[12px] outline-none
        items-center gap-[8px] rounded-[8px] cursor-pointer hover:shadow-[0_0_8px_0_#FF7C2B]
        text-[24px] leading-[36px] tracking-[-1px] box-border h-[52px] transition-shadow,color duration-500
        group shrink-0
      `}
    >
      {/* Default content */}
      <div className="flex items-center gap-[8px] transition-transform duration-500 group-hover:translate-x-0 -translate-x-[130%]">
        <div>
          <p>{props.value}</p>
        </div>
      </div>

      {/* Hover content */}
      <div className="absolute inset-0 flex items-center gap-[8px] px-[22px] transition-transform duration-500 translate-x-0 group-hover:translate-x-[130%]">
        <div>
          <p>{hoverText}</p>
        </div>
      </div>
    </button>
  )
}

// export default function ButtonPrimary(props: ButtonPrimaryProps) {
//   const hoverText = props.hoverText || props.value;

//   return (
//     <button
//       className={`
//       relative overflow-hidden flex bg-primary px-[22px] py-[12px] text-primary-100
//       items-center gap-[8px] rounded-[8px] cursor-pointer hover:shadow-[0_0_8px_0_#FF7C2B]
//       text-[24px] leading-[36px] tracking-[-1px] box-border h-[52px] transition-shadow duration-500
//       group shrink-0
//       `}
//     >
//       {/* Default content */}
//       <div className="flex items-center gap-[8px] transition-transform duration-500 group-hover:translate-x-0 -translate-x-[130%]">
//         <div>
//           <p>{props.value}</p>
//         </div>
//         <div>
//           <Image
//             src={LogoSmall}
//             alt="the college logo small white"
//           />
//         </div>
//       </div>

//       {/* Hover content */}
//       <div className="absolute inset-0 flex items-center gap-[8px] px-[22px] transition-transform duration-500 translate-x-0 group-hover:translate-x-[130%]">
//         <div>
//           <p>{hoverText}</p>
//         </div>
//         <div>
//           <Image
//             src={LogoSmall}
//             alt="the college logo small white"
//           />
//         </div>
//       </div>
//     </button>
//   )
// }