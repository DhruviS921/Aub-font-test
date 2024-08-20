import * as React from 'react'
import { JSX } from 'react/jsx-runtime'

const SvgPlus = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#8E94A6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.85 12h16M12.85 20V4"
    />
  </svg>
)
export default SvgPlus