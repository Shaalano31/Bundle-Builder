import type { ColorCardProps } from "../utils/types";

export default function ColorCard({
  image,
  name,
  selected,
  onClick,
}: ColorCardProps) {
  return (
    <div
      onClick={onClick}
      className={`border-[0.5px] border-[#CCCCCC] relative overflow-hidden flex flex-row h-full justify-center
        ${
          selected
            ? "border-[#0AA288] border-[0.5px] bg-[#1DF0BB0A]"
            : "border-transparent hover:border-gray-300"
        }
        `}
    >
      <img src={image} alt={name} className="h-[28px]" />
      <p className="text-[#1F1F1F] font-medium">{name}</p>
    </div>
  );
}
