import { useState } from "react";
import ColorCard from "./ColorComponent";
import type { ColorCardProps } from "./ColorComponent";

type ProductCardProps = {
  image: string;
  name: string;
  description: string;
  price: number;
  link: string;
  discount?: number;
  colors?: ColorCardProps[];
};

export default function ProductCard({
  image,
  name,
  description,
  price,
  link,
  discount,
  colors,
}: ProductCardProps) {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-row items-center gap-2 bg-teal-200 p-3 rounded-[10px]">
      <div className="relative overflow-hidden flex flex-col bg-green-500 h-full justify-center">
        {discount && (
          <div className="absolute top-3 bg-[#4E2FD2] text-white font-semibold text-xs rounded-full px-1.5 py-0.5">
            Save {discount}%
          </div>
        )}
        <img src={image} alt={name} className="h-[101px] bg-amber-950" />
      </div>

      <div className="flex flex-col bg-yellow-200 items-start gap-2.5 w-full h-full justify-center">
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

        <div className="bg-amber-200">
          {colors && colors.length > 0 && (
            <div className="flex gap-0.5">
              {colors.map((color) => (
                <ColorCard image={color.image} name={color.name} />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-row bg-white w-full justify-between items-center">
          <div className="flex flex-row items-center">
            <button
              onClick={() => count > 0 && setCount((prev) => prev - 1)}
              disabled={count === 0}
              className={`w-5 h-5 border y-300 active:scale-95 transition flex items-center justify-center text-xl font-bold rounded-sm
                ${
                  count === 0
                    ? "text-[#CED6DE] border-[#E6EBF0] border-2"
                    : "text-[#525963] border-0"
                }`}
            >
              −
            </button>

            <span className="w-10 text-center text-lg font-semibold">
              {count}
            </span>

            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="w-5 h-5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition flex items-center justify-center text-xl font-bold"
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
