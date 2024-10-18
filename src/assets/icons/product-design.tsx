import { SVGProps } from "react";
type Props = {
  height?: number;
  width?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
export const ProductDesign = ({
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
        d="M4.65625 19.5C4.65625 12.5026 4.65625 9.00389 6.83006 6.83006C9.00389 4.65625 12.5026 4.65625 19.5 4.65625C26.4973 4.65625 29.9961 4.65625 32.17 6.83006C34.3438 9.00389 34.3438 12.5026 34.3438 19.5C34.3438 26.4973 34.3438 29.9961 32.17 32.17C29.9961 34.3438 26.4973 34.3438 19.5 34.3438C12.5026 34.3438 9.00389 34.3438 6.83006 32.17C4.65625 29.9961 4.65625 26.4973 4.65625 19.5Z"
        stroke={color}
        stroke-width="1.125"
      />
      <path
        d="M4.65625 14.8125H34.3438"
        stroke={color}
        stroke-width="1.125"
        stroke-linejoin="round"
      />
      <path
        d="M21.0625 21.0625H27.3125"
        stroke={color}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.0625 27.3125H24.1875"
        stroke={color}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.6875 10.125H11.7015"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.9375 10.125H17.9516"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.8125 14.8125V34.3438"
        stroke={color}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
