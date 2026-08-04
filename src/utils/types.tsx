export interface IconProps {
  size?: number;
  color?: string;
}

export type ProductCardProps = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  link: string;
  discount?: number;
  colors?: ColorCardProps[];
  selected?: boolean;
};

export type ColorCardProps = {
  image: string;
  name: string;
};
