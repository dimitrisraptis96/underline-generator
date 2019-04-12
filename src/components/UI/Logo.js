import React from "react";
import { tint } from "polished";

export default ({ width, height, baseColor, gradient }) => {
  const hasGradient = gradient.length > 0;
  const color = baseColor;
  const styles =
    hasGradient
      ? {
          fill: color,
          backgroundImage: `linear-gradient(120deg, ${gradient.join()} 100%)`
        }
      : { fill: color };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 48 48"
      style={{ enableBackground: "new 0 0 48 48" }}
      xmlSpace="preserve"
      width={width || "480px"}
      height={height || "480px"}
    >
      <g id="surface1">
        { hasGradient && (
          <defs>
            <linearGradient id="my-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              {gradient.map((color, index) => (
                <stop
                  offset={`${(index * 100) / (gradient.length - 1)}%`}
                  style={{ stopColor: color }}
                />
              ))}
            </linearGradient>
          </defs>
        )}

        <path
          style={{ fill: hasGradient ? "url(#my-gradient)" : tint(0.5, color) }}
          d="M15,35c-0.5,0-1-0.2-1.4-0.6c-0.8-0.8-0.8-2,0-2.8l26-26c0.8-0.8,2-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8   l-26,26C16,34.8,15.5,35,15,35z"
        />
        <path
          style={{ fill: hasGradient ? "url(#my-gradient)" : color }}
          d="M14,35c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l27-27c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-27,27   C14.5,34.9,14.3,35,14,35z"
        />
        <path
          style={{ fill: "#90A4AE" }}
          d="M8.3,38.3l1.4,1.4L6.4,43L5,41.6L8.3,38.3z"
        />
        <path
          style={{ fill: "#90A4AE" }}
          d="M14.5,30.7l2.8,2.8L7.8,43L5,40.2L14.5,30.7z"
        />
        <path
          style={{ fill: "#37474F" }}
          d="M12.1,33.1l2.8,2.8L7.8,43L5,40.2L12.1,33.1z"
        />
        <path
          style={{ fill: "#37474F" }}
          d="M18,27.2l-3.9,3.9l2.8,2.8l1.1-1.1V27.2z"
        />
        <path style={{ fill: "#37474F" }} d="M11,32l3,3l-2,2l-3-3L11,32z" />
      </g>
    </svg>
  );
};
