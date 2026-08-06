import type { Dispatch, SetStateAction } from "react";

export interface IconProps {
  size?: number;
  color?: string;
}

export type ProductResponseType = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  link: string;
  discount?: number;
  colors?: ColorCardProps[];
};

export type ProductCardProps = ProductResponseType & {
  selected: boolean;
  selectedProducts: number[];
  setSelectedProducts: Dispatch<SetStateAction<number[]>>;
};

export type ColorCardProps = {
  image: string;
  name: string;
  selected?: boolean;
  onClick?: () => void;
};
