import { IconProps } from "../../../../../shared/components/icon";
import { FC } from "react";

export const riCheckboxCircleLine: FC<IconProps> = ({
  width,
  height,
  className = ''
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    id="ri-checkbox-circle-line"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <g>
      <path fill="none"
        d="M0 0h24v24H0z"
      ></path>
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"
      ></path>
    </g>
  </svg>
)