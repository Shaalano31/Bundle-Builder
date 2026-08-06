import type { ProductResponseType } from "../utils/types";

export const cameraProducts: ProductResponseType[] = [
  {
    id: 1,
    image: "src\\assets\\Wyze_Cam_V4.png",
    name: "Wyze Cam v4",
    description: "The clearest Wyze Cam ever made.",
    price: 35.98,
    link: "https://www.google.com",
    discount: 22,
    colors: [
      {
        image: "src\\assets\\Wyze_Cam_V4.png",
        name: "White",
      },
      {
        image: "src\\assets\\Wyze_Cam_V4.png",
        name: "Black",
      },
      {
        image: "src\\assets\\Wyze_Cam_V4.png",
        name: "Grey",
      },
    ],
  },
  {
    id: 2,
    image: "src\\assets\\Wyze_Cam_V3.png",
    name: "Indoor Camera",
    description: "Motion detection included",
    price: 79,
    link: "google.com",
  },
  {
    id: 3,
    image: "src\\assets\\Wyze_Cam_V3.png",
    name: "Indoor Camera",
    description: "Motion detection included",
    price: 79,
    link: "google.com",
  },
];

export const planProducts = [
  // ...
];

export const sensorProducts = [
  {
    id: 1,
    image: "src\\assets\\Wyze_Cam_V3.png",
    name: "Indoor Camera",
    description: "Motion detection included",
    price: 79,
    link: "google.com",
  },
];

export const protectionProducts = [
  // ...
];
