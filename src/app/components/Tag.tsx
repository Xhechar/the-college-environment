import { AreaTag, parseTextWithBold } from "../utils/text.parser"

type TagProps = {
  value: string
}

export default function Tag(props: TagProps) {
  return (
    <div>
      <span className="bg-mint-600 inline-block px-[12px] py-[8px] rounded-[24px] body4 text-[16px] text-center">— {props.value} —</span>
    </div>
  )
}

type TagBigProps = {
  value: string
}

export function TagBig(props: TagBigProps) {
  return (
    <div>
      <span className="bg-mint-600 inline-block h5 text-[18px] px-[12px] py-[8px] rounded-[24px] text-center font-medium">
        — {parseTextWithBold(props.value, AreaTag.Tag)} —
      </span>
    </div>
  );
}