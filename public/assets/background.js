import * as React from "react"

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%' {...props}>
    <defs>
      <linearGradient
        gradientTransform="rotate(90 .5 .5)"
        x1="50%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="a"
      >
        <stop stopColor="#126346" offset="0%" />
        <stop stopColor="#042431" offset="100%" />
      </linearGradient>
      <filter
        id="b"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.001 0.001"
          seed={2}
          stitchTiles="stitch"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          result="turbulence"
        />
        <feGaussianBlur
          stdDeviation="100 100"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="turbulence"
          result="blur"
        />
        <feBlend
          mode="color-dodge"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="SourceGraphic"
          in2="blur"
          result="blend"
        />
        <feColorMatrix
          type="saturate"
          values={3}
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="blend"
          result="colormatrix"
        />
      </filter>
    </defs>
    <path fill="url(#a)" filter="url(#b)" d="M0 0h700v700H0z" />
  </svg>
)

export default SvgComponent
