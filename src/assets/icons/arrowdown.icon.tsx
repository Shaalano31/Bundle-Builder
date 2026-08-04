import type { IconProps } from "../../utils/types";

const ArrowDownIcon = ({ size, color }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "10"}
    height={size || "7"}
    fill="none"
    viewBox="0 0 10 7"
  >
    <path
      fill={color || "#4E2FD2"}
      d="M4.936 6.43a.5.5 0 0 1-.814 0L.094.79A.5.5 0 0 1 .501 0h8.057a.5.5 0 0 1 .407.79z"
    ></path>
  </svg>
);

export default ArrowDownIcon;
