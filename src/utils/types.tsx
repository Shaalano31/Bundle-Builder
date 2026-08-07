import type { Dispatch, SetStateAction } from "react";

export interface IconProps {
  size?: number;
  color?: string;
}

export type ProductResponseType = {
  id: string;
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
  selectedProducts: SelectedProduct[];
  setSelectedProducts: Dispatch<SetStateAction<SelectedProduct[]>>;
};

export type ColorCardProps = {
  image: string;
  name: string;
  selected?: boolean;
  onClick?: () => void;
};

export type BuilderSelections = {
  selectedCameras: SelectedProduct[];
  setSelectedCameras: Dispatch<SetStateAction<SelectedProduct[]>>;

  selectedPlans: SelectedProduct[];
  setSelectedPlans: Dispatch<SetStateAction<SelectedProduct[]>>;

  selectedSensors: SelectedProduct[];
  setSelectedSensors: Dispatch<SetStateAction<SelectedProduct[]>>;

  selectedProtections: SelectedProduct[];
  setSelectedProtections: Dispatch<SetStateAction<SelectedProduct[]>>;
};

export type ReviewPanelProp = BuilderSelections & {
  saveSystem: () => void;
};

export type ColorQuantity = {
  color?: string | null;
  quantity: number;
};

export type SelectedProduct = {
  id: string;
  counts: ColorQuantity[];
};
