type TotalProps = {
  total: number
}

export default function Total(props: TotalProps) {
  return (
    <div className="flex justify-center items-center w-[56px] h-[56px] bg-white border-[#E0E0E0] border-[3px] rounded-full">
      <span className="body3">+{props.total}</span>
    </div>
  )
}