import type { IconProps } from "../../utils/types";

const CameraIcon = ({ size, color }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "26"}
    height={size || "26"}
    fill="none"
    viewBox="0 0 26 26"
  >
    <g
      stroke={color || "#6F7882"}
      strokeWidth="1.5"
      clipPath="url(#clip0_68_9780)"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.667 24.917v-4.334M17.334 24.917v-4.334M22.75 24.917H3.25M13 5.146a4.063 4.063 0 1 1 0 8.125 4.063 4.063 0 0 1 0-8.125"
      ></path>
      <path
        fill={color || "#6F7882"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.973 16.25a.406.406 0 1 0 0 .813.406.406 0 0 0 0-.813"
      ></path>
      <rect width="19.625" height="19.625" x="3.188" y="0.75" rx="3.25"></rect>
    </g>
    <defs>
      <clipPath id="clip0_68_9780">
        <path fill="#fff" d="M0 0h26v26H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default CameraIcon;
