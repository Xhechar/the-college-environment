
export enum AreaTag {
  Tag = "tag",
  CardList = "card"
}

export const parseTextWithBold = (text: string, area: AreaTag) => {
  const parts = text.split("$");

  return parts.map((part, index) => {
    // Odd indices are the text between $ signs (should be bold)
    if (index % 2 === 1) {
      return (
        <strong
          key={index}
          className="font-bold text-neutral-900"
        >
          {part}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}