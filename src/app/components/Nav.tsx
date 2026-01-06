"use client";

import Image from "next/image";
import Logo from '@/app/assets/logo.png'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

type NavlinkProps = {
  value: string
  active?: boolean
}

function Navlink(props: NavlinkProps) {
  return (
    <div className="flex items-center group transition-transform gap-1">
      <span className={`
        text-secondary border-b-4 border-transparent text-[24px] leading-[36px] tracking-[-1px] nav-link hover:!text-primary
        ${props.active ? `border-b-primary !text-primary` : ``}
      `}>
        {props.value}
      </span>
      {!props.active && <span className="transition-all duration-500 ease-out inline-block w-0 group-hover:w-[16px] h-[1px] bg-primary"></span>}
    </div>
  )
}

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname()

  console.log(pathname);



  return (
    <div className="bg-[#FFE9DBB3] rounded-[22px] relative backdrop-blur-xs">
      {/* Main navbar */}
      <div className={`
        flex items-center justify-between h-[76px] px-[33px] max-[760px]:px-[16px]
        max-[760px]:justify-start max-[760px]:gap-[16px]
      `}>
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-1 bg-secondary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-1 bg-secondary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-1 bg-secondary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        <div>
          <Link href={"/"}>
            <Image src={Logo} alt="the college logo" width={210} />
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-[36px]">
          <Link href={"/features"}>
            <Navlink value="Features" active={pathname.startsWith("/features")} />
          </Link>
          <Link href={"/pricing"}>
            <Navlink value="Pricing" active={pathname.startsWith("/pricing")} />
          </Link>
          <Link href={"/privacy"}>
            <Navlink value="Privacy" active={pathname.startsWith("/privacy")} />
          </Link>
        </div>

        {/* Mobile hamburger button */}
        {/* <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-secondary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-secondary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-secondary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button> */}
      </div>

      {/* Mobile menu dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="px-[33px] pb-6 flex flex-col gap-6">
          <Link href={"/features"} onClick={() => setIsMenuOpen(false)}>
            <Navlink value="Features" />
          </Link>
          <Link href={"/pricing"} onClick={() => setIsMenuOpen(false)}>
            <Navlink value="Pricing" />
          </Link>
          <Link href={"/privacy"} onClick={() => setIsMenuOpen(false)}>
            <Navlink value="Privacy" />
          </Link>
        </div>
      </div>
    </div>
  )
}