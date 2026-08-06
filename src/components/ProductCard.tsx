import { useState } from "react";
import ColorCard from "./ColorComponent";
import type { ProductCardProps } from "../utils/types";

export default function ProductCard({
  id,
  image,
  name,
  description,
  price,
  link,
  discount,
  colors,
  selected,
  selectedProducts,
  setSelectedProducts,
}: ProductCardProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const [count, setCount] = useState(() =>
    new Array(colors?.length ? colors.length : 1).fill(0),
  );

  return (
    <div
      className={`bg-white flex flex-row items-center gap-2 p-3 rounded-[10px] h-full
      ${selected ? "border-2 border-[#4E2FD2B2]" : ""}`}
    >
      <div className="relative overflow-hidden flex flex-col h-full justify-center">
        {discount && (
          <div className="absolute top-7 bg-[#4E2FD2] text-white font-semibold text-xs rounded-full px-1.5 py-0.5">
            Save {discount}%
          </div>
        )}
        <img src={image} alt={name} className="h-[101px]" />
      </div>

      <div className="flex flex-col items-start gap-2.5 w-full h-full justify-center">
        <h3 className="font-semibold text-[#1F1F1F]">{name}</h3>
        <p className="font-medium text-[#1F1F1FBF] text-xs text-start">
          {description}{" "}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0000EE] underline visited:text-purple-600 hover:text-blue-800"
          >
            Learn More
          </a>
        </p>

        <div>
          {colors && colors.length > 0 && (
            <div className="flex gap-0.5">
              {colors.map((color, index) => (
                <ColorCard
                  key={color.name}
                  image={color.image}
                  name={color.name}
                  selected={selectedColorIndex === index}
                  onClick={() => setSelectedColorIndex(index)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-row items-center">
            <button
              onClick={() => {
                setCount((prev) => {
                  const next = [...prev];
                  next[selectedColorIndex] = Math.max(
                    0,
                    next[selectedColorIndex] - 1,
                  );
                  if (next.reduce((sum, count) => sum + count, 0) === 0) {
                    setSelectedProducts((selected) =>
                      selected.filter((selectedId) => selectedId !== id),
                    );
                  }
                  return next;
                });
              }}
              disabled={count[selectedColorIndex] === 0}
              className={`w-5 h-5 flex items-center justify-center leading-5 font-bold
                ${
                  count[selectedColorIndex] === 0
                    ? "text-[#CED6DE] border-[#E6EBF0] border-2"
                    : "text-[#525963] border-0 bg-[#F0F4F7]"
                }`}
            >
              −
            </button>

            <p className="w-10 text-center text-lg font-semibold">
              {count[selectedColorIndex]}
            </p>

            <button
              onClick={() => {
                setCount((prev) => {
                  const next = [...prev];
                  next[selectedColorIndex]++;
                  if (prev[selectedColorIndex] === 0) {
                    setSelectedProducts((prev) =>
                      prev.includes(id) ? prev : [...prev, id],
                    );
                  }
                  return next;
                });
              }}
              className="w-5 h-5 rounded-lg bg-[#F0F4F7] text-[#525963] flex items-center justify-center text-xl font-bold"
            >
              +
            </button>
          </div>
          <div className="flex flex-col text-end">
            {discount && (
              <div>
                <p className="text-[#D8392B] line-through">${price}</p>
                <p className="text-[#575757]">
                  ${(price * (1 - discount / 100)).toFixed(2)}
                </p>
              </div>
            )}
            {!discount && <p className="text-[#575757]">${price}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
