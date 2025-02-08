import { IconProps } from "@shared/components/icon";
import { FC } from "react";

export const riCheckboxFill: FC<IconProps> = ({
  width,
  height,
  className = ''
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    id="ri-checkbox-fill"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <g>
      <path fill="none"
        d="M0 0h24v24H0z"
      ></path>
      <path
        d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7.003 13l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
      ></path>
    </g>
  </svg>
)