import { SVGProps } from "react";
type Props = {
  height?: number;
  width?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
export const Brand = ({
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
        d="M11.7106 21.4891C16.5364 15.8819 27.4669 4.92934 32.0917 4.69445C34.953 4.4204 29.2528 14.571 15.7477 25.678M17.9033 15.6952L21.4308 19.2577M4.6875 32.5853C5.79606 28.6675 5.09667 30.5928 5.47511 26.0811C5.67666 25.4131 6.08216 23.3402 8.61497 22.307C11.494 21.1327 13.6047 22.908 14.1502 23.7422C15.7573 25.4847 15.9436 27.6487 14.1502 30.1209C12.3567 32.5931 7.03675 33.2073 4.6875 32.5853Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
