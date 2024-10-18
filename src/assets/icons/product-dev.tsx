import { SVGProps } from "react";
type Props = {
  height?: number;
  width?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
export const ProductDev = ({
  height = 39,
  width = 39,
  color = "white",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M32 16.575C32 10.5882 32 7.59475 30.1694 5.73488C28.3389 3.875 25.3925 3.875 19.5 3.875H16.375C10.4824 3.875 7.53617 3.875 5.70558 5.73488C3.875 7.59475 3.875 10.5882 3.875 16.575C3.875 22.5619 3.875 25.5553 5.70558 27.4152C6.43934 28.1606 7.35234 28.6073 8.5625 28.875"
        stroke={color}
        stroke-width="1.125"
        stroke-linecap="round"
      />
      <path
        d="M35.125 28.0938C35.125 25.1642 35.125 23.6995 34.3789 22.6727C34.138 22.3411 33.8464 22.0495 33.5148 21.8086C32.488 21.0625 31.0233 21.0625 28.0938 21.0625H20.2812C17.3517 21.0625 15.887 21.0625 14.8602 21.8086C14.5286 22.0495 14.237 22.3411 13.996 22.6727C13.25 23.6995 13.25 25.1642 13.25 28.0938C13.25 31.0233 13.25 32.488 13.996 33.5148C14.237 33.8464 14.5286 34.138 14.8602 34.3789C15.887 35.125 17.3517 35.125 20.2812 35.125H28.0938C31.0233 35.125 32.488 35.125 33.5148 34.3789C33.8464 34.138 34.138 33.8464 34.3789 33.5148C35.125 32.488 35.125 31.0233 35.125 28.0938Z"
        stroke={color}
        stroke-width="1.125"
      />
      <path
        d="M26.5312 25.75L27.9686 26.9889C28.5728 27.5097 28.875 27.7702 28.875 28.0938C28.875 28.4173 28.5728 28.6778 27.9686 29.1986L26.5312 30.4375"
        stroke={color}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.8438 25.75L20.4064 26.9889C19.8022 27.5097 19.5 27.7702 19.5 28.0938C19.5 28.4173 19.8022 28.6778 20.4064 29.1986L21.8438 30.4375"
        stroke={color}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.65625 10.125H31.2188"
        stroke={color}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
