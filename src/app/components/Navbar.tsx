import Image from "next/image";

import Logo from '@/app/assets/logo.png'
import Link from "next/link";
import Nav from "./Nav";

type NavlinkProps = {
  value: string
}

function Navlink(props: NavlinkProps) {
  return (
    <div className="flex items-center group transition-transform gap-1">
      <span className="text-secondary font-[600] text-[24px] leading-[36px] tracking-[-1px]">{props.value}</span>
      <span className="transition-all duration-500 ease-out inline-block w-0 group-hover:w-[16px] h-[1px] bg-primary"></span>
    </div>
  )
}

export default function Navbar() {
  return (
    <Nav />
  )
}