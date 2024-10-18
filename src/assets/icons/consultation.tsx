import { SVGProps } from "react";
type Props = {
  height?: number;
  width?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
export const Consultation = ({
  height = 38,
  width = 38,
  color = "white",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.75 34.375L15.625 25H3.125L6.25 34.375H18.75ZM18.75 34.375H25"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.75 20.3125V19.5312C18.75 16.585 18.75 15.1118 17.8347 14.1965C16.9194 13.2812 15.4463 13.2812 12.5 13.2812C9.55372 13.2812 8.08058 13.2812 7.1653 14.1965C6.25 15.1118 6.25 16.585 6.25 19.5312V20.3125"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.6875 20.3125C29.6875 22.0384 28.2884 23.4375 26.5625 23.4375C24.8366 23.4375 23.4375 22.0384 23.4375 20.3125C23.4375 18.5866 24.8366 17.1875 26.5625 17.1875C28.2884 17.1875 29.6875 18.5866 29.6875 20.3125Z"
        stroke={color}
        stroke-width="1.5"
      />
      <path
        d="M15.625 6.25C15.625 7.97589 14.2259 9.375 12.5 9.375C10.7741 9.375 9.375 7.97589 9.375 6.25C9.375 4.52411 10.7741 3.125 12.5 3.125C14.2259 3.125 15.625 4.52411 15.625 6.25Z"
        stroke={color}
        stroke-width="1.5"
      />
      <path
        d="M21.875 27.3438H31.25C32.9759 27.3438 34.375 28.7428 34.375 30.4688V31.25C34.375 32.9759 32.9759 34.375 31.25 34.375H29.6875"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
