type ButtonSecondaryNoIconProps = {
  value: string
}

export default function ButtonSecondaryNoIcon(props: ButtonSecondaryNoIconProps) {
  return (
    <button
      className={`
      flex bg-transparent px-[22px] py-[12px] text-[#FF914D]
      items-center gap-[8px] rounded-[8px] cursor-pointer hover:shadow-[0_0_8px_0_#FF7C2B]
      text-[24px] leading-[36px] tracking-[-1px] box-border h-[52px] transition-shadow duration-500
      `}
    >
      {props.value}
    </button>
  )
}