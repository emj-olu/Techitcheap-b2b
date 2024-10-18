import { SVGProps } from "react";
type Props = {
  height?: number;
  width?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
export const Flower = ({
  height = 36,
  width = 36,
  color = "#2454FF",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22.2499 18.75C22.2499 20.821 20.5711 22.5 18.4999 22.5C16.4289 22.5 14.75 20.821 14.75 18.75C14.75 16.679 16.4289 15 18.4999 15C20.5711 15 22.2499 16.679 22.2499 18.75Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M18.4999 4.5C21.8137 4.5 24.4971 7.37609 24.4971 10.6898C24.9774 10.5659 25.4809 10.5 25.9999 10.5C29.3137 10.5 31.9999 13.1863 31.9999 16.5C31.9999 18.8946 30.5971 20.9618 28.5684 21.924C29.3107 22.9227 29.7499 24.1601 29.7499 25.5C29.7499 28.8137 27.0637 31.5 23.7499 31.5C21.4909 31.5 19.5235 30.2515 18.4999 28.407C17.4765 30.2515 15.5091 31.5 13.25 31.5C9.93629 31.5 7.25 28.8137 7.25 25.5C7.25 24.1601 7.68925 22.9227 8.4316 21.924C6.40286 20.9618 5 18.8946 5 16.5C5 13.1863 7.68629 10.5 11 10.5C11.519 10.5 12.0226 10.5659 12.5029 10.6898C12.5029 7.37607 15.1863 4.5 18.4999 4.5Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  );
};
