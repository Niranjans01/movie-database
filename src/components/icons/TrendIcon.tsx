import * as React from "react";
const TrendIcon = ({
    size = 20,
    color = "#001A72",
}:{
    size?: number;
    color?: string;
}
) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="m21 17-8-8-4 4-6-6m18 10h-6m6 0v-6"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default TrendIcon;