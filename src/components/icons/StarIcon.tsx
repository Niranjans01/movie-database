import * as React from "react";
const StarIcon = ({ filled = true, size=20 }: { filled?: boolean; size?:number }) => (
    <svg
        height={size}
        width={size}
        viewBox="0 0 53.867 53.867"
        xmlSpace="preserve"
    >
        <path
            style={{
                fill: filled ? "#efce4a" : '#FFFFFF',
            }}
            d="m26.934 1.318 8.322 16.864 18.611 2.705L40.4 34.013l3.179 18.536-16.645-8.751-16.646 8.751 3.179-18.536L0 20.887l18.611-2.705z"
        />
    </svg>
);
export default StarIcon;