import type { ColorCardProps } from "../utils/types";

export default function ColorCard({ image, name }: ColorCardProps) {
  return (
    <div className="border-[0.5px] border-[#CCCCCC] relative overflow-hidden flex flex-row h-full justify-center">
      <img src={image} alt={name} className="h-[28px]" />
      <p className="text-[#1F1F1F] font-medium">{name}</p>
    </div>
  );
}
