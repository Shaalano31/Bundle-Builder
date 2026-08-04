import type { IconProps } from "../../utils/types";

const ArrowUpIcon = ({ size, color }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "10"}
    height={size || "7"}
    fill="none"
    viewBox="0 0 10 7"
  >
    <path
      fill={color || "#4E2FD2"}
      d="M4.122.21a.5.5 0 0 1 .814 0l4.029 5.64a.5.5 0 0 1-.407.79H.5a.5.5 0 0 1-.407-.79z"
    ></path>
  </svg>
);

export default ArrowUpIcon;
